import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Copyright, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>('');
  const location = useLocation();

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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Beyond', path: '/beyond', badge: 'More About Me' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-xl shadow-black/40' : 'bg-[#111111]/40 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Dennis Snellenberg Interactive Brand with Violet Branding Dot */}
        <Link to="/" className="group flex items-center cursor-pointer select-none">
          {/* Site Branding Dot */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#9D6BEE] shadow-[0_0_12px_#9D6BEE] inline-block me-2.5 transition-transform duration-300 group-hover:scale-125" />

          <div className="transition-transform duration-700 ease-out group-hover:rotate-[360deg] text-[#A0A0A0] group-hover:text-[#9D6BEE]">
            <Copyright className="w-4 h-4" />
          </div>

          <div className="relative ms-2.5 flex items-center overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight transition-all duration-500 group-hover:pe-10">
            <span className="transition-transform duration-500 text-[#A0A0A0] group-hover:-translate-x-full">
              Code by
            </span>
            <span className="ps-1.5 transition-transform duration-500 text-[#FFFFFF] group-hover:-translate-x-12">
              Parth
            </span>
            <span className="absolute left-[92px] ps-1 transition-transform duration-500 text-[#9D6BEE] group-hover:-translate-x-12">
              Khowal
            </span>
          </div>
        </Link>

        {/* Center: Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#161616]/90 border border-[#262626] shadow-inner">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#FFFFFF] bg-[#1F1F1F] border border-[#9D6BEE]/40 shadow-[0_0_12px_rgba(157,107,238,0.25)]'
                    : 'text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE] shadow-[0_0_6px_#9D6BEE]" />
                  )}
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Location/Time & Let's Talk CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A0A0A0]">
            <Globe className="w-3.5 h-3.5 text-[#9D6BEE] animate-spin" style={{ animationDuration: '18s' }} />
            <span>Delhi NCR</span>
            {time && <span className="text-[#707070] font-medium">· {time}</span>}
          </div>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full text-xs font-semibold text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] hover:bg-[#9D6BEE] hover:text-[#111111] transition-all flex items-center gap-1.5 shadow-sm hover:shadow-[0_0_20px_rgba(157,107,238,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#E0E0E0] hover:text-[#9D6BEE] p-2 cursor-pointer transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#262626] px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-[#A0A0A0] pb-3 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#9D6BEE]" />
              <span>Delhi NCR, India</span>
            </div>
            {time && <span>{time}</span>}
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1.5 pt-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-[#FFFFFF] bg-[#1F1F1F] border border-[#9D6BEE]/40'
                      : 'text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#181818]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#9D6BEE]" />}
                      <span>{item.name}</span>
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9D6BEE]/10 text-[#A87BF5] border border-[#9D6BEE]/25">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Socials & Talk CTA */}
          <div className="pt-3 border-t border-[#262626] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-[#9D6BEE] py-1 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-[#9D6BEE] py-1 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            <Link
              to="/contact"
              className="w-full text-center py-2.5 rounded-full bg-[#9D6BEE] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_16px_rgba(157,107,238,0.35)]"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
