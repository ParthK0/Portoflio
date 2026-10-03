import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type OrbitalTechSkill, type OrbitalCategory } from '../../data/techOrbitalData';

interface TechDrilldownProps {
  skill: OrbitalTechSkill;
  category: OrbitalCategory;
  onBackToCategory: () => void;
  onBackToOrbit: () => void;
}

export const TechDrilldown: React.FC<TechDrilldownProps> = ({
  skill,
  category,
  onBackToCategory,
  onBackToOrbit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#161616]/95 border border-[#2D2D2D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative z-40 backdrop-blur-xl"
      style={{
        boxShadow: `0 12px 50px -10px ${category.ringColor}28`,
        borderTopColor: category.ringColor,
      }}
    >
      {/* Navigation Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToCategory}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F1F1F] border border-[#333333] hover:border-[var(--accent-primary)] text-xs font-mono text-[#A0A0A0] hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to {category.shortName}</span>
          </button>

          <button
            type="button"
            onClick={onBackToOrbit}
            className="px-3 py-1.5 rounded-full bg-transparent hover:bg-[#1F1F1F] text-xs font-mono text-[#777777] hover:text-[#B0B0B0] transition-colors cursor-pointer"
          >
            Orbit View
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span 
            className="text-[11px] font-mono px-2.5 py-1 rounded-full border"
            style={{ 
              backgroundColor: `${category.ringColor}15`, 
              color: category.ringColor,
              borderColor: `${category.ringColor}35`
            }}
          >
            {category.name}
          </span>
        </div>
      </div>

      {/* Hero Skill Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div 
            className="w-14 h-14 rounded-2xl bg-[#1C1C1C] border flex items-center justify-center text-lg font-mono font-black shrink-0 shadow-lg"
            style={{ 
              borderColor: `${category.ringColor}60`, 
              color: category.ringColor,
              boxShadow: `0 0 20px ${category.ringColor}22`
            }}
          >
            {skill.symbol}
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {skill.name}
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] font-semibold">
                {skill.level} Proficiency
              </span>
            </div>

            <p className="text-sm text-[#A0A0A0] mt-1.5 font-sans leading-relaxed">
              {skill.role}
            </p>
          </div>
        </div>
      </div>

      {/* Context / Notes */}
      {skill.note && (
        <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] mb-7 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#D0D0D0] leading-relaxed">
            <strong className="text-white font-semibold">Implementation Detail: </strong>
            {skill.note}
          </div>
        </div>
      )}

      {/* Used In Projects Section */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-3.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0] flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            Applied In Production Projects ({skill.usedIn.length})
          </h4>
          <Link
            to="/work"
            className="text-xs font-mono text-[var(--accent-primary)] hover:underline flex items-center gap-1"
          >
            <span>View all projects</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {skill.usedIn.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skill.usedIn.map((proj) => (
              <Link
                key={proj.id}
                to={`/work/${proj.id}`}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#292929] hover:border-[var(--accent-primary)]/50 transition-all group flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                      {proj.title}
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#666] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#999999] line-clamp-2 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#242424] flex items-center justify-between text-[10px] font-mono text-[#777777]">
                  <span className="group-hover:text-[#A0A0A0] transition-colors">Case study & architecture</span>
                  <span className="text-[var(--accent-primary)]">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-[#181818] border border-dashed border-[#2F2F2F] text-center">
            <p className="text-xs font-mono text-[#888888]">
              Utilized in algorithmic competitive coding, research prototypes, and internal utility tooling.
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified in real-world deployment & benchmarked pipelines</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToCategory}
            className="text-[var(--accent-primary)] hover:underline cursor-pointer"
          >
            ← {category.shortName}
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={onBackToOrbit}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Full Orbit
          </button>
        </div>
      </div>
    </motion.div>
  );
};
