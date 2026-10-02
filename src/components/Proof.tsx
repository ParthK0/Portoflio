import React from 'react';
import { PROOF_METRICS } from '../data/portfolioData';

export const Proof: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d1017] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Defensible Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Concrete Engineering Metrics
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Data and verified results over subjective assertions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_METRICS.map((proof, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#111622]/90 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg shadow-black/20"
            >
              <div>
                <div className={`text-5xl font-extrabold font-mono mb-2 ${proof.colorClass}`}>
                  {proof.value}
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {proof.title}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {proof.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED</span>
                <span>DATA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
