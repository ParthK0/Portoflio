import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type OrbitalTechSkill, type OrbitalCategory } from '../../data/techOrbitalData';

interface TechNodeProps {
  skill: OrbitalTechSkill;
  angleDeg: number;
  radius: number;
  category: OrbitalCategory;
  isSelected: boolean;
  isFocusedCategory: boolean;
  onSelect: () => void;
  orbitDuration: number;
  orbitDirection: 'cw' | 'ccw';
}

export const TechNode: React.FC<TechNodeProps> = ({
  skill,
  angleDeg,
  radius,
  category,
  isSelected,
  isFocusedCategory,
  onSelect,
  orbitDuration,
  orbitDirection,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Counter spin class matches the ring's rotation to stay upright
  const counterClass = orbitDirection === 'cw' ? 'counter-cw' : 'counter-ccw';

  return (
    <div
      className="absolute top-1/2 left-1/2 -ml-5 -mt-5 w-10 h-10 flex items-center justify-center pointer-events-auto"
      style={{
        transform: `rotate(${angleDeg}deg) translateX(${radius}px)`,
        transformOrigin: '0 0',
      }}
    >
      {/* Counter-rotating container keeps content upright */}
      <div
        className={`orbital-node-counter ${counterClass} relative flex items-center justify-center`}
        style={{
          // @ts-expect-error CSS variable
          '--orbit-duration': `${orbitDuration}s`,
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onSelect();
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          aria-label={`${skill.name}, ${skill.level} level, used in ${skill.usedIn.length} projects`}
          className={`relative group rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] ${
            isSelected
              ? "w-12 h-12 bg-[#181818] border-2 shadow-[0_0_20px_var(--accent-glow)] scale-110 z-40"
              : isFocusedCategory
              ? "w-10 h-10 bg-[#161616] border hover:scale-125 z-30"
              : "w-8 h-8 sm:w-9 sm:h-9 bg-[#121212]/90 border border-[#2b2b2b] hover:border-[#444] hover:scale-125 z-20"
          }`}
          style={{
            borderColor: isSelected 
              ? 'var(--accent-primary)' 
              : isHovered || isFocusedCategory
              ? category.ringColor
              : undefined,
            boxShadow: isHovered
              ? `0 0 16px ${category.ringColor}66`
              : undefined
          }}
        >
          {/* Node Monogram / Short Symbol */}
          <span 
            className="text-[11px] font-mono font-bold tracking-tighter select-none transition-colors"
            style={{ 
              color: isSelected 
                ? 'var(--accent-primary)' 
                : isHovered || isFocusedCategory
                ? '#FFFFFF' 
                : '#B0B0B0' 
            }}
          >
            {skill.symbol}
          </span>

          {/* Tiny project presence indicator dot */}
          {skill.usedIn.length > 0 && (
            <span 
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#111111]"
              style={{ backgroundColor: category.ringColor }}
              title={`Used in ${skill.usedIn.length} projects`}
            />
          )}
        </button>

        {/* Hover / Focused Tooltip Callout */}
        <AnimatePresence>
          {(isHovered || isSelected) && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none"
            >
              <div className="bg-[#181818]/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#333333] shadow-xl flex flex-col items-center">
                <span className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: category.ringColor }} 
                  />
                  {skill.name}
                </span>
                
                <div className="flex items-center gap-1.5 mt-0.5 text-[9px] font-mono text-[#A0A0A0]">
                  <span className="text-[var(--accent-primary)] font-semibold">{skill.level}</span>
                  {skill.usedIn.length > 0 && (
                    <>
                      <span>•</span>
                      <span>{skill.usedIn.length} {skill.usedIn.length === 1 ? 'proj' : 'projs'}</span>
                    </>
                  )}
                </div>
              </div>
              {/* Arrow */}
              <div className="w-2 h-2 bg-[#181818] border-r border-b border-[#333333] transform rotate-45 mx-auto -mt-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
