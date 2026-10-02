import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC] text-[#0F172A] px-6 sm:px-12 lg:px-16 pt-24 select-none">
      
      {/* Background Soft Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2563EB]/5 via-[#F43F5E]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Main Grid: Left (Hi, I'm Parth Khowal) | Right (Cutout + Navy/Coral Screen) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Clean minimal greeting */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#2563EB] font-semibold">
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

        {/* Right Side: Cutout with Navy Blue + Coral/Pink Screen Backdrop */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] flex justify-center items-end">
            
            {/* The Screen Backdrop (Navy Blue + Coral/Rose gradient frame) */}
            <div className="absolute inset-x-4 bottom-0 top-12 rounded-[2.5rem] bg-gradient-to-b from-[#172554] via-[#0F172A] to-[#1E293B] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] overflow-hidden -z-10">
              {/* Vibrant Accent Color Splash inside screen (Coral/Pink + Blue) */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#F43F5E]/30 blur-3xl" />
              <div className="absolute top-1/2 -left-12 w-48 h-48 rounded-full bg-[#2563EB]/35 blur-3xl" />
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
              
              {/* Subtle tech grid line texture inside screen */}
              <div 
                className="absolute inset-0 opacity-[0.07]" 
                style={{ 
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />
            </div>

            {/* Parth Khowal Cutout Photo (Overlaying screen with bottom natural crop) */}
            <div className="relative w-full aspect-[3/4.2] flex items-end justify-center overflow-visible z-10 pt-4">
              <img
                src="/images/parth-navy.png"
                alt="Parth Khowal"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(15,23,42,0.4)] filter contrast-[1.03] hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
