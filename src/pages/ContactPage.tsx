import React, { useEffect, useState, useRef } from 'react';
import {
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
  Download,
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ExternalLink,
  Globe,
  Loader2,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2V6-xmtYfG-zcFvaz';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

export const ContactPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#b380f7';
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = "Contact & Connect | Parth Khowal";
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      sound.playClick(850, 0.04);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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

  return (
    <div className="min-h-screen bg-[#080808] text-[#FFFFFF] select-none flex flex-col">

      {/* ═══════════════════════════════════════════════════════
          AMBIENT BACKGROUND GLOW
          ═══════════════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[min(90vw,900px)] h-[350px] pointer-events-none opacity-[0.08] blur-[150px] z-0"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="fixed bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.05] blur-[130px] z-0"
        style={{ backgroundColor: accentColor }}
      />

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col pt-24 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 flex flex-col flex-1">

          {/* ── HEADER ── */}
          <div className="mb-6 pb-5 border-b border-[#1c1c1c] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline mb-2">
                GET IN TOUCH
              </h1>
              <p className="text-[#888888] text-sm max-w-xl font-mono leading-relaxed">
                Reach out via the channels below or send a direct message for engineering, systems & AI collaboration.
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
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 hover:border-white/30 text-white text-xs font-mono transition-all duration-200 cursor-pointer"
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
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/20 transition-all group shadow-lg"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-0.5">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:underline truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 rounded-2xl bg-[#111111] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/20 transition-all text-xs font-mono flex flex-col items-center justify-center gap-1 shrink-0 cursor-pointer shadow-lg min-w-[64px]"
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
                      <span className="text-[10px] text-white/60">Copy</span>
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
                  <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-0.5">Direct Line & WhatsApp</div>
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
                  <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-0.5">GitHub</div>
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
                  <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-0.5">LinkedIn</div>
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
                  <p className="font-mono text-[11px] text-[#777777] leading-snug">
                    Typically answered within &lt;24 hours.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0c0c0c] border border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4" style={{ color: accentColor }} />
                    <span className="text-xs font-bold text-white font-headline">Location</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#777777] leading-snug">
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
                <p className="text-[11px] font-mono text-[#666666] mb-5">
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
                      <label className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-1.5">Your Name</label>
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
                      <label className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-1.5">Email Address</label>
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
                    <label className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-1.5">Subject</label>
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
                    <label className="block text-[10px] font-mono text-[#666666] uppercase tracking-wider mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
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
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
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
                      <span className="text-[11px] text-rose-300/90 leading-relaxed">
                        {errorMessage}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest text-[#0a0a0a] transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.99] shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 24px ${accentColor}40`
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0a0a0a]" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Bottom status */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-[#555555]">
                  <Globe className="w-3 h-3" style={{ color: accentColor }} />
                  <span>Based in Delhi NCR · Available Worldwide</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;

