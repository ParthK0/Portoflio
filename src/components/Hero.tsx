import React from 'react';
import { MoveDownRight, ArrowDown } from 'lucide-react';
import { ParallaxSlider } from './ParallaxSlider';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#090b10] text-slate-100">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Centerpiece: Cutout Portrait */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-4 z-10 w-full px-6">
        <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
          <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121622] to-[#090b10] shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
            <img
              src="/images/profile.png"
              alt="Parth Khowal portrait"
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Shadow Vignette at Base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-80" />
            
            {/* Floating Tag */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#0d1017]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
              <span className="font-bold text-white tracking-wide">Parth Khowal</span>
              <span className="font-mono text-cyan-400 text-[11px]">B.Tech AI & DS (8.89)</span>
            </div>
          </div>
        </div>

        {/* Quick CTA Actions */}
        <div className="flex items-center gap-3 mt-6 z-20">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Monumental Velocity Parallax Slider (Dennis Snellenberg Header Signature) */}
      <div className="relative w-full overflow-hidden select-none z-10 my-2">
        <h1 className="text-[max(6em,13vw)] font-extrabold tracking-tighter leading-none text-white/95">
          <ParallaxSlider repeat={4} baseVelocity={2}>
            <span className="pe-12 flex items-center">
              Parth Khowal
              <span className="text-cyan-400 font-light mx-6">—</span>
            </span>
          </ParallaxSlider>
        </h1>
      </div>

      {/* Dennis Snellenberg Bottom Callout Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-20 pt-4">
        
        {/* Left: Availability & Context */}
        <div className="md:col-span-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            B.Tech AI & Data Science scholar @ Galgotias University (8.89 CGPA). Solving 600+ LeetCode problems with focus on deterministic systems and production AI architectures.
          </p>
        </div>

        {/* Right: The Dennis Snellenberg Role Headline with Arrow */}
        <div className="md:col-span-6 md:text-right flex flex-col md:items-end">
          <div className="mb-3 text-cyan-400">
            <MoveDownRight size={32} strokeWidth={1.25} />
          </div>

          <h4 className="text-[clamp(1.5em,2.5vw,2.5em)] font-bold tracking-tight text-white leading-tight">
            <span className="block">Full-Stack SWE Intern</span>
            <span className="block text-slate-400 font-normal">&amp; AI Systems Builder</span>
          </h4>
        </div>

      </div>

      {/* Stat Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 z-20">
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
