import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#111111] border-y border-[#262626] relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]"></span>
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-3">
            Industry Experience
          </h2>
          <p className="text-[#A0A0A0] text-base sm:text-lg max-w-2xl leading-relaxed">
            Applying software engineering standards in production environments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 relative overflow-hidden shadow-2xl shadow-black/80"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#9D6BEE] to-[#A87BF5]" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-tight mb-1">
                    {item.role}
                  </h3>
                  <div className="text-lg font-semibold text-[#A87BF5] flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#9D6BEE]" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#9D6BEE]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-4 mb-8">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#E0E0E0] text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#9D6BEE] shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider mr-2">
                  Stack:
                </span>
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#181818] border border-[#262626] text-[#A0A0A0]"
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
