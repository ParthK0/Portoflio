import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MoveDownRight } from 'lucide-react';
import { ParallaxSlider } from './ParallaxSlider';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-between pt-24 pb-6 overflow-hidden bg-[#090b10] text-slate-100 select-none">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Two-Column Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        
        {/* Left Column: Story, Title, Actions, Metrics (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-6 lg:pt-0">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">deterministic software</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">AI systems</span>.
          </h1>

          {/* Bio / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            B.Tech AI & Data Science scholar @ Galgotias University (<strong className="text-white font-semibold">8.89 CGPA</strong>). Full-Stack Developer Intern @ <strong className="text-white font-semibold">MSKard</strong>. <strong className="text-white font-semibold">600+ LeetCode</strong> problems solved. Specializing in resilient backends, zero-tolerance financial precision, and production web engineering.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold text-xs hover:from-cyan-300 hover:to-cyan-400 transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(0,229,255,0.35)]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-xs transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Key Metrics Strip (Dennis Minimalist Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 max-w-2xl">
            {PERSONAL_INFO.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#111622]/70 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <div className={`text-xl lg:text-2xl font-extrabold font-mono mb-0.5 ${
                  stat.highlight === 'cyan' ? 'text-cyan-400' :
                  stat.highlight === 'emerald' ? 'text-emerald-400' :
                  stat.highlight === 'violet' ? 'text-purple-400' : 'text-slate-100'
                }`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Professional Cutout Photo (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
          <div className="relative group w-full max-w-sm sm:max-w-md flex justify-center items-end">
            
            {/* Ambient Lighting Ring behind photo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/10 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 pointer-events-none" />

            {/* Cutout Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex items-end justify-center overflow-visible">
              <img
                src="/images/hero-cutout.png"
                alt="Parth Khowal - Professional Cutout"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Dennis-Style Role Tag */}
              <div className="absolute bottom-4 -left-2 sm:-left-4 p-3.5 rounded-2xl bg-[#0e121b]/90 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MoveDownRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Parth Khowal</div>
                  <div className="text-[11px] font-mono text-slate-400">Full-Stack SWE & AI Builder</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Monumental Velocity Parallax Slider (Dennis Snellenberg Signature) */}
      <div className="relative w-full overflow-hidden select-none z-10 pt-4 pb-2 border-t border-white/10 bg-[#090b10]/95">
        <h2 className="text-[max(4.5em,9vw)] font-extrabold tracking-tighter leading-none text-white/90">
          <ParallaxSlider repeat={4} baseVelocity={2}>
            <span className="pe-12 flex items-center">
              Parth Khowal
              <span className="text-cyan-400 font-light mx-6">—</span>
              <span className="text-slate-400 font-bold">Software Engineer</span>
              <span className="text-purple-400 font-light mx-6">—</span>
              <span className="text-white">Deterministic AI</span>
              <span className="text-emerald-400 font-light mx-6">—</span>
            </span>
          </ParallaxSlider>
        </h2>
      </div>

    </section>
  );
};
