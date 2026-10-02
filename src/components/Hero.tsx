import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle 3D tilt on hover
    const rotX = -(mouseY / (rect.height / 2)) * 6;
    const rotY = (mouseX / (rect.width / 2)) * 6;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#EEF4F8] text-[#0F172A] px-6 sm:px-12 lg:px-16 pt-20 select-none">
      
      {/* Background Soft Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2563EB]/8 via-[#F43F5E]/6 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#38BDF8]/10 via-[#2563EB]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Grid: Left Greeting | Right Natural 3D Pop Image */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Minimal Greeting */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#2563EB] font-bold">
              Software Engineer
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0F172A] leading-[1.05]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#172554] via-[#2563EB] to-[#F43F5E]">
                Parth Khowal
              </span>
              <span className="text-[#F43F5E]">.</span>
            </h1>
          </div>
        </div>

        {/* Right Side: Natural Cutout (No Box behind) with Smooth Hover Pop-out */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
          
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[360px] sm:max-w-[430px] flex justify-center items-end cursor-pointer group"
            style={{
              perspective: '1000px',
            }}
          >
            {/* Ambient Radial Rim Glow on Hover (No box - purely organic aura) */}
            <div 
              className={`absolute inset-x-8 bottom-8 top-12 rounded-full bg-gradient-to-tr from-[#2563EB]/25 via-[#F43F5E]/20 to-[#38BDF8]/20 blur-3xl pointer-events-none transition-all duration-700 ease-out ${
                isHovered ? 'opacity-90 scale-110' : 'opacity-30 scale-95'
              }`} 
            />

            {/* Natural Cutout with 3D Pop-out Physics */}
            <div
              className="relative w-full aspect-[3/4.4] flex items-end justify-center transition-all duration-500 ease-out"
              style={{
                transform: isHovered
                  ? `translateY(-14px) scale(1.06) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                  : 'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="/images/parth-navy.png"
                alt="Parth Khowal"
                className={`w-full h-full object-contain object-bottom transition-all duration-500 ease-out filter contrast-[1.03] ${
                  isHovered
                    ? 'drop-shadow-[0_30px_45px_rgba(15,23,42,0.35)] drop-shadow-[0_12px_15px_rgba(15,23,42,0.2)]'
                    : 'drop-shadow-[0_16px_25px_rgba(15,23,42,0.18)]'
                }`}
              />
            </div>

            {/* Subtle Minimalist Floating Tag (also pops on hover) */}
            <div
              className={`absolute -bottom-2 right-4 sm:right-8 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#D6E2EC] shadow-md flex items-center gap-2 transition-all duration-500 ease-out ${
                isHovered ? 'translate-y-[-6px] shadow-lg border-[#2563EB]/40' : 'translate-y-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#F43F5E] animate-pulse shadow-[0_0_8px_#F43F5E]"></span>
              <span className="text-xs font-mono font-semibold text-[#172554]">
                Parth Khowal
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
