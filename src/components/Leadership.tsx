import React from 'react';
import { Award, Users, ChevronRight } from 'lucide-react';
import { LEADERSHIP_ITEMS } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Ownership & Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Leadership & Campus Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Engineering excellence also demands leadership, financial stewardship, organizing developer communities, and executing large technical events.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 rounded-3xl bg-[#111622]/85 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      {item.role}
                    </h3>
                    <div className="text-cyan-400 font-medium text-sm flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <ul className="space-y-3.5 my-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Executive Responsibility & Team Coordination</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
