import React from 'react';
import { Zap, Brain, ShieldCheck } from 'lucide-react';
import { PILLARS } from '../data/portfolioData';

export const Pillars: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Brain': return <Brain className="w-6 h-6 text-purple-400" />;
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#0d1017] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Core Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Engineering Pillars
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            How I approach software engineering: combining algorithmic rigour, zero-hallucination deterministic pipelines, and production reliability.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#111622]/90 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-cyan-400 bg-cyan-500/5 border-l-2 border-cyan-400 p-2.5 rounded-r">
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
