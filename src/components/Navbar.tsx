import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Copyright, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-xl shadow-black/30' : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Dennis Snellenberg Interactive Brand */}
        <a href="#about" className="group flex items-center cursor-pointer select-none">
          <div className="transition-transform duration-700 ease-out group-hover:rotate-[360deg] text-slate-400 group-hover:text-cyan-400">
            <Copyright className="w-4 h-4" />
          </div>

          <div className="relative ms-2.5 flex items-center overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight transition-all duration-500 group-hover:pe-10">
            <span className="transition-transform duration-500 text-slate-400 group-hover:-translate-x-full">
              Code by
            </span>
            <span className="ps-1.5 transition-transform duration-500 text-white group-hover:-translate-x-12">
              Parth
            </span>
            <span className="absolute left-[92px] ps-1 transition-transform duration-500 text-cyan-400 group-hover:-translate-x-12">
              Khowal
            </span>
          </div>
        </a>

        {/* Center: Location & Time (Dennis Signature) */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
          <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '18s' }} />
          <span>Located in Delhi NCR, India</span>
          {time && <span className="text-slate-500">· {time}</span>}
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-white hover:bg-cyan-400 transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d111a] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Delhi NCR, India · {time}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 text-base font-medium hover:text-cyan-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};
