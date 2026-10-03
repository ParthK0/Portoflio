import React from 'react';
import { Github, GitBranch, GitCommit, ExternalLink, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubActivity: React.FC = () => {
  const HIGHLIGHTED_REPOS = [
    {
      name: "ReconCraft-FinPilot",
      desc: "Deterministic financial reconciliation engine with 7-stage rule pipeline, paisa arithmetic validator, and 101 unit tests.",
      lang: "Python / FastAPI",
      branch: "main",
      commits: "100+ tests",
      color: "#9D6BEE"
    },
    {
      name: "PROBE-Agentic-Voice",
      desc: "Multi-agent conversational interview platform combining Agora RTC voice stream, Claude LLM prompt steering, and MediaPipe perception.",
      lang: "TypeScript / Next.js",
      branch: "main",
      commits: "4-Agent Pipeline",
      color: "#A87BF5"
    },
    {
      name: "AetherFace-Vector-Engine",
      desc: "Biometric attendance platform modernized from JavaFX to Spring Boot 3 with PostgreSQL pgvector HNSW indexing and WebSockets.",
      lang: "Java / Spring Boot",
      branch: "master",
      commits: "<10ms vector search",
      color: "#9D6BEE"
    },
    {
      name: "ElectIQ-Civic-Platform",
      desc: "Civic candidate intelligence web application with Express 5 rate-limited API gateway, Gemini API grounding, and Firebase Firestore.",
      lang: "TypeScript / React",
      branch: "main",
      commits: "Zod Schema Gate",
      color: "#A87BF5"
    }
  ];

  return (
    <section id="github-activity" className="py-20 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Github className="w-3.5 h-3.5 text-[#9D6BEE]" />
              Open Source & Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              GitHub Engineering Footprint
            </h2>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] text-xs font-mono font-semibold text-[#FFFFFF] hover:text-[#9D6BEE] transition-all group shadow-sm"
          >
            <span>@ParthK0 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {HIGHLIGHTED_REPOS.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/60 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors">
                    <Code className="w-4 h-4 text-[#9D6BEE]" />
                    <span className="font-mono">{repo.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A0A0A0] bg-[#181818] px-2 py-0.5 rounded border border-[#262626]">
                    <GitBranch className="w-3 h-3 text-[#9D6BEE]" />
                    <span>{repo.branch}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#262626] text-xs font-mono">
                <span className="flex items-center gap-2 text-[#E0E0E0]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.color }} />
                  {repo.lang}
                </span>
                <span className="text-[#A87BF5] bg-[#9D6BEE]/10 px-2 py-0.5 rounded border border-[#9D6BEE]/20">
                  {repo.commits}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Consistency Banner */}
        <div className="p-8 rounded-3xl bg-[#161616] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#262626] flex items-center justify-center text-[#9D6BEE] shrink-0">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF]">
                Committed to Test-Driven & Clean Code Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">
                Clean git history, semantic commit conventions, strict PR reviews, and automated CI pipelines.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#9D6BEE] hover:bg-[#A87BF5] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(157,107,238,0.35)]"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};
