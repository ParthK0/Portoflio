export type Tier = "flagship" | "engineering" | "supporting";

export type Project = {
  slug: string;
  title: string;
  meta: string;
  tier: Tier;
  img: string;
  color: string;
  href: string;
  gallery?: string[];
};

export type Detail = {
  t: string;
  r: string;
  team?: string;
  sample?: number;
  tag: string;
  pr: string;
  so: string;
  f: [string, string][];
  s: string[];
  a: [string, string[]][];
  c: [string, string][];
  x: [string, string][];
  m?: [string, string][];
  dc?: [string, string, string][];
};

// Edit freely. tier decides the tab; sample: 1 shows a "Sample content" badge on the detail page.
export const PROJECTS: Project[] = [
  {
    slug: "probe",
    title: "PROBE",
    meta: "Adaptive multi-agent voice interview AI",
    tier: "flagship",
    img: "/images/probe/dashboardhero.png",
    color: "#2a1b3a",
    href: "https://github.com/ParthK0",
    gallery: [
      "/images/probe/dashboardhero.png",
      "/images/probe/interview-room.png",
      "/images/probe/match-score.png",
      "/images/probe/perception.png",
      "/images/probe/report.png",
      "/images/probe/voice-agent.png",
    ],
  },
  {
    slug: "shree-krishna-transport",
    title: "Shree Krishna Transport",
    meta: "Commercial logistics & freight platform",
    tier: "flagship",
    img: "/images/shree-krishna-transport/hero1.png",
    color: "#1a2c20",
    href: "https://www.shree-krishna-transport.org/",
    gallery: [
      "/images/shree-krishna-transport/hero1.png",
      "/images/shree-krishna-transport/2.png",
      "/images/shree-krishna-transport/3.png",
      "/images/shree-krishna-transport/4.png",
    ],
  },
  {
    slug: "reconpilot",
    title: "ReconCraft / FinPilot",
    meta: "Deterministic AI reconciliation engine",
    tier: "flagship",
    img: "/images/reconcraft/hero.png",
    color: "#2b2a12",
    href: "https://github.com/ParthK0",
    gallery: [
      "/images/reconcraft/hero.png",
      "/images/reconcraft/dashboard.png",
      "/images/reconcraft/engine.png",
      "/images/reconcraft/paisa-validator.png",
      "/images/reconcraft/ledger-matching.png",
      "/images/reconcraft/benchmark.png",
    ],
  },
  {
    slug: "aetherface",
    title: "AetherFace.ai",
    meta: "Biometric attendance & vector database platform",
    tier: "engineering",
    img: "/images/aetherface/hero.png",
    color: "#0f2f3d",
    href: "https://github.com/ParthK0",
    gallery: [
      "/images/aetherface/hero.png",
      "/images/aetherface/1.png",
      "/images/aetherface/2.png",
      "/images/aetherface/3.png",
      "/images/aetherface/4.png",
    ],
  },
  {
    slug: "electiq",
    title: "ElectIQ",
    meta: "Civic education & grounded AI platform",
    tier: "engineering",
    img: "/images/electiq/hero.png",
    color: "#1b1b3a",
    href: "https://github.com/ParthK0/election",
    gallery: [
      "/images/electiq/hero.png",
      "/images/electiq/2.png",
      "/images/electiq/3.png",
    ],
  },
  {
    slug: "quantcraft",
    title: "QuantCraft 1.0",
    meta: "Minecraft-themed hackathon event platform",
    tier: "supporting",
    img: "/images/quantcarft/hero.png",
    color: "#1c2b1e",
    href: "https://github.com/ParthK0/Quantacraft",
    gallery: [
      "/images/quantcarft/hero.png",
      "/images/quantcarft/about.png",
      "/images/quantcarft/overview.png",
      "/images/quantcarft/questions.png",
    ],
  },
  {
    slug: "sparkx",
    title: "SparkX 3.0",
    meta: "Hackathon & innovation collaboration platform",
    tier: "supporting",
    img: "/images/sparkx3.0/hero.png",
    color: "#281838",
    href: "https://github.com/ParthK0",
    gallery: [
      "/images/sparkx3.0/hero.png",
      "/images/sparkx3.0/2.png",
      "/images/sparkx3.0/3.png",
      "/images/sparkx3.0/4.png",
      "/images/sparkx3.0/5.png",
    ],
  },
];

export const DETAILS: Record<string, Detail> = {
  "shree-krishna-transport": {
    t: "Client project, production",
    r: "Solo Full-Stack Developer & Technical Architect",
    team: "Solo Engineering",
    tag: "High-performance logistics & freight dispatch platform connecting industrial shippers with fleet operators across North-Western India with programmatic route SEO, verified rate calculators, and automated dual-dispatch.",
    pr: "Regional freight transport in North-Western India (Rajasthan, Gujarat, Delhi NCR) relies on manual phone calls, untracked broker commissions, and opaque pricing, causing heavy lead abandonment and lost commercial inquiries.",
    so: "A decoupled React 19 SPA and Express REST API featuring transparent verified route tariffs, interactive Leaflet corridor mapping, and a fail-safe dual-channel lead engine pushing to WhatsApp and EmailJS simultaneously without initial database overhead.",
    f: [
      [
        "Interactive freight booking engine",
        "Multi-step form capturing source/destination, payload weight, and vehicle category (14ft–32ft trailers/containers) with live tariff estimates.",
      ],
      [
        "Fleet partner onboarding portal",
        "Driver & fleet owner registration capturing vehicle numbers, tonnage capacity, operating routes, and current locations.",
      ],
      [
        "Programmatic route directory (18+ corridors)",
        "Parametric landing pages (/routes/:slug) with JSON-LD LogisticsService and FAQPage schemas for high-density city pairs (Jaipur to Delhi, Mumbai, Ahmedabad, Indore).",
      ],
      [
        "Dual-dispatch zero-loss lead engine",
        "Redundant pipeline submitting leads via asynchronous EmailJS (with FormSubmit fallback) while generating pre-formatted WhatsApp chat payloads for sub-minute deal closure.",
      ],
      [
        "Dynamic rate card & payload matrix",
        "Tabbed transparent pricing for Table A (5-ton), Table B (15-ton), parcels, and Pan-India corridors.",
      ],
      [
        "Security & abuse prevention",
        "Tiered rate limiting (100 req/min global, 5 req/min on forms) preventing denial-of-service attacks and bot inquiry spam.",
      ],
    ],
    s: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind v4",
      "Framer Motion",
      "Leaflet",
      "Express",
      "EmailJS",
      "WhatsApp API",
      "Vercel Edge CDN",
    ],
    a: [
      [
        "Client (React 19 + Vite)",
        [
          "Tailwind v4 industrial design system",
          "Framer Motion micro-interactions",
          "Leaflet GIS national highway mapping",
          "usePageSEO + dynamic Schema.org JSON-LD",
        ],
      ],
      [
        "API Gateway (Express + TypeScript)",
        [
          "express-rate-limit (100/min global, 5/min forms)",
          "Typed route & rate registry (routeRegistry.ts)",
          "Error handling & structured request logging",
        ],
      ],
      [
        "Dual Lead Dispatch",
        [
          "WhatsApp click-to-chat payload generator",
          "Asynchronous EmailJS background delivery",
          "FormSubmit webhook fallback",
        ],
      ],
      [
        "Edge Infrastructure",
        ["Vercel Edge CDN rewrites", "Sharp WebP optimization pipeline", "Vercel Web Analytics"],
      ],
    ],
    c: [
      [
        "Zero lead abandonment via dual dispatch",
        "Submits lead data asynchronously via EmailJS in the background while instantly redirecting the shipper to a pre-filled WhatsApp message for immediate real-time negotiation.",
      ],
      [
        "Programmatic SEO across 18+ corridors",
        "Used a single parametric template (RouteTemplatePage.tsx) backed by a strictly-typed static registry (routeRegistry.ts) to avoid duplicate templates and bundle bloat.",
      ],
      [
        "Mobile performance over 3G/4G",
        "Employed code splitting with React.lazy, WebP image compression with Sharp, and conditional viewport mounting for Leaflet map tiles to maintain sub-1.5s FCP.",
      ],
    ],
    m: [
      [
        "End-to-end architecture & build",
        "Designed and implemented the complete application from frontend UI and Express backend to rate engine and Vercel edge deployment.",
      ],
      [
        "Client-side programmatic SEO engine",
        "Engineered usePageSEO.ts dynamically injecting canonical tags, OpenGraph cards, and structured JSON-LD schemas.",
      ],
      [
        "Dual-channel lead pipeline",
        "Built the fail-safe dispatch mechanism pairing instant WhatsApp negotiation with permanent administrative email audits.",
      ],
      [
        "Data normalization",
        "Compiled, normalized, and typed regional freight rate data from CSVs into type-safe static registries.",
      ],
    ],
    dc: [
      [
        "Decoupled React 19 SPA vs Next.js SSR",
        "Next.js SSR, Astro",
        "Sub-second HMR and lightweight static edge hosting on Vercel at zero server upkeep costs, while client SEO hooks fulfilled evergreen crawler requirements.",
      ],
      [
        "Typed static config registry vs relational database",
        "PostgreSQL, MongoDB Atlas",
        "Tariff updates occur weekly/monthly; an in-code typed registry delivers sub-1ms queries with zero database connection pool overhead.",
      ],
      [
        "Dual-channel dispatch vs backend SMTP server",
        "SendGrid / Nodemailer SMTP gateway",
        "Eliminated maintenance overhead and monthly tiers for a small business while achieving zero single-point-of-failure via FormSubmit and WhatsApp fallbacks.",
      ],
    ],
    x: [
      ["95+", "Lighthouse SEO and accessibility"],
      ["<1.5s", "First contentful paint on throttled 4G"],
      ["18+", "Freight corridors indexed"],
      ["100%", "Lead capture redundancy"],
    ],
  },
  probe: {
    t: "Hackathon to scalable product",
    r: "UX Reviewer, Backend Contributor & Feature Architect",
    team: "Team of 4 • Agora Hackathon Track",
    tag: "Live voice-based AI mock interview platform where a 3-person AI panel (Technical, Product, HR) conducts realistic, resume-grounded interviews with 3D lip-synced avatars, real-time proctoring, and evidence-based scoring.",
    pr: "Interview prep tools are static flashcard lists with no follow-ups, no adaptive difficulty, robotic text-to-speech loops, and no feedback on what candidates actually said vs what they claimed on their resume.",
    so: "A Technical, Product, and HR AI panel takes dynamic turns in a single Agora RTC channel. Claude contextually orchestrates handoffs with distinct Murf TTS voices, while in-browser MediaPipe proctors and Claude scores line-by-line evidence.",
    f: [
      [
        "Live voice AI panel interview",
        "3 distinct interviewers (Technical — Abhinav, Product — Anisha, HR — Alia) with context-driven handoffs orchestrated by Claude.",
      ],
      [
        "Word-timed 3D lip sync (60 FPS)",
        "VisemeScheduler maps live transcript words to 15 ARKit blend shapes + jaw open on rigged GLB models with head tracking and blink cycles.",
      ],
      [
        "Resume analysis with reasoning flowchart",
        "Claude parses PDF resumes natively (no OCR), scores role-fit percentage, and renders an interactive node-edge reasoning graph.",
      ],
      [
        "Evidence-based candidate scorecard",
        "Post-call assessment breaking down competencies, panel contradictions, and role-fit verdict with direct transcript citations.",
      ],
      [
        "Zero-server-upload proctoring",
        "MediaPipe Tasks Vision tracks gaze, head pose, fullscreen lockdown, tab-switches, and DevTools inspection locally in <16ms per frame.",
      ],
      [
        "AI match score & 1-click practice",
        "Scrapes live job postings via JobSpy + BeautifulSoup, calculates resume percentage match, and grounds interview questions in real requirements.",
      ],
      [
        "Multi-tenant recruiter dashboard",
        "Create organizations, post jobs, invite team members, evaluate candidate pipelines, and compare scores side-by-side.",
      ],
    ],
    s: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "react-three-fiber",
      "Agora RTC / RTM",
      "MediaPipe",
      "FastAPI",
      "Claude",
      "Murf TTS",
      "MongoDB",
      "Redis",
      "JobSpy",
      "Docker",
    ],
    a: [
      [
        "Browser Client",
        [
          "Next.js 16 App Router + React 19",
          "react-three-fiber + drei 3D avatar rendering",
          "Agora RTC audio streaming + RTM messaging",
          "MediaPipe Tasks Vision local proctoring",
        ],
      ],
      [
        "Next.js Server Layer",
        [
          "NextAuth + JWT session management",
          "MongoDB transcript & chat persistence",
          "Cloudinary media upload proxies",
        ],
      ],
      [
        "FastAPI Backend",
        [
          "Agora dynamic token minting",
          "Panel orchestrator & handoff controller",
          "Assessment engine with transcript citations",
          "JobSpy + BeautifulSoup automated scraper",
        ],
      ],
      [
        "AI & Voice Services",
        [
          "Anthropic Claude (reasoning & scoring)",
          "Murf TTS (one distinct voice per seat)",
          "Agora Conversational AI engine",
        ],
      ],
    ],
    c: [
      [
        "Panel handoff transcript continuity",
        "Agora locks TTS voice per session; switching requires a session restart which resets turn IDs. Solved by bumping a generation counter folded into MongoDB document IDs so turns never overwrite.",
      ],
      [
        "3D avatar scale & height normalization",
        "Models from diverse sources had mismatched scales. Solved by measuring each rig's Head bone and dynamically normalizing heights to TARGET_HEAD_Y with scale clamped between 0.6x–1.8x.",
      ],
      [
        "Word-timed visemes vs volume flapping",
        "Volume-based flapping looks robotic. Solved via VisemeScheduler mapping words to 15 ARKit blend shapes with a minimum weight floor for consonant plosives.",
      ],
      [
        "Prompt-injection defense",
        "Scraped job descriptions and candidate speech are untrusted data. Solved via _untrusted() prompt fences instructing Claude that enclosed text is strictly data, never instructions.",
      ],
    ],
    m: [
      [
        "AI match score & 1-click practice",
        "Engineered the resume-job ranking system that scores fit percentage and initiates practice sessions tailored to live job listings.",
      ],
      [
        "Panel handoff continuity",
        "Contributed to the Agora session restart pipeline and generation-counted MongoDB upsert logic.",
      ],
      [
        "Recruiter-to-candidate pipeline",
        "Helped build organization management, candidate filtering, and side-by-side candidate comparison views.",
      ],
      [
        "Frontend polish & UX audit",
        "Built skeleton loading states, fixed navigation/layout bugs, and introduced Redis caching for fast candidate filtering.",
      ],
    ],
    dc: [
      [
        "Agora Conversational AI",
        "WebRTC + OpenAI Realtime, Twilio, LiveKit",
        "Managed STT→LLM→TTS pipeline with sub-second turn-taking without managing separate audio socket servers.",
      ],
      [
        "Full pipeline restart per handoff",
        "Single voice for all 3 interviewers",
        "Agora locks TTS voice per session; pipeline restart with generation counters was the only way to deliver 3 distinct conversational voices.",
      ],
      [
        "In-browser MediaPipe proctoring",
        "Server-side video stream uploads",
        "Runs locally in-browser keeping frame latency <16ms while ensuring strict candidate privacy with zero video uploads.",
      ],
      [
        "Claude for reasoning & assessment",
        "GPT-4, Gemini",
        "Native PDF document understanding without OCR and superior structured JSON output for evidence citation.",
      ],
    ],
    x: [
      ["60fps", "Word-timed ARKit lip sync"],
      ["<800ms", "Voice turn-taking latency"],
      ["<16ms", "In-browser proctoring per frame"],
      ["18", "Contract-tested API routes"],
    ],
  },
  aetherface: {
    t: "Enterprise Biometrics & Vector Attendance Platform",
    r: "Full-Stack Engineer, System Architect & DevOps",
    team: "Solo Engineering • 7-Phase Architecture Modernization",
    tag: "Real-time AI-powered facial recognition attendance platform built with Spring Boot 3, React 19, and PostgreSQL pgvector, achieving <1.5ms face matching via HNSW indexing and AES-256-GCM biometric encryption.",
    pr: "Manual attendance and legacy biometric kiosks suffer from proxy attendance (spoofing), slow throughput (2–5 min per 60 students), linear O(N) face search degrading to 180ms+ latency, and plaintext biometric storage violating GDPR/ISO 24745.",
    so: "A 3-tier cloud-native platform where browser WebRTC and face-api.js extract 512-D face embeddings, Spring Boot validates and encrypts them via AES-256-GCM, pgvector matches nearest neighbors in <1.5ms via HNSW indexing, and WebSocket STOMP broadcasts updates in <50ms.",
    f: [
      [
        "Real-time face recognition attendance",
        "WebRTC camera feed captures live frames, SSD MobileNet extracts 512-D embeddings, and pgvector marks attendance when similarity >= 0.65.",
      ],
      [
        "Sub-millisecond vector similarity search",
        "PostgreSQL pgvector HNSW index (m=16, ef_construction=64) achieves <1.5ms latency across 10,000+ student embeddings (120× speedup).",
      ],
      [
        "AES-256-GCM biometric encryption",
        "All face vectors are encrypted at rest with fail-closed security (never returns or persists plaintext on cryptographic failure).",
      ],
      [
        "WebSocket STOMP real-time push",
        "Broadcasts attendance events over /topic/attendance to all connected admin dashboards in <50ms, replacing 5s polling.",
      ],
      [
        "Stateless JWT + 3-tier RBAC",
        "Role-based access control (ADMIN, FACULTY, STUDENT) with BCrypt password hashing and rate limiting filters.",
      ],
      [
        "Admin analytics & student self-service",
        "KPIs, attendance rate trends, department breakdowns, automated defaulter detection, and student leave request workflows.",
      ],
      [
        "1-click demo seeder & OpenAPI docs",
        "Populates 2 universities, 4 departments, 20 faculty/students, and 14 days of realistic logs with auto-generated Swagger UI.",
      ],
    ],
    s: [
      "Java 21 LTS",
      "Spring Boot 3.3.4",
      "Spring Security 6",
      "PostgreSQL 16",
      "pgvector (HNSW)",
      "React 19",
      "Vite",
      "face-api.js",
      "WebSocket STOMP",
      "AES-256-GCM",
      "Docker Compose",
      "Nginx",
    ],
    a: [
      [
        "Browser Client (React 19 + Vite)",
        [
          "WebRTC camera capture & SSD MobileNet detection",
          "face-api.js 512-D descriptor extraction",
          "STOMP.js real-time live attendance feed",
          "Glassmorphism UI design system with dark mode",
        ],
      ],
      [
        "Spring Boot 3.3 Application Layer",
        [
          "Spring Security 6 (JWT filter chain + RBAC)",
          "FaceRecognitionEngine matching controller",
          "BiometricSecurityService (AES-256-GCM fail-closed)",
          "WebSocket STOMP message broker (/topic/attendance)",
        ],
      ],
      [
        "Database Layer (PostgreSQL 16 + pgvector)",
        [
          "HNSW index on vector(512) with cosine ops",
          "@ColumnTransformer native SQL casting",
          "ACID transactional student roster & attendance logs",
        ],
      ],
      [
        "Infrastructure & DevOps",
        [
          "Multi-stage Docker Compose orchestration",
          "Nginx production reverse proxy",
          "GitHub Actions automated build & test CI/CD",
        ],
      ],
    ],
    c: [
      [
        "Hibernate & pgvector type mismatch",
        "Hibernate cannot map Java Strings to PostgreSQL vector(512). Solved using @ColumnTransformer(read=\"embedding_vector::text\", write=\"?::vector\") and native SQL vector casting.",
      ],
      [
        "O(N) brute-force scan to O(log N) HNSW",
        "Linear in-memory comparisons degraded to ~180ms at 10k faces. Solved by migrating to pgvector HNSW indexing, slashing latency to <1.5ms (120× speedup).",
      ],
      [
        "Real-time updates without polling storms",
        "HTTP polling every 5s wasted bandwidth and crashed under concurrent load. Solved by implementing WebSocket STOMP push (<50ms delivery for 100+ concurrent viewers).",
      ],
      [
        "Biometric privacy & GDPR compliance",
        "Storing raw embeddings risks data leaks. Solved by building BiometricSecurityService with AES-256-GCM authenticated encryption and fail-closed error handling.",
      ],
    ],
    m: [
      [
        "Complete 7-phase modernization",
        "Modernized a legacy JavaFX desktop prototype into a cloud-native 3-tier platform deployed via single docker-compose up.",
      ],
      [
        "Backend architecture",
        "Built 9 REST controllers, 9 service classes, 9 JPA entities, JWT security filters, rate limiting, and WebSocket STOMP broker.",
      ],
      [
        "pgvector HNSW integration",
        "Designed PostgreSQL schema with pgvector extension, tuned HNSW index parameters (m=16, ef_construction=64), and wrote vector casting queries.",
      ],
      [
        "Zero-trust security layer",
        "Implemented AES-256-GCM biometric encryption, vector dimensionality validation, CORS hardening, and rate limiting.",
      ],
    ],
    dc: [
      [
        "pgvector over dedicated vector DB",
        "Pinecone, Milvus, Weaviate",
        "Runs natively inside PostgreSQL with shared ACID transactions alongside student rosters, zero external infrastructure, and zero cost.",
      ],
      [
        "Spring Boot 3 (Java 21) over Node.js",
        "Express.js, Fastify, Django",
        "Strong compile-time type safety, mature Spring Security 6 framework, and robust enterprise JPA ecosystem.",
      ],
      [
        "WebSocket STOMP over Server-Sent Events",
        "SSE, long-polling",
        "Full-duplex persistent connections with <50ms delivery and built-in topic pub/sub broker supporting two-way client responses.",
      ],
      [
        "AES-256-GCM over AES-CBC",
        "AES-CBC + HMAC, ChaCha20",
        "Authenticated encryption (integrity + confidentiality) in a single primitive with random 12-byte IVs preventing replay attacks.",
      ],
    ],
    x: [
      ["<1.5ms", "Vector search at 10k faces (was ~180ms)"],
      ["120×", "Vector search speedup via HNSW"],
      ["<50ms", "Event delivery (was 5s polling)"],
      ["100+", "Concurrent dashboard viewers"],
      ["AES-256", "Biometric encryption, fail-closed"],
    ],
  },
  electiq: {
    t: "Full-Stack Civic AI Platform",
    r: "Lead Full-Stack & AI Engineer",
    team: "Solo Engineering",
    tag: "Full-stack civic intelligence platform combining real-time election polling with an AI conversational assistant for unbiased candidate comparisons, policy fact-checking, and interactive ballot guidance.",
    pr: "Voters struggle with political polarization, fragmented manifesto documents, algorithmic social media bias, and voter apathy. Accessing neutral, side-by-side policy comparisons before stepping into a polling booth is difficult.",
    so: "A React 19 SPA communicating with an isolated Express 5 backend gateway that secures Google Gemini API calls behind IP rate limiting, Zod runtime schema validation, and multi-shot objective system instructions.",
    f: [
      [
        "Interactive candidate & policy comparison",
        "Multi-party side-by-side matrix comparing candidates across economic, climate, healthcare, and education policy platforms.",
      ],
      [
        "AI civic advisor with neutrality guardrails",
        "Context-aware conversational assistant guided by multi-shot non-partisan prompts answering ballot and voting queries objectively.",
      ],
      [
        "Simulated polling & ballot casting",
        "Interactive mock ballots with live client-side tallying, feedback confirmation, and voter education guides.",
      ],
      [
        "Voter registration & deadline lookup",
        "State/regional lookup assistant providing deadlines, polling station requirements, and acceptable voter IDs.",
      ],
      [
        "Hardened API gateway",
        "Express 5 proxy with Helmet security headers, strict CORS, IP-based rate limiting, and Zod input sanitization.",
      ],
      [
        "Accessible WCAG 2.1 AA design system",
        "Screen-reader focus traps, full keyboard navigation, high-contrast dark themes, and dynamic font scaling.",
      ],
    ],
    s: [
      "React 19",
      "Vite",
      "Tailwind v4",
      "Framer Motion",
      "Express 5",
      "Zod",
      "Google Gemini",
      "Firebase Firestore",
      "Vitest",
      "Playwright",
      "GitHub Actions",
    ],
    a: [
      [
        "Client (React 19 / Vite)",
        [
          "Tailwind v4 + Framer Motion responsive UI",
          "Accessible WCAG 2.1 AA keyboard focus traps",
          "React Router v7 + Helmet Async metadata",
          "Optimistic UI state with React Context reducers",
        ],
      ],
      [
        "API Gateway (Express 5 Server)",
        [
          "Helmet security headers & strict CORS whitelist",
          "express-rate-limit IP protection",
          "Zod schema validation & DOMPurify sanitization",
          "Isolated Gemini proxy keeping keys off client",
        ],
      ],
      [
        "AI & Data Layer",
        [
          "Google Generative AI (Gemini Flash API)",
          "Neutrality-prompted multi-shot system instructions",
          "Firebase Firestore analytics & state sync",
        ],
      ],
      [
        "DevOps & Quality",
        [
          "Vitest unit test suite",
          "Playwright E2E & Axe accessibility tests",
          "Secretlint automated secret scanning",
          "GitHub Actions CI/CD workflows",
        ],
      ],
    ],
    c: [
      [
        "API key protection & quota security",
        "Prototype called Gemini directly from the browser, exposing keys. Solved by engineering an Express 5 proxy with IP rate limiting and authenticated endpoints.",
      ],
      [
        "Absolute neutrality in political AI outputs",
        "Raw LLMs exhibit partisan bias. Solved via multi-shot system instructions requiring objective representation of both perspectives, validated by Zod schemas.",
      ],
      [
        "Wizard state desynchronization",
        "Multi-step setup lost progress on refresh. Solved by structuring state into scoped React Context providers with local storage synchronization and explicit action reducers.",
      ],
    ],
    m: [
      [
        "Monorepo architecture & build",
        "Engineered the complete application, splitting client and server into clean npm workspaces with concurrent development tooling.",
      ],
      [
        "Secure AI proxy layer",
        "Implemented the Express 5 backend gateway preventing client API key exposure with rate limiting and Zod sanitization.",
      ],
      [
        "Neutrality prompt engineering",
        "Formulated multi-shot guardrails ensuring balanced, objective analysis across all political queries.",
      ],
      [
        "Automated CI/CD & testing",
        "Configured GitHub Actions running Secretlint secret scanning, Vitest unit tests, and Playwright E2E accessibility audits.",
      ],
    ],
    dc: [
      [
        "Vite + React 19 SPA vs Next.js SSR",
        "Next.js, Remix",
        "Sub-second HMR development speed, effortless static CDN hosting, and clean separation from backend API services.",
      ],
      [
        "Express 5 gateway vs serverless functions",
        "Firebase direct functions",
        "Zero cold-start latency, faster local testing, and standard middleware composition for rate limiting and CORS.",
      ],
      [
        "Zod schema validation",
        "Joi, Yup",
        "TypeScript-first static type inference with zero runtime bloat across both frontend forms and backend payloads.",
      ],
      [
        "Tailwind CSS v4",
        "Styled Components, Vanilla CSS Modules",
        "Zero runtime CSS overhead, modern design token integration, and consistent high-contrast styling.",
      ],
    ],
    x: [
      ["98+", "Lighthouse performance"],
      ["100", "Accessibility, best practices and SEO"],
      ["<180kB", "Gzipped initial bundle"],
      ["<15ms", "TTFB overhead beyond the LLM"],
    ],
  },
  alphaforge: {
    sample: 1,
    t: "Flagship, multi-agent AI platform",
    r: "",
    tag: "A multi-agent stock research platform where four specialist agents and a synthesis agent turn market data into one research brief.",
    pr: "Retail research is scattered across filings, news, charts and risk tools, and no single view reconciles them.",
    so: "Fundamental, Sentiment, Technical and Risk agents run in a LangGraph workflow, and a Synthesis agent merges their findings into one brief.",
    f: [
      [
        "Four specialist agents",
        "Fundamental, Sentiment, Technical and Risk analysis run in parallel.",
      ],
      [
        "Synthesis agent",
        "Resolves conflicts between agents into one structured brief.",
      ],
      [
        "Vector memory",
        "pgvector stores filings and past research for retrieval.",
      ],
      [
        "Fast market data",
        "Redis keeps hot data and agent state quick to read.",
      ],
    ],
    s: [
      "LangGraph",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "Redis",
    ],
    a: [
      [
        "Client",
        ["Next.js dashboard", "Streaming research brief"],
      ],
      [
        "API",
        ["FastAPI gateway", "Redis cache + job state"],
      ],
      [
        "Agents (LangGraph)",
        ["Fundamental", "Sentiment", "Technical", "Risk", "Synthesis"],
      ],
      [
        "Data",
        ["PostgreSQL", "pgvector embeddings", "Market and news feeds"],
      ],
    ],
    c: [
      [
        "Coordinating agents",
        "A graph workflow runs the specialists in parallel and passes their outputs to one synthesis step.",
      ],
      [
        "Grounded answers",
        "Retrieval over pgvector keeps claims tied to source documents.",
      ],
    ],
    x: [
      ["4", "Specialist agents"],
      ["1", "Synthesis agent"],
      ["3", "Data stores"],
    ],
  },
  forge: {
    sample: 1,
    t: "Flagship, multi-tenant platform",
    r: "Architect and spec author",
    tag: "A multi-tenant commerce platform architected around swappable providers, an event bus and tenant-aware middleware.",
    pr: "Commerce backends tend to hard-wire payment and AI vendors, and leak data across tenants as they grow.",
    so: "Provider interfaces isolate vendors, an event bus decouples modules, and tenant context middleware scopes every request.",
    f: [
      [
        "Tenant isolation",
        "Tenant context middleware scopes every query.",
      ],
      [
        "Provider pattern",
        "Payments and AI sit behind swappable interfaces.",
      ],
      [
        "Event bus",
        "Modules react to events instead of calling each other.",
      ],
      [
        "Payments and AI",
        "Razorpay checkout and Gemini-powered features.",
      ],
    ],
    s: [
      "Next.js",
      "Express",
      "TypeScript",
      "Drizzle",
      "Neon",
      "JWT",
      "Gemini",
      "Razorpay",
    ],
    a: [
      [
        "Client",
        ["Next.js storefront", "Tenant admin"],
      ],
      [
        "API",
        [
          "Express + TypeScript",
          "JWT auth",
          "Tenant context middleware",
        ],
      ],
      [
        "Core",
        ["Event bus", "Provider interfaces"],
      ],
      [
        "External",
        ["Neon Postgres (Drizzle)", "Razorpay", "Gemini"],
      ],
    ],
    c: [
      [
        "Tenant data safety",
        "Every request resolves its tenant first, so queries cannot cross tenant boundaries.",
      ],
      [
        "Vendor lock-in",
        "Providers hide Razorpay and Gemini behind interfaces so either can be swapped.",
      ],
    ],
    x: [
      ["8", "Core technologies"],
      ["3", "Architecture patterns"],
      ["1", "Codebase, many tenants"],
    ],
  },
  reconpilot: {
    t: "Razorpay AI Buildathon — Track 04: 'AI Finance Controller'",
    r: "Solo Developer (Full-Stack + AI System Design)",
    team: "Solo Engineering • 101 Tests • Ground Truth Benchmark",
    tag: "AI-powered 3-way financial reconciliation engine that matches Razorpay settlements, bank statements, and ERP invoices using a 7-stage deterministic rule engine first and an LLM verification engine only for ambiguous residuals — with every AI decision independently verified by paisa-exact arithmetic before acceptance.",
    pr: "Finance/ops teams manually reconcile 3 disjoint data sources (gateway settlements, bank credits, ERP invoices) every settlement cycle. It is slow (~3 min/record), error-prone, and impossible to audit weeks later because why a ₹30 delta was accepted is never recorded.",
    so: "FastAPI normalizes CSVs into unified records; a 7-rule deterministic engine resolves 90–95% at 100% confidence. Ambiguous residuals hit the LLM Finance Verification Engine, whose hypotheses must pass a zero-trust Paisa Arithmetic Validator before 1-click ERP export.",
    f: [
      [
        "3-way CSV upload & schema normalization",
        "FastAPI + Pandas normalizes invoices, Razorpay settlements, and bank statements across currencies (₹/$), date formats, and reference IDs.",
      ],
      [
        "7-stage deterministic rule engine",
        "Resolves 90–95% of records at zero AI cost across exact ID, UTR, same-day amount, date window, statutory rate card (MDR/GST/TDS), tolerance, and FX corridor.",
      ],
      [
        "Finance Verification Engine",
        "LLM-powered hypothesis generator (GPT-5.6 Terra / Gemini 3.1 Pro) generating structured JSON: difference amount, likely reason, evidence field, and confidence score.",
      ],
      [
        "Paisa Arithmetic Validator",
        "Zero-trust independent recalculation of every AI claim using Python Decimal (`invoice - deductions == settlement` to ₹0.01) — confidence is grounded in a `==` check.",
      ],
      [
        "30+ category exception taxonomy",
        "Classifies unresolved records across 8 domains (settlement delay, missing credit, duplicate invoice, refund pending, FX variance, statutory mismatch).",
      ],
      [
        "Evidence Drawer & Human Review",
        "Per-record calculation traces, AI reasoning, and audit evidence with persistent feedback memory (+5% calibration boost on recurring patterns).",
      ],
      [
        "1-click ERP journal voucher export",
        "Generates compliant Tally Prime XML (<ENVELOPE>), Zoho Books CSV, and NetSuite SuiteTalk JSON ready for direct accounting import.",
      ],
      [
        "Automated evaluation harness (score.py)",
        "Scores 100-record batches against labeled ground truth, proving 100% precision, 100% recall, 92% auto-match rate, and 4.60 hours saved.",
      ],
    ],
    s: [
      "FastAPI",
      "Python 3.11",
      "Pydantic v2",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL 16",
      "Pandas",
      "SQLAlchemy 2.0",
      "GPT-5.6 Terra",
      "Gemini 3.1 Pro",
      "Pytest (101 tests)",
      "Docker Compose",
      "Tally Prime XML",
    ],
    a: [
      [
        "Frontend Dashboard (Next.js 14)",
        [
          "3-way CSV uploader with 10MB streaming guard",
          "Visual pipeline stepper & Recharts metrics",
          "Evidence drawer with per-record math traces",
          "Human review modal with persistent feedback loop",
        ],
      ],
      [
        "Core Engine & Rules (FastAPI)",
        [
          "Pandas multi-source schema normalizer",
          "7-stage deterministic rule engine",
          "30+ category exception taxonomy classifier",
          "Sliding-window rate limiter (120 req/min)",
        ],
      ],
      [
        "AI Verification & Math Gate",
        [
          "Finance Verification Engine (GPT-5.6 / Gemini 3.1)",
          "Strict JSON schema enforcement with pre-computed deltas",
          "Paisa Arithmetic Validator (Python Decimal == check)",
          "Per-batch spend ceiling & graceful timeout fallback",
        ],
      ],
      [
        "Storage, Exports & Eval",
        [
          "PostgreSQL 16 (prod) / SQLite (dev) via SQLAlchemy",
          "1-click ERP exporters (Tally Prime XML / Zoho / NetSuite)",
          "101 automated tests across 25 suites (79% coverage)",
          "Synthetic data generator with labeled ground truth",
        ],
      ],
    ],
    c: [
      [
        "LLM hallucination in financial money math",
        "False positive matches are catastrophically worse than false exceptions. Solved with a Deterministic Validator that independently re-derives every AI hypothesis using Python Decimal (`invoice - deductions == settlement`). If it doesn't match to ₹0.01, it is routed to human review.",
      ],
      [
        "Balancing AI cost and latency on 100-record batches",
        "Sending 100 records to an LLM is slow and costly. Solved with a rules-first architecture: 7 deterministic rules absorb 90–95% of records at zero AI cost, narrowing the LLM scope to ~5–10 ambiguous records per batch at ~$0.03 total cost.",
      ],
      [
        "Auditability weeks after reconciliation",
        "Controllers opening a record 3 weeks later need to see exactly why it matched. Solved by logging prompt, full response, latency, token count, firing rule, taxonomy category, and evidence field to an ai_verifications table.",
      ],
      [
        "Handling mid-batch LLM outages",
        "A live demo or finance batch cannot crash if an API times out. Solved with graceful degradation: API timeouts mark the record as 'needs review' without failing the batch, and per-batch spend ceilings prevent runaway costs.",
      ],
    ],
    m: [
      [
        "Solo system architecture & engineering",
        "Designed and built the full-stack system end-to-end: FastAPI backend, Next.js frontend, deterministic rule engine, AI verification layer, and Docker configuration.",
      ],
      [
        "Paisa Arithmetic Validator & zero-trust gate",
        "Engineered the zero-trust validator in Python Decimal that independently recalculates all LLM numeric claims to the paisa before accepting matches.",
      ],
      [
        "7-stage deterministic rules & exception taxonomy",
        "Constructed the 7-stage engine resolving 90–95% of records at zero AI cost and the 30+ category exception classifier across 8 domains.",
      ],
      [
        "Automated test suite & ground truth harness",
        "Built 101 automated tests across 25 suites (79% statement coverage) and the synthetic data generator with labeled ground truth.",
      ],
    ],
    dc: [
      [
        "Rules-first, AI-second pipeline",
        "Pure AI matching end-to-end, ML classifier",
        "Finance teams require unambiguous transactions to be deterministic and auditable. Slashes batch cost from ~$0.30 to ~$0.03.",
      ],
      [
        "Deterministic post-validation of AI output",
        "Trust LLM self-reported confidence directly",
        "The single most critical design choice: the AI proposes, a Python Decimal function disposes. Confidence is grounded in a == check, not model self-report.",
      ],
      [
        "Mid-tier LLM (GPT-5.6 Terra / Gemini 3.1 Pro)",
        "Flagship frontier models",
        "The AI task is strictly narrow (structured JSON for deltas with pre-computed inputs). Mid-tier delivers reliable schema compliance at ~3¢/batch.",
      ],
      [
        "Batch pipeline vs streaming queue",
        "Celery / RQ / Kafka infrastructure",
        "100 records process in 0.29s (core engine); spent build time on core reconciliation logic and mathematical verification rather than queue plumbing.",
      ],
    ],
    x: [
      ["100.00%", "Matching precision (0 false positives)"],
      ["100.00%", "Matching recall (0 missed matches)"],
      ["0.29s", "Core engine time for 100 records"],
      ["101", "Automated tests across 25 suites"],
    ],
  },
  groundcontrol: {
    sample: 1,
    t: "Hackathon project, GenAI platform",
    r: "",
    tag: "A GenAI platform for stadium operations and the fan experience, first built for a FIFA World Cup 2026 hackathon.",
    pr: "Stadium staff juggle crowd, safety and incident signals across disconnected tools while fans get little real-time guidance.",
    so: "Gemini turns live operational data into recommendations for staff and answers for fans, in one platform.",
    f: [
      [
        "Operations view",
        "Live status of gates, crowd and incidents.",
      ],
      [
        "Fan assistant",
        "Gemini answers match-day questions.",
      ],
      [
        "AI recommendations",
        "Suggested actions for operators.",
      ],
      [
        "Docs-first build",
        "SPEC, ARCHITECTURE and TASKS files steered the build.",
      ],
    ],
    s: ["React", "Vite", "FastAPI", "Firestore", "Gemini"],
    a: [
      [
        "Clients",
        ["Ops dashboard (React + Vite)", "Fan app"],
      ],
      [
        "API",
        ["FastAPI", "Role-based views"],
      ],
      [
        "AI",
        ["Gemini recommendations", "Fan assistant"],
      ],
      [
        "Data",
        ["Firestore"],
      ],
    ],
    c: [
      [
        "Many audiences, one platform",
        "Role-specific views share one API and data model.",
      ],
      [
        "Building fast with AI tools",
        "A docs-first workflow kept AI coding tools on track.",
      ],
    ],
    x: [
      ["2", "User groups: staff and fans"],
      ["5", "Core technologies"],
      ["1", "FIFA World Cup 2026 hackathon"],
    ],
  },
  quantcraft: {
    t: "National Student Hackathon Event Platform",
    r: "Frontend Developer / UI Engineer",
    team: "~10 Organizers • 2 Documented Code Contributors",
    tag: "Minecraft-themed, responsive event website for QuantCraft, a national student hackathon with 4 technical tracks, ₹35,000 prize pool, interactive animations, and Unstop registration.",
    pr: "Built to give student participants one clear, engaging place to discover the hackathon, explore technical tracks, view deadlines and prizes, register, and contact organizers without generic forms or mobile rendering glitches.",
    so: "A single-page Next.js 16 application assembling Hero, About, 4 Tracks, Timeline, Prizes, Sponsors, FAQ, and Footer sections with centralized event data, Unstop external routing, and Intersection Observer-backed media loading.",
    f: [
      [
        "Minecraft-inspired visual identity",
        "Custom voxel artwork, themed section containers, pixelated typography, and interactive cursor styling.",
      ],
      [
        "4 technical track showcases",
        "Curated deep dives into AI/ML, Blockchain, Cybersecurity, and Game Development tracks with submission requirements.",
      ],
      [
        "Interactive prize chests & scroll motion",
        "Framer Motion entrance, hover, and scroll-linked animations revealing track bounties and the ₹35,000 prize pool.",
      ],
      [
        "External registration flow to Unstop",
        "Direct routing to the official Unstop hackathon portal with event countdown and deadline synchronization.",
      ],
      [
        "Breakpoint-aware full-screen mobile menu",
        "Dedicated animated navigation keeping dense event timelines, rules, and sponsor details accessible across phone screens.",
      ],
      [
        "Lazy-loaded video & media pipeline",
        "Intersection Observer deferred video playback and Next.js Image optimization maintaining fast initial render without bandwidth waste.",
      ],
    ],
    s: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "React Icons",
      "Unstop API",
      "Vercel",
    ],
    a: [
      [
        "App Shell (Next.js 16 App Router)",
        [
          "React 19 server/client component boundaries",
          "Single-page anchor navigation routing",
          "Vercel Edge static hosting configuration",
        ],
      ],
      [
        "UI & Animation Layer",
        [
          "Tailwind CSS responsive breakpoint utilities",
          "Framer Motion declarative scroll interactions",
          "Custom voxel-themed cards & mobile drawer",
        ],
      ],
      [
        "Media & Performance Optimization",
        [
          "Next.js Image automatic resizing & WebP format",
          "Intersection Observer deferred video loading",
          "Guarded client-only browser API invocations",
        ],
      ],
      [
        "Centralized Event Architecture",
        [
          "Centralized data module for tracks, FAQs & sponsors",
          "External Unstop registration pipeline",
          "Interactive Google Maps campus venue integration",
        ],
      ],
    ],
    c: [
      [
        "Media-heavy landing page performance",
        "Rich custom visuals and background video risked inflating load times and hurting low-end mobile devices. Solved with Next.js image optimization and Intersection Observer deferred video loading so media loads only as viewers scroll into viewport.",
      ],
      [
        "Complex mobile event navigation",
        "Dense event info (schedules, 4 tracks, rules, prizes) easily overwhelmed mobile screens. Solved via a dedicated animated full-screen mobile menu with touch-friendly tap targets and collapsible drawers.",
      ],
      [
        "Browser-only APIs causing build failures",
        "Client-side window/document access caused server-rendering mismatches in Next.js App Router. Solved by isolating interactive components into explicit client boundaries with guarded execution checks.",
      ],
    ],
    m: [
      [
        "Responsive UI engineering across breakpoints",
        "Built and refined desktop and mobile layouts for hero, technical tracks, timeline, prizes, and team sections.",
      ],
      [
        "Animation & interaction implementation",
        "Implemented Framer Motion entrance animations, interactive prize cards, and animated mobile full-screen navigation.",
      ],
      [
        "Media performance & lazy loading",
        "Integrated Intersection Observer video triggers and optimized asset loading behavior to preserve visual immersion.",
      ],
      [
        "Production build stabilization",
        "Resolved client-side/build errors, SSR browser mismatches, and unified event data structures for fast updates.",
      ],
    ],
    dc: [
      [
        "Next.js App Router vs Plain React SPA",
        "Create React App / Vite SPA",
        "Built-in image optimization, component structure, and seamless Vercel edge deployment support.",
      ],
      [
        "Framer Motion vs CSS-only animations",
        "Pure CSS keyframe animations",
        "Consistent declarative entrance, hover, and scroll-linked gestures with unified spring physics.",
      ],
      [
        "Centralized static data module vs Headless CMS",
        "External CMS / dynamic database",
        "Zero API latency, instant rendering, and straightforward Git-tracked content management for a 24-hour event.",
      ],
      [
        "Single-page anchor navigation vs multi-page routes",
        "Multi-page routing structure",
        "Best fit for a focused event-information and registration conversion journey.",
      ],
    ],
    x: [
      ["₹35,000", "Total hackathon prize pool"],
      ["4 Tracks", "AI/ML, Blockchain, Cyber, Game Dev"],
      ["24 Hours", "National collegiate hackathon format"],
      ["100%", "Responsive mobile & desktop coverage"],
    ],
  },
  terrawatch: {
    sample: 1,
    t: "Supporting, NASA Space Apps project",
    r: "",
    tag: "A carbon footprint tracking PWA submitted to NASA Space Apps, with charts, maps and Gemini insights.",
    pr: "People want to cut their emissions but cannot see where their footprint comes from.",
    so: "Log activities, see them charted and mapped, and get Gemini suggestions for lowering them.",
    f: [
      ["Footprint tracking", "Log activities and see their emissions."],
      ["Charts", "Recharts visualizations over time."],
      ["Map view", "Maps API for location context."],
      ["AI suggestions", "Gemini recommends ways to reduce."],
    ],
    s: [
      "React",
      "Vite",
      "FastAPI",
      "Firestore",
      "Recharts",
      "Gemini",
      "Maps API",
    ],
    a: [
      [
        "Client",
        ["React + Vite PWA", "Recharts", "Maps API"],
      ],
      [
        "API",
        ["FastAPI"],
      ],
      [
        "AI",
        ["Gemini suggestions"],
      ],
      [
        "Data",
        ["Firestore"],
      ],
    ],
    c: [
      [
        "Usable on phones",
        "The PWA setup keeps the app installable and fast on mobile.",
      ],
      [
        "Useful advice",
        "Gemini turns raw numbers into practical suggestions.",
      ],
    ],
    x: [
      ["NASA", "Space Apps submission"],
      ["PWA", "Installable on phones"],
      ["7", "Core technologies"],
    ],
  },
  sparkx: {
    t: "Supporting, hackathon platform",
    r: "Lead Developer",
    tag: "A next-generation hackathon platform engineered for real-time team collaboration, project submissions, and judge scoring workflows.",
    pr: "Hackathons suffer from fragmented team communications, delayed judging handoffs, and system strain during deadline submission spikes.",
    so: "Engineered high-concurrency submission pipelines, dynamic track routing, and isolated real-time scoring rubrics.",
    f: [
      ["Live collaboration workspace", "Syncs team status, member roles, and project artifacts in real time."],
      ["Dynamic track submission portal", "Validates multi-format project deliverables with automated artifact checks."],
      ["Real-time judging matrix", "Isolated scoring states ensure fair evaluation and instant tallying without data leakage."],
      ["Burst-optimized infrastructure", "Buffered queues ensure zero downtime and zero dropped submissions during deadline surges."],
    ],
    s: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebSocket",
      "Node.js",
    ],
    a: [
      ["Client", ["React 19 Dashboard", "Live Participant Workspace", "Judge Scoring Matrix"]],
      ["Backend", ["Event Sync Service", "Submission Validator", "Scoring Engine"]],
      ["Infra", ["Edge CDN", "High-Availability DB"]],
    ],
    c: [
      ["Deadline concurrency", "Rate limiting and optimistic UI keep the portal responsive under peak load."],
      ["Fair judging tally", "Cryptographically sealed scorecards prevent premature leaderboards."],
    ],
    x: [
      ["<100ms", "Live event sync"],
      ["100%", "Submission delivery reliability"],
      ["5", "Interactive platform views"],
    ],
  },
};

DETAILS.reconcraft = DETAILS.reconpilot;
DETAILS.skt = DETAILS["shree-krishna-transport"];

