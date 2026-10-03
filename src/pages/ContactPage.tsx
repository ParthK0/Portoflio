import React, { useEffect } from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ContactPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#b380f7';

  useEffect(() => {
    document.title = "Contact & Connect | Parth Khowal";
  }, []);

  return (
    <div className="pt-28 pb-10 bg-[#080808] text-[#FFFFFF] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Contact Page Header */}
        <div className="mb-10 border-b border-[#1c1c1c] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-4">
            <span style={{ color: accentColor }} className="font-bold">//</span>
            <span>[DIRECT TRANSMISSION // RECRUITER INBOX]</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-[#888888] text-sm sm:text-base max-w-3xl font-mono leading-relaxed">
            I am actively interviewing for Summer 2026 Software Engineering Internships and high-impact full-stack roles. Fill in the transmission console below or reach out via direct channels.
          </p>
        </div>

        {/* Quick Highlights / FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/10">
            <div className="flex items-center gap-3 mb-2 font-bold text-white font-headline">
              <Clock className="w-5 h-5" style={{ color: accentColor }} />
              <span>Response SLA</span>
            </div>
            <p className="font-mono text-xs text-[#888888]">
              All inquiries received via the transmission console below are typically answered within &lt;24 hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/10">
            <div className="flex items-center gap-3 mb-2 font-bold text-white font-headline">
              <MapPin className="w-5 h-5" style={{ color: accentColor }} />
              <span>Work Location</span>
            </div>
            <p className="font-mono text-xs text-[#888888]">
              Available for on-site roles across Delhi NCR / Bengaluru / Mumbai and remote worldwide.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f0f0f] border border-white/10">
            <div className="flex items-center gap-3 mb-2 font-bold text-white font-headline">
              <CheckCircle2 className="w-5 h-5" style={{ color: accentColor }} />
              <span>Target Roles</span>
            </div>
            <p className="font-mono text-xs text-[#888888]">
              Full-Stack Engineering (React 19 / Next.js / FastAPI / Spring Boot), Systems &amp; AI Pipelines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
