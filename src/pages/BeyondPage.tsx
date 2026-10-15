import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Leadership } from '../components/Leadership';
import { LeetCodeStats } from '../components/LeetCodeStats';
import { GitHubActivity } from '../components/GitHubActivity';
import { Proof } from '../components/Proof';
import { Architecture } from '../components/Architecture';

export const BeyondPage: React.FC = () => {
  useEffect(() => {
    document.title = "Beyond Code | Leadership, LeetCode & Open Source | Parth Khowal";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-[#000000] min-h-screen text-[#FFFFFF] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Page Hero Header */}
        <div className="mb-12 border-b border-[#1c1c1c] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
            <span>Beyond the Code</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight font-headline mb-4">
            Algorithms &amp; Leadership
          </h1>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-3xl leading-relaxed">
            The foundation behind my engineering work: student leadership as IEEE CIS Treasurer, 600+ algorithmic problems mastered, open-source repositories, and architectural decision frameworks.
          </p>
        </div>

      </div>

      {/* 1. Leadership Section */}
      <Leadership />

      {/* 2. LeetCode & Competitive Programming */}
      <LeetCodeStats />

      {/* 3. GitHub & Open Source Activity */}
      <GitHubActivity />

      {/* 4. Quantified Metrics & Proof */}
      <Proof />

      {/* 5. Architectural Decisions Framework */}
      <Architecture />

      {/* Bottom Contact CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-14">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0e0e0e] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
              <span>Collaboration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] font-headline mb-1.5">
              Interested in Collaborating or Hiring?
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl leading-relaxed">
              Available for full-stack engineering, production systems, and AI product roles worldwide.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#FFFFFF] text-[#000000] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] border border-[#FFFFFF] font-semibold text-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
