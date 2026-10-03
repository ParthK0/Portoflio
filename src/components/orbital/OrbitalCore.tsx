import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import { type OrbitalCategory, type OrbitalTechSkill } from '../../data/techOrbitalData';

interface OrbitalCoreProps {
  activeCategory: OrbitalCategory | null;
  activeTech: OrbitalTechSkill | null;
  onReset: () => void;
  totalSkills: number;
  totalDomains: number;
  projectsCount: number;
}

export const OrbitalCore: React.FC<OrbitalCoreProps> = ({
  activeCategory,
  activeTech,
  onReset,
  totalSkills,
  totalDomains,
  projectsCount,
}) => {
  const isFocused = Boolean(activeCategory || activeTech);

  return (
    <div className="relative z-30 flex items-center justify-center pointer-events-auto">
      <motion.button
        type="button"
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className={`relative group rounded-full md:rounded-3xl p-4 sm:p-5 md:p-6 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 border orbital-glass ${
          isFocused
            ? "border-[var(--accent-primary)] shadow-[0_0_35px_var(--accent-glow)] bg-[#181818]/95"
            : "border-[#333333] hover:border-[var(--accent-primary)]/60 orbital-core-pulse shadow-2xl"
        }`}
        aria-label={isFocused ? "Reset orbital focus to full view" : "Tech Stack Core Statistics"}
      >
        {/* Subtle radial inner glow */}
        <div 
          className="absolute inset-0 rounded-full md:rounded-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
          style={{
            background: isFocused && activeCategory 
              ? `radial-gradient(circle, ${activeCategory.ringColor} 0%, transparent 70%)` 
              : `radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)`
          }}
        />

        <AnimatePresence mode="wait">
          {activeTech ? (
            <motion.div
              key={`tech-${activeTech.name}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center px-1"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)] mb-1">
                Active Node
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white leading-tight line-clamp-2">
                {activeTech.name}
              </h4>
              <span className="text-[9px] font-mono px-2 py-0.5 mt-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] font-semibold">
                {activeTech.level}
              </span>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-[#A0A0A0] group-hover:text-white transition-colors">
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset orbit</span>
              </div>
            </motion.div>
          ) : activeCategory ? (
            <motion.div
              key={`cat-${activeCategory.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center px-1"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 border border-white/10"
                style={{ backgroundColor: `${activeCategory.ringColor}22`, color: activeCategory.ringColor }}
              >
                <activeCategory.icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {activeCategory.shortName}
              </h4>
              <p className="text-[10px] font-mono text-[#A0A0A0] mt-0.5">
                {activeCategory.skills.length} technologies
              </p>
              <div className="flex items-center gap-1 mt-1.5 text-[9px] text-[var(--accent-primary)] group-hover:underline">
                <RotateCcw className="w-2.5 h-2.5" />
                <span>All rings</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default-core"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-1.5 mb-1 text-[var(--accent-primary)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest">
                  Core
                </span>
              </div>
              
              <div className="text-base sm:text-lg font-black text-white tracking-tight">
                TECH STACK
              </div>

              <div className="mt-1 flex flex-col items-center gap-0.5 text-[9px] sm:text-[10px] font-mono text-[#A0A0A0]">
                <span>
                  <strong className="text-white font-semibold">{totalDomains}</strong> Domains
                </span>
                <span>
                  <strong className="text-white font-semibold">{totalSkills}+</strong> Technologies
                </span>
                <span>
                  <strong className="text-[var(--accent-primary)] font-semibold">{projectsCount}</strong> Prod Systems
                </span>
              </div>

              <div className="mt-2 text-[9px] font-mono text-[#777777] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1">
                <span>○ Tap ring to focus</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
