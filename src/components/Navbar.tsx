import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Copyright, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] py-4 shadow-xs' : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Dennis Snellenberg Interactive Brand */}
        <a href="#about" className="group flex items-center cursor-pointer select-none">
          <div className="transition-transform duration-700 ease-out group-hover:rotate-[360deg] text-[#172554] group-hover:text-[#F43F5E]">
            <Copyright className="w-4 h-4" />
          </div>

          <div className="relative ms-2.5 flex items-center overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight transition-all duration-500 group-hover:pe-10">
            <span className="transition-transform duration-500 text-slate-500 group-hover:-translate-x-full">
              Code by
            </span>
            <span className="ps-1.5 transition-transform duration-500 text-[#0F172A] group-hover:-translate-x-12">
              Parth
            </span>
            <span className="absolute left-[92px] ps-1 transition-transform duration-500 text-[#2563EB] group-hover:-translate-x-12">
              Khowal
            </span>
          </div>
        </a>

        {/* Center: Location & Time (Dennis Signature) */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#0F172A]/80">
          <Globe className="w-3.5 h-3.5 text-[#2563EB] animate-spin" style={{ animationDuration: '18s' }} />
          <span>Located in Delhi NCR, India</span>
          {time && <span className="text-slate-400">· {time}</span>}
        </div>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors relative py-1 group"
          >
            <span>GitHub ↗</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F43F5E] group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors relative py-1 group"
          >
            <span>LinkedIn ↗</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F43F5E] group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#172554] hover:bg-[#2563EB] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FFE4E6]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#0F172A] hover:text-[#2563EB] p-2 cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0F172A] pb-2 border-b border-[#E2E8F0]">
            <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Delhi NCR, India · {time}</span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] text-sm font-semibold hover:text-[#2563EB] py-1"
            >
              GitHub Profile ↗
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] text-sm font-semibold hover:text-[#2563EB] py-1"
            >
              LinkedIn Profile ↗
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-[#172554] text-white font-semibold text-sm hover:bg-[#2563EB] transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
