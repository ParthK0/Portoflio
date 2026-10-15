import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUp,
  MapPin,
  FileText,
  ExternalLink,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#9D6BEE';
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Refs for Scroll Dynamics
  const footerRef = useRef<HTMLElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const rimPathRef = useRef<SVGPathElement>(null);

  // States
  const [copied, setCopied] = useState(false);

  // Math helpers
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // 1-Click Copy Email
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      sound.playClick(850, 0.04);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Back to top
  const scrollToTop = () => {
    sound.playBlip(750, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Animated Concave Curve Parallax on Scroll
  useEffect(() => {
    if (isContactPage) return;

    let animId: number;

    const updateCurve = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const H = window.innerHeight;
      const p = clamp((H - rect.top) / (H * 0.8), 0, 1);

      // Smooth animated concave scoop depth that breathes dynamically
      const depth = lerp(30, 75, p);
      const controlY = depth * 2;
      const pathD = `M 0 0 Q 720 ${controlY.toFixed(1)} 1440 0 L 1440 80 L 0 80 Z`;
      const rimD = `M 0 0 Q 720 ${controlY.toFixed(1)} 1440 0`;

      if (curvePathRef.current) {
        curvePathRef.current.setAttribute('d', pathD);
      }
      if (rimPathRef.current) {
        rimPathRef.current.setAttribute('d', rimD);
        rimPathRef.current.style.opacity = `${lerp(0.3, 0.8, p)}`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(updateCurve);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateCurve();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isContactPage]);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full bg-[#0a0a0c] select-none text-white z-30 flex flex-col overflow-hidden"
    >
      {/* ========================================================
          1. ANIMATED CONCAVE SCOOP TRANSITION (On non-contact pages)
         ======================================================== */}
      {!isContactPage && (
        <div className="relative w-full overflow-hidden leading-none -mb-[1px] bg-[#111111] shrink-0">
          <svg
            viewBox="0 0 1440 80"
            className="w-full h-[28px] sm:h-[40px] md:h-[50px] block transition-all duration-300"
            preserveAspectRatio="none"
          >
            {/* Concave Fill matching Footer dark surface */}
            <path
              ref={curvePathRef}
              d="M 0 0 Q 720 80 1440 0 L 1440 80 L 0 80 Z"
              fill="#0a0a0c"
            />
            {/* Animated glowing concave rim in active theme accent color */}
            <path
              ref={rimPathRef}
              d="M 0 0 Q 720 80 1440 0"
              fill="none"
              stroke={accentColor}
              strokeWidth="2.5"
              className="transition-opacity duration-300"
              style={{ opacity: 0.6 }}
            />
          </svg>
        </div>
      )}

      {/* Subtle Ambient Radial Glow in active theme accent color */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(90vw,850px)] h-[350px] pointer-events-none opacity-20 blur-[140px] transition-colors duration-500"
        style={{ backgroundColor: accentColor }}
      />

      {/* ========================================================
          2. FULL-PAGE CONTACT EXPERIENCE
          Spacious, beautifully balanced & responsive
         ======================================================== */}
      {!isContactPage && (
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 flex flex-col justify-between min-h-[calc(100vh-80px)] py-8 sm:py-12 lg:py-16 relative z-10">

          {/* Header Block: Prominent, elegant and impactful */}
          <div className="pb-6 sm:pb-8 shrink-0 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono mb-3">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accentColor }} />
                <span className="text-[#AAAAAA] uppercase tracking-wider text-[11px]">Available for Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-headline text-white leading-tight">
                Let's Build Something<span style={{ color: accentColor }}>.</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-xl leading-relaxed mt-1">
                Open for Summer 2026 SWE Internships, full-stack architectures, and AI systems.
              </p>
            </div>

            {/* Quick Resume Button */}
            <div className="shrink-0">
              <a
                href="/Parth_Khowal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(650, 0.03)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 text-white transition-all text-xs font-mono font-medium shadow-md group cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" style={{ color: accentColor }} />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* 2-Column Responsive Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch py-6 flex-1">

            {/* ── Left Column: Direct Channels (Increased Boxes for Email, GitHub, LinkedIn + Info) ── */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">

              {/* Email Card (Expanded with 1-Click Copy) */}
              <div className="flex items-stretch gap-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#131316] text-white border border-white/10 hover:border-white/30 transition-all group shadow-lg min-w-0"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-0.5">Primary Email</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:underline truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-2xl bg-[#131316] text-white hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-xs font-mono flex flex-col items-center justify-center gap-1 shrink-0 cursor-pointer min-w-[68px] shadow-lg"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/80" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Card (Increased prominent box) */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#131316] text-white border border-white/10 hover:border-white/30 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-0.5">GitHub Repository & Code</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:underline truncate">
                      github.com/ParthK0
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-[#888888] group-hover:text-white shrink-0 pr-1">
                  <span>Explore</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* LinkedIn Card (Increased prominent box) */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#131316] text-white border border-white/10 hover:border-white/30 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-0.5">LinkedIn Profile & Network</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:underline truncate">
                      linkedin.com/in/parth-khowal-a37903294
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-[#888888] group-hover:text-white shrink-0 pr-1">
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* Direct Line / WhatsApp Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-between gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#131316] text-white border border-white/10 hover:border-white/30 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-0.5">Direct Line & WhatsApp</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:underline truncate">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#888888] group-hover:text-white shrink-0 pr-1">
                  Call / Chat ↗
                </span>
              </a>

              {/* Context Fillers to eliminate dead spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/[0.06] flex items-center gap-3">
                  <Clock className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                  <div>
                    <div className="text-[10px] font-mono text-[#888888] uppercase">Response SLA</div>
                    <div className="text-xs font-semibold text-white">&lt; 24h Average Turnaround</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#101014] border border-white/[0.06] flex items-center gap-3">
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                  <div>
                    <div className="text-[10px] font-mono text-[#888888] uppercase">Location</div>
                    <div className="text-xs font-semibold text-white">Delhi NCR · Remote Worldwide</div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right Column: Adjusted Direct Message Form (Proportionate to Page Height) ── */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#131316] border border-white/10 shadow-2xl text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
                    <h3 className="text-base sm:text-lg font-bold font-headline text-white">Send a Message</h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#888888]">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    Direct Inbox
                  </span>
                </div>
                <p className="text-xs font-mono text-[#888888] mb-5">
                  Sends directly to my primary inbox. All inquiries receive guaranteed review.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                    sound.playClick(700, 0.05);
                    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                  }}
                  className="space-y-4 font-mono text-xs flex flex-col"
                >
                  {/* Name and Email Grid (Increased sizing & comfortable padding) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[#888888] uppercase tracking-wider mb-1.5 text-[10px]">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1a1a20] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-all duration-200"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = accentColor;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}18`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] uppercase tracking-wider mb-1.5 text-[10px]">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1a1a20] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-all duration-200"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = accentColor;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}18`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Message Field (Spacious & flexible height according to page) */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-[#888888] uppercase tracking-wider mb-1.5 text-[10px]">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi Parth, let's talk about..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1a1a20] border border-white/10 text-white placeholder-[#555555] text-sm focus:outline-none transition-all duration-200 resize-none min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}18`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-[#0a0a0c] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-95 active:scale-[0.99] mt-2 shrink-0"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 25px ${accentColor}40`
                    }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Bottom security pill */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#666666] flex items-center justify-between">
                <span>Encrypted client-side dispatch</span>
                <span>UTC+05:30 (IST)</span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================
          3. BOTTOM NAVIGATION & COPYRIGHT STRIP
         ======================================================== */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#888888] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <span>
              © {new Date().getFullYear()} <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong>. Built with React &amp; Tailwind CSS.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/work" className="hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/beyond" className="hover:text-white transition-colors">Beyond</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>

            <button
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer flex items-center gap-1 border border-white/10 text-[10px]"
              title="Back to Top"
            >
              <ArrowUp className="w-3 h-3" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
