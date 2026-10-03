import { 
  Code2, 
  Layers, 
  Server, 
  Cpu, 
  Sparkles, 
  Terminal,
  type LucideIcon
} from 'lucide-react';
import { PROJECTS } from './portfolioData';
import type { Project } from '../types';

export interface OrbitalTechSkill {
  name: string;
  level: 'Production' | 'Advanced' | 'Intermediate' | 'Architected' | 'Security';
  note?: string;
  role: string;
  symbol: string;
  usedIn: {
    id: string;
    title: string;
    tagline: string;
  }[];
}

export interface OrbitalCategory {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  description: string;
  ringColor: string;
  orbitRadius: number;       // Desktop radius in px
  orbitDuration: number;     // Seconds for 360 deg
  orbitDirection: 'cw' | 'ccw';
  skills: OrbitalTechSkill[];
}

// Helper to cross-reference technologies in PROJECTS
function findProjectsForTech(techName: string): { id: string; title: string; tagline: string }[] {
  const normName = techName.toLowerCase();
  
  return PROJECTS.filter((p: Project) => {
    // Direct matches in technologies array
    const hasInTechs = p.technologies.some((t: string) => {
      const normT = t.toLowerCase();
      return normT.includes(normName) || normName.includes(normT);
    });

    if (hasInTechs) return true;

    // Specific smart mappings for compound skill names
    if (normName.includes("typescript") && p.technologies.some((t: string) => t.toLowerCase().includes("typescript"))) return true;
    if (normName.includes("python") && p.technologies.some((t: string) => t.toLowerCase().includes("python"))) return true;
    if (normName.includes("java") && p.technologies.some((t: string) => t.toLowerCase().includes("java") || t.toLowerCase().includes("spring boot"))) return true;
    if (normName.includes("react") && p.technologies.some((t: string) => t.toLowerCase().includes("react"))) return true;
    if (normName.includes("next.js") && p.technologies.some((t: string) => t.toLowerCase().includes("next"))) return true;
    if (normName.includes("tailwind") && p.technologies.some((t: string) => t.toLowerCase().includes("tailwind"))) return true;
    if (normName.includes("fastapi") && p.technologies.some((t: string) => t.toLowerCase().includes("fastapi"))) return true;
    if (normName.includes("spring boot") && p.technologies.some((t: string) => t.toLowerCase().includes("spring boot"))) return true;
    if (normName.includes("opencv") && (p.id === 'aetherface' || p.description.toLowerCase().includes("face") || p.description.toLowerCase().includes("vision"))) return true;
    if (normName.includes("facenet") && p.id === 'aetherface') return true;
    if (normName.includes("mediapipe") && (p.id === 'probe' || p.id === 'aetherface')) return true;
    if (normName.includes("pgvector") && (p.id === 'aetherface' || p.id === 'reconcraft')) return true;
    if (normName.includes("claude") && p.id === 'probe') return true;
    if (normName.includes("gemini") && p.id === 'electiq') return true;
    if (normName.includes("agora") && p.id === 'probe') return true;
    if (normName.includes("murf") && p.id === 'probe') return true;
    if (normName.includes("redis") && p.id === 'probe') return true;
    if (normName.includes("docker") && (p.id === 'reconcraft' || p.id === 'aetherface')) return true;
    if (normName.includes("paisa") && p.id === 'reconcraft') return true;
    if (normName.includes("aes-256") && p.id === 'aetherface') return true;
    if (normName.includes("websocket") && (p.id === 'aetherface' || p.id === 'probe')) return true;
    if (normName.includes("zod") && (p.id === 'electiq' || p.id === 'skt')) return true;
    if (normName.includes("playwright") && p.id === 'electiq') return true;
    if (normName.includes("pytest") && p.id === 'reconcraft') return true;
    if (normName.includes("vite") && (p.id === 'skt' || p.id === 'electiq')) return true;

    return false;
  }).map(p => ({
    id: p.id,
    title: p.title,
    tagline: p.tagline
  }));
}

// Generate the 6 orbital rings
export const ORBITAL_CATEGORIES: OrbitalCategory[] = [
  {
    id: "languages",
    name: "Languages",
    shortName: "Languages",
    icon: Code2,
    description: "Core programming languages utilized across algorithmic problem solving, computer vision, and production backends.",
    ringColor: "#A78BFA", // soft violet
    orbitRadius: 140,
    orbitDuration: 32,
    orbitDirection: "cw",
    skills: [
      { 
        name: "TypeScript / JS", 
        level: "Production", 
        note: "Strict types, Zod schemas, API contracts",
        role: "Type-safe full-stack application logic",
        symbol: "TS",
        usedIn: findProjectsForTech("TypeScript")
      },
      { 
        name: "Python", 
        level: "Production", 
        note: "FastAPI, Pydantic, Pandas, deterministic engines",
        role: "Financial reconciliation & AI microservices",
        symbol: "PY",
        usedIn: findProjectsForTech("Python")
      },
      { 
        name: "Java (Java 21)", 
        level: "Advanced", 
        note: "Spring Boot 3, OOP architecture, concurrency",
        role: "Enterprise biometric backend & WebSockets",
        symbol: "JV",
        usedIn: findProjectsForTech("Java")
      },
      { 
        name: "C & C++", 
        level: "Advanced", 
        note: "DSA mastery, LeetCode (600+ problems)",
        role: "Algorithmic foundation & memory efficiency",
        symbol: "C++",
        usedIn: findProjectsForTech("C++")
      },
      { 
        name: "SQL", 
        level: "Advanced", 
        note: "PostgreSQL, MySQL, pgvector, relational indexing",
        role: "Relational persistence and vector indexing",
        symbol: "SQL",
        usedIn: findProjectsForTech("PostgreSQL")
      },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Systems",
    shortName: "Frontend",
    icon: Layers,
    description: "High-performance reactive interfaces with sub-second paint times and fluid motion aesthetics.",
    ringColor: "#38BDF8", // sky blue
    orbitRadius: 200,
    orbitDuration: 38,
    orbitDirection: "ccw",
    skills: [
      { 
        name: "React 19", 
        level: "Production", 
        note: "Concurrent features, hooks, component architecture",
        role: "Reactive UI state and component systems",
        symbol: "RE",
        usedIn: findProjectsForTech("React 19")
      },
      { 
        name: "Next.js 16", 
        level: "Production", 
        note: "App Router, SSR, API routes, edge caching",
        role: "Production web architectures and SEO",
        symbol: "NX",
        usedIn: findProjectsForTech("Next.js")
      },
      { 
        name: "Tailwind CSS v4", 
        level: "Production", 
        note: "Modern utility systems, responsive design",
        role: "Rapid, zero-runtime responsive design",
        symbol: "TW",
        usedIn: findProjectsForTech("Tailwind")
      },
      { 
        name: "Framer Motion", 
        level: "Advanced", 
        note: "Smooth micro-interactions & physics animations",
        role: "Physics-grounded UI micro-interactions",
        symbol: "FM",
        usedIn: findProjectsForTech("Framer Motion")
      },
      { 
        name: "Vite", 
        level: "Production", 
        note: "Lightning-fast build tooling and HMR",
        role: "Modern client-side build pipelines",
        symbol: "VT",
        usedIn: findProjectsForTech("Vite")
      },
      { 
        name: "Three.js / R3F", 
        level: "Intermediate", 
        note: "3D avatar rendering & ARKit visemes",
        role: "Interactive 3D visualization & WebGL",
        symbol: "3D",
        usedIn: findProjectsForTech("Three.js")
      },
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    shortName: "Backend",
    icon: Server,
    description: "Resilient server architectures, type-safe API gateways, and real-time streaming services.",
    ringColor: "#34D399", // emerald
    orbitRadius: 260,
    orbitDuration: 44,
    orbitDirection: "cw",
    skills: [
      { 
        name: "FastAPI", 
        level: "Production", 
        note: "Python microservices, automated OpenAPI docs",
        role: "High-throughput asynchronous REST services",
        symbol: "FA",
        usedIn: findProjectsForTech("FastAPI")
      },
      { 
        name: "Spring Boot 3", 
        level: "Advanced", 
        note: "Enterprise Java 21 backends, WebSockets",
        role: "Enterprise service layer & JPA data tier",
        symbol: "SB",
        usedIn: findProjectsForTech("Spring Boot")
      },
      { 
        name: "Node.js / Express 5", 
        level: "Production", 
        note: "Secure proxy gateways, rate-limiting, Helmet",
        role: "Secure API gateways & credential isolation",
        symbol: "EX",
        usedIn: findProjectsForTech("Express")
      },
      { 
        name: "WebSocket / STOMP", 
        level: "Production", 
        note: "Low-latency bidirectional push (<50ms)",
        role: "Real-time attendance & live event push",
        symbol: "WS",
        usedIn: findProjectsForTech("WebSocket")
      },
      { 
        name: "Prisma & SQLAlchemy", 
        level: "Production", 
        note: "Type-safe ORM migrations and data modeling",
        role: "Deterministic schema & database ORMs",
        symbol: "ORM",
        usedIn: findProjectsForTech("PostgreSQL")
      },
      { 
        name: "Zod Validation", 
        level: "Production", 
        note: "Runtime type safety and payload sanitization",
        role: "Strict boundary verification & sanitization",
        symbol: "ZD",
        usedIn: findProjectsForTech("Zod")
      },
    ]
  },
  {
    id: "cv-ml",
    name: "Computer Vision & ML",
    shortName: "CV & ML",
    icon: Cpu,
    description: "Facial landmark tracking, face descriptors, biometric embeddings, and computer vision pipelines.",
    ringColor: "#FBBF24", // amber
    orbitRadius: 320,
    orbitDuration: 50,
    orbitDirection: "ccw",
    skills: [
      { 
        name: "OpenCV", 
        level: "Production", 
        note: "Image processing, feature mapping, camera feeds",
        role: "Frame processing and visual feature extraction",
        symbol: "CV",
        usedIn: findProjectsForTech("OpenCV")
      },
      { 
        name: "FaceNet & LBPH", 
        level: "Production", 
        note: "Facial recognition, embedding generation",
        role: "512-D biometric vector generation",
        symbol: "FN",
        usedIn: findProjectsForTech("FaceNet")
      },
      { 
        name: "MediaPipe Vision", 
        level: "Production", 
        note: "In-browser iris & head-pose tracking (<16ms)",
        role: "Edge facial landmark & gaze monitoring",
        symbol: "MP",
        usedIn: findProjectsForTech("MediaPipe")
      },
      { 
        name: "Scikit-learn", 
        level: "Advanced", 
        note: "Supervised classification, clustering, regression",
        role: "Machine learning statistical modeling",
        symbol: "SK",
        usedIn: findProjectsForTech("Python")
      },
      { 
        name: "SSD MobileNet", 
        level: "Production", 
        note: "TensorFlow.js in-browser real-time face detection",
        role: "Sub-16ms client-side boundary box detection",
        symbol: "SSD",
        usedIn: findProjectsForTech("SSD MobileNet")
      },
    ]
  },
  {
    id: "ai-data",
    name: "AI & Real-Time Voice",
    shortName: "AI & Voice",
    icon: Sparkles,
    description: "Multi-agent systems, deterministic guardrails, vector search, and low-latency voice pipelines.",
    ringColor: "#F472B6", // pink
    orbitRadius: 375,
    orbitDuration: 56,
    orbitDirection: "cw",
    skills: [
      { 
        name: "PostgreSQL + pgvector", 
        level: "Production", 
        note: "HNSW similarity indexing (<1.5ms queries)",
        role: "Sub-1.5ms high-dimensional vector search",
        symbol: "VEC",
        usedIn: findProjectsForTech("pgvector")
      },
      { 
        name: "Redis & MongoDB", 
        level: "Production", 
        note: "In-memory session state, caching, sub-millisecond turns",
        role: "High-speed transient memory & session caching",
        symbol: "RD",
        usedIn: findProjectsForTech("Redis")
      },
      { 
        name: "Claude & Gemini APIs", 
        level: "Production", 
        note: "Prompt steering, structured JSON, guardrails",
        role: "Contextual reasoning and prompt steering",
        symbol: "LLM",
        usedIn: findProjectsForTech("Claude")
      },
      { 
        name: "Agora RTC/RTM", 
        level: "Production", 
        note: "Ultra-low latency real-time voice streaming",
        role: "Bidirectional audio streaming pipelines",
        symbol: "AG",
        usedIn: findProjectsForTech("Agora")
      },
      { 
        name: "Murf & Cartesia TTS", 
        level: "Production", 
        note: "Distinct interviewer personas & speech synthesis",
        role: "Synthetic conversational speech generation",
        symbol: "TTS",
        usedIn: findProjectsForTech("Murf")
      },
      { 
        name: "JobSpy & Firecrawl", 
        level: "Production", 
        note: "Automated live listing parsing and web scraping",
        role: "Automated extraction and web intelligence",
        symbol: "SCR",
        usedIn: findProjectsForTech("PROBE")
      },
    ]
  },
  {
    id: "devops-testing",
    name: "DevOps & Engineering Discipline",
    shortName: "DevOps & Eng",
    icon: Terminal,
    description: "Mathematical precision, deterministic validators, and automated testing suites.",
    ringColor: "#FB7185", // coral rose
    orbitRadius: 430,
    orbitDuration: 64,
    orbitDirection: "ccw",
    skills: [
      { 
        name: "Docker Compose", 
        level: "Production", 
        note: "Multi-container orchestration and deployment",
        role: "Reproducible containerized environments",
        symbol: "DK",
        usedIn: findProjectsForTech("Docker")
      },
      { 
        name: "Pytest (101 Tests)", 
        level: "Production", 
        note: "Automated regression testing, 79% coverage",
        role: "Comprehensive test-driven validation",
        symbol: "PT",
        usedIn: findProjectsForTech("Pytest")
      },
      { 
        name: "Vitest & Playwright", 
        level: "Production", 
        note: "E2E testing & 100% WCAG accessibility audits",
        role: "Browser automation & accessibility testing",
        symbol: "PW",
        usedIn: findProjectsForTech("Playwright")
      },
      { 
        name: "GitHub Actions CI/CD", 
        level: "Advanced", 
        note: "Automated test, lint, and build pipelines",
        role: "Automated build and test deployment pipelines",
        symbol: "CI",
        usedIn: findProjectsForTech("GitHub")
      },
      { 
        name: "Paisa Validator", 
        level: "Architected", 
        note: "Zero floating-point drift deterministic engine",
        role: "Zero-drift integer subunit arithmetic",
        symbol: "PAI",
        usedIn: findProjectsForTech("Paisa")
      },
      { 
        name: "AES-256-GCM", 
        level: "Security", 
        note: "Cryptographic protection of biometric vectors",
        role: "Fail-closed authenticated vector encryption",
        symbol: "AES",
        usedIn: findProjectsForTech("AES-256-GCM")
      },
    ]
  }
];

export const TOTAL_SKILLS_COUNT = ORBITAL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
export const TOTAL_DOMAINS_COUNT = ORBITAL_CATEGORIES.length;
export const PRODUCTION_PROJECTS_COUNT = 6;
