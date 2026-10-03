import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { type OrbitalCategory, type OrbitalTechSkill } from '../../data/techOrbitalData';

interface DetailPanelProps {
  category: OrbitalCategory;
  onBack: () => void;
  onSelectTech: (skill: OrbitalTechSkill) => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  category,
  onBack,
  onSelectTech,
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#161616]/95 border border-[#2A2A2A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl relative z-40 backdrop-blur-xl"
      style={{
        boxShadow: `0 10px 40px -10px ${category.ringColor}22`,
        borderTopColor: category.ringColor,
      }}
    >
      {/* Navigation / Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#262626]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1C1C] border border-[#333333] hover:border-[var(--accent-primary)] text-xs font-mono text-[#A0A0A0] hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Orbit</span>
          </button>

          <div className="h-4 w-px bg-[#333333] hidden sm:block" />

          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10"
              style={{ backgroundColor: `${category.ringColor}20`, color: category.ringColor }}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-none">
                {category.name}
              </h3>
              <span className="text-[11px] font-mono text-[#888888]">
                {category.skills.length} engineering tools
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span 
            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border"
            style={{ 
              backgroundColor: `${category.ringColor}15`, 
              color: category.ringColor,
              borderColor: `${category.ringColor}35`
            }}
          >
            Orbital Ring {category.orbitRadius}px
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed max-w-3xl mb-7">
        {category.description}
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {category.skills.map((skill) => (
          <button
            type="button"
            key={skill.name}
            onClick={() => onSelectTech(skill)}
            className="text-left p-4 rounded-xl bg-[#1B1B1B] border border-[#2A2A2A] hover:border-[#444] transition-all duration-200 group cursor-pointer relative overflow-hidden flex flex-col justify-between hover:-translate-y-0.5"
            style={{
              // @ts-expect-error custom hover border color
              '--hover-border': category.ringColor,
            }}
          >
            {/* Top row */}
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-7 h-7 rounded-lg bg-[#141414] border border-[#333333] flex items-center justify-center text-[10px] font-mono font-bold group-hover:scale-105 transition-transform"
                    style={{ color: category.ringColor }}
                  >
                    {skill.symbol}
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[var(--accent-primary)] transition-colors">
                    {skill.name}
                  </span>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121212] text-[var(--accent-primary)] border border-[var(--accent-border)] font-medium whitespace-nowrap">
                  {skill.level}
                </span>
              </div>

              {skill.note && (
                <p className="text-xs text-[#909090] mb-2 leading-relaxed">
                  {skill.note}
                </p>
              )}
            </div>

            {/* Bottom row: role & projects */}
            <div className="mt-2 pt-2.5 border-t border-[#252525] flex items-center justify-between text-[11px] font-mono text-[#777777]">
              <span className="truncate max-w-[180px]">{skill.role}</span>
              
              {skill.usedIn.length > 0 ? (
                <span className="flex items-center gap-1 text-[var(--accent-primary)] shrink-0 font-medium">
                  <FolderGit2 className="w-3 h-3" />
                  <span>{skill.usedIn.length} {skill.usedIn.length === 1 ? 'proj' : 'projs'}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1 group-hover:text-white transition-colors shrink-0">
                  <ExternalLink className="w-3 h-3" />
                  <span>Explore</span>
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#707070] font-mono">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          Click any skill to inspect architectural usage & production projects
        </span>
        <button
          type="button"
          onClick={onBack}
          className="text-[var(--accent-primary)] hover:underline cursor-pointer"
        >
          Close panel
        </button>
      </div>
    </motion.div>
  );
};
