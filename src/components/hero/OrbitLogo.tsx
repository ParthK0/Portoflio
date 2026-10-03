import React, { useState, useEffect, useRef } from 'react';
import { HERO_CONFIG } from './HeroConfig';

interface OrbitLogoProps {
  onOrbitStateChange?: (isOrbiting: boolean) => void;
}

interface BodyState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  speed: number;
  radiusX: number;
  radiusY: number;
}

export const OrbitLogo: React.FC<OrbitLogoProps> = ({ onOrbitStateChange }) => {
  const [isOrbiting, setIsOrbiting] = useState(false);
  const [colorPhase, setColorPhase] = useState(0); // 0 = blue, 1 = violet
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Center coordinate of orbit system in relative container pixels
  const center = { x: 50, y: 50 };

  // Body physical states
  const bodiesRef = useRef<BodyState[]>([
    { x: 12, y: 6, vx: 0, vy: 0, angle: 0, speed: 0.024, radiusX: 38, radiusY: 24 }, // Body 1: large circle
    { x: 12, y: 19, vx: 0, vy: 0, angle: Math.PI * 0.75, speed: 0.035, radiusX: 28, radiusY: 17 }, // Body 2: smaller dot
    { x: 12, y: 32, vx: 0, vy: 0, angle: Math.PI * 1.5, speed: 0.018, radiusX: 46, radiusY: 30 }, // Body 3: ring with hole
  ]);

  // Readouts state for display
  const [readouts, setReadouts] = useState([
    { x: '0.00', y: '0.00', v: '0.00' },
    { x: '0.00', y: '0.00', v: '0.00' },
    { x: '0.00', y: '0.00', v: '0.00' },
  ]);

  // Target stacked logo positions (when not orbiting)
  const stackedPositions = [
    { x: 10, y: 8 },  // Large circle
    { x: 10, y: 22 }, // Small dot
    { x: 10, y: 35 }, // Ring
  ];

  // Mouse attraction
  const mousePos = useRef<{ x: number; y: number } | null>(null);

  // Toggle orbit state
  const handleToggle = () => {
    const next = !isOrbiting;
    setIsOrbiting(next);
    onOrbitStateChange?.(next);
  };

  // Color transition between powder blue (#97B6DA) and violet (#A87BFF)
  useEffect(() => {
    let frame: number;
    const target = isOrbiting ? 1 : 0;
    const step = () => {
      setColorPhase((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.02) return target;
        return prev + diff * 0.08;
      });
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isOrbiting]);

  // Physics & Animation Loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const updatedReadouts: { x: string; y: string; v: string }[] = [];

      bodiesRef.current.forEach((body, idx) => {
        if (isOrbiting) {
          // Orbit angle update
          body.angle += body.speed;

          // Target position on ellipse
          const targetX = center.x + Math.cos(body.angle) * body.radiusX;
          const targetY = center.y + Math.sin(body.angle) * body.radiusY;

          // Gravitational pull toward orbit target
          let ax = (targetX - body.x) * 16;
          let ay = (targetY - body.y) * 16;

          // Mouse gravity pull if cursor is near
          if (mousePos.current) {
            const mdx = mousePos.current.x - body.x;
            const mdy = mousePos.current.y - body.y;
            const dist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (dist < 100 && dist > 5) {
              const force = 400 / (dist * dist);
              ax += (mdx / dist) * force * 35;
              ay += (mdy / dist) * force * 35;
            }
          }

          // Damping & Euler integration
          body.vx = (body.vx + ax * dt) * 0.88;
          body.vy = (body.vy + ay * dt) * 0.88;

          body.x += body.vx * dt;
          body.y += body.vy * dt;

          const velocity = Math.sqrt(body.vx * body.vx + body.vy * body.vy);
          updatedReadouts.push({
            x: (body.x - center.x).toFixed(1),
            y: (body.y - center.y).toFixed(1),
            v: velocity.toFixed(2),
          });
        } else {
          // Smooth return to stacked logo configuration
          const target = stackedPositions[idx];
          body.x += (target.x - body.x) * 0.15;
          body.y += (target.y - body.y) * 0.15;
          body.vx *= 0.5;
          body.vy *= 0.5;

          updatedReadouts.push({
            x: '0.0',
            y: '0.0',
            v: '0.00',
          });
        }
      });

      setReadouts(updatedReadouts);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isOrbiting]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mousePos.current = null;
  };

  // Interpolated accent color (#97B6DA to #A87BFF)
  // #97B6DA is rgb(151, 182, 218)
  // #A87BFF is rgb(168, 123, 255)
  const r = Math.round(151 + (168 - 151) * colorPhase);
  const g = Math.round(182 + (123 - 182) * colorPhase);
  const b = Math.round(218 + (255 - 218) * colorPhase);
  const currentAccent = `rgb(${r}, ${g}, ${b})`;

  // Split wordmark into letters to add small dot accent on "a"
  const wordmark = HERO_CONFIG.logoWordmark;
  const dotLetter = HERO_CONFIG.dotLetter;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      className="relative flex items-center cursor-pointer select-none group py-2"
      title="Orbital Logo"
    >
      {/* 3D / 2D Orbital Stage */}
      <div className={`relative transition-all duration-500 ease-out ${isOrbiting ? 'w-28 h-24 -ml-4 -mr-2' : 'w-10 h-11 mr-2'}`}>
        
        {/* Orbit Elliptical Paths (Only shown when gravitized) */}
        {isOrbiting && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <ellipse
              cx={center.x}
              cy={center.y}
              rx={bodiesRef.current[0].radiusX}
              ry={bodiesRef.current[0].radiusY}
              fill="none"
              stroke={currentAccent}
              strokeWidth="0.8"
              strokeDasharray="2 3"
              className="opacity-40 transition-opacity duration-300"
            />
            <ellipse
              cx={center.x}
              cy={center.y}
              rx={bodiesRef.current[1].radiusX}
              ry={bodiesRef.current[1].radiusY}
              fill="none"
              stroke={HERO_CONFIG.palette.offWhite}
              strokeWidth="0.6"
              strokeDasharray="1 3"
              className="opacity-30 transition-opacity duration-300"
            />
            <ellipse
              cx={center.x}
              cy={center.y}
              rx={bodiesRef.current[2].radiusX}
              ry={bodiesRef.current[2].radiusY}
              fill="none"
              stroke={currentAccent}
              strokeWidth="0.8"
              strokeDasharray="3 4"
              className="opacity-35 transition-opacity duration-300"
            />
          </svg>
        )}

        {/* Body 1: Large Powder Blue Filled Circle */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
          style={{
            left: `${bodiesRef.current[0].x}px`,
            top: `${bodiesRef.current[0].y}px`,
            width: isOrbiting ? '12px' : '9px',
            height: isOrbiting ? '12px' : '9px',
            backgroundColor: currentAccent,
            boxShadow: `0 0 10px ${currentAccent}55`,
          }}
        >
          {isOrbiting && (
            <div className="absolute left-3.5 -top-2 whitespace-nowrap font-mono text-[8px] text-[#97B6DA] opacity-80 pointer-events-none">
              x:{readouts[0].x} v:{readouts[0].v}
            </div>
          )}
        </div>

        {/* Body 2: Smaller Off-White Dot */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${bodiesRef.current[1].x}px`,
            top: `${bodiesRef.current[1].y}px`,
            width: isOrbiting ? '6px' : '5px',
            height: isOrbiting ? '6px' : '5px',
            backgroundColor: HERO_CONFIG.palette.offWhite,
          }}
        >
          {isOrbiting && (
            <div className="absolute left-2.5 -top-2 whitespace-nowrap font-mono text-[8px] text-[#EEECE6] opacity-70 pointer-events-none">
              x:{readouts[1].x}
            </div>
          )}
        </div>

        {/* Body 3: Off-White Ring with Hole */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            left: `${bodiesRef.current[2].x}px`,
            top: `${bodiesRef.current[2].y}px`,
            width: isOrbiting ? '10px' : '8px',
            height: isOrbiting ? '10px' : '8px',
            borderColor: currentAccent,
            backgroundColor: 'transparent',
            borderWidth: '1.5px',
          }}
        >
          {isOrbiting && (
            <div className="absolute left-3 -top-2 whitespace-nowrap font-mono text-[8px] text-[#A87BFF] opacity-80 pointer-events-none">
              y:{readouts[2].y}
            </div>
          )}
        </div>
      </div>

      {/* Wordmark: Lowercase "parth" with Dot Accent on "a" */}
      <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-[#EEECE6] ml-1">
        {wordmark.split('').map((char, i) => (
          <span key={i} className="relative inline-block">
            {char === dotLetter ? (
              <>
                <span>{char}</span>
                {/* Small dot accent on "a" */}
                <span
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: currentAccent }}
                />
              </>
            ) : (
              <span>{char}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
