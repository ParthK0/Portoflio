import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface LoadingScreenProps {
  onComplete: () => void;
}

interface CurtainPalette {
  bgGradient: string;
  bottomColor: string;
  glowColor: string;
  beamGlow: string;
  subtitleColor: string;
}

const THEME_CURTAINS: Record<string, CurtainPalette> = {
  purple: {
    bgGradient: 'from-[#5B21B6] via-[#6D28D9] to-[#4C1D95]',
    bottomColor: '#4C1D95',
    glowColor: 'rgba(76, 29, 149, 0.75)',
    beamGlow: 'rgba(168, 123, 245, 0.95)',
    subtitleColor: 'text-purple-200/90',
  },
  yellow: {
    bgGradient: 'from-[#854D0E] via-[#A16207] to-[#713F12]',
    bottomColor: '#713F12',
    glowColor: 'rgba(161, 98, 7, 0.8)',
    beamGlow: 'rgba(253, 224, 71, 0.95)',
    subtitleColor: 'text-amber-100/90',
  },
  lightblue: {
    bgGradient: 'from-[#0369A1] via-[#0284C7] to-[#075985]',
    bottomColor: '#075985',
    glowColor: 'rgba(3, 105, 161, 0.8)',
    beamGlow: 'rgba(125, 211, 252, 0.95)',
    subtitleColor: 'text-sky-100/90',
  },
  emerald: {
    bgGradient: 'from-[#065F46] via-[#047857] to-[#064E3B]',
    bottomColor: '#064E3B',
    glowColor: 'rgba(6, 95, 70, 0.8)',
    beamGlow: 'rgba(52, 211, 153, 0.95)',
    subtitleColor: 'text-emerald-100/90',
  },
  coral: {
    bgGradient: 'from-[#9A3412] via-[#C2410C] to-[#7C2D12]',
    bottomColor: '#7C2D12',
    glowColor: 'rgba(154, 52, 18, 0.8)',
    beamGlow: 'rgba(251, 146, 60, 0.95)',
    subtitleColor: 'text-orange-100/90',
  },
  rose: {
    bgGradient: 'from-[#9F1239] via-[#BE123C] to-[#881337]',
    bottomColor: '#881337',
    glowColor: 'rgba(159, 18, 57, 0.8)',
    beamGlow: 'rgba(251, 113, 133, 0.95)',
    subtitleColor: 'text-rose-100/90',
  },
  indigo: {
    bgGradient: 'from-[#3730A3] via-[#4338CA] to-[#312E81]',
    bottomColor: '#312E81',
    glowColor: 'rgba(55, 48, 163, 0.8)',
    beamGlow: 'rgba(129, 140, 248, 0.95)',
    subtitleColor: 'text-indigo-100/90',
  },
};

const NAME_CHARS = 'PARTH KHOWAL'.split('');

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { currentTheme } = useTheme();
  const activeCurtain = THEME_CURTAINS[currentTheme?.id] || THEME_CURTAINS['purple'];

  // Phases:
  // 'line': Theme curtain with middle laser line expanding
  // 'text': Letters emerge directly out of the middle line slit
  // 'exit': Curtain sweeps upward with a curved arch bottom to reveal the hero page
  const [phase, setPhase] = useState<'line' | 'text' | 'exit'>('line');
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    // Phase 1 -> 2: Text begins emerging smoothly in the center (150ms)
    const t1 = setTimeout(() => {
      setPhase('text');
      sound.playBlip(720, 0.03);
    }, 150);

    // Phase 2 -> 3: Full assembled view, then begin the curved upward sweep (2200ms)
    const t2 = setTimeout(() => {
      triggerExit();
    }, 2200);

    // Skip on Escape or Space
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        triggerExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const triggerExit = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    sound.playWarp();
    // Dispatch reveal event to signal the hero page to begin its slow upward emergence from bottom
    window.dispatchEvent(new CustomEvent('hero-reveal'));
    setPhase('exit');
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-[999999] overflow-hidden select-none pointer-events-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: phase === 'exit' ? '-135%' : 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        onClick={triggerExit}
        className={`absolute inset-x-0 top-0 h-screen cursor-pointer pointer-events-auto bg-gradient-to-b ${activeCurtain.bgGradient}`}
      >
        {/* Subtle radial lighting sheen on the background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_65%)] pointer-events-none" />

        {/* The Name PARTH KHOWAL Emerging Seamlessly In Center */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
          <div className="flex items-center justify-center">
            {NAME_CHARS.map((char, index) => {
              if (char === ' ') {
                return (
                  <div key={index} className="w-3 sm:w-7 lg:w-10 h-1" />
                );
              }

              // Stagger each letter's emergence
              const delay = 0.15 + index * 0.045;

              return (
                <div key={index} className="relative overflow-visible">
                  <motion.span
                    initial={{
                      scaleY: 0,
                      opacity: 0,
                      filter: 'blur(8px)',
                      clipPath: 'inset(50% 0% 50% 0%)',
                    }}
                    animate={
                      phase === 'text'
                        ? {
                            scaleY: 1,
                            opacity: 1,
                            filter: 'blur(0px)',
                            clipPath: 'inset(0% 0% 0% 0%)',
                          }
                        : phase === 'exit'
                        ? {
                            scaleY: 1,
                            opacity: 0.85,
                            filter: 'blur(0px)',
                            clipPath: 'inset(0% 0% 0% 0%)',
                            y: -25,
                          }
                        : {
                            scaleY: 0,
                            opacity: 0,
                            filter: 'blur(8px)',
                            clipPath: 'inset(50% 0% 50% 0%)',
                          }
                    }
                    transition={{
                      duration: 0.52,
                      delay: phase === 'text' ? delay : 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: '50% 50%' }}
                    className="inline-block font-inter-tight font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.65)]"
                  >
                    {char}
                  </motion.span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtitle appearing below the assembled name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: phase === 'text' ? 1 : phase === 'exit' ? 0 : 0,
            y: phase === 'text' ? 0 : phase === 'exit' ? -15 : 15,
          }}
          transition={{ duration: 0.4, delay: phase === 'text' ? 0.9 : 0 }}
          className={`absolute bottom-[20vh] left-0 right-0 text-center font-mono text-xs sm:text-sm tracking-[0.3em] uppercase z-20 pointer-events-none px-6 drop-shadow-md ${activeCurtain.subtitleColor}`}
        >
          <span>full-stack developer · AI engineer</span>
        </motion.div>

        {/* Skip Hint */}
        <div
          className={`absolute top-6 right-6 font-mono text-[10px] tracking-widest uppercase text-white/50 z-30 pointer-events-none transition-opacity duration-300 ${
            phase === 'exit' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          [CLICK TO SKIP]
        </div>

        {/* THE CURVED ARCH EXTENSION AT THE BOTTOM OF THE CURTAIN */}
        <div className="absolute top-[99.5%] left-0 w-full overflow-visible pointer-events-none -mt-[1px]">
          <svg
            viewBox="0 0 1000 250"
            preserveAspectRatio="none"
            className="w-full h-[22vh] sm:h-[30vh] block"
            style={{
              fill: activeCurtain.bottomColor,
              filter: `drop-shadow(0 25px 40px ${activeCurtain.glowColor})`,
            }}
          >
            {/* Solid curved fill matching curtain bottom color */}
            <path d="M 0 0 L 1000 0 Q 500 500 0 0 Z" />
            {/* Crisp illuminated arch highlight line */}
            <path
              d="M 1000 0 Q 500 500 0 0"
              fill="none"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
