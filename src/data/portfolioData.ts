import { 
  Project, 
  ExperienceItem, 
  JourneyStage, 
  ArchitectureDecision, 
  LeadershipItem, 
  MetricProof, 
  Certification, 
  EducationItem 
} from '../types';

export const PERSONAL_INFO = {
  name: "Parth Khowal",
  title: "Software Engineer & Full-Stack Developer",
  statusBadge: "Open for Summer 2026 Software Engineering Internships",
  location: "Greater Noida / Delhi NCR, India (Open to Remote / Relocation)",
  email: "parthkhowal222@gmail.com",
  phone: "+91 8079086274",
  github: "https://github.com/ParthK0",
  linkedin: "https://linkedin.com/in/parth-khowal-a37903294",
  bio: "B.Tech AI & Data Science scholar @ Galgotias University (8.89 CGPA). International Maths Olympiad Bronze Medallist. Full-Stack Developer Intern @ MSKard. 600+ LeetCode problems solved. Focused on clean architecture, high precision deterministic pipelines, and resilient production systems.",
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
    description: "Performant, accessible, and responsive user interfaces built with React 19, Next.js 16, and TypeScript. Optimized for sub-second load times, core web vitals, and clean SEO architecture.",
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
    title: "Student, Problem Solver & Olympiad Medallist",
    period: "2024",
    subtitle: "Data Structures, Algorithms & Mathematical Foundations",
    description: "Built foundational problem-solving discipline by mastering 600+ problems across LeetCode and competitive programming (~1600 rating). Awarded International Maths Olympiad Bronze Medal for analytical and quantitative excellence.",
    tags: ["C++", "Java", "Python", "Data Structures", "Algorithms", "600+ LeetCode", "Maths Olympiad"]
  },
  {
    id: "stage-2",
    stageNumber: "02",
    title: "Builder & Full-Stack Prototyper",
    period: "Late 2024 – Early 2025",
    subtitle: "Full-Stack Application Development & Civic Tech",
    description: "Translated algorithmic skills into production web applications. Engineered ElectIQ (civic platform covering 6 nations with Express 5 proxy and Gemini API) and AetherFace (biometric attendance system with pgvector and Spring Boot).",
    tags: ["React 19", "Spring Boot 3", "PostgreSQL", "pgvector", "Firebase", "Zod", "Express 5"]
  },
  {
    id: "stage-3",
    stageNumber: "03",
    title: "Systems Engineer & Production Builder",
    period: "Early 2025",
    subtitle: "Deterministic Software & Live Client Deployments",
    description: "Engineered ReconCraft/FinPilot — a zero-hallucination 3-way financial reconciliation engine with 7-stage deterministic rules, Paisa arithmetic validator, and 101 automated tests. Delivered Shree Krishna Transport live to production with 95+ Lighthouse score.",
    tags: ["FastAPI", "Python", "React 19", "TypeScript", "Tailwind v4", "Docker", "Production Live"]
  },
  {
    id: "stage-4",
    stageNumber: "04",
    title: "AI-Enabled SWE & Team Lead",
    period: "May 2025 – Present",
    subtitle: "Full-Stack Dev Intern @ MSKard & Hackathon Architect",
    description: "Currently engineering an e-commerce platform and TypeScript APIs at MSKard Business Solutions. Co-architected PROBE (multi-agent voice interview platform with Agora RTC and Claude) in a 4-person team. Serving as IEEE CIS Treasurer.",
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
      "Building, scaling, and maintaining a production full-stack e-commerce platform using Next.js 16, Node.js/Express, and PostgreSQL with strict TypeScript contracts.",
      "Developing accessible and responsive UI component libraries with Tailwind CSS, ensuring cross-device consistency and optimal rendering lifecycles.",
      "Contributing to backend RESTful API design with runtime schema validation and error-handling middleware.",
      "Designing relational database schemas, query optimizations, and data indexing strategies in PostgreSQL for client portal workflows."
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "probe",
    title: "PROBE",
    tagline: "Adaptive Multi-Agent AI Voice Interview Platform",
    tier: "tier1",
    displayCategory: "featured",
    team: "Team of 4 • Agora Hackathon Track",
    category: "AI & Distributed Voice Systems",
    description: "Live voice-based mock interview platform where a 3-person AI panel (Technical — Abhinav, Product — Anisha, HR — Alia) conducts realistic, resume-grounded interviews with 3D lip-synced avatars, MediaPipe gaze proctoring, and evidence-based scoring.",
    coverImage: "/images/probe/dashboardhero.png",
    gallery: [
      "/images/probe/dashboardhero.png",
      "/images/probe/overview.png",
      "/images/probe/interview-room.png",
      "/images/probe/perception.png",
      "/images/probe/voice-agent.png"
    ],
    highlights: [
      "Architected 3-layer interview intelligence: dynamic Competency Graph, multi-agent Interviewer Debate engine, and Counterfactual Interviewing module to evaluate genuine understanding over memorized answers.",
      "Engineered AI Match Score & 1-click Practice flow: parses live job listings via JobSpy + BeautifulSoup, scores resume-to-job percentage fit, and grounds questions in real postings.",
      "Real-time voice orchestration with Agora RTC/RTM + Murf TTS (<800ms full roundtrip) and word-timed ARKit viseme scheduling (15 mouth blend shapes) at 60fps on rigged 3D models.",
      "Zero-server-upload in-browser proctoring via MediaPipe Tasks Vision (iris + head-pose tracking, <16ms latency) and prompt-injection defense (`_untrusted()` fencing)."
    ],
    technologies: ["Next.js 16", "React 19", "Claude LLM", "Agora RTC/RTM", "Murf TTS", "Python FastAPI", "MongoDB", "Redis", "Three.js", "MediaPipe"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Voice Turn Latency", value: "<800ms", color: "cyan" },
      { label: "Panel Avatars", value: "3 Personas", color: "violet" },
      { label: "Contract-Tested APIs", value: "18 Routes", color: "emerald" },
      { label: "Avatar Lip-Sync", value: "60 FPS ARKit", color: "cyan" }
    ],
    architecture: {
      title: "Real-time Voice Pipeline",
      steps: [
        "Candidate Voice Stream (Agora RTC / STT)",
        "Panel Orchestrator (Claude Reasoning + Redis Context)",
        "Murf TTS Dynamic Voice Handoff",
        "React Three Fiber ARKit 3D Lip-Sync (60 FPS)"
      ]
    },
    caseStudy: {
      problem: "Traditional automated interview prep tools are glorified flashcard apps with no follow-ups, no adaptive difficulty, and robotic text-to-speech loops that break conversation immersion.",
      solution: "Engineered a low-latency multi-agent voice architecture utilizing Agora RTC audio streaming, Claude for contextual prompt steering, and Murf TTS for lifelike distinct voices per interviewer seat.",
      challenges: [
        "Agora binds one TTS voice per session; panel handoffs required graceful pipeline restarts while preserving transcript continuity without database race conditions.",
        "Synchronizing MediaPipe facial emotion and gaze tracking locally without dropping frame rates on consumer browsers."
      ],
      technicalDecisions: [
        {
          decision: "Generation-Counted MongoDB Upserts for Handoffs",
          rationale: "Each handoff commits rendered messages, bumps a generation counter, and mounts a fresh helper so the second interviewer's turn never overwrites previous transcripts."
        },
        {
          decision: "Prompt-Injection Defense Layer (_untrusted() Fencing)",
          rationale: "All scraped job descriptions and live speech inputs are wrapped in strict fences instructing the model that enclosed content is data, never instructions."
        }
      ]
    }
  },
  {
    id: "reconcraft",
    title: "ReconCraft / FinPilot",
    tagline: "Deterministic Financial Reconciliation with LLM Verification",
    tier: "tier1",
    displayCategory: "featured",
    team: "Solo Engineering • Razorpay AI Buildathon (AI Finance Controller Track)",
    category: "Financial Systems & Deterministic AI",
    description: "AI-powered 3-way financial reconciliation engine that matches Razorpay settlement reports, bank statements, and ERP invoices using a 7-stage deterministic rule engine first and an LLM verification engine only for ambiguous residuals — with every AI decision independently verified by paisa-exact arithmetic before acceptance.",
    coverImage: "/images/reconcraft/hero.png",
    gallery: [
      "/images/reconcraft/hero.png",
      "/images/reconcraft/engine.png",
      "/images/reconcraft/paisa-validator.png",
      "/images/reconcraft/ledger-matching.png",
      "/images/reconcraft/dashboard.png"
    ],
    highlights: [
      "7-Stage deterministic rule engine resolves 90–95% of records at zero AI cost (Order ID, exact UTR, same-day amount, date window, statutory rate card, tolerance, FX corridor).",
      "Paisa Arithmetic Validator independently re-derives every AI claim using Python Decimal (`invoice - deductions == settlement` to ₹0.01) — confidence is grounded in a `==` check, not model self-report.",
      "101 automated unit/integration tests with 79% statement coverage, 100% precision (0 false positives), 100% recall, and 0.29s engine execution for 100 records.",
      "1-Click ERP journal voucher export (Tally Prime XML, Zoho Books CSV, NetSuite JSON) and 30+ category exception taxonomy across 8 domains."
    ],
    technologies: ["FastAPI", "Python", "Pydantic v2", "PostgreSQL", "Pandas", "Pytest", "Docker", "Tally Prime XML"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "False Positive Rate", value: "0.0%", color: "emerald" },
      { label: "Engine Execution Latency", value: "0.29s", color: "cyan" },
      { label: "Automated Tests", value: "101 Tests", color: "violet" },
      { label: "Manual Hours Saved", value: "4.6h / 100 tx", color: "emerald" }
    ],
    architecture: {
      title: "7-Stage Reconciliation Flow",
      steps: [
        "1. Reference ID & UTR Match (Exact)",
        "2. Exact Amount + Same Day Window",
        "3. Tolerance Window & Statutory Rate Card",
        "4. Finance Verification Engine (GPT-5.6 / Gemini Pro)",
        "5. Zero-Trust Paisa Arithmetic Validator Gate (₹0.01)",
        "6. 1-Click ERP Export (Tally Prime XML / Zoho / NetSuite)"
      ]
    },
    caseStudy: {
      problem: "Finance and operations teams manually reconcile three disjoint data sources every settlement cycle. It's slow (~3 min/record), error-prone, and un-auditable weeks later.",
      solution: "Constructed a hybrid rules-first + AI-verified architecture where 90%+ transactions are resolved deterministically, and LLM hypotheses must pass through a strict mathematical validator.",
      challenges: [
        "Eliminating binary float representation errors that cause cumulative rounding discrepancies across thousands of micro-transactions.",
        "Preventing LLMs from hallucinating transaction IDs or approving unbalanced ledger entries."
      ],
      technicalDecisions: [
        {
          decision: "Zero-Trust Paisa Math vs Model Self-Confidence",
          rationale: "The AI proposes a hypothesis, but a deterministic Python Decimal function independently validates the equation. Confidence is grounded in a provable equality check."
        },
        {
          decision: "Rules-First Architecture (90% Zero AI Cost)",
          rationale: "Absorbs 90-95% of records at zero API spend (~$0.03/batch vs ~$0.30) and isolates AI execution to the genuinely ambiguous remainder."
        }
      ]
    }
  },
  {
    id: "skt",
    title: "Shree Krishna Transport",
    tagline: "Commercial Logistics & Route Intelligence Platform",
    tier: "tier1",
    displayCategory: "featured",
    team: "Solo Engineering • Live Client Production (shree-krishna-transport.org)",
    category: "Production Web & Enterprise Logistics",
    description: "Live commercial web platform connecting North-Western Indian industrial shippers (marble, FMCG, steel, textiles) with verified fleet operators across 18+ high-density corridors with programmatic route SEO and automated dual-dispatch.",
    coverImage: "/images/shree-krishna-transport/hero1.png",
    gallery: [
      "/images/shree-krishna-transport/hero1.png",
      "/images/shree-krishna-transport/2.png",
      "/images/shree-krishna-transport/3.png",
      "/images/shree-krishna-transport/4.png"
    ],
    highlights: [
      "Achieved 95+ across all Google Lighthouse metrics with optimal core web vitals and sub-1.5s First Contentful Paint.",
      "Dynamic programmatic route engine powering 18+ corridors (Jaipur to Delhi, Mumbai, Ahmedabad, Indore) with JSON-LD LogisticsService and FAQPage schemas.",
      "Dual-channel zero-loss dispatch: automated quote delivery to dispatchers via asynchronous EmailJS combined with pre-formatted WhatsApp chat payloads (`wa.me`).",
      "Interactive GIS route corridor map powered by Leaflet and dynamic rate card matrices for 5-ton, 15-ton, and container freight."
    ],
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Express", "Leaflet", "EmailJS", "WhatsApp Cloud API"],
    liveUrl: "https://shree-krishna-transport.org",
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Google Lighthouse Score", value: "95+", color: "emerald" },
      { label: "First Contentful Paint", value: "<1.2s", color: "cyan" },
      { label: "Indexed Corridors", value: "18+ Routes", color: "violet" },
      { label: "Lead Capture Loss", value: "0%", color: "emerald" }
    ],
    architecture: {
      title: "High-Performance Logistics Pipeline",
      steps: [
        "Client UI: React 19 + Tailwind v4 + Framer Motion",
        "Dynamic Rate Card & Corridor Calculator",
        "Dual Lead Dispatch: WhatsApp Cloud API + EmailJS",
        "Programmatic SEO Engine with Schema.org JSON-LD"
      ]
    },
    caseStudy: {
      problem: "The regional logistics industry relied on manual phone calls, untracked broker commissions, and non-transparent pricing, losing high-intent commercial freight inquiries.",
      solution: "Engineered an end-to-end digital logistics front with verified route tariffs, automated lead routing, and programmatic SEO for sub-second quote delivery.",
      challenges: [
        "High lead abandonment on traditional contact forms — solved via dual-dispatch pushing to WhatsApp instantly for real-time negotiation while logging via background email.",
        "Scaling SEO across 18+ city corridors without inflating bundle size — solved via parametric templates and typed static config registries."
      ],
      technicalDecisions: [
        {
          decision: "Typed Static Config Registry vs Dynamic Database",
          rationale: "Tariff updates occur weekly/monthly; an in-code typed registry delivers sub-1ms query latency, zero database connection pool overhead, and zero hosting costs."
        }
      ]
    }
  },
  {
    id: "aetherface",
    title: "AetherFace.ai",
    tagline: "Enterprise Biometrics & Vector Attendance Intelligence Platform",
    tier: "tier2",
    displayCategory: "engineering",
    team: "Solo Engineering • 7-Phase Architecture Modernization",
    category: "Biometrics & Vector Database Systems",
    description: "Cloud-native real-time facial recognition attendance platform built with Spring Boot 3, React 19, and PostgreSQL pgvector — replacing legacy O(N) brute force search with sub-millisecond HNSW vector similarity search.",
    coverImage: "/images/aetherface/hero.png",
    gallery: [
      "/images/aetherface/hero.png",
      "/images/aetherface/2.png",
      "/images/aetherface/3.png",
      "/images/aetherface/4.png",
      "/images/aetherface/5.png"
    ],
    highlights: [
      "Replaced linear O(N) in-memory scanning (~180ms) with PostgreSQL pgvector HNSW indexing, cutting vector search latency to <1.5ms for 10,000+ student records (120× speedup).",
      "Zero-trust biometric security: AES-256-GCM authenticated encryption at rest with fail-closed error handling (never stores plaintext) and JWT stateless RBAC.",
      "WebSocket STOMP real-time push (`/topic/attendance`) cutting event delivery from 5,000ms polling to <50ms for 100+ concurrent viewers.",
      "Browser WebRTC face detection (SSD MobileNet) + 512-D descriptor extraction with >97% verification accuracy at 0.65 threshold."
    ],
    technologies: ["Java 21", "Spring Boot 3", "React 19", "PostgreSQL 16", "pgvector (HNSW)", "AES-256-GCM", "WebSocket STOMP", "Docker Compose"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Vector Search Latency", value: "<1.5ms", color: "cyan" },
      { label: "Search Speedup", value: "120×", color: "emerald" },
      { label: "Event Delivery", value: "<50ms", color: "violet" },
      { label: "Biometric Security", value: "AES-256-GCM", color: "emerald" }
    ],
    architecture: {
      title: "Vector Search & Real-Time Pipeline",
      steps: [
        "Frame Capture & 512-D Embedding (face-api.js WebRTC)",
        "Biometric Security Service (AES-256-GCM Fail-Closed)",
        "PostgreSQL pgvector HNSW Nearest Neighbor (<1.5ms)",
        "Spring Boot WebSocket STOMP Push (<50ms)"
      ]
    },
    caseStudy: {
      problem: "Legacy desktop prototype suffered from brute-force O(N) linear face matching (180ms+ latency), plaintext biometric storage, and polling-based UI.",
      solution: "Modernized into a 3-tier architecture with pgvector HNSW indexing, AES-256-GCM authenticated encryption, and WebSocket STOMP real-time push.",
      challenges: [
        "Hibernate/JPA type mismatch with PostgreSQL's vector(512) type — solved via @ColumnTransformer and native SQL vector casting.",
        "Biometric data privacy — engineered fail-closed AES-256-GCM authenticated encryption ensuring zero plaintext leaks."
      ],
      technicalDecisions: [
        {
          decision: "pgvector HNSW over Dedicated Vector Database",
          rationale: "pgvector runs inside PostgreSQL, providing shared ACID transactions with relational student rosters and zero external infrastructure costs."
        }
      ]
    }
  },
  {
    id: "electiq",
    title: "ElectIQ",
    tagline: "AI-Powered Civic Education & Election Intelligence Platform",
    tier: "tier2",
    displayCategory: "engineering",
    team: "Solo Full-Stack Engineer • Capstone Platform",
    category: "Civic Tech & Grounded AI",
    description: "Full-stack civic intelligence platform covering electoral processes for 6 countries (India, USA, UK, Australia, Germany, Canada), combining real-time polling with neutrality-prompted Gemini AI assistants and rate-limited API proxies.",
    coverImage: "/images/electiq/hero.png",
    gallery: [
      "/images/electiq/hero.png",
      "/images/electiq/2.png",
      "/images/electiq/3.png"
    ],
    highlights: [
      "Decoupled Express 5 proxy layer shielding Gemini API credentials from client exposure with per-IP rate limiting, Helmet security headers, and Zod runtime schema validation.",
      "Prompt-engineered guardrails enforcing objective, multi-shot balance and fact-checking to eliminate political hallucination and editorial bias.",
      "Achieved 98+ Lighthouse performance and 100% WCAG 2.1 AA accessibility compliance across interactive voter dashboards with Vitest and Playwright CI/CD."
    ],
    technologies: ["React 19", "Vite", "Express 5 Proxy", "Gemini API", "Firebase", "Zod", "Playwright", "Vitest", "Tailwind CSS"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Country Coverage", value: "6 Nations", color: "cyan" },
      { label: "Accessibility Rating", value: "100% WCAG", color: "emerald" },
      { label: "API Protection", value: "Zod + RateLimit", color: "violet" }
    ],
    architecture: {
      title: "Secure Proxy & Grounded AI Pipeline",
      steps: [
        "Client UI: React 19 + Accessible WCAG Dashboard",
        "Express 5 Gateway + Helmet + Rate Limiter Gate",
        "Zod Runtime Schema Validation & Sanitization",
        "Google Gemini API (Neutral Multi-Shot System Prompts)",
        "Firebase Firestore Analytics Sync"
      ]
    }
  },
  {
    id: "quantcraft",
    title: "QuantCraft 1.0",
    tagline: "Minecraft-Themed National Hackathon Event Platform",
    tier: "tier3",
    displayCategory: "supporting",
    team: "Frontend & UI Engineer • National Student Hackathon",
    category: "Interactive Web & Community",
    description: "Minecraft-inspired responsive event platform for a national student hackathon with 4 technical tracks (AI/ML, Blockchain, Cybersecurity, Game Dev) and ₹35,000 prize pool, featuring custom animations and Unstop integration.",
    highlights: [
      "Built responsive UI components across desktop and mobile breakpoints with Next.js 16, React 19, Tailwind CSS, and Framer Motion.",
      "Implemented lazy-loaded video using Intersection Observer and Next.js image optimization, reducing initial load footprint while maintaining visual immersion.",
      "Centralized event information architecture managing timelines, track specs, sponsor tiers, and Unstop external registration."
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Prize Pool", value: "₹35,000", color: "violet" },
      { label: "Tech Tracks", value: "4 Tracks", color: "cyan" }
    ],
    architecture: {
      title: "Frontend Architecture",
      steps: [
        "Next.js 16 App Router Layouts",
        "Intersection Observer Lazy Media",
        "Framer Motion Micro-Interactions",
        "Unstop Registration Flow"
      ]
    }
  },
  {
    id: "sparkx",
    title: "SparkX 3.0",
    tagline: "Upcoming Hackathon & Innovation Platform",
    tier: "tier3",
    displayCategory: "supporting",
    team: "Lead Developer • In Active Development",
    category: "Hackathon & Interactive Platforms",
    description: "Next-generation hackathon platform engineered for real-time team collaboration, project submissions, and judge scoring workflows. Full project specifications coming soon.",
    highlights: [
      "Real-time team collaboration and portal submissions.",
      "Architected for scalable hackathon operations and high concurrency."
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ParthK0",
    metrics: [
      { label: "Platform Tier", value: "3.0", color: "violet" }
    ],
    architecture: {
      title: "Platform Overview",
      steps: [
        "Interactive Event Landing & Auth",
        "Real-Time Team Submission Pipeline",
        "Automated Scoring Matrix"
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
    decision: "Converted all currency inputs into integer subunits (paisa/cents) and Python Decimal at the validation boundary, executing all aggregation with pure deterministic arithmetic.",
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
    problem: "The legacy Java prototype performed an O(N) linear cosine similarity scan across facial vector embeddings in application memory, which degraded to 180ms+ latency as user rosters scaled to 10k records.",
    decision: "Moved vector storage directly into PostgreSQL with the pgvector extension utilizing Hierarchical Navigable Small World (HNSW) graph indexing.",
    impact: "Achieved logarithmic O(log N) search times (<1.5ms) with >97% recognition accuracy — a 120× latency improvement."
  }
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: "ieee-cis",
    role: "Treasurer & Event Lead",
    organization: "IEEE Computational Intelligence Society (CIS)",
    tag: "Galgotias University",
    bullets: [
      "Salesforce Agentic AI Workshop: Coordinated, budgeted, and conducted hands-on technical workshops introducing agentic workflows and AI agents to university students.",
      "ICCCA International Conference: Supported conference organization for the flagship International Conference on Computing, Communication and Automation (ICCCA); managed event planning, speaker coordination, and execution logistics.",
      "Financial Stewardship: Managed chapter budgeting, sponsor allocations, and compliance reporting with IEEE student branch leadership."
    ]
  },
  {
    id: "quanta-club",
    role: "Technical Lead",
    organization: "Quanta Club",
    tag: "Campus Tech Community",
    bullets: [
      "Digital Infrastructure: Spearheaded frontend architecture and deployment for collegiate hackathons, registration portals, and student engagement platforms.",
      "Mentorship & Technical Workshops: Conducted peer-learning sessions on Git/GitHub version control, React fundamentals, and algorithmic problem-solving for junior undergraduates.",
      "Hackathon Operations: Coordinated project judging pipelines and real-time dashboard updates during multi-hour collegiate programming events."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "jpmorgan",
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    year: "2024",
    description: "Engineered financial data feeds, interface systems, and live stock price visualization using Python, TypeScript, and React.",
    skills: ["Python", "TypeScript", "React", "Financial Visualization", "Perspective"]
  },
  {
    id: "quantium",
    title: "Data Analytics Job Simulation",
    issuer: "Quantium",
    year: "2024",
    description: "Analyzed commercial retail customer transaction datasets, conducted exploratory data analysis, metrics modeling, and benchmarked customer purchase behaviors.",
    skills: ["Data Analytics", "Python", "SQL", "Statistical Modeling", "Metrics"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "galgotias",
    institution: "Galgotias University",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2024 – 2028",
    score: "CGPA: 8.89",
    location: "Greater Noida, Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Computer Vision",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Probability & Statistics",
      "Linear Algebra"
    ]
  },
  {
    id: "childrens-academy-12",
    institution: "Children's Academy",
    degree: "Senior Secondary (Class XII — CBSE)",
    period: "2023",
    score: "78%",
    location: "India"
  },
  {
    id: "childrens-academy-10",
    institution: "Children's Academy",
    degree: "Secondary School (Class X — CBSE)",
    period: "2021",
    score: "90%",
    location: "India"
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
    value: "Bronze",
    title: "Maths Olympiad Medal",
    description: "International Mathematics Olympiad Bronze medallist demonstrating quantitative rigor.",
    colorClass: "text-amber-400"
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
  },
  {
    value: "120×",
    title: "Vector Search Speedup",
    description: "pgvector HNSW sub-millisecond retrieval (<1.5ms) replacing linear brute-force scan.",
    colorClass: "text-cyan-400"
  }
];
