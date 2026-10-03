import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ArrowUp, 
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#b380f7';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      sound.playClick(850, 0.04);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = () => {
    sound.playBlip(750, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0d0d0d] border-t border-white/10 text-white select-none overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(90vw,900px)] h-[300px] pointer-events-none opacity-15 blur-[120px] transition-colors duration-500"
        style={{ backgroundColor: accentColor }}
      />

      {/* Main "Let's Build Something Together" Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-16 relative z-10">
        
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider uppercase text-[#AAAAAA] mb-6">
          <span 
            className="w-2 h-2 rounded-full animate-pulse" 
            style={{ backgroundColor: accentColor }}
          />
          <span>{PERSONAL_INFO.statusBadge}</span>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-white/10">
          
          {/* Left Column: Monumental Headline & Channels (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline text-[#EEECE6] leading-[1.05] mb-5">
                Let's Build Something Together<span style={{ color: accentColor }}>.</span>
              </h2>

              <p className="text-[#AAAAAA] text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-mono">
                Actively seeking <strong className="text-[#FFFFFF]">Software Engineering Internships (Summer 2026)</strong> and high-impact full-stack or AI systems engineering opportunities. Whether you have an open role, an engineering challenge, or want to discuss system architectures, my inbox is always open.
              </p>

              {/* Channels List */}
              <div className="space-y-3.5 max-w-xl">
                {/* Email Channel with 1-Click Copy */}
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/40 transition-all text-[#EEECE6] group shadow-sm"
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Email Address</div>
                      <div className="text-sm sm:text-base font-semibold text-[#FFFFFF] group-hover:underline truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white text-[#AAAAAA] hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 shrink-0 cursor-pointer h-[66px]"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Line */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/40 transition-all text-[#EEECE6] group shadow-sm"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Direct Line &amp; WhatsApp</div>
                    <div className="text-sm sm:text-base font-semibold text-[#FFFFFF] group-hover:underline">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Social Quick Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#141414] border border-white/10 hover:border-white text-[#EEECE6] transition-all text-xs font-mono font-medium shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub ↗</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#141414] border border-white/10 hover:border-white text-[#EEECE6] transition-all text-xs font-mono font-medium shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[#888888]">
              <MapPin className="w-3.5 h-3.5" style={{ color: accentColor }} />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Quick Message Form (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold font-headline text-[#EEECE6]">Send a Direct Transmission</h3>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              </div>
              <p className="text-xs font-mono text-[#888888] mb-6">
                Directly forwarded to my primary inbox with zero delay.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  sound.playClick(700, 0.05);
                  window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                }}
                className="space-y-4 font-mono text-xs"
              >
                <div>
                  <label className="block text-[#888888] uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Sarah Connor"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-colors"
                    style={{ borderColor: undefined }}
                    onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label className="block text-[#888888] uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-colors"
                    onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div>
                  <label className="block text-[#888888] uppercase tracking-wider mb-1.5">Message / Inquiry</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Parth, I'd like to discuss a role or engineering project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-colors resize-none"
                    onFocus={(e) => e.currentTarget.style.borderColor = accentColor}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-[#101010] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-90 active:scale-[0.99]"
                  style={{ 
                    backgroundColor: accentColor,
                    boxShadow: `0 0 25px ${accentColor}40`
                  }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT INQUIRY</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Navigation & Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#888888]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <span>
              © {new Date().getFullYear()} <strong className="text-[#EEECE6] font-medium">{PERSONAL_INFO.name}</strong>. Built with React 19, TypeScript &amp; Tailwind CSS.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/beyond" className="hover:text-white transition-colors">Beyond</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer flex items-center gap-1 border border-white/10"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

