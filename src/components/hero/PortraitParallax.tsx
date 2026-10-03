import React, { useState, useEffect, useRef } from 'react';
import { HERO_CONFIG } from './HeroConfig';

interface PortraitParallaxProps {
  accentColor?: string;
}

export const PortraitParallax: React.FC<PortraitParallaxProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTiltRef = useRef({ rotX: 0, rotY: 0, shiftX: 0, shiftY: 0 });
  const currentTiltRef = useRef({ rotX: 0, rotY: 0, shiftX: 0, shiftY: 0 });
  const [styleTransform, setStyleTransform] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;

      // Slight, minute tilt: ~2.5 degrees max rotation and ~6px subtle depth translation
      targetTiltRef.current = {
        rotX: -ny * 2.5,
        rotY: nx * 2.5,
        shiftX: -nx * 6,
        shiftY: -ny * 6,
      };
    };

    const handleMouseLeave = () => {
      targetTiltRef.current = { rotX: 0, rotY: 0, shiftX: 0, shiftY: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Silky lerp loop for organic, subtle 3D response
    let animId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const cur = currentTiltRef.current;
      const target = targetTiltRef.current;

      cur.rotX = lerp(cur.rotX, target.rotX, 0.08);
      cur.rotY = lerp(cur.rotY, target.rotY, 0.08);
      cur.shiftX = lerp(cur.shiftX, target.shiftX, 0.08);
      cur.shiftY = lerp(cur.shiftY, target.shiftY, 0.08);

      setStyleTransform(
        `translate3d(${cur.shiftX.toFixed(2)}px, ${cur.shiftY.toFixed(2)}px, 0) rotateX(${cur.rotX.toFixed(2)}deg) rotateY(${cur.rotY.toFixed(2)}deg)`
      );

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center lg:justify-end overflow-visible select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Perspective Stage Container - Minute tilt only, no surrounding frame, no color shadows */}
      <div
        className={`relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-700 ease-out will-change-transform`}
        style={{
          transform: styleTransform || 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Clean, normal portrait with soft edge mask naturally blending into dark background */}
        <div
          className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden"
          style={{
            maskImage:
              'radial-gradient(ellipse 85% 85% at 50% 48%, black 65%, rgba(0,0,0,0.8) 82%, transparent 100%), linear-gradient(to bottom, black 88%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 85% 85% at 50% 48%, black 65%, rgba(0,0,0,0.8) 82%, transparent 100%), linear-gradient(to bottom, black 88%, transparent 100%)',
          }}
        >
          <img
            src={HERO_CONFIG.photoSrc}
            alt={HERO_CONFIG.name}
            className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 scale-[1.04]"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== window.location.origin + '/images/new.png') {
                target.src = '/images/new.png';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
