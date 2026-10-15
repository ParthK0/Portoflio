import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Experience } from '../components/Experience';
import { EducationCertifications } from '../components/EducationCertifications';
import { Leadership } from '../components/Leadership';
import { LeetCodeStats } from '../components/LeetCodeStats';
import { GitHubActivity } from '../components/GitHubActivity';
import { Architecture } from '../components/Architecture';
import { Proof } from '../components/Proof';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Me | Parth Khowal";
  }, []);

  return (
    <div className="pt-24 pb-24 bg-[#000000] min-h-screen text-[#FFFFFF] select-none">
      
      {/* Full-Bleed Viewport Masthead */}
      <div className="w-full border-b border-[#222222] px-6 sm:px-10 lg:px-14 py-3 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#888888]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] inline-block" />
          <span className="text-[#CCCCCC] font-medium">
            About Me · Engineering Philosophy &amp; Background
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>Parth Khowal · Software Engineer</span>
          <span className="text-[#333333]">|</span>
          <span>Delhi NCR · Available Worldwide</span>
        </div>
      </div>

      {/* Hero: About Me & Engineering Philosophy Title Block */}
      <section className="border-b border-[#222222]">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          
          {/* Left Column: Headline (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#222222] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                <span>About Me &amp; Philosophy</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight leading-[1] text-[#FFFFFF] mb-6">
                The Engineering
                <br />
                <span className="text-[var(--accent-primary)]">Philosophy</span>.
              </h1>

              <p className="text-base sm:text-lg font-sans text-[#A3A3A3] leading-relaxed max-w-xl">
                Software engineering is an empirical discipline, not creative speculation. We build systems that behave predictably under stress, reconcile transactions with zero divergence, and fail deterministically when boundary conditions are violated.
              </p>
            </div>

            {/* Micro-specs / Metadata Ledger */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#222222] rounded-2xl overflow-hidden mt-8 text-xs font-sans">
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#222222] bg-[#0c0c0c]">
                <span className="text-[#888888] block text-[11px] mb-1 font-medium">Primary Axiom</span>
                <span className="text-[#FFFFFF] font-bold">Determinism</span>
              </div>
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#222222] bg-[#0c0c0c]">
                <span className="text-[#888888] block text-[11px] mb-1 font-medium">AI Architecture</span>
                <span className="text-[#FFFFFF] font-bold">Zero-Hallucination</span>
              </div>
              <div className="p-4 bg-[#0c0c0c]">
                <span className="text-[#888888] block text-[11px] mb-1 font-medium">Quality Benchmark</span>
                <span className="text-[#00F0A0] font-bold">Mathematical Rigor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Summary (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-12 lg:p-16 bg-[#040404] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#1c1c1c] text-xs font-sans text-[#888888]">
                <span className="font-medium text-[#CCCCCC]">Profile Summary</span>
                <span className="text-[#888888]">Galgotias University '26</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-sans text-[#888888] mb-1 font-medium">Engineer</div>
                  <div className="text-2xl font-bold font-headline text-[#FFFFFF]">{PERSONAL_INFO.name}</div>
                  <div className="text-xs font-medium text-[var(--accent-primary)] mt-1">Full-Stack Engineer &amp; Systems Specialist</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-[#222222] space-y-3 font-sans text-xs">
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#888888]">University</span>
                    <span className="text-[#FFFFFF]">Galgotias University</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#888888]">Degree</span>
                    <span className="text-[#FFFFFF]">B.Tech AI &amp; Data Science</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#888888]">Academic Standing</span>
                    <span className="text-[var(--accent-primary)] font-bold">8.89 CGPA</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#888888]">Experience</span>
                    <span className="text-[#FFFFFF]">MSKard Business Solutions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888888]">Leadership</span>
                    <span className="text-[#FFFFFF]">IEEE CIS Treasurer</span>
                  </div>
                </div>

                <p className="text-xs font-sans text-[#999999] leading-relaxed italic">
                  "Every millisecond wasted in an un-indexed query, every hallucinated token in an un-guarded LLM pipeline, and every silent failure in an asynchronous job queue is technical debt borrowed against the user's trust."
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-sans text-[#888888]">
              <span>Parth Khowal</span>
              <span className="text-[#00F0A0] font-medium">Verified Systems</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Pillars of the Manifesto */}
      <section className="border-b border-[#222222]">
        <div className="w-full px-6 sm:px-10 lg:px-14 py-10 border-b border-[#222222] bg-[#050505] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight">
              Four Core Engineering Tenets
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#999999] max-w-lg leading-relaxed font-sans">
            The architectural principles governing all software designed, tested, and deployed across my systems.
          </p>
        </div>

        {/* 4 Tenet Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          
          {/* Tenet 01 */}
          <div className="p-8 sm:p-12 border-b md:border-r border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1a1a1a] text-xs font-sans">
              <span className="text-[var(--accent-primary)] font-semibold">Principle 01</span>
              <span className="text-[#888888]">Determinism</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#FFFFFF] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
              Determinism Over Probability
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              Probabilistic intelligence (LLMs, neural classifiers) is a powerful frontend capability, but it is fatal when left unguarded in the core business layer. We encapsulate every AI model inside rigid deterministic fences, mathematical schemas, and schema validation layers. If a model hallucinates, the parser rejects it before a database write ever occurs.
            </p>
            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] text-xs font-sans text-[#CCCCCC]">
              <span className="text-[#888888] block text-[11px] mb-1 font-medium">Production Implementation:</span>
              PROBE AST guardrails &amp; ReconCraft 99.4% deterministic financial reconciliation.
            </div>
          </div>

          {/* Tenet 02 */}
          <div className="p-8 sm:p-12 border-b border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1a1a1a] text-xs font-sans">
              <span className="text-[var(--accent-primary)] font-semibold">Principle 02</span>
              <span className="text-[#888888]">Resilience</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#FFFFFF] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
              Fault Isolation by Default
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              A single service failure must never trigger a cascade. Microservices, background worker queues, and third-party APIs must be isolated via circuit breakers, idempotent message consumers, and dead-letter queues. Systems are designed to degrade gracefully rather than crash catastrophically.
            </p>
            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] text-xs font-sans text-[#CCCCCC]">
              <span className="text-[#888888] block text-[11px] mb-1 font-medium">Production Implementation:</span>
              Shree Krishna Transport fleet dispatchers &amp; async distributed processing.
            </div>
          </div>

          {/* Tenet 03 */}
          <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1a1a1a] text-xs font-sans">
              <span className="text-[var(--accent-primary)] font-semibold">Principle 03</span>
              <span className="text-[#888888]">Algorithms</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#FFFFFF] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
              Algorithmic Discipline as a Reflex
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              Algorithmic mastery is not an interview hurdle; it is the fundamental tool for reasoning about time and space complexity under production loads. Knowing whether an operation runs in O(N log N) vs O(N²) is the exact difference between a sub-50ms user query and a database lockup.
            </p>
            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] text-xs font-sans text-[#CCCCCC]">
              <span className="text-[#888888] block text-[11px] mb-1 font-medium">Production Implementation:</span>
              600+ solved problems across LeetCode, GeeksforGeeks, and competitive platforms.
            </div>
          </div>

          {/* Tenet 04 */}
          <div className="p-8 sm:p-12 bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1a1a1a] text-xs font-sans">
              <span className="text-[var(--accent-primary)] font-semibold">Principle 04</span>
              <span className="text-[#888888]">Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#FFFFFF] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
              Clean Structure &amp; Direct Clarity
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              No gratuitous fluff or deceptive design. We lay the structural grid bare: clean containers, explicit dividing borders, readable typography, and instant tactile state changes. The user interface directly reflects the rigorous discipline of the underlying codebase.
            </p>
            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#222222] text-xs font-sans text-[#CCCCCC]">
              <span className="text-[#888888] block text-[11px] mb-1 font-medium">Production Implementation:</span>
              Minimalist architectural design system with full responsive interfaces.
            </div>
          </div>

        </div>
      </section>

      {/* 1. Industry Field Experience */}
      <Experience />

      {/* 2. Academics & Certifications */}
      <EducationCertifications />

      {/* 3. Leadership & Campus Impact */}
      <Leadership />

      {/* 4. LeetCode & Competitive Programming */}
      <LeetCodeStats />

      {/* 5. GitHub & Open Source Activity */}
      <GitHubActivity />

      {/* 6. Architectural Decisions Framework */}
      <Architecture />

      {/* 7. Quantified Proof Metrics */}
      <Proof />

      {/* Bottom Collaboration CTA */}
      <section className="w-full border-t border-[#222222] px-6 sm:px-10 lg:px-14 py-14 bg-[#050505]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-[#A87BF5] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
              <span>Collaboration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-headline text-[#FFFFFF]">
              Ready to Put These Principles to Work?
            </h3>
            <p className="text-xs sm:text-sm text-[#999999] mt-2 max-w-2xl leading-relaxed font-sans">
              Currently available for Software Engineering Internships (Summer 2026) and high-impact engineering roles worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 text-xs font-semibold shrink-0">
            <Link
              to="/work"
              className="px-6 py-3.5 rounded-xl bg-[#FFFFFF] text-[#000000] border border-[#FFFFFF] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:text-[#000000] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#141414] text-[#FFFFFF] border border-[#2c2c2c] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
