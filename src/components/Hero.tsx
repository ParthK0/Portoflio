import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle 3D tilt calculation
    const rotateX = -(mouseY / (card.height / 2)) * 8;
    const rotateY = (mouseX / (card.width / 2)) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#EEF4F8] text-[#0F172A] px-6 sm:px-12 lg:px-16 pt-20 select-none">
      
      {/* Background Soft Ambience (Ice Blue & Subtle Coral glow) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2563EB]/8 via-[#F43F5E]/6 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#38BDF8]/10 via-[#2563EB]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Grid: Left Greeting | Right 3D Pop-out Stage */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Minimal High-Impact Greeting */}
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

        {/* Right Side: 3D "Out of the Frame" Cutout over Navy/Coral Screen */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative pt-20">
          
          {/* Interactive 3D Perspective Card Container */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[360px] sm:max-w-[420px] flex justify-center items-end cursor-pointer group"
            style={{
              perspective: '1000px',
            }}
          >
            {/* The Navy Blue + Coral Screen Frame (Boundary that Parth pops out of!) */}
            <div 
              className="relative w-full h-[380px] sm:h-[440px] rounded-[2.5rem] bg-gradient-to-b from-[#172554] via-[#0F172A] to-[#1E293B] shadow-[0_30px_70px_-15px_rgba(15,23,42,0.45)] ring-1 ring-white/10 overflow-hidden transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Internal Accent Lighting (Coral Pink + Vibrant Blue) */}
              <div className="absolute -top-12 -right-12 w-60 h-60 rounded-full bg-[#F43F5E]/30 blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -left-12 w-52 h-52 rounded-full bg-[#2563EB]/40 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0A0F1D] to-transparent opacity-90" />
              
              {/* Fine dot-grid matrix texture inside screen */}
              <div 
                className="absolute inset-0 opacity-[0.08]" 
                style={{ 
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />

              {/* Glowing Rim Edge at Top of Screen */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#2563EB] via-[#F43F5E] to-transparent opacity-70" />
            </div>

            {/* 3D Pop-out Cutout: Head & Shoulders extend Significantly ABOVE the Frame! */}
            <div 
              className="absolute bottom-0 w-full h-[470px] sm:h-[540px] flex items-end justify-center pointer-events-none transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${rotate.x * 0.7}deg) rotateY(${rotate.y * 0.7}deg) translateZ(40px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="/images/parth-navy.png"
                alt="Parth Khowal - 3D Pop-out Portrait"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(15,23,42,0.55)] drop-shadow-[0_10px_10px_rgba(15,23,42,0.3)] filter contrast-[1.04] brightness-100 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Floating 3D Depth Badge */}
            <div 
              className="absolute -bottom-3 -left-3 sm:-left-5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D6E2EC] shadow-xl flex items-center gap-2.5 transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${rotate.x * 0.5}deg) rotateY(${rotate.y * 0.5}deg) translateZ(60px)`,
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] animate-pulse shadow-[0_0_8px_#F43F5E]"></span>
              <span className="text-xs font-mono font-bold text-[#172554] tracking-tight">
                Parth Khowal
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
