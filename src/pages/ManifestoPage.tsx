import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Pillars } from '../components/Pillars';
import { Journey } from '../components/Journey';
import { Experience } from '../components/Experience';
import { EducationCertifications } from '../components/EducationCertifications';
import { Proof } from '../components/Proof';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ManifestoPage: React.FC = () => {
  useEffect(() => {
    document.title = "The Engineering Manifesto | Parth Khowal";
  }, []);

  return (
    <div className="pt-24 pb-24 bg-[#000000] min-h-screen text-[#FFFFFF] select-none">
      
      {/* Full-Bleed Viewport Masthead */}
      <div className="w-full border-b border-[#222222] px-6 sm:px-10 lg:px-14 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--accent-primary)] inline-block" />
          <span className="text-[#AAAAAA] uppercase tracking-wider font-semibold">
            [DOCUMENT 01 // THE ENGINEERING MANIFESTO]
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>PARTH KHOWAL // SDE</span>
          <span className="text-[#333333]">|</span>
          <span>EST. 2024 — 2026</span>
          <span className="text-[#333333]">|</span>
          <span className="text-[#00F0A0]">[STATUS: RATIFIED]</span>
        </div>
      </div>

      {/* Hero: Asymmetrical Full-Bleed Manifesto Title Block */}
      <section className="border-b border-[#222222]">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          
          {/* Left Column: Monumental Headline (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#222222] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-6">
                <span className="text-[var(--accent-primary)] font-bold">//</span>
                <span>CORE DOCTRINE & PHILOSOPHICAL FRAMEWORK</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase font-headline tracking-tighter leading-[0.9] text-[#FFFFFF] mb-8">
                THE
                <br />
                ENGINEERING
                <br />
                <span className="text-[var(--accent-primary)]">MANIFESTO</span>.
              </h1>

              <p className="text-lg sm:text-xl font-sans text-[#A3A3A3] leading-relaxed max-w-xl">
                Software engineering is an empirical discipline, not creative speculation. We build systems that behave predictably under stress, reconcile transactions with zero divergence, and fail deterministically when boundary conditions are violated.
              </p>
            </div>

            {/* Micro-specs / Metadata Ledger */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#222222] mt-8 text-xs font-mono">
              <div className="p-3 border-b sm:border-b-0 sm:border-r border-[#222222] bg-[#050505]">
                <span className="text-[#666666] block text-[10px] uppercase">// PRIMARY AXIOM</span>
                <span className="text-[#FFFFFF] font-bold">DETERMINISM</span>
              </div>
              <div className="p-3 border-b sm:border-b-0 sm:border-r border-[#222222] bg-[#050505]">
                <span className="text-[#666666] block text-[10px] uppercase">// AI PARADIGM</span>
                <span className="text-[#FFFFFF] font-bold">ZERO-HALLUCINATION</span>
              </div>
              <div className="p-3 bg-[#050505]">
                <span className="text-[#666666] block text-[10px] uppercase">// TEST CRITERIA</span>
                <span className="text-[#00F0A0] font-bold">MATHEMATICAL RIGOR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Index & Dossier Summary (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-12 lg:p-16 bg-[#040404] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#1c1c1c] text-xs font-mono text-[#666666]">
                <span className="uppercase tracking-wider">[AUTHOR DOSSIER]</span>
                <span className="text-[#FFFFFF]">REF: PK-SCHOLAR-2026</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#666666] uppercase mb-1">// IDENTITY</div>
                  <div className="text-2xl font-bold uppercase font-headline text-[#FFFFFF]">{PERSONAL_INFO.name}</div>
                  <div className="text-xs font-mono text-[var(--accent-primary)] mt-1">Full-Stack Engineer & Systems Specialist</div>
                </div>

                <div className="p-4 bg-[#080808] border border-[#222222] space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#666666]">[ACADEMIC BASE]</span>
                    <span className="text-[#FFFFFF]">Galgotias University</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#666666]">[DISCIPLINE]</span>
                    <span className="text-[#FFFFFF]">B.Tech AI & Data Science</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#666666]">[MERIT RATING]</span>
                    <span className="text-[var(--accent-primary)] font-bold">8.89 CGPA</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1a1a1a] pb-2">
                    <span className="text-[#666666]">[INDUSTRY SEAT]</span>
                    <span className="text-[#FFFFFF]">MSKard Business Solutions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">[LEADERSHIP]</span>
                    <span className="text-[#FFFFFF]">IEEE CIS Treasurer</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-[#888888] leading-relaxed">
                  "Every millisecond wasted in an un-indexed query, every hallucinated token in an un-guarded LLM pipeline, and every silent failure in an asynchronous job queue is technical debt borrowed against the user's trust."
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#1c1c1c] flex items-center justify-between text-xs font-mono text-[#666666]">
              <span>SIGNED: PARTH KHOWAL</span>
              <span className="text-[#00F0A0]">VERIFIED BY CODE</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Pillars of the Manifesto: Raw Wireframe Grid */}
      <section className="border-b border-[#222222]">
        <div className="w-full px-6 sm:px-10 lg:px-14 py-12 border-b border-[#222222] bg-[#050505] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-2">
              // SECTION 02
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-headline tracking-tight">
              FOUR CORE TENETS
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#888888] max-w-lg">
            The non-negotiable architectural axioms governing all software designed, tested, and deployed under this banner.
          </p>
        </div>

        {/* 4 Tenet Wireframe Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          
          {/* Tenet 01 */}
          <div className="p-8 sm:p-12 border-b md:border-r border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1a1a1a] font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-bold">[TENET 01 // 04]</span>
              <span className="text-[#555555]">RULE: ZERO_AMBIGUITY</span>
            </div>
            <h3 className="text-2xl font-bold uppercase font-headline text-[#FFFFFF] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
              DETERMINISM OVER PROBABILITY
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              Probabilistic intelligence (LLMs, neural classifiers) is a powerful frontend capability, but it is fatal when left unguarded in the core business layer. We encapsulate every AI model inside rigid deterministic fences, mathematical schemas, and schema validation layers. If a model hallucinates, the parser rejects it before a database write ever occurs.
            </p>
            <div className="p-3 bg-[#080808] border border-[#222222] font-mono text-xs text-[#AAAAAA]">
              <span className="text-[#666666] block text-[10px]">// PRODUCTION IMPLEMENTATION:</span>
              PROBE AST guardrails & ReconCraft 99.4% deterministic financial reconciliation.
            </div>
          </div>

          {/* Tenet 02 */}
          <div className="p-8 sm:p-12 border-b border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1a1a1a] font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-bold">[TENET 02 // 04]</span>
              <span className="text-[#555555]">RULE: RESILIENT_CONCURRENCY</span>
            </div>
            <h3 className="text-2xl font-bold uppercase font-headline text-[#FFFFFF] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
              FAULT ISOLATION BY DEFAULT
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              A single service failure must never trigger a cascade. Microservices, background worker queues, and third-party APIs must be isolated via circuit breakers, idempotent message consumers, and dead-letter queues. Systems are designed to degrade gracefully rather than crash catastrophically.
            </p>
            <div className="p-3 bg-[#080808] border border-[#222222] font-mono text-xs text-[#AAAAAA]">
              <span className="text-[#666666] block text-[10px]">// PRODUCTION IMPLEMENTATION:</span>
              Shree Krishna Transport fleet dispatchers & async distributed processing.
            </div>
          </div>

          {/* Tenet 03 */}
          <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#222222] bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1a1a1a] font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-bold">[TENET 03 // 04]</span>
              <span className="text-[#555555]">RULE: ALGORITHMIC_RIGOR</span>
            </div>
            <h3 className="text-2xl font-bold uppercase font-headline text-[#FFFFFF] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
              ALGORITHMIC DISCIPLINE AS REFLEX
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              Algorithmic mastery is not an interview hurdle; it is the fundamental tool for reasoning about time and space complexity under production loads. Knowing whether an operation runs in O(N log N) vs O(N²) is the exact difference between a sub-50ms user query and a database lockup.
            </p>
            <div className="p-3 bg-[#080808] border border-[#222222] font-mono text-xs text-[#AAAAAA]">
              <span className="text-[#666666] block text-[10px]">// PRODUCTION IMPLEMENTATION:</span>
              600+ solved problems across LeetCode, GeeksforGeeks, and competitive platforms.
            </div>
          </div>

          {/* Tenet 04 */}
          <div className="p-8 sm:p-12 bg-[#000000] hover:bg-[#060606] transition-colors group">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1a1a1a] font-mono text-xs">
              <span className="text-[var(--accent-primary)] font-bold">[TENET 04 // 04]</span>
              <span className="text-[#555555]">RULE: RAW_STRUCTURE</span>
            </div>
            <h3 className="text-2xl font-bold uppercase font-headline text-[#FFFFFF] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
              RAW STRUCTURE & EDITORIAL HONESTY
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
              No gratuitous fluff or deceptive design. We lay the structural grid bare: wireframe containers, explicit dividing borders, readable typography, and instant tactile state changes. The user interface directly reflects the rigorous discipline of the underlying codebase.
            </p>
            <div className="p-3 bg-[#080808] border border-[#222222] font-mono text-xs text-[#AAAAAA]">
              <span className="text-[#666666] block text-[10px]">// PRODUCTION IMPLEMENTATION:</span>
              Digital Brutalist architectural design system & full-bleed responsive interface.
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Pillars (Imported Directly) */}
      <Pillars />

      {/* Evolution Timeline (The Journey) */}
      <Journey />

      {/* Industry Field Experience */}
      <Experience />

      {/* Academics & Certifications */}
      <EducationCertifications />

      {/* Quantified Proof Metrics */}
      <Proof />

      {/* Full-Bleed Manifesto Footer CTA */}
      <section className="w-full border-t border-[#222222] px-6 sm:px-10 lg:px-14 py-16 bg-[#050505]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-[11px] font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-2">
              // RATIFICATION & COLLABORATION
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase font-headline text-[#FFFFFF]">
              READY TO PUT THIS MANIFESTO TO WORK?
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-2xl">
              Currently available for Software Engineering Internships (Summer 2026) and impactful engineering roles worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs font-bold uppercase shrink-0">
            <Link
              to="/work"
              className="px-6 py-3.5 bg-[#FFFFFF] text-[#000000] border border-[#FFFFFF] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:text-[#000000] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>INSPECT ARTIFACTS [WORK]</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#000000] text-[#FFFFFF] border border-[#333333] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>TRANSMIT INQUIRY</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManifestoPage;
