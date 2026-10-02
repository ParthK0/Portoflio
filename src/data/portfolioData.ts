import { Project, ExperienceItem, JourneyStage, ArchitectureDecision, LeadershipItem, MetricProof } from '../types';

export const PERSONAL_INFO = {
  name: "Parth Khowal",
  title: "Software Engineer & Full-Stack Developer",
  statusBadge: "Open for Summer 2026 Software Engineering Internships",
  location: "Greater Noida / Delhi NCR, India (Open to Remote / Relocation)",
  email: "parthkhowal222@gmail.com",
  phone: "+91 8079086274",
  github: "https://github.com/ParthK0",
  linkedin: "https://linkedin.com/in/parth-khowal-a37903294",
  bio: "B.Tech AI & Data Science scholar @ Galgotias University (8.89 CGPA). Full-Stack Developer Intern @ MSKard. 600+ LeetCode problems solved. Focused on clean architecture, high precision deterministic pipelines, and resilient production systems.",
  heroStats: [
    { label: "LeetCode Solved (1600 Rating)", value: "600+", highlight: "cyan" },
    { label: "Reconciliation Precision (101 Tests)", value: "100%", highlight: "emerald" },
    { label: "Lighthouse Score in Production", value: "95+", highlight: "violet" },
    { label: "Academic CGPA (B.Tech AI & DS)", value: "8.89", highlight: "default" },
  ]
};

export const PILLARS = [
  {
    icon: "Zap",
    title: "Production Web Systems",
    description: "Performant, accessible, and responsive user interfaces built with React 19, Next.js, and TypeScript. Optimized for sub-second load times, core web vitals, and clean SEO architecture.",
    proof: "Shree Krishna Transport (95+ Lighthouse, live commercial deployment)"
  },
  {
    icon: "Brain",
    title: "AI Pipelines with Guardrails",
    description: "Integrating LLMs and multi-agent systems with deterministic mathematical validators to guarantee zero hallucinations, strict schema enforcement, and sub-second voice interactions.",
    proof: "ReconCraft (Paisa validator, 0 false positives) & PROBE (Agora RTC voice agents)"
  },
  {
    icon: "Shield",
    title: "Resilient Architecture & Data",
    description: "Clean APIs and persistent backends built in FastAPI, Spring Boot 3, Node.js, and PostgreSQL. Leveraging pgvector HNSW indexing, Redis caching, and Docker for scalable operations.",
    proof: "AetherFace (pgvector HNSW, AES-256-GCM, <50ms WebSocket push)"
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stage-1",
    stageNumber: "01",
    title: "Student & Problem Solver",
    period: "2024",
    subtitle: "Data Structures, Algorithms & Computer Science Core",
    description: "Built foundational problem-solving discipline by solving 600+ problems across LeetCode and competitive programming. Mastered arrays, trees, dynamic programming, graphs, and algorithmic complexity in C++ and Java.",
    tags: ["C++", "Java", "Python", "Data Structures", "Algorithms", "600+ LeetCode"]
  },
  {
    id: "stage-2",
    stageNumber: "02",
    title: "Builder & Prototyper",
    period: "Late 2024 – Early 2025",
    subtitle: "Full-Stack Application Development & Civic Tech",
    description: "Translated algorithmic skills into full-stack software. Built ElectIQ (civic information platform with Gemini API proxy) and engineered AetherFace (biometric attendance system with pgvector and Spring Boot).",
    tags: ["React", "Spring Boot 3", "PostgreSQL", "pgvector", "Firebase", "Zod"]
  },
  {
    id: "stage-3",
    stageNumber: "03",
    title: "Systems Engineer & Production Builder",
    period: "Early 2025",
    subtitle: "Deterministic Software & Live Client Deployments",
    description: "Engineered ReconCraft/FinPilot — a zero-hallucination financial reconciliation engine with 7-stage deterministic rules and 101 automated tests. Delivered Shree Krishna Transport live to production with 95+ Lighthouse performance.",
    tags: ["FastAPI", "Python", "React 19", "TypeScript", "Tailwind v4", "Docker", "Production Live"]
  },
  {
    id: "stage-4",
    stageNumber: "04",
    title: "AI-Enabled SWE & Team Lead",
    period: "May 2025 – Present",
    subtitle: "Full-Stack Dev Intern @ MSKard & Hackathon Architect",
    description: "Currently engineering client web systems and TypeScript APIs at MSKard Business Solutions. Co-architected PROBE (multi-agent voice interview platform) in a 4-person team. Serving as IEEE CIS Treasurer.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Agora RTC", "Murf TTS", "Redis", "IEEE CIS"]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "mskard",
    role: "Full-Stack Developer Intern",
    company: "MSKard Business Solutions",
    period: "May 2025 – Present",
    type: "Internship",
    bullets: [
      "Architecting and shipping production-ready full-stack applications utilizing Next.js, Node.js/Express, and PostgreSQL, emphasizing modularity, type safety, and clean separation of concerns.",
      "Engineering type-safe RESTful API endpoints in TypeScript with Zod runtime schema validation, preventing data mismatches and invalid payload ingestion.",
      "Designing relational database schemas, query optimizations, and data indexing strategies for responsive administrative dashboards and client portal workflows.",
      "Implementing reusable UI component libraries with responsive styling, accessible interaction patterns, and optimized rendering lifecycles."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Zod", "Git", "REST APIs"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "probe",
    title: "PROBE",
    tagline: "Multi-Agent AI Voice Interview Platform",
    tier: "tier1",
    team: "Team of 4 • Hackathon Project",
    category: "AI & Distributed Voice Systems",
    description: "Autonomous conversational interview engine conducting real-time technical assessments with ultra-low latency voice synthesis and candidate emotion perception tracking.",
    coverImage: "/images/probe/overview.png",
    gallery: [
      "/images/probe/dashboard.png",
      "/images/probe/interview-room.png",
      "/images/probe/perception.png",
      "/images/probe/voice-agent.png",
      "/images/probe/architecture.png"
    ],
    highlights: [
      "Owned AI Job Match Score algorithm, job intelligence parsing, 1-click practice flow, Redis state caching, and recruiter dashboard review workflows.",
      "Integrated Agora RTC voice channels with Murf TTS and Claude LLM for responsive dynamic interview dialogues (<800ms full roundtrip).",
      "Perception pipeline utilizing MediaPipe face/iris tracking and React Three Fiber 3D avatar for immersive real-time interaction."
    ],
    technologies: ["Next.js 16", "React 19", "Claude LLM", "Agora RTC", "Murf TTS", "MongoDB", "Redis", "Three.js", "MediaPipe"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Voice Turn Latency", value: "<800ms", color: "cyan" },
      { label: "Autonomous Pipeline", value: "4-Agent", color: "violet" }
    ],
    architecture: {
      title: "Real-time Voice Pipeline",
      steps: [
        "Candidate Voice Stream (Agora RTC)",
        "Claude Agent + Redis Session State",
        "Murf TTS Low-Latency Audio Synthesis",
        "React Three Fiber 3D Avatar Lip Sync"
      ]
    },
    caseStudy: {
      problem: "Traditional automated video interviews rely on rigid pre-recorded questions or laggy text-to-speech loops that break conversation immersion.",
      solution: "Engineered a low-latency multi-agent voice architecture utilizing Agora RTC audio streaming, Claude for contextual prompt steering, and Murf TTS for lifelike voice feedback.",
      challenges: [
        "Managing dialogue state transitions without database I/O bottlenecks during active interview speech turns.",
        "Synchronizing MediaPipe facial emotion analysis with speech transcripts without degrading client-side frame rates."
      ],
      technicalDecisions: [
        {
          decision: "Redis In-Memory State vs MongoDB Direct Writes",
          rationale: "MongoDB writes on every audio chunk caused connection pool contention and latency spikes. Redis enables sub-millisecond turn updates, flushed to Mongo only on milestone events."
        }
      ]
    }
  },
  {
    id: "reconcraft",
    title: "ReconCraft / FinPilot",
    tagline: "Deterministic Financial Reconciliation with LLM Fallback",
    tier: "tier1",
    team: "Solo Engineering • Architecture & Engine",
    category: "Financial Systems & Deterministic AI",
    description: "High-precision transaction reconciliation engine processing unstructured bank statements and internal ledgers. Implements strict mathematical guardrails to eliminate floating-point drift and LLM hallucination risk.",
    coverImage: "/images/reconcraft/benchmark.png",
    gallery: [
      "/images/reconcraft/engine.png",
      "/images/reconcraft/paisa-validator.png",
      "/images/reconcraft/ledger-matching.png",
      "/images/reconcraft/dashboard.png",
      "/images/reconcraft/audit.png"
    ],
    highlights: [
      "7-Stage matching engine: UTR reference matching, exact amount/date checks, tolerance windows, fuzzy description scoring, and guarded LLM reconciliation.",
      "Paisa Arithmetic Validator converts all currency into integer subunits, preventing IEEE 754 precision drift and rounding mismatches.",
      "101 automated unit/integration tests with 79% code coverage, 100% precision on benchmark datasets, 0 false positives, and 0.29s engine execution."
    ],
    technologies: ["FastAPI", "Python", "Pydantic", "PostgreSQL", "Docker", "Pytest", "101 Tests"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "False Positive Rate", value: "0", color: "emerald" },
      { label: "Engine Execution Latency", value: "0.29s", color: "cyan" }
    ],
    architecture: {
      title: "7-Stage Reconciliation Flow",
      steps: [
        "1. Reference ID Match (Exact UTR)",
        "2. Exact Amount + Same Day",
        "3. Exact Amount + Date Window (±3d)",
        "4. Fuzzy Description + Amount",
        "5. One-to-Many Transaction Aggregation",
        "6. Guarded LLM Fallback",
        "7. Paisa Arithmetic Validator Gate"
      ]
    },
    caseStudy: {
      problem: "Financial reconciliation platforms often either suffer from brittle manual rules or hallucinate transaction matches when using unconstrained AI models.",
      solution: "Constructed a layered reconciliation pipeline where 90%+ transactions are resolved deterministically, and LLM suggestions must pass through a strict mathematical validator.",
      challenges: [
        "Eliminating binary float representation errors that cause cumulative rounding discrepancies across thousands of micro-transactions.",
        "Preventing the LLM from fabricating transaction IDs or approving unbalanced ledger entries."
      ],
      technicalDecisions: [
        {
          decision: "Integer Paisa Math vs Float Calculations",
          rationale: "Converting all currency values to integer cents/paisa guarantees exact arithmetic equality without binary floating point drift."
        }
      ]
    }
  },
  {
    id: "skt",
    title: "Shree Krishna Transport",
    tagline: "Commercial Logistics & Route Intelligence Platform",
    tier: "tier1",
    team: "Solo Engineering • Live Client Deployment",
    category: "Production Web & Enterprise Logistics",
    description: "Live commercial web platform for a regional logistics provider. Designed from scratch for high conversion, instant quote calculation across 18+ corridors, and reliable lead dispatch.",
    coverImage: "/images/shree-krishna-transport/hero.png",
    gallery: [
      "/images/shree-krishna-transport/corridors.png",
      "/images/shree-krishna-transport/quote.png",
      "/images/shree-krishna-transport/fleet.png"
    ],
    highlights: [
      "Achieved 95+ across all Google Lighthouse metrics with optimal core web vitals and structured schema markup for local SEO.",
      "Interactive pricing and route intelligence calculator spanning 18+ high-volume industrial freight corridors.",
      "Dual-channel lead dispatch system: automated quote delivery to dispatchers via parallel EmailJS and WhatsApp Business webhook notifications."
    ],
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Express", "Leaflet", "EmailJS"],
    liveUrl: "https://shree-krishna-transport.org",
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Google Lighthouse Score", value: "95+", color: "emerald" },
      { label: "First Contentful Paint", value: "<1.2s", color: "cyan" }
    ],
    architecture: {
      title: "High-Performance Pipeline",
      steps: [
        "Client UI: React 19 + Tailwind v4",
        "Freight Route & Distance Calculator",
        "Dual Lead Dispatch: WhatsApp + Email",
        "Production Host: shree-krishna-transport.org"
      ]
    },
    caseStudy: {
      problem: "The client relied on manual phone calls and unoptimized static pages, losing high-intent logistics inquiries.",
      solution: "Built a lightning-fast web platform featuring an interactive route calculation tool and instant dual-channel quote routing.",
      challenges: [
        "Ensuring mobile users on cellular networks load the site in under 1.5s while rendering interactive maps and route calculations."
      ],
      technicalDecisions: [
        {
          decision: "Client-Side Distance Table vs External API Calls",
          rationale: "Pre-computed 18+ corridor distance and freight matrix client-side, eliminating external map API latency and third-party downtime."
        }
      ]
    }
  },
  {
    id: "aetherface",
    title: "AetherFace",
    tagline: "Real-Time Biometric Attendance & Vector Search Engine",
    tier: "tier2",
    team: "Solo Engineering • Rebuild & Modernization",
    category: "Biometrics & Vector Database Systems",
    description: "Modernized an open-source JavaFX face-recognition prototype into a distributed, production-ready attendance platform with sub-second vector similarity retrieval.",
    coverImage: "/images/aetherface/dashboard.png",
    gallery: [
      "/images/aetherface/recognition.png",
      "/images/aetherface/attendance-log.png",
      "/images/aetherface/vector-search.png",
      "/images/aetherface/admin.png"
    ],
    highlights: [
      "Replaced linear O(N) distance loops with PostgreSQL + pgvector HNSW indexing, achieving sub-10ms facial feature matches across thousands of records.",
      "Implemented AES-256-GCM encryption for stored biometric embeddings with salted user hashes and RBAC endpoints.",
      "Spring Boot 3 WebSocket push providing instantaneous attendance logging notifications to administrative dashboards (<50ms latency)."
    ],
    technologies: ["Spring Boot 3", "Java", "React 18", "PostgreSQL", "pgvector (HNSW)", "AES-256-GCM", "WebSocket"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Verification Accuracy", value: ">97%", color: "violet" },
      { label: "WebSocket Event Push", value: "<50ms", color: "cyan" }
    ],
    architecture: {
      title: "Vector Search Pipeline",
      steps: [
        "Frame Capture & 128-dim Embedding Extraction",
        "AES-256-GCM Cryptographic Storage",
        "pgvector HNSW Nearest Neighbor Retrieval (<10ms)",
        "Real-Time Spring Boot WebSocket Broadcast"
      ]
    }
  },
  {
    id: "electiq",
    title: "ElectIQ",
    tagline: "Civic Education & Candidate Intelligence Platform",
    tier: "tier2",
    team: "Solo Engineering • Full-Stack Platform",
    category: "Civic Tech & Grounded AI",
    description: "Data-driven non-partisan platform delivering verified election information, constituency metrics, and AI-assisted candidate record summaries to empower informed voting.",
    coverImage: "/images/electiq/constituency.png",
    gallery: [
      "/images/electiq/candidate-profile.png",
      "/images/electiq/ai-summary.png"
    ],
    highlights: [
      "Architected Express 5 proxy layer shielding Gemini API keys from client exposure with per-IP rate limiting and Zod schema validation.",
      "Prompt-engineered guardrails ensuring candidate summaries cite factual legislative track records without editorial bias.",
      "Firebase authentication and Firestore syncing for user bookmarks and constituency updates."
    ],
    technologies: ["React 19", "Vite", "Express 5 Proxy", "Gemini API", "Firebase", "Zod", "Tailwind CSS"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "API Key Obfuscation", value: "100%", color: "cyan" },
      { label: "Data Validation", value: "Strict Zod", color: "emerald" }
    ],
    architecture: {
      title: "Proxy Architecture",
      steps: [
        "Client UI: React 19 + Vite",
        "Express 5 Proxy + Rate Limiter Gate",
        "Zod Schema Validation",
        "Gemini API (Strict Grounded Prompts)",
        "Firebase Firestore & Auth Sync"
      ]
    }
  },
  {
    id: "quantcraft",
    title: "QuantCraft",
    tagline: "Minecraft-Themed Hackathon Platform",
    tier: "tier3",
    team: "Solo Engineering • Event Platform",
    category: "Interactive Web & Community",
    description: "Gamified hackathon registration and team management interface designed with interactive Minecraft aesthetics and smooth Framer Motion interactions.",
    highlights: [
      "Next.js and Tailwind CSS component layout with custom game-themed assets and responsiveness.",
      "Team registration and portal management workflows."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Community", value: "Hackathon", color: "violet" }
    ],
    architecture: {
      title: "Frontend Architecture",
      steps: [
        "Next.js App Router",
        "Framer Motion Micro-Interactions",
        "Dynamic Team Portal Registration"
      ]
    }
  }
];

export const ARCHITECTURE_DECISIONS: ArchitectureDecision[] = [
  {
    id: "dec-1",
    project: "ReconCraft / FinPilot",
    badge: "Financial Precision",
    title: "Why Paisa Arithmetic (Integer Math) Over IEEE 754 Floats",
    problem: "Standard IEEE 754 floating-point calculations introduce binary approximation errors (e.g., 0.1 + 0.2 = 0.30000000000000004). In high-volume financial reconciliation, accumulating rounding drift causes false positive mismatches and audit failures.",
    decision: "Converted all currency inputs into integer subunits (paisa/cents) at the validation boundary using Pydantic, executing all aggregation with pure integer arithmetic.",
    impact: "Zero precision loss across 101 automated test suites and 100% deterministic balance verification."
  },
  {
    id: "dec-2",
    project: "PROBE",
    badge: "Real-Time State",
    title: "Redis State Caching vs Database Polling in Voice Sessions",
    problem: "Autonomous multi-agent voice dialogues require turn-by-turn context handoffs within sub-300ms windows. Persisting interview conversation state directly to MongoDB on every audio chunk caused latency spikes and connection pool contention.",
    decision: "Managed active interview turns and question queues in an in-memory Redis session store, flushing to MongoDB only on session boundaries or milestone events.",
    impact: "Maintained sub-800ms full voice turn roundtrip without database I/O bottlenecks."
  },
  {
    id: "dec-3",
    project: "AetherFace",
    badge: "Scalability",
    title: "pgvector HNSW Indexing vs In-Memory Brute-Force Matching",
    problem: "The legacy Java prototype performed an O(N) linear cosine similarity scan across facial vector embeddings in application memory, which degrades latency linearly as user rosters scale into thousands.",
    decision: "Moved vector storage directly into PostgreSQL with the pgvector extension utilizing Hierarchical Navigable Small World (HNSW) graph indexing.",
    impact: "Achieved logarithmic O(log N) search times (<10ms) with >97% recognition accuracy."
  }
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: "ieee-cis",
    role: "Treasurer & Event Lead",
    organization: "IEEE Computational Intelligence Society (CIS)",
    tag: "Galgotias University",
    bullets: [
      "Salesforce Agentic AI Workshop: Managed budgeting, logistics, and student coordination for high-attendance hands-on workshops introducing agentic workflows.",
      "ICCCA International Conference: Supported technical proceedings, session coordination, and speaker management for flagship academic computing conferences.",
      "Financial Stewardship: Managed chapter finances, sponsor allocations, and compliance reporting with IEEE student branch leadership."
    ]
  },
  {
    id: "quanta-club",
    role: "Technical Lead",
    organization: "Quanta Club",
    tag: "Campus Tech Community",
    bullets: [
      "Digital Infrastructure: Led frontend development and deployment for club hackathons, registration portals, and student engagement platforms.",
      "Mentorship & Peer Learning: Conducted technical workshops on Git/GitHub version control, React fundamentals, and algorithmic problem-solving for junior undergraduates.",
      "Hackathon Operations: Coordinated project judging pipelines and real-time dashboard updates during multi-hour collegiate programming events."
    ]
  }
];

export const PROOF_METRICS: MetricProof[] = [
  {
    value: "600+",
    title: "LeetCode Problems",
    description: "Consistent problem-solving across dynamic programming, trees, and graphs with ~1600 contest rating.",
    colorClass: "text-cyan-400"
  },
  {
    value: "101",
    title: "Automated Tests",
    description: "79% test coverage on ReconCraft financial reconciliation engine with 0 false positives.",
    colorClass: "text-emerald-400"
  },
  {
    value: "95+",
    title: "Production Lighthouse",
    description: "Live client logistics platform delivering sub-second FCP and clean SEO architecture.",
    colorClass: "text-purple-400"
  },
  {
    value: "8.89",
    title: "Academic CGPA",
    description: "B.Tech in Artificial Intelligence & Data Science at Galgotias University (2024–2028).",
    colorClass: "text-slate-100"
  }
];
