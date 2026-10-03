import React from 'react';
import { CheckCircle2, Cpu } from 'lucide-react';
import { ARCHITECTURE_DECISIONS } from '../data/portfolioData';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#9D6BEE]" />
              System Decisions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Architectural Trade-offs & Deep Dives
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
            Real software engineering is defined by pragmatic trade-offs. Here is why specific technical choices were made across my systems.
          </p>
        </div>

        {/* Decisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHITECTURE_DECISIONS.map((dec) => (
            <div
              key={dec.id}
              className="p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/60 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#262626]">
                  <span className="text-xs font-mono text-[#A87BF5] font-semibold uppercase tracking-wider">
                    {dec.project}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#181818] text-[#A0A0A0] border border-[#262626]">
                    {dec.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#FFFFFF] mb-3 tracking-tight group-hover:text-[#A87BF5] transition-colors">
                  {dec.title}
                </h3>

                <p className="text-[#A0A0A0] text-xs sm:text-sm leading-relaxed mb-4">
                  {dec.problem}
                </p>

                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#262626] mb-6 text-xs text-[#E0E0E0] leading-relaxed">
                  <strong className="text-[#A87BF5] block mb-1 font-mono text-[11px] uppercase tracking-wider">
                    Engineered Decision:
                  </strong>
                  {dec.decision}
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center gap-2 text-xs font-mono text-[#FFFFFF]">
                <CheckCircle2 className="w-4 h-4 text-[#9D6BEE] shrink-0" />
                <span>{dec.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

