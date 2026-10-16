import React, { useState, useEffect } from 'react';
import { Terminal, Trophy, Award, Flame, Target, CheckCircle2, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { fetchLeetCodeStats, LeetCodeData, DEFAULT_LEETCODE_DATA } from '../services/statsService';

export const LeetCodeStats: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeData>(DEFAULT_LEETCODE_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showCardEmbed, setShowCardEmbed] = useState<boolean>(false);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const username = PERSONAL_INFO.leetcodeUsername || "pk1662005";
      const data = await fetchLeetCodeStats(username);
      setStats(data);
    } catch (err) {
      console.warn("Failed to load dynamic LeetCode data, fallback active:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const TOPICS = [
    { name: "Dynamic Programming", count: "120+", pct: 90 },
    { name: "Binary Trees & BST", count: "95+", pct: 85 },
    { name: "Graphs & Traversals (BFS/DFS)", count: "85+", pct: 80 },
    { name: "Arrays & Two Pointers", count: "140+", pct: 95 },
    { name: "Heap & Priority Queues", count: "45+", pct: 75 },
    { name: "Binary Search & Bit Manipulation", count: "70+", pct: 82 },
  ];

  const profileUrl = PERSONAL_INFO.leetcode || "https://leetcode.com/u/pk1662005/";

  // Calculate difficulty percentage distributions based on Parth's live counts
  const total = stats.totalSolved || 697;
  const easyPct = Math.round((stats.easySolved / total) * 100);
  const medPct = Math.round((stats.mediumSolved / total) * 100);
  const hardPct = Math.round((stats.hardSolved / total) * 100);

  return (
    <section id="leetcode" className="py-20 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-[#9D6BEE]" />
                Algorithmic Problem Solving
              </div>

              {/* Dynamic Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Sync • @{stats.username}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              LeetCode &amp; Competitive Programming
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={loadStats}
              disabled={isLoading}
              title="Refresh live LeetCode stats"
              className="p-2.5 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-[#A0A0A0] hover:text-[#FFFFFF] transition-all flex items-center justify-center disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-[#9D6BEE]" : ""}`} />
            </button>

            <button
              onClick={() => setShowCardEmbed(!showCardEmbed)}
              className="px-4 py-2 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/40 text-xs font-mono text-[#A0A0A0] hover:text-[#FFFFFF] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9D6BEE]" />
              <span>{showCardEmbed ? "Show Native Cards" : "View LeetCode Card"}</span>
            </button>

            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] text-xs font-mono font-semibold text-[#FFFFFF] hover:text-[#9D6BEE] transition-all group shadow-sm"
            >
              <span>View Profile (@{stats.username})</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Optional Visual Card Embed */}
        {showCardEmbed && (
          <div className="mb-8 p-6 rounded-3xl bg-[#161616] border border-[#9D6BEE]/30 shadow-2xl flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#262626]">
              <img
                src={`https://leetcard.jacoblin.cool/${stats.username}?theme=dark&font=Inter`}
                alt="LeetCode Stats Card"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Main Stats Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Hero Numbers (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Rating & Solved */}
            <div className="p-8 rounded-3xl bg-[#161616] border border-[#262626] relative overflow-hidden group hover:border-[#9D6BEE]/40 transition-all shadow-xl shadow-black/60">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#9D6BEE]/10 rounded-full blur-[70px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#A87BF5] px-2.5 py-1 rounded bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 uppercase font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{stats.streak}+ Day Streak</span>
                </span>
                <Trophy className="w-6 h-6 text-[#9D6BEE]" />
              </div>

              <div className="mb-6">
                <div className="text-5xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight mb-1 flex items-baseline gap-2">
                  <span>{stats.totalSolved}</span>
                  <span className="text-3xl text-[#9D6BEE] font-bold">+</span>
                </div>
                <div className="text-sm font-semibold text-[#A0A0A0]">
                  Problems Mastered Across Core Topics
                </div>
              </div>

              {/* Contest Rating & Consistency */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#262626]">
                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0] font-mono mb-1">
                    <Award className="w-3.5 h-3.5 text-[#9D6BEE]" />
                    <span>Contest Rating</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">~{stats.contestRating}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#181818] border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0] font-mono mb-1">
                    <Target className="w-3.5 h-3.5 text-[#A87BF5]" />
                    <span>Global Rank</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFFFFF]">#{stats.ranking.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Difficulty Breakdown with Real Counts */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#161616] border border-[#262626] shadow-xl shadow-black/60">
              <div className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider mb-4 flex items-center justify-between">
                <span>Live Difficulty Distribution</span>
                <span className="text-[11px] text-[#A87BF5] font-mono">{stats.totalActiveDays} Active Days</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A0A0A0]">Easy (Foundations)</span>
                    <span className="text-[#FFFFFF] font-bold">{stats.easySolved} solved ({easyPct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#181818] overflow-hidden border border-[#262626]">
                    <div className="h-full bg-emerald-400 rounded-full transition-all duration-700" style={{ width: `${easyPct}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A87BF5] font-semibold">Medium (Core Interviews)</span>
                    <span className="text-[#FFFFFF] font-bold">{stats.mediumSolved} solved ({medPct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#181818] overflow-hidden border border-[#262626]">
                    <div className="h-full bg-[#9D6BEE] rounded-full shadow-[0_0_8px_#9D6BEE] transition-all duration-700" style={{ width: `${medPct}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A0A0A0]">Hard (Optimization)</span>
                    <span className="text-[#FFFFFF] font-bold">{stats.hardSolved} solved ({hardPct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#181818] overflow-hidden border border-[#262626]">
                    <div className="h-full bg-rose-400/90 rounded-full transition-all duration-700" style={{ width: `${hardPct}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* International Maths Olympiad Honor */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#181818] to-[#1A1624] border border-[#9D6BEE]/30 shadow-xl shadow-black/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9D6BEE]/15 border border-[#9D6BEE]/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_12px_rgba(157,107,238,0.2)]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-[#A87BF5] font-semibold">International Honor</div>
                <div className="text-sm font-bold text-[#FFFFFF]">Maths Olympiad Bronze Medallist</div>
                <div className="text-xs text-[#A0A0A0] mt-0.5">Competitive quantitative proof &amp; discrete math</div>
              </div>
            </div>
          </div>

          {/* Core Problem-Solving Categories (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#161616] border border-[#262626] flex flex-col justify-between shadow-xl shadow-black/60">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#262626]">
                <h3 className="text-xl font-bold text-[#FFFFFF] tracking-tight">
                  High-Frequency Algorithmic Patterns
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]">
                  Deep Focus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {TOPICS.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#FFFFFF]">{topic.name}</span>
                      <span className="text-[11px] font-mono text-[#A87BF5] bg-[#9D6BEE]/10 px-2 py-0.5 rounded">
                        {topic.count}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#111111] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#9D6BEE] to-[#A87BF5] rounded-full"
                        style={{ width: `${topic.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#111111] border border-[#262626] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9D6BEE] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  Algorithmic discipline directly informs my production engineering: zero floating-point errors via integer Paisa validators, <code className="text-[#A87BF5]">O(log N)</code> vector retrieval in pgvector, and deterministic sub-second data streaming.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#A0A0A0]">
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Active Streak: {stats.streak}+ Days</span>
              </span>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A87BF5] hover:text-[#FFFFFF] inline-flex items-center gap-1 transition-colors"
              >
                <span>leetcode.com/u/{stats.username}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
