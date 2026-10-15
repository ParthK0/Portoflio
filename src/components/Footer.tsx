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
  ArrowUpRight,
  Download,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Globe
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2V6-xmtYfG-zcFvaz';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

export const Footer: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#9D6BEE';
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Refs for Scroll Dynamics
  const footerRef = useRef<HTMLElement>(null);
  const curvePathRef = useRef<SVGPathElement>(null);
  const rimPathRef = useRef<SVGPathElement>(null);

  // States & Form Ref
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Math helpers
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // 1-Click Copy Email
  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
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

  // EmailJS Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    sound.playClick(700, 0.05);

    const form = formRef.current;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const subject = ((form.elements.namedItem('subject') as HTMLInputElement)?.value || '').trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatus('error');
      setErrorMessage('EmailJS Service ID and Template ID are required. Please configure them in your .env file.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const templateParams = {
        name,
        from_name: name,
        email,
        from_email: email,
        reply_to: email,
        subject,
        message: subject ? `[Subject: ${subject}]\n\n${message}` : message,
        to_name: PERSONAL_INFO.name,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.reset();
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    } catch (err: unknown) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      const errText = err && typeof err === 'object' && 'text' in err
        ? String((err as { text: unknown }).text)
        : 'Failed to send message. Please try again.';
      setErrorMessage(errText);
    }
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
          Matches ContactPage in layout, alignment and design
         ======================================================== */}
      {!isContactPage && (
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 flex flex-col justify-between py-6 sm:py-10 relative z-10">

          {/* ── HEADER ── */}
          <div className="mb-6 pb-5 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span>Contact &amp; Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight font-headline mb-2">
                Get in Touch
              </h2>
              <p className="text-[#A0A0A0] text-sm max-w-xl leading-relaxed">
                Reach out via the channels below or send a direct message for engineering, systems &amp; AI collaboration.
              </p>
            </div>

            {/* Quick Resume Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <a
                href="/Parth_Khowal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(600, 0.04)}
                className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer"
                style={{ boxShadow: `0 0 20px ${accentColor}35` }}
              >
                <FileText className="w-4 h-4 text-black group-hover:rotate-6 transition-transform" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/Parth_Khowal_Resume.pdf"
                download="Parth_Khowal_Resume.pdf"
                onClick={() => sound.playClick(750, 0.04)}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 hover:border-white/30 text-white text-xs font-medium transition-all duration-200 cursor-pointer"
                title="Download PDF directly"
              >
                <Download className="w-4 h-4" style={{ color: accentColor }} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              TWO-COLUMN LAYOUT: CHANNELS + FORM
              ═══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1">

            {/* ── LEFT COLUMN: Direct Channels (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col gap-3">

              {/* Email Card — Full width, prominent */}
              <div className="flex items-stretch gap-2.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/20 transition-all group shadow-lg min-w-0"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-[#888888] mb-0.5">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:underline truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 rounded-2xl bg-[#111111] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/20 transition-all text-xs flex flex-col items-center justify-center gap-1 shrink-0 cursor-pointer shadow-lg min-w-[64px]"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-[10px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/60" />
                      <span className="text-[10px] text-white/60 font-medium">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/20 transition-all group shadow-lg"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#888888] mb-0.5">Direct Line &amp; WhatsApp</div>
                  <div className="text-sm font-semibold text-white group-hover:underline">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              {/* GitHub Card — Expanded */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/20 transition-all group shadow-lg"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                >
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-[#888888] mb-0.5">GitHub</div>
                  <div className="text-sm font-semibold text-white group-hover:underline truncate">
                    github.com/ParthK0
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
              </a>

              {/* LinkedIn Card — Expanded */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/20 transition-all group shadow-lg"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                >
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-[#888888] mb-0.5">LinkedIn</div>
                  <div className="text-sm font-semibold text-white group-hover:underline truncate">
                    linkedin.com/in/parth-khowal
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
              </a>

              {/* Quick Info Strip */}
              <div className="grid grid-cols-2 gap-2.5 mt-auto">
                <div className="p-3.5 rounded-xl bg-[#0c0c0c] border border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock className="w-4 h-4" style={{ color: accentColor }} />
                    <span className="text-xs font-bold text-white font-headline">Response SLA</span>
                  </div>
                  <p className="text-xs text-[#888888] leading-snug">
                    Typically answered within &lt;24 hours.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0c0c0c] border border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4" style={{ color: accentColor }} />
                    <span className="text-xs font-bold text-white font-headline">Location</span>
                  </div>
                  <p className="text-xs text-[#888888] leading-snug">
                    Delhi NCR · Open to Remote Worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Contact Form (7 cols) ── */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex-1 p-5 sm:p-7 rounded-2xl bg-[#0e0e0e] border border-white/[0.07] shadow-xl flex flex-col">

                {/* Form Header */}
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold font-headline text-white">Send a Message</h3>
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
                <p className="text-xs text-[#888888] mb-5">
                  Dispatched directly to my primary inbox. All fields are required.
                </p>

                {/* Form */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col flex-1 gap-4"
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#A0A0A0] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={status === 'sending'}
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-3 rounded-xl bg-[#151515] border border-white/[0.08] text-white placeholder-[#444444] text-sm focus:outline-none transition-all duration-200 disabled:opacity-50"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = accentColor;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}15`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#A0A0A0] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={status === 'sending'}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#151515] border border-white/[0.08] text-white placeholder-[#444444] text-sm focus:outline-none transition-all duration-200 disabled:opacity-50"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = accentColor;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}15`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject line */}
                  <div>
                    <label className="block text-xs font-medium text-[#A0A0A0] mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      disabled={status === 'sending'}
                      placeholder="Project collaboration, opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#151515] border border-white/[0.08] text-white placeholder-[#444444] text-sm focus:outline-none transition-all duration-200 disabled:opacity-50"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}15`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex-1 flex flex-col">
                    <label className="block text-xs font-medium text-[#A0A0A0] mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      disabled={status === 'sending'}
                      placeholder="Hi Parth, I'd like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#151515] border border-white/[0.08] text-white placeholder-[#444444] text-sm focus:outline-none transition-all duration-200 resize-none flex-1 min-h-[140px] disabled:opacity-50"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${accentColor}15`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Status Feedback */}
                  {status === 'success' && (
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Message sent successfully! I'll get back to you shortly.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span className="font-semibold">Unable to send message</span>
                      </div>
                      <span className="text-xs text-rose-300/90 leading-relaxed">
                        {errorMessage}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide text-[#0a0a0a] transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.99] shrink-0 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 25px ${accentColor}35`
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0a0a0a]" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0a0a0a]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Bottom security pill */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-[#666666]">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Encrypted dispatch via EmailJS</span>
                  </span>
                  <span>UTC+05:30 (IST)</span>
                </div>
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
