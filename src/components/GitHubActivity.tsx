import React, { useState, useEffect } from 'react';
import { Github, GitBranch, GitCommit, ExternalLink, Code, Star, Flame, BookOpen, Users, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { fetchGitHubStats, GitHubData, DEFAULT_GITHUB_DATA } from '../services/statsService';

export const GitHubActivity: React.FC = () => {
  const [gitData, setGitData] = useState<GitHubData>(DEFAULT_GITHUB_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [streakImgError, setStreakImgError] = useState<boolean>(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const username = PERSONAL_INFO.githubUsername || "ParthK0";
      const data = await fetchGitHubStats(username);
      setGitData(data);
    } catch (err) {
      console.warn("Failed to load dynamic GitHub data, using baseline:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const CORE_PROJECT_REPOS = [
    {
      name: "Knotic (PROBE)",
      desc: "Multi-agent conversational interview platform combining Agora RTC voice streams, Claude LLM prompt steering, and MediaPipe perception.",
      lang: "TypeScript",
      branch: "main",
      commits: "Agora RTC + LLM",
      url: "https://github.com/jatingarg850/Knotic.git",
      color: "#3178C6"
    },
    {
      name: "FaceRecognitionJavaFX",
      desc: "Biometric attendance platform modernized to Spring Boot 3 with PostgreSQL pgvector HNSW indexing, WebSockets, and OpenCV.",
      lang: "Java",
      branch: "master",
      commits: "<10ms vector search",
      url: "https://github.com/ParthK0/FaceRecognitionJavaFX",
      color: "#B07219"
    },
    {
      name: "election (ElectIQ)",
      desc: "Civic candidate intelligence application with Express 5 rate-limited gateway, Gemini API grounding, and Firebase Firestore.",
      lang: "TypeScript",
      branch: "main",
      commits: "Zod Schema Gate",
      url: "https://github.com/ParthK0/election",
      color: "#3178C6"
    },
    {
      name: "Quantacraft",
      desc: "Multi-factor financial modeling engine with automated DCF valuations, Monte Carlo simulations, and risk-adjusted metrics.",
      lang: "Python",
      branch: "main",
      commits: "Algorithmic Finance",
      url: "https://github.com/ParthK0/Quantacraft",
      color: "#3572A5"
    }
  ];

  return (
    <section id="github-activity" className="py-20 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider">
                <Github className="w-3.5 h-3.5 text-[#9D6BEE]" />
                Open Source &amp; Repositories
              </div>

              {/* Dynamic Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Sync • @{gitData.username}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              GitHub Engineering Footprint
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={isLoading}
              title="Refresh live GitHub stats"
              className="p-2.5 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-[#A0A0A0] hover:text-[#FFFFFF] transition-all flex items-center justify-center disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-[#9D6BEE]" : ""}`} />
            </button>

            <a
              href={gitData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] text-xs font-mono font-semibold text-[#FFFFFF] hover:text-[#9D6BEE] transition-all group shadow-sm"
            >
              <span>@{gitData.username} on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Live GitHub Metrics & Streak Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Quick Metrics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="p-6 rounded-3xl bg-[#161616] border border-[#262626] shadow-xl shadow-black/60">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={gitData.avatarUrl}
                  alt={gitData.name}
                  className="w-14 h-14 rounded-2xl border-2 border-[#9D6BEE]/40 object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#FFFFFF]">{gitData.name}</h3>
                  <p className="text-xs font-mono text-[#A87BF5]">@{gitData.username}</p>
                  <p className="text-xs text-[#A0A0A0] mt-1 line-clamp-2">{gitData.bio}</p>
                </div>
              </div>

              {/* GitHub Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#262626]">
                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#A0A0A0] font-mono mb-1">
                    <BookOpen className="w-3 h-3 text-[#9D6BEE]" />
                    <span>Repos</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">{gitData.publicRepos}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#A0A0A0] font-mono mb-1">
                    <Users className="w-3 h-3 text-[#A87BF5]" />
                    <span>Followers</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">{gitData.followers}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#A0A0A0] font-mono mb-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>Stars</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">{gitData.totalStars}+</div>
                </div>
              </div>
            </div>

            {/* Top Languages Badge */}
            <div className="p-5 rounded-2xl bg-[#161616] border border-[#262626]">
              <div className="text-xs font-mono uppercase text-[#A0A0A0] mb-3">Primary Tech Stack across Git</div>
              <div className="flex flex-wrap gap-2">
                {gitData.topLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#181818] border border-[#262626] text-xs font-mono text-[#E0E0E0] flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#9D6BEE]" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Real Live Streak Card Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center p-6 rounded-3xl bg-[#161616] border border-[#262626] shadow-xl shadow-black/60 overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-mono font-semibold text-[#FFFFFF] uppercase tracking-wider">
                  Live GitHub Contribution Streak
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Direct Sync
              </span>
            </div>

            <div className="w-full overflow-x-auto flex justify-center py-2">
              {!streakImgError ? (
                <img
                  src={gitData.streakCardUrl}
                  alt="GitHub Contribution Streak"
                  className="w-full max-w-xl h-auto rounded-xl border border-[#222222] shadow-lg"
                  loading="lazy"
                  onError={() => setStreakImgError(true)}
                />
              ) : (
                <div className="w-full max-w-xl p-6 rounded-xl bg-[#181818] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div>
                    <div className="text-sm font-bold text-white mb-1">
                      Consistent Open-Source &amp; Full-Stack Commits
                    </div>
                    <div className="text-xs text-[#A0A0A0]">
                      Active across {gitData.publicRepos} public repositories with TypeScript, Python, and Java.
                    </div>
                  </div>
                  <a
                    href={gitData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-[#111111] text-xs font-semibold uppercase tracking-wider shrink-0 hover:bg-white transition-colors"
                  >
                    View Commit Graph ↗
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Repositories Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#FFFFFF] tracking-tight">
            Flagship Engineering Repositories
          </h3>
          <span className="text-xs font-mono text-[#A0A0A0]">Production Tested</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CORE_PROJECT_REPOS.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
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
                <span className="text-[#A87BF5] bg-[#9D6BEE]/10 px-2 py-0.5 rounded border border-[#9D6BEE]/20 flex items-center gap-1 group-hover:text-[#FFFFFF]">
                  <span>{repo.commits}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </a>
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
                Committed to Test-Driven &amp; Clean Code Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#A0A0A0]">
                Clean git history, semantic commit conventions, strict PR reviews, and automated CI pipelines.
              </p>
            </div>
          </div>

          <a
            href={gitData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#9D6BEE] hover:bg-[#A87BF5] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(157,107,238,0.35)]"
          >
            <Github className="w-4 h-4" />
            <span>Follow @{gitData.username}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
