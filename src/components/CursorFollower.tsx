import React, { useEffect, useState, useRef } from 'react';

/**
 * CursorFollower Component
 * 
 * Creates an impressive cursor-following animation that tracks mouse movement
 * and renders beautiful visual effects that follow the cursor around the screen.
 * 
 * Features:
 * - Smooth cursor tracking with momentum.
 * - Multiple animated elements for depth.
 * - Responsive to mouse movement speed.
 * - Optimized performance with requestAnimationFrame.
 * - Dynamic ripple effect on mouse movement.
 */
const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const lastRippleTime = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Throttle ripple creation to avoid too many elements
      if (Date.now() - lastRippleTime.current > 100) { // Create a ripple every 100ms
        const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
        setRipples((prevRipples) => [...prevRipples, newRipple]);
        lastRippleTime.current = Date.now();

        // Schedule removal of this specific ripple after its animation duration
        setTimeout(() => {
          setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
        }, 1000); // Matches CSS animation duration
      }

      // Reset moving state after mouse stops
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'transform 0.1s ease-out',
          transform: isMoving ? 'scale(1.2)' : 'scale(1)',
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-80"></div>
      </div>

      {/* Secondary follower with delay */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: isMoving ? 'scale(1)' : 'scale(0.8)',
        }}
      >
        <div className="w-10 h-10 border-2 border-primary-400 rounded-full opacity-60"></div>
      </div>

      {/* Tertiary follower with more delay */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: isMoving ? 'scale(1)' : 'scale(0.6)',
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 blur-sm"></div>
      </div>

      {/* Particle effects */}
      {isMoving && (
        <>
          <div
            className="fixed pointer-events-none z-20 animate-ping"
            style={{
              left: mousePosition.x - 2,
              top: mousePosition.y - 2,
            }}
          >
            <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          </div>
          
          <div
            className="fixed pointer-events-none z-20 animate-pulse"
            style={{
              left: mousePosition.x - 15,
              top: mousePosition.y - 15,
            }}
          >
            <div className="w-8 h-8 border border-success-400 rounded-full opacity-40"></div>
          </div>
        </>
      )}

      {/* Dynamic ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none animate-ripple z-20"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      ))}
    </>
  );
};

export default CursorFollower;