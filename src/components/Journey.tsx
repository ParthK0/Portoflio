import React from 'react';
import { JOURNEY_STAGES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative bg-[#111111]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]"></span>
            Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-3">
            The Engineering Journey
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg max-w-2xl leading-relaxed">
            From foundational algorithm problem-solving to full-stack production deployments and deterministic AI architectures.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-gradient space-y-12 before:absolute before:inset-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-[#9D6BEE] before:via-[#A87BF5]/60 before:to-[#262626]">
          {JOURNEY_STAGES.map((stage) => (
            <div key={stage.id} className="relative group">
              
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111111] border-2 border-[#9D6BEE] shadow-[0_0_12px_rgba(157,107,238,0.7)] group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 hover:translate-x-1 shadow-xl shadow-black/60">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-[#FFFFFF]">
                    <span className="text-[#9D6BEE] font-mono text-base mr-2">{stage.stageNumber}.</span>
                    {stage.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-[#A87BF5] bg-[#9D6BEE]/10 px-2.5 py-1 rounded-md border border-[#9D6BEE]/25">
                    {stage.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#E0E0E0] mb-3">
                  {stage.subtitle}
                </div>

                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5">
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
