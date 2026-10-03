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
        <div className="mb-14 border-b border-[#1c1c1c] pb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-4">
            <span className="text-[var(--accent-primary)] font-bold">//</span>
            <span>[BEYOND // LEADERSHIP & ALGORITHMS]</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline mb-4">
            ALGORITHMS & LEADERSHIP
          </h1>
          <p className="text-[#888888] text-sm sm:text-base max-w-3xl font-mono leading-relaxed">
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-16">
        <div className="p-8 sm:p-12 bg-[#080808] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-1">
              // COLLABORATION
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] uppercase font-headline mb-1">
              INTERESTED IN COLLABORATING OR HIRING?
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] font-mono max-w-xl">
              Available for full-stack engineering, production systems, and AI product roles worldwide.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-[#FFFFFF] text-[#000000] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] border border-[#FFFFFF] font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>TRANSMIT INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
