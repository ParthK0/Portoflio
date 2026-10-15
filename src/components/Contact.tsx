import React, { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2V6-xmtYfG-zcFvaz';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    // Check if Service ID and Template ID have been provided
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
        message,
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
        : 'Failed to send message. Please try again or email directly.';
      setErrorMessage(errText);
    }
  };

  return (
    <section id="contact" className="py-14 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-6 shadow-2xl shadow-black/80">
          
          {/* Info Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]"></span>
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-2">
                Let's Build Something Together
              </h2>

              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
                Building high-impact full-stack software and AI systems. Whether you have an engineering challenge or want to discuss system architectures, my inbox is always open.
              </p>

              {/* Channels List */}
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 hover:bg-[#1F1F1F] transition-all text-[#E0E0E0] group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#9D6BEE]/10 flex items-center justify-center text-[#9D6BEE] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#A0A0A0] uppercase">Email</div>
                    <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#9D6BEE] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 hover:bg-[#1F1F1F] transition-all text-[#E0E0E0] group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#9D6BEE]/10 flex items-center justify-center text-[#A87BF5] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#A0A0A0] uppercase">Direct Line</div>
                    <div className="text-sm font-semibold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-[#E0E0E0] hover:text-[#FFFFFF] transition-all text-xs font-mono font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-[#E0E0E0] hover:text-[#FFFFFF] transition-all text-xs font-mono font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-[#A0A0A0] hover:text-[#FFFFFF] transition-all text-xs font-mono cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#262626] flex items-center gap-2 text-xs font-mono text-[#707070]">
              <span className="w-2 h-2 rounded-full bg-[#9D6BEE]"></span>
              <span>Based in Delhi NCR · Available Worldwide</span>
            </div>
          </div>

          {/* Quick Message Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#111111] p-5 sm:p-6 rounded-2xl border border-[#262626]">
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">Send a Message</h3>
            <p className="text-xs text-[#A0A0A0] mb-4">Directly reaches my inbox in real-time.</p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-[#A0A0A0] uppercase mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={status === 'sending'}
                  placeholder="Sarah Connor"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-[#FFFFFF] placeholder-[#707070] text-sm focus:outline-none focus:border-[#9D6BEE] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A0A0A0] uppercase mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === 'sending'}
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-[#FFFFFF] placeholder-[#707070] text-sm focus:outline-none focus:border-[#9D6BEE] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A0A0A0] uppercase mb-1.5">Message / Inquiry</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  disabled={status === 'sending'}
                  placeholder="Hi Parth, I'd like to discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-[#FFFFFF] placeholder-[#707070] text-sm focus:outline-none focus:border-[#9D6BEE] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {/* Status Notifications */}
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

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl bg-[#9D6BEE] hover:bg-[#A87BF5] disabled:bg-[#9D6BEE]/60 text-[#111111] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(157,107,238,0.35)] cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

