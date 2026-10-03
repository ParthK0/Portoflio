import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education-certifications" className="py-24 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-[#9D6BEE]" />
              Academic & Professional Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              Education & Certifications
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-lg leading-relaxed">
            Rigorous undergraduate degree in AI & Data Science, international competitive mathematics honors, and industry-accredited simulations.
          </p>
        </div>

        {/* International Olympiad Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181818] via-[#1A1624] to-[#181818] border border-[#9D6BEE]/30 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#9D6BEE]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#9D6BEE]/15 border border-[#9D6BEE]/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_20px_rgba(157,107,238,0.2)]">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-[#A87BF5] uppercase px-2.5 py-0.5 rounded bg-[#9D6BEE]/10 border border-[#9D6BEE]/20">
                    International Honor
                  </span>
                  <span className="text-xs font-mono text-[#A0A0A0]">Competitive Mathematics</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#FFFFFF] tracking-tight">
                  International Mathematics Olympiad — Bronze Medallist
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 max-w-2xl">
                  Demonstrated advanced mathematical analysis, discrete problem solving, and analytical proof reasoning on an international competitive stage.
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-2xl font-black text-amber-400 font-mono">BRONZE</div>
              <div className="text-xs font-mono text-[#A0A0A0]">World Finalist</div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Education (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-[#A0A0A0] tracking-wider pb-2 border-b border-[#262626]">
              <BookOpen className="w-4 h-4 text-[#9D6BEE]" />
              <span>Formal Education</span>
            </div>

            {EDUCATION_ITEMS.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/40 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-[#FFFFFF] group-hover:text-[#9D6BEE] transition-colors">
                      {edu.institution}
                    </h4>
                    <div className="text-sm font-semibold text-[#A87BF5] mt-0.5">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-xs font-mono font-semibold text-[#A87BF5] bg-[#9D6BEE]/10 px-3 py-1 rounded-md border border-[#9D6BEE]/25">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#FFFFFF] mt-1">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#707070] font-mono mb-4">
                  {edu.location}
                </div>

                {/* Coursework list */}
                {edu.coursework && (
                  <div>
                    <div className="text-xs font-mono text-[#A0A0A0] mb-2 uppercase tracking-wider">
                      Relevant Coursework:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-[#A0A0A0] tracking-wider pb-2 border-b border-[#262626]">
              <Award className="w-4 h-4 text-[#9D6BEE]" />
              <span>Industry Certifications & Programs</span>
            </div>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                    <span className="text-xs font-mono uppercase text-[#A87BF5] font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-[#A0A0A0]">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262626]">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
