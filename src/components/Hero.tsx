import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotX = -(mouseY / (rect.height / 2)) * 6;
    const rotY = (mouseX / (rect.width / 2)) * 6;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111] text-[#E0E0E0] px-6 sm:px-12 lg:px-16 pt-24 pb-16 select-none">
      
      {/* Background Soft Ambience & Violet Rim Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#9D6BEE]/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#A87BF5]/8 blur-[150px] pointer-events-none -z-10" />

      {/* Main Grid: Left Greeting & Story | Right Monochrome Image with 3D Depth */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Minimal Greeting & Core Focus (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-6">
            
            {/* Status Badge with Glowing Violet Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#9D6BEE] shadow-[0_0_10px_#9D6BEE] animate-pulse" />
              <span className="text-[#A87BF5] font-semibold">{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#9D6BEE] font-bold block mb-2">
                Software Engineer & Production Builder
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#FFFFFF] leading-[1.05]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E0E0E0] to-[#9D6BEE]">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[#9D6BEE]">.</span>
              </h1>
            </div>

            {/* Subheading in Theme Spec */}
            <div className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#A87BF5] font-semibold flex items-center gap-2">
              <span>Strategy</span>
              <span className="text-[#707070]">·</span>
              <span>Concept</span>
              <span className="text-[#707070]">·</span>
              <span>Design & Engineering</span>
            </div>

            {/* Bio summary */}
            <p className="text-[#A0A0A0] text-sm sm:text-base max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PERSONAL_INFO.heroStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#FFFFFF] mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#A0A0A0] font-mono leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/work"
                className="px-7 py-3.5 rounded-full bg-[#9D6BEE] hover:bg-[#A87BF5] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_24px_rgba(157,107,238,0.4)] hover:scale-105 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider transition-all hover:bg-[#1F1F1F] cursor-pointer"
              >
                Let's Talk
              </Link>
            </div>

          </div>
        </div>

        {/* Right Side: Moody Monochrome Cutout with 3D Parallax & Violet Rim (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
          
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[360px] sm:max-w-[430px] flex justify-center items-end cursor-pointer group"
            style={{
              perspective: '1000px',
            }}
          >
            {/* Abstract Geometric Violet Shape Behind */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#9D6BEE]/20 via-transparent to-[#A87BF5]/15 blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            {/* Image Container with 3D Tilt */}
            <div
              className="relative w-full transition-transform duration-300 ease-out"
              style={{
                transform: isHovered
                  ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.03)`
                  : 'rotateX(0deg) rotateY(0deg) scale(1)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Monochrome Cutout Image with High-Contrast Filter and Gradient Mask */}
              <img
                src="/images/new.png"
                alt="Parth Khowal portrait"
                className="w-full h-auto object-contain filter grayscale contrast-125 brightness-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
              />

              {/* Floating Badge (Bottom-left) */}
              <div className="absolute bottom-6 left-2 sm:left-4 p-3 rounded-2xl bg-[#161616]/90 backdrop-blur-md border border-[#9D6BEE]/30 shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#9D6BEE]/20 flex items-center justify-center text-[#9D6BEE]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#A87BF5] font-semibold">B.Tech AI & Data Science</div>
                  <div className="text-xs font-bold text-[#FFFFFF]">Galgotias University · 8.89 CGPA</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
