import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ARCHITECTURE_DECISIONS } from '../data/portfolioData';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-[#0d1017] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            System Decisions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Architectural Trade-offs & Deep Dives
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Real software engineering is defined by pragmatic trade-offs. Here is why specific technical choices were made across my systems.
          </p>
        </div>

        {/* Decisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_DECISIONS.map((dec) => (
            <div
              key={dec.id}
              className="p-8 rounded-2xl bg-[#111622]/90 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {dec.project}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {dec.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {dec.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {dec.problem}
                </p>

                <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/15 mb-6 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-purple-300 block mb-1">Engineered Decision:</strong>
                  {dec.decision}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{dec.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
