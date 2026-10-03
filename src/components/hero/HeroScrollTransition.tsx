import React, { useEffect, useRef } from 'react';
import { HERO_CONFIG } from './HeroConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroScrollTransitionProps {
  accentColor?: string;
}

export const HeroScrollTransition: React.FC<HeroScrollTransitionProps> = ({
  accentColor = HERO_CONFIG.palette.powderBlue,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const headlineLeftRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRightRef = useRef<HTMLSpanElement>(null);
  const arcPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Scrubbed parallax & scale for the decorative central ring
      if (ringRef.current) {
        gsap.fromTo(
          ringRef.current,
          { scale: 0.6, opacity: 0.1, rotate: -25 },
          {
            scale: 1.25,
            opacity: 0.45,
            rotate: 45,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            },
          }
        );
      }

      // Monumental split headline entrance with scrollTrigger
      const elements = [headlineLeftRef.current, badgeRef.current, headlineRightRef.current].filter(Boolean);
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.6,
            },
          }
        );
      }

      // Arc morph/scale feeling as user scrolls past
      if (arcPathRef.current) {
        gsap.fromTo(
          arcPathRef.current,
          { scaleY: 0.5, transformOrigin: 'top center' },
          {
            scaleY: 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#101010] -mt-1 pt-16 pb-24 select-none border-t border-[#1c1c1c]"
    >
      {/* Powder-blue curved rising arc shape */}
      <div className="relative w-full flex items-center justify-center">
        {/* Large Decorative 3D Ring Behind Center Word */}
        <div
          ref={ringRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 rounded-full border-[1.5px] pointer-events-none transition-colors duration-500 will-change-transform"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 45px ${accentColor}30`,
          }}
        />

        {/* Subtle Arc Mask */}
        <svg
          className="w-full h-16 sm:h-28 absolute -top-10 left-0 pointer-events-none text-[#101010]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            ref={arcPathRef}
            fill="currentColor"
            d="M0,0 C480,80 960,80 1440,0 L1440,100 L0,100 Z"
          />
        </svg>

        {/* Split Width Monumental Headline */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-wrap items-center justify-between gap-4 font-headline uppercase font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tighter text-[#EEECE6]/90">
          <span
            ref={headlineLeftRef}
            className="transition-colors duration-500 hover:text-[#97B6DA] will-change-transform"
          >
            DETERMINISTIC
          </span>
          <span
            ref={badgeRef}
            className="transition-colors duration-500 px-5 py-1.5 rounded-full border text-base sm:text-2xl font-mono tracking-widest bg-[#141414]/80 backdrop-blur-md will-change-transform"
            style={{
              borderColor: `${accentColor}66`,
              color: accentColor,
              boxShadow: `0 0 20px ${accentColor}20`,
            }}
          >
            SYSTEMS & AI
          </span>
          <span
            ref={headlineRightRef}
            className="transition-colors duration-500 hover:text-[#97B6DA] will-change-transform"
          >
            ARCHITECTURE
          </span>
        </div>
      </div>
    </div>
  );
};

