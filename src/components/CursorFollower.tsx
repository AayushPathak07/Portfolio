import React, { useEffect, useRef, useState } from "react";

/**
 * CursorFollower — Gradient comet cursor with velocity-reactive tail and sparkles.
 *
 * Highlights:
 * - No inverted circle; soft glow comet head with radial gradient.
 * - Smooth motion via RAF + lerp; velocity controls tail length & stretch.
 * - Subtle sparkles that flicker on faster movement.
 * - Click burst effect for delight.
 * - Pointer-events: none, so it never blocks interactions.
 *
 * Tailwind:
 * - Uses utility classes plus a few custom @keyframes (see CSS snippet below).
 */

type Point = { x: number; y: number };
const TRAIL_LENGTH_MIN = 6;
const TRAIL_LENGTH_MAX = 24;
const SPARK_COOLDOWN_MS = 50;

const CursorFollower: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [mouse, setMouse] = useState<Point>({ x: -9999, y: -9999 });
  const [mounted, setMounted] = useState(false);

  // Animation refs
  const rafId = useRef<number | null>(null);
  const head = useRef<Point>({ x: -9999, y: -9999 });
  const velocity = useRef<Point>({ x: 0, y: 0 });
  const last = useRef<Point>({ x: -9999, y: -9999 });
  const lastTime = useRef<number>(performance.now());
  const lastSpark = useRef<number>(0);

  // Trail positions (for tail sprites)
  const trail = useRef<Point[]>([]);
  const [trailSnap, setTrailSnap] = useState<Point[]>([]); // state snapshot for render
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  // --- Handlers ---
  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      if (!enabled) setEnabled(true);
    };
    const onLeave = () => setEnabled(false);
    const onEnter = () => setEnabled(true);
    const onClick = (e: MouseEvent) => {
      // Add a quick burst ring on click
      const id = Date.now() + Math.random();
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
      // remove after animation
      setTimeout(() => {
        setBursts((b) => b.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onClick);
    };
  }, [enabled]);

  // --- RAF loop for smooth motion & effects ---
  useEffect(() => {
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current); // ms
      lastTime.current = now;

      // First-frame snap
      if (head.current.x < 0) {
        head.current = { ...mouse };
        last.current = { ...mouse };
      }

      // Lerp head towards mouse
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const followSpeed = 0.18; // smoothing factor
      head.current = {
        x: lerp(head.current.x, mouse.x, followSpeed),
        y: lerp(head.current.y, mouse.y, followSpeed),
      };

      // Velocity (px/ms)
      const vx = (head.current.x - last.current.x) / dt;
      const vy = (head.current.y - last.current.y) / dt;
      velocity.current = { x: vx, y: vy };
      last.current = { ...head.current };

      // Speed magnitude
      const speed = Math.sqrt(vx * vx + vy * vy); // px/ms-ish
      // Tail length scales with speed
      const tLen = Math.round(
        Math.min(TRAIL_LENGTH_MAX, Math.max(TRAIL_LENGTH_MIN, speed * 14))
      );

      // Push head position into trail
      trail.current.unshift({ ...head.current });
      if (trail.current.length > tLen) trail.current.length = tLen;

      // Occasionally emit a spark when fast
      if (speed > 0.2 && now - lastSpark.current > SPARK_COOLDOWN_MS) {
        lastSpark.current = now;
        const id = now + Math.random();
        const jitter = (n: number) => (Math.random() - 0.5) * n;
        setSparks((prev) => [
          ...prev,
          {
            id,
            x: head.current.x + jitter(12),
            y: head.current.y + jitter(12),
          },
        ]);
        // auto-remove after animation
        setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.id !== id));
        }, 500);
      }

      // Snapshot to render
      setTrailSnap(trail.current.slice(0, tLen));

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  // Derived visuals
  const v = velocity.current;
  const speed = Math.sqrt(v.x * v.x + v.y * v.y);
  // Stretch the comet based on speed, clamp for sanity
  const stretch = 1 + Math.min(0.9, speed * 10);
  const angle = Math.atan2(v.y, v.x) * (180 / Math.PI);

  return (
    <>
      {/* HEAD (glowing gradient orb) */}
      {enabled && (
        <div
          className="fixed pointer-events-none z-[60]"
          style={{
            left: head.current.x,
            top: head.current.y,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        >
          {/* Soft outer glow */}
          <div
            className="blur-2xl opacity-60"
            style={{
              width: 64,
              height: 64,
              borderRadius: "9999px",
              background:
                "radial-gradient(35% 35% at 50% 50%, rgba(14,165,233,0.65), rgba(14,165,233,0) 70%)",
            }}
          />
          {/* Comet core, stretched with velocity */}
          <div
            className="relative"
            style={{
              width: 18,
              height: 18,
              transform: `translate(-50%, -50%) scaleX(${stretch})`,
            }}
          >
            <div
              className="rounded-full shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              style={{
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(circle at 35% 35%, rgba(56,189,248,1) 0%, rgba(14,165,233,1) 45%, rgba(2,132,199,1) 80%)",
              }}
            />
          </div>
        </div>
      )}

      {/* TRAIL (tiny fading capsules) */}
      {enabled &&
        trailSnap.map((p, i) => {
          const t = i / Math.max(1, trailSnap.length - 1); // 0..1
          const size = 10 - t * 8; // fade size
          const alpha = 0.5 * (1 - t);
          return (
            <div
              key={i}
              className="fixed pointer-events-none z-[50]"
              style={{
                left: p.x,
                top: p.y,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: Math.max(2, size),
                  height: Math.max(2, size),
                  opacity: alpha,
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.9), rgba(14,165,233,0.15))",
                  filter: "blur(0.2px)",
                  animation: `trailFade 520ms ease-out both`,
                  animationDelay: `${i * 8}ms`,
                }}
              />
            </div>
          );
        })}

      {/* SPARKS (tiny flickers) */}
      {enabled &&
        sparks.map((s) => (
          <div
            key={s.id}
            className="fixed pointer-events-none z-[55]"
            style={{
              left: s.x,
              top: s.y,
              transform: "translate(-50%, -50%)",
              animation: "sparkle 480ms ease-out forwards",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
          </div>
        ))}

      {/* CLICK BURSTS */}
      {bursts.map((b) => (
        <div
          key={b.id}
          className="fixed pointer-events-none z-[45]"
          style={{
            left: b.x,
            top: b.y,
            transform: "translate(-50%, -50%)",
            animation: "burst 600ms ease-out forwards",
          }}
        >
          <div className="w-8 h-8 rounded-full border border-cyan-300/60" />
        </div>
      ))}
    </>
  );
};

export default CursorFollower;
