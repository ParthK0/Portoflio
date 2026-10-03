import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  skills: {
    name: string;
    level: string;
    note?: string;
  }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: Code2,
    description: "Core programming languages utilized across algorithmic problem solving, computer vision, and production backends.",
    skills: [
      { name: "TypeScript / JS", level: "Production", note: "Strict types, Zod schemas, API contracts" },
      { name: "Python", level: "Production", note: "FastAPI, Pydantic, Pandas, deterministic engines" },
      { name: "Java (Java 21)", level: "Advanced", note: "Spring Boot 3, OOP architecture, concurrency" },
      { name: "C & C++", level: "Advanced", note: "DSA mastery, LeetCode (600+ problems)" },
      { name: "SQL", level: "Advanced", note: "PostgreSQL, MySQL, pgvector, relational indexing" },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Systems",
    icon: Layers,
    description: "High-performance reactive interfaces with sub-second paint times and fluid motion aesthetics.",
    skills: [
      { name: "React 19", level: "Production", note: "Concurrent features, hooks, component architecture" },
      { name: "Next.js 16", level: "Production", note: "App Router, SSR, API routes, edge caching" },
      { name: "Tailwind CSS v4", level: "Production", note: "Modern utility systems, responsive design" },
      { name: "Framer Motion", level: "Advanced", note: "Smooth micro-interactions & physics animations" },
      { name: "Vite", level: "Production", note: "Lightning-fast build tooling and HMR" },
      { name: "Three.js / R3F", level: "Intermediate", note: "3D avatar rendering & ARKit visemes" },
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: Server,
    description: "Resilient server architectures, type-safe API gateways, and real-time streaming services.",
    skills: [
      { name: "FastAPI", level: "Production", note: "Python microservices, automated OpenAPI docs" },
      { name: "Spring Boot 3", level: "Advanced", note: "Enterprise Java 21 backends, WebSockets" },
      { name: "Node.js / Express 5", level: "Production", note: "Secure proxy gateways, rate-limiting, Helmet" },
      { name: "WebSocket / STOMP", level: "Production", note: "Low-latency bidirectional push (<50ms)" },
      { name: "Prisma & SQLAlchemy", level: "Production", note: "Type-safe ORM migrations and data modeling" },
      { name: "Zod Schema Validation", level: "Production", note: "Runtime type safety and payload sanitization" },
    ]
  },
  {
    id: "cv-ml",
    name: "Computer Vision & ML",
    icon: Cpu,
    description: "Facial landmark tracking, face descriptors, biometric embeddings, and computer vision pipelines.",
    skills: [
      { name: "OpenCV", level: "Production", note: "Image processing, feature mapping, camera feeds" },
      { name: "FaceNet & LBPH", level: "Production", note: "Facial recognition, embedding generation" },
      { name: "MediaPipe Vision", level: "Production", note: "In-browser iris & head-pose tracking (<16ms)" },
      { name: "Scikit-learn", level: "Advanced", note: "Supervised classification, clustering, regression" },
      { name: "SSD MobileNet", level: "Production", note: "TensorFlow.js in-browser real-time face detection" },
    ]
  },
  {
    id: "ai-data",
    name: "AI & Real-Time Voice",
    icon: Sparkles,
    description: "Multi-agent systems, deterministic guardrails, vector search, and low-latency voice pipelines.",
    skills: [
      { name: "PostgreSQL + pgvector", level: "Production", note: "HNSW similarity indexing (<1.5ms queries)" },
      { name: "Redis & MongoDB", level: "Production", note: "In-memory session state, caching, sub-millisecond turns" },
      { name: "Claude & Gemini APIs", level: "Production", note: "Prompt steering, structured JSON, guardrails" },
      { name: "Agora RTC/RTM", level: "Production", note: "Ultra-low latency real-time voice streaming" },
      { name: "Murf & Cartesia TTS", level: "Production", note: "Distinct interviewer personas & speech synthesis" },
      { name: "JobSpy & Firecrawl", level: "Production", note: "Automated live listing parsing and web scraping" },
    ]
  },
  {
    id: "devops-testing",
    name: "DevOps & Engineering Discipline",
    icon: Terminal,
    description: "Mathematical precision, deterministic validators, and automated testing suites.",
    skills: [
      { name: "Docker Compose", level: "Production", note: "Multi-container orchestration and deployment" },
      { name: "Pytest (101 Tests)", level: "Production", note: "Automated regression testing, 79% coverage" },
      { name: "Vitest & Playwright", level: "Production", note: "E2E testing & 100% WCAG accessibility audits" },
      { name: "GitHub Actions CI/CD", level: "Advanced", note: "Automated test, lint, and build pipelines" },
      { name: "Paisa Validator", level: "Architected", note: "Zero floating-point drift deterministic engine" },
      { name: "AES-256-GCM", level: "Security", note: "Cryptographic protection of biometric vectors" },
    ]
  }
];

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories = activeTab === "all" 
    ? TECH_CATEGORIES 
    : TECH_CATEGORIES.filter(c => c.id === activeTab);

  return (
    <section id="tech-stack" className="py-24 relative bg-[#111111] overflow-hidden">
      {/* Background Violet Glow Accents */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-[#9D6BEE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-[#9D6BEE]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9D6BEE]/10 border border-[#9D6BEE]/25 text-[#A87BF5] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9D6BEE]" />
              Engineering Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              Tech Stack & Core Capabilities
            </h2>
          </div>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-xl leading-relaxed">
            From deterministic Python financial math to real-time voice pipelines in Next.js and sub-10ms pgvector retrieval in Spring Boot.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all cursor-pointer border ${
              activeTab === "all"
                ? "bg-[#9D6BEE] text-[#111111] border-[#9D6BEE] shadow-[0_0_16px_rgba(157,107,238,0.35)]"
                : "bg-[#181818] text-[#A0A0A0] border-[#262626] hover:text-[#FFFFFF] hover:border-[#383838]"
            }`}
          >
            All Disciplines
          </button>
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all cursor-pointer border flex items-center gap-2 ${
                  isActive
                    ? "bg-[#9D6BEE] text-[#111111] border-[#9D6BEE] shadow-[0_0_16px_rgba(157,107,238,0.35)]"
                    : "bg-[#181818] text-[#A0A0A0] border-[#262626] hover:text-[#FFFFFF] hover:border-[#383838]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#111111]" : "text-[#9D6BEE]"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-[#161616] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#9D6BEE]/40 transition-all duration-300 group shadow-xl shadow-black/40 hover:-translate-y-1"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#262626]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center text-[#9D6BEE] group-hover:scale-110 group-hover:border-[#9D6BEE]/40 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#A87BF5] transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#383838] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-[#FFFFFF] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE]" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-[#A87BF5] border border-[#9D6BEE]/20 font-medium">
                            {skill.level}
                          </span>
                        </div>
                        {skill.note && (
                          <div className="text-[11px] text-[#A0A0A0] font-sans ps-3">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#707070] font-mono">
                  <span>Verified in Production</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9D6BEE]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
