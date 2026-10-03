import React from 'react';
import { Award, Users, ChevronRight, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_ITEMS } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9D6BEE]" />
              Ownership & Community
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Leadership & Campus Impact
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
            Engineering excellence also demands leadership, financial stewardship, organizing developer communities, and executing large technical events.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/60 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#262626]">
                  <div>
                    <h3 className="text-2xl font-bold text-[#FFFFFF] tracking-tight mb-1 group-hover:text-[#A87BF5] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-[#9D6BEE] font-medium text-sm flex items-center gap-1.5 font-mono">
                      <Users className="w-4 h-4 text-[#9D6BEE]" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-[#A0A0A0]">
                    {item.tag}
                  </span>
                </div>

                <ul className="space-y-3.5 my-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-[#9D6BEE] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#262626] flex items-center gap-2 text-xs font-mono text-[#A0A0A0]">
                <Award className="w-4 h-4 text-[#A87BF5]" />
                <span>Executive Responsibility & Team Coordination</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

