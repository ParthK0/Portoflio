import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Copyright, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>('');
  const { currentTheme } = useTheme();

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

  const isHome = location.pathname === '/';
  const showNav = !isHome || isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showNav ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
    } ${
      isScrolled ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-xl shadow-black/40' : 'bg-[#111111]/40 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Dennis Snellenberg Interactive Brand with Solid Branding Dot */}
        <Link to="/" className="group flex items-center cursor-pointer select-none">
          {/* Site Solid Branding Dot */}
          <span
            className="w-2.5 h-2.5 rounded-full inline-block me-2.5 transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: currentTheme.primary }}
          />

          <div className="transition-transform duration-700 ease-out group-hover:rotate-[360deg] text-[#A0A0A0] group-hover:text-[var(--accent-primary)]">
            <Copyright className="w-4 h-4" />
          </div>

          <div className="relative ms-2.5 flex items-center overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight transition-all duration-500 group-hover:pe-10">
            <span className="transition-transform duration-500 text-[#A0A0A0] group-hover:-translate-x-full">
              Code by
            </span>
            <span className="ps-1.5 transition-transform duration-500 text-[#FFFFFF] group-hover:-translate-x-12">
              Parth
            </span>
            <span className="absolute left-[92px] ps-1 transition-transform duration-500 text-[var(--accent-primary)] group-hover:-translate-x-12">
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
                    ? 'text-[#FFFFFF] bg-[#1F1F1F] border border-[var(--accent-border)]'
                    : 'text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#181818]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: currentTheme.primary }}
                    />
                  )}
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Location/Time & Let's Talk CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A0A0A0]">
            <Globe className="w-3.5 h-3.5 text-[var(--accent-primary)] animate-spin" style={{ animationDuration: '18s' }} />
            <span>Delhi NCR</span>
            {time && <span className="text-[#707070] font-medium">· {time}</span>}
          </div>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full text-xs font-semibold text-[#FFFFFF] bg-[#181818] border border-[#262626] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[#111111] transition-all flex items-center gap-1.5 shadow-sm hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#E0E0E0] hover:text-[var(--accent-primary)] p-2 cursor-pointer transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#262626] px-6 py-6 flex flex-col gap-4 shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-[#A0A0A0] pb-3 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
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
                      ? 'text-[#FFFFFF] bg-[#1F1F1F] border border-[var(--accent-border)]'
                      : 'text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#181818]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      {isActive && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: currentTheme.primary }}
                        />
                      )}
                      <span>{item.name}</span>
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent-light)] border border-[var(--accent-border-subtle)]">
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
                className="text-[#A0A0A0] hover:text-[var(--accent-primary)] py-1 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A0A0] hover:text-[var(--accent-primary)] py-1 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            <Link
              to="/contact"
              className="w-full text-center py-2.5 rounded-full bg-[var(--accent-primary)] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
