import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
          <span>{PERSONAL_INFO.statusBadge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">deterministic software</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">AI systems</span> that solve real problems.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          B.Tech AI & Data Science scholar @ Galgotias University (<strong className="text-white font-semibold">8.89 CGPA</strong>). Full-Stack Developer Intern @ <strong className="text-white font-semibold">MSKard</strong>. <strong className="text-white font-semibold">600+ LeetCode</strong> problems solved. Focused on clean architecture, zero-tolerance financial precision, and production web engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-[0_4px_20px_rgba(0,229,255,0.35)] hover:shadow-[0_6px_28px_rgba(0,229,255,0.5)] flex items-center gap-2"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Stat Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10">
          {PERSONAL_INFO.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#111621]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-md shadow-black/20"
            >
              <div className={`text-3xl lg:text-4xl font-extrabold font-mono mb-1 ${
                stat.highlight === 'cyan' ? 'text-cyan-400' :
                stat.highlight === 'emerald' ? 'text-emerald-400' :
                stat.highlight === 'violet' ? 'text-purple-400' : 'text-slate-100'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
