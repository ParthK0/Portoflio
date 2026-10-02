import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-[#111622]/90 backdrop-blur-md border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 shadow-2xl shadow-black/40">
          
          {/* Info Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                Get In Touch
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let's Build Something Together
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                I am actively seeking <strong className="text-white">Software Engineering Internships (Summer 2026)</strong> and impactful full-stack or systems engineering opportunities. Whether you have an open role, an engineering challenge, or want to discuss system architectures, my inbox is always open.
              </p>

              {/* Channels List */}
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/parth-khowal-a37903294
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/ParthK0
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Connect CTA Card (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#090b10] border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quick Connect
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Ready to talk? Send an email directly or copy the address to your clipboard.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,229,255,0.3)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8 text-xs font-mono text-slate-400 leading-relaxed">
              📍 Greater Noida / Delhi NCR, India<br />
              🌏 Open to on-site, hybrid, and remote opportunities.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
