import React from 'react';
import { JOURNEY_STAGES } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            The Engineering Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            From foundational algorithm problem-solving to full-stack production deployments and deterministic AI architectures.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-gradient space-y-12 before:absolute before:inset-0 before:left-[-2px] before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-purple-500 before:to-emerald-400">
          {JOURNEY_STAGES.map((stage) => (
            <div key={stage.id} className="relative group">
              
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.6)] group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#111622]/85 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-1 shadow-lg shadow-black/20">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    <span className="text-cyan-400 font-mono text-base mr-2">{stage.stageNumber}.</span>
                    {stage.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {stage.period}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-300 mb-3">
                  {stage.subtitle}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
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
