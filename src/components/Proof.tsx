import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROOF_METRICS } from '../data/portfolioData';

export const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-20 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9D6BEE]" />
              Defensible Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Concrete Engineering Metrics
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
            Data, automated test suites, and verified benchmark results over subjective assertions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_METRICS.map((proof, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/60 group"
            >
              <div>
                <div className="text-5xl font-black font-mono mb-2 text-[#9D6BEE] group-hover:text-[#A87BF5] transition-colors">
                  {proof.value}
                </div>
                <div className="text-base font-bold text-[#FFFFFF] mb-2">
                  {proof.title}
                </div>
                <p className="text-[#A0A0A0] text-xs leading-relaxed">
                  {proof.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#707070]">
                <span>VERIFIED METRIC</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9D6BEE]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

