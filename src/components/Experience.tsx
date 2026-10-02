import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0d1017] border-y border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Industry Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Applying software engineering standards in production environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 rounded-3xl bg-[#111622]/90 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden shadow-xl shadow-black/30"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                    {item.role}
                  </h3>
                  <div className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-4 mb-8">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-slate-500 tracking-wider mr-2">
                  Stack:
                </span>
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
