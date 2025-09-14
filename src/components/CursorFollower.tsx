import React, { useEffect, useRef, useState } from "react";

/**
 * CursorFollower — Gradient comet cursor with velocity-reactive tail and sparkles.
 *
 * This enhanced version features:
 * - A more vibrant, dual-color comet head and trail (sky-blue to pink).
 * - A longer, more dramatic tail that responds dynamically to cursor speed.
 * - More frequent and brighter sparkles for a livelier effect.
 * - A refined click burst and an intensified head glow.
 */

type Point = { x: number; y: number };
const TRAIL_LENGTH_MIN = 8;
const TRAIL_LENGTH_MAX = 35; // Increased for a longer tail
const SPARK_COOLDOWN_MS = 30; // Decreased for more frequent sparkles

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

  // Trail positions
  const trail = useRef<Point[]>([]);
  const [trailSnap, setTrailSnap] = useState<Point[]>([]);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      if (!enabled) setEnabled(true);
    };
    const onLeave = () => setEnabled(false);
    const onEnter = () => setEnabled(true);
    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
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

  useEffect(() => {
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime.current);
      lastTime.current = now;

      if (head.current.x < 0) {
        head.current = { ...mouse };
        last.current = { ...mouse };
      }

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const followSpeed = 0.18;
      head.current = {
        x: lerp(head.current.x, mouse.x, followSpeed),
        y: lerp(head.current.y, mouse.y, followSpeed),
      };

      const vx = (head.current.x - last.current.x) / dt;
      const vy = (head.current.y - last.current.y) / dt;
      velocity.current = { x: vx, y: vy };
      last.current = { ...head.current };

      const speed = Math.sqrt(vx * vx + vy * vy);
      const tLen = Math.round(
        Math.min(TRAIL_LENGTH_MAX, Math.max(TRAIL_LENGTH_MIN, speed * 16))
      );

      trail.current.unshift({ ...head.current });
      if (trail.current.length > tLen) trail.current.length = tLen;

      if (speed > 0.2 && now - lastSpark.current > SPARK_COOLDOWN_MS) {
        lastSpark.current = now;
        const id = now + Math.random();
        const jitter = (n: number) => (Math.random() - 0.5) * n;
        setSparks((prev) => [
          ...prev,
          {
            id,
            x: head.current.x + jitter(14),
            y: head.current.y + jitter(14),
          },
        ]);
        setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.id !== id));
        }, 500);
      }

      setTrailSnap(trail.current.slice(0, tLen));

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  const v = velocity.current;
  const speed = Math.sqrt(v.x * v.x + v.y * v.y);
  const stretch = 1 + Math.min(0.9, speed * 10);
  const angle = Math.atan2(v.y, v.x) * (180 / Math.PI);

  return (
    <>
      {/* HEAD */}
      {enabled && (
        <div
          className="fixed pointer-events-none z-[60]"
          style={{
            left: head.current.x,
            top: head.current.y,
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        >
          {/* Outer glow */}
          <div
            className="blur-3xl opacity-70"
            style={{
              width: 72,
              height: 72,
              borderRadius: "9999px",
              background:
                "radial-gradient(40% 40% at 50% 50%, rgba(14,165,233,0.7), rgba(14,165,233,0) 75%)",
            }}
          />
          {/* Comet core */}
          <div
            className="relative"
            style={{
              width: 18,
              height: 18,
              transform: `translate(-50%, -50%) scaleX(${stretch})`,
            }}
          >
            <div
              className="w-full h-full rounded-full shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #d946ef, #0ea5e9 50%, #0284c7 85%)",
              }}
            />
          </div>
        </div>
      )}

      {/* TRAIL */}
      {enabled &&
        trailSnap.map((p, i) => {
          const t = i / Math.max(1, trailSnap.length - 1);
          const size = 11 - t * 9;
          const alpha = 0.6 * (1 - t);
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
                  background: `linear-gradient(135deg, rgba(232, 121, 249, ${alpha}), rgba(56, 189, 248, ${alpha * 0.8}))`,
                  filter: "blur(0.5px)",
                  animation: `trailFade 520ms ease-out both`,
                  animationDelay: `${i * 6}ms`,
                }}
              />
            </div>
          );
        })}

      {/* SPARKS */}
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
            <div
              className="w-2 h-2 rounded-full bg-cyan-200"
              style={{ boxShadow: "0 0 10px #bae6fd, 0 0 20px #bae6fd" }}
            />
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
          <div className="w-8 h-8 rounded-full border-2 border-cyan-200/80" />
        </div>
      ))}
    </>
  );
};

export default CursorFollower;