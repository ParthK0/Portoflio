import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MoveDownRight } from 'lucide-react';
import { ParallaxSlider } from './ParallaxSlider';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-between pt-24 pb-6 overflow-hidden bg-[#f4f5f7] text-[#141516] select-none">
      
      {/* Background Ambient Soft Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-400/10 via-indigo-300/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-sky-400/10 via-teal-300/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Two-Column Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        
        {/* Left Column: Story, Title, Actions, Metrics (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-6 lg:pt-0">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-medium w-fit shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141516] leading-[1.08]">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">software systems</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">deterministic AI</span>.
          </h1>

          {/* Bio / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            B.Tech AI & Data Science scholar @ Galgotias University (<strong className="text-slate-900 font-semibold">8.89 CGPA</strong>). Full-Stack Developer Intern @ <strong className="text-slate-900 font-semibold">MSKard</strong>. <strong className="text-slate-900 font-semibold">600+ LeetCode</strong> problems solved. Specializing in resilient backends, zero-tolerance financial precision, and production web engineering.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3.5 rounded-full bg-[#141516] text-white font-bold text-xs hover:bg-blue-600 transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-all flex items-center gap-2 shadow-xs hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Key Metrics Strip (Dennis Minimalist Cards in Light Theme) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 max-w-2xl">
            {PERSONAL_INFO.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-400/50 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <div className={`text-xl lg:text-2xl font-extrabold font-mono mb-0.5 ${
                  stat.highlight === 'cyan' ? 'text-blue-600' :
                  stat.highlight === 'emerald' ? 'text-emerald-600' :
                  stat.highlight === 'violet' ? 'text-indigo-600' : 'text-slate-900'
                }`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Hero1 Cutout Photo (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
          <div className="relative group w-full max-w-sm sm:max-w-md flex justify-center items-end">
            
            {/* Soft Ambient Studio Lighting behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-indigo-300/10 to-teal-400/10 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

            {/* Cutout Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[3/4] flex items-end justify-center overflow-visible">
              <img
                src="/images/hero1.png"
                alt="Parth Khowal - Software Engineer Cutout"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Dennis-Style Role Tag */}
              <div className="absolute bottom-4 -left-2 sm:-left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <MoveDownRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Parth Khowal</div>
                  <div className="text-[11px] font-mono text-slate-500">Full-Stack SWE & AI Builder</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Monumental Velocity Parallax Slider (Dennis Snellenberg Light Theme) */}
      <div className="relative w-full overflow-hidden select-none z-10 pt-4 pb-2 border-t border-slate-200/80 bg-[#f4f5f7]/95">
        <h2 className="text-[max(4.5em,9vw)] font-extrabold tracking-tighter leading-none text-slate-900/90">
          <ParallaxSlider repeat={4} baseVelocity={2}>
            <span className="pe-12 flex items-center">
              Parth Khowal
              <span className="text-blue-600 font-light mx-6">—</span>
              <span className="text-slate-400 font-bold">Software Engineer</span>
              <span className="text-indigo-600 font-light mx-6">—</span>
              <span className="text-slate-900">Deterministic AI</span>
              <span className="text-emerald-600 font-light mx-6">—</span>
            </span>
          </ParallaxSlider>
        </h2>
      </div>

    </section>
  );
};
