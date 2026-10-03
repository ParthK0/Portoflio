import React from 'react';
import { Zap, Brain, ShieldCheck } from 'lucide-react';
import { PILLARS } from '../data/portfolioData';

export const Pillars: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-[#9D6BEE]" />;
      case 'Brain': return <Brain className="w-6 h-6 text-[#A87BF5]" />;
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-[#9D6BEE]" />;
      default: return <Zap className="w-6 h-6 text-[#9D6BEE]" />;
    }
  };

  return (
    <section className="py-24 bg-[#111111] border-y border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]"></span>
            Core Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-3">
            Engineering Pillars
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg max-w-2xl leading-relaxed">
            How I approach software engineering: combining algorithmic rigour, zero-hallucination deterministic pipelines, and production reliability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl shadow-black/60"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <div className="text-xs font-mono text-[#A87BF5] bg-[#9D6BEE]/10 border-l-2 border-[#9D6BEE] p-2.5 rounded-r">
                  {pillar.proof}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
