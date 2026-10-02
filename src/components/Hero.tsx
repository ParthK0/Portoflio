import React, { useState, useEffect } from 'react';
import { Globe, ArrowDown, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0a0c10]">
      
      {/* Top Meta Bar (Dennis Snellenberg Style) */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-4 flex flex-wrap items-center justify-between gap-4 z-20">
        <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
          <Globe className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '16s' }} />
          <span>Located in Delhi NCR, India</span>
          {time && <span className="text-slate-500 hidden sm:inline">· {time}</span>}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
          <span>{PERSONAL_INFO.statusBadge}</span>
        </div>
      </div>

      {/* Main Center Stage: Portrait + Massive Monumental Text Behind */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-6 z-10 w-full px-4">
        
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-purple-500/15 to-transparent blur-3xl -z-10 pointer-events-none" />

        {/* The Dennis Snellenberg Portrait Frame */}
        <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121622] to-[#0a0c10] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src="/images/profile.png"
              alt="Parth Khowal portrait"
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Shadow Vignette at Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-70" />
            
            {/* Quick Floating Tag on Portrait */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#0d1017]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <span className="font-bold text-white tracking-wide">Parth Khowal</span>
              <span className="font-mono text-cyan-400 text-[11px]">B.Tech AI & DS (8.89)</span>
            </div>
          </div>
        </div>

        {/* Headline & Value Proposition */}
        <div className="text-center mt-6 max-w-2xl px-4 z-20">
          <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
            Software Engineer & Full-Stack Intern @ <strong className="text-white">MSKard</strong>. Solving 600+ LeetCode problems with a core focus on deterministic financial systems and production AI architectures.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5 shadow-lg"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      {/* Massive Infinite Marquee Banner (The Dennis Signature) */}
      <div className="relative w-full overflow-hidden py-3 bg-[#0d1017]/90 border-y border-white/10 select-none z-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-8 shrink-0">
              <span className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white/90">
                Parth Khowal
              </span>
              <span className="text-2xl sm:text-4xl text-cyan-400 font-light">—</span>
              <span className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-400 hover:text-white transition-colors">
                Software Engineer
              </span>
              <span className="text-2xl sm:text-4xl text-purple-400 font-light">—</span>
              <span className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white/90">
                Full-Stack Systems
              </span>
              <span className="text-2xl sm:text-4xl text-emerald-400 font-light">—</span>
              <span className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-slate-400 hover:text-white transition-colors">
                Deterministic AI
              </span>
              <span className="text-2xl sm:text-4xl text-cyan-400 font-light">—</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Bottom Meta Strip */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 z-20">
        {PERSONAL_INFO.heroStats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#111621]/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
          >
            <div className={`text-2xl lg:text-3xl font-extrabold font-mono mb-0.5 ${
              stat.highlight === 'cyan' ? 'text-cyan-400' :
              stat.highlight === 'emerald' ? 'text-emerald-400' :
              stat.highlight === 'violet' ? 'text-purple-400' : 'text-slate-100'
            }`}>
              {stat.value}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
