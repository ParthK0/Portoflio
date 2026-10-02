# Portfolio Build Checklist — parth.deploy()

A rigorous, section-by-section tracking checklist for engineering, designing, and launching the portfolio.

> **Status Legend:**
> - `[x]` **Completed & Verified**
> - `[/]` **In Progress**
> - `[ ]` **Pending / To Do**
> - `[!]` **Needs Input / Decision Required from User**

---

## 🚨 Critical Action Items (Resolve First)

- [x] **Fix 1: Standardize LeetCode Problem Count**
  - Confirmed: **600+ problems solved** (1600 Contest Rating).
  - Verification: Must be 600+ across Hero stat strip, Proof section, and Journey timeline.
- [!] **Fix 2: ElectIQ Accessibility Score Verification**
  - Current status: Conflicting records exist (78% vs 98+/100).
  - Action required: Run a fresh Lighthouse audit on the live deployment to lock in the true verified score.
- [!] **Fix 3: "Beyond Code" Hobbies Confirmation**
  - Current status: Unverified hobbies (guitar, painting, swimming, etc.).
  - Action required: Provide authentic personal interests/hobbies or omit this section to maintain 100% credibility.

---

## 1. System Architecture & Tech Stack Setup

- [x] Link repository to remote (`origin -> https://github.com/ParthK0/Portoflio.git`)
- [x] Define content blueprint & narrative strategy (`portfolio-content-template.md`)
- [x] Define exhaustive progress & build tracking checklist (`portfolio-build-checklist.md`)
- [ ] Select Core Web Architecture:
  - Framework: Modern React + Vite / Vanilla JS + Tailwind CSS or Vanilla CSS design system
  - Case Study Delivery: Smooth in-page slideover / modal or dedicated route views (`/projects/probe`, etc.)
- [ ] Establish Design System & CSS Tokens:
  - Modern font pairing (e.g., `Outfit` / `Inter` / `JetBrains Mono` for code)
  - Curated dark aesthetic palette (deep onyx `#0a0c10`, slate accents, electric cyan `#00F0FF`, violet `#8B5CF6`, emerald `#10B981`)
  - Glassmorphic backdrop filters, border glows, and subtle noise textures
  - Dynamic micro-animations & scroll-triggered reveal hooks

---

## 2. Navigation & Global UI

- [ ] Sticky, blurred header navigation bar:
  - Brand identity logo / monogram (`parth.deploy()`)
  - Nav links: `Work`, `Journey`, `Engineering`, `Leadership`, `Experience`, `Proof`, `Contact`
  - Direct Action CTA: `Resume ↓` (with direct download/view modal)
  - Live availability indicator (`🟢 Available for SWE / AI roles`)
- [ ] Mobile navigation drawer / responsive burger menu with backdrop blur
- [ ] Global command menu (`Cmd+K` / `Ctrl+K`) for rapid navigation (optional WOW factor)
- [ ] Accessible skip-to-content anchor link

---

## 3. Hero Section: Hook & Proof

- [ ] Eyebrow badge: `Full-Stack Developer Intern @ MSKard · AI Systems Builder`
- [ ] High-impact headline: *"I build software systems that turn complex problems into usable products."*
- [ ] Subheadline emphasizing software engineering foundation + AI force multiplier
- [ ] Primary action buttons:
  - `[Explore Selected Work ↓]` (smooth scrolls to `#projects`)
  - `[View GitHub ↗]` (external link with security rel)
  - `[Download Resume ↓]` (direct link to verified PDF)
- [ ] Defensible Stat Strip Cards:
  - `600+` LeetCode Problems Solved (1600 Rating)
  - `8.89` CGPA (Galgotias University)
  - `100%` Deterministic Match Precision (FinPilot)
  - `95+` Production Lighthouse Score (Shree Krishna Transport)
- [ ] Subtle ambient interactive background (canvas particle mesh or gradient orb)

---

## 4. "What I Build" / Engineering Pillars

- [ ] Interactive 4-card engineering grid:
  - Card 1: **Full-Stack Products** (React 19, Next.js, Node.js, Express, FastAPI, PostgreSQL)
  - Card 2: **AI & Multi-Agent Systems** (LLM orchestration, dynamic debate, Agora voice RTC, Claude)
  - Card 3: **Real-Time & Resilient Systems** (WebSockets, Redis caching, dual-dispatch redundancy)
  - Card 4: **Algorithmic & Vector Search** (600+ DSA, pgvector HNSW, programmatic route engines)
- [ ] Hover tilt and gradient border illumination on each pillar card

---

## 5. My Journey Timeline (Student → Builder → Engineer → AI)

- [ ] Interactive vertical/horizontal timeline with scroll-activated lighting effect
- [ ] **Stage 01: Started with curiosity (Fundamentals & Algorithms)**
  - Core: Java, C/C++, DSA, OOP, DBMS, First-principles computation
  - 600+ LeetCode milestones
- [ ] **Stage 02: Learned to build (Complete Applications)**
  - Core: React, Next.js, Node.js, Express, TypeScript, PostgreSQL
  - MSKard e-commerce full-stack internship integration
- [ ] **Stage 03: Building for real users (Production Logistics)**
  - Core: Shree Krishna Transport, 18+ corridors, Lighthouse 95+, dual-channel dispatch
- [ ] **Stage 04: Added AI to my engineering toolkit (Systems-First AI)**
  - Core: PROBE (Multi-agent voice), FinPilot/ReconCraft (Paisa arithmetic validator)
- [ ] **Stage 05: Where I'm going (Software Engineer + AI Advantage)**
  - Positioning: *"Software Engineering first. AI as an advantage."*

---

## 6. Featured Projects Showcase (Homepage Level 1)

Curated showcase of 5 flagship systems with cards containing: Name, Visual Preview, One-line summary, Tech tags, My Role, Status badge, Defensible metric, and `Explore Case Study →` CTA:

- [ ] **PROBE Card:**
  - Status: `HACKATHON` / `AI & REAL-TIME`
  - Metric: Real-time multi-agent handoff · Word-timed 60fps lip sync
  - Role: Feature Architect · Full-Stack & Systems Contributor
- [ ] **ReconCraft / FinPilot Card:**
  - Status: `PRODUCTION-GRADE FINTECH`
  - Metric: 100% Precision · 0 False Positives · 0.29s Engine
  - Hook: *"Why I didn't trust the LLM with the money."*
- [ ] **Shree Krishna Transport Card:**
  - Status: `LIVE PRODUCTION`
  - Metric: 95+ Lighthouse · 18+ Corridors · 100% Lead Capture Redundancy
  - Role: Sole Full-Stack Engineer & Architect
- [ ] **AetherFace Card:**
  - Status: `ENTERPRISE BIOMETRICS`
  - Metric: >97% Accuracy · <50ms WebSocket Push · AES-256-GCM
  - Role: Solo Rebuild Engineer
- [ ] **ElectIQ Card:**
  - Status: `RESPONSIBLE AI`
  - Metric: Prompt Guardrails · Express Proxy · WCAG 2.1 AA
  - Role: Solo Engineer & Prompt Architect
- [ ] **Supporting Work Section:**
  - QuantCraft card (Minecraft-themed hackathon UI)

---

## 7. Deep Case Studies (Level 2 Engineering Pages / Slideovers)

### Project 1: PROBE Case Study
- [ ] Hero banner & metadata strip (Stack, Team size, Roles, Demo links)
- [ ] 01. The Problem (Static single-agent Q&A vs dynamic multi-agent panel)
- [ ] 02. The Approach (Competency Graph + Agent Debate + Counterfactual scenarios)
- [ ] 03. My Specific Contribution (Turn-taking, 3D viseme sync, session cache, flows)
- [ ] 04. System Architecture Diagram (Client ↔ Orchestrator ↔ 3 Agents ↔ Claude ↔ Voice)
- [ ] 05. How It Works (Vertical step-by-step interview lifecycle)
- [ ] 06. Technical Deep Dive (State machine, Agora audio streaming, Three.js rendering)
- [ ] 07. Engineering Challenges (Avatar scale normalization, 60fps VisemeScheduler)
- [ ] 08. Key Technical Decisions (Agora vs HTTP, Redis vs persistent DB for sessions)
- [ ] 09. Defensible Results & Hackathon Outcome
- [ ] 10. Product Gallery & 3D Avatar Preview
- [ ] 11. What I Learned (Managing concurrent agent states, voice latency)
- [ ] 12. Tech Stack Chips & Code Links

### Project 2: ReconCraft / FinPilot Case Study
- [ ] Hero banner & metadata strip (FastAPI, Python Decimal, PostgreSQL, Docker)
- [ ] 01. The Problem (Financial reconciliation errors, manual audit overhead)
- [ ] 02. The Architecture (7 Deterministic Rules Engine → LLM Verification → Paisa Validator)
- [ ] 03. My Specific Contribution (Rule engine, Paisa Decimal validator, synthetic benchmarks)
- [ ] 04. Pipeline Flowchart (Data upload → rules resolve 95% → LLM handles ambiguous → Decimal verify)
- [ ] 05. Engineering Challenges (Verification vs hallucination, controlled benchmark generation)
- [ ] 06. Key Technical Decisions (Rules-first architecture, strict JSON schema vs free-form text)
- [ ] 07. Defensible Results (100% precision, 0 false positives, 101 tests, 0.29s execution)
- [ ] 08. Product Dashboard Gallery
- [ ] 09. What I Learned (Separation of probabilistic AI from deterministic financial ledger)
- [ ] 10. Tech Stack & Repository Links

### Project 3: Shree Krishna Transport Case Study
- [ ] Hero banner & metadata strip (React 19, TypeScript, Express, Vite, Tailwind CSS v4)
- [ ] 01. The Problem (Fragmented regional freight, manual phone brokers, zero pricing transparency)
- [ ] 02. The Architecture (Decoupled SPA + REST API + Parametric Route Engine)
- [ ] 03. My Specific Contribution (Sole architect & full-stack builder)
- [ ] 04. Dual-Channel Lead Redundancy Diagram (EmailJS audit + instant WhatsApp redirect)
- [ ] 05. Engineering Challenges (SEO scaling for 18+ corridors, low-tier mobile 3G performance)
- [ ] 06. Key Technical Decisions (Static typed registry vs DB, WhatsApp vs dedicated SMTP)
- [ ] 07. Defensible Results (95+ Lighthouse, <1.5s FCP, 18+ indexed corridors)
- [ ] 08. Interactive UI & Route Map Preview
- [ ] 09. What I Learned (Designing for real operational business constraints)
- [ ] 10. Live Site Link (`shree-krishna-transport.org`) & Repo Links

### Project 4: AetherFace Case Study
- [ ] Hero banner & metadata strip (Spring Boot 3, React 18, PostgreSQL, pgvector, AES-256)
- [ ] Legacy vs. Modern Architectural Comparison Matrix:
  - JavaFX Desktop ➔ React Web UI
  - $O(N)$ brute-force ➔ pgvector HNSW cosine similarity search
  - 5-second polling ➔ <50ms WebSocket STOMP push
  - Plaintext templates ➔ AES-256-GCM encryption at rest
- [ ] Engineering Challenge: Hibernate `@ColumnTransformer` vector type casting
- [ ] Defensible Results: >97% accuracy, <50ms latency, 2-minute Docker Compose deployment

### Project 5: ElectIQ Case Study
- [ ] Hero banner & metadata strip (React 19, Express 5 Proxy, Firebase, Gemini API, Zod)
- [ ] Core Problem & Non-Partisan Objective
- [ ] Security Architecture: Express proxy isolating API keys + strict Zod schema validation
- [ ] Key Features: Multi-party comparison matrix, voter registration guide, WCAG 2.1 AA UI
- [ ] Defensible verified Lighthouse score

---

## 8. Engineering Notes / Architectural Trade-Off Cards

Interactive comparison cards demonstrating mature software engineering thinking:

- [ ] **Decision 01:** Rules-First Deterministic Verification vs. End-to-End LLMs *(FinPilot)*
- [ ] **Decision 02:** Static Typed Config Registries vs. Relational Databases *(Shree Krishna Transport)*
- [ ] **Decision 03:** Vector Indexing (HNSW) vs. Linear Brute-Force Matching *(AetherFace)*
- [ ] **Decision 04:** Schema-Enforced Pydantic JSON vs. Free-Form Text *(FinPilot)*
- [ ] **Decision 05:** Bi-directional WebSockets vs. HTTP Client Polling *(AetherFace / PROBE)*
- [ ] **Decision 06:** Dual-Channel Dispatch (WhatsApp + Email) vs. SMTP Gateway *(Shree Krishna Transport)*

---

## 9. Experience Section

- [ ] **MSKard Business Solutions — Full-Stack Developer Intern (May 2025 – Present)**
  - Role definition & company overview
  - Frontend engineering with Next.js & Tailwind CSS
  - Backend API development with Node.js & Express
  - PostgreSQL schema design, indexing, and optimization
  - Verifiable outcomes and sanitized architecture highlights

---

## 10. Beyond the Code: Leadership & Community

- [ ] Leadership Philosophy: *"Taking ownership of people, events, and technical directions."*
- [ ] **IEEE Computational Intelligence Society (IEEE CIS) — Treasurer**
  - Workshop: Salesforce Agentic AI Workshop coordination & execution
  - Conference: ICCCA (International Conference on Computing, Communication and Automation)
  - Logistics, budgeting, and speaker management
  - Visual layout: Authentic workshop and event photo highlights
- [ ] **Quanta Club — Technical Lead**
  - Architecture of the club's technical web platforms
  - Event infrastructure supporting hackathons and technical sessions
  - 5-stage execution flow: `Ideation → Blueprint → Development → Deployment → Operations`
- [ ] "Leadership in Numbers" row (to be populated with verified attendee/event counts)

---

## 11. Proof, Metrics & Achievements

- [ ] LeetCode Achievement Card: **600+ Solved** · Contest Rating **1600** · Direct profile link
- [ ] Academic Achievement Card: **8.89 CGPA** · Galgotias University (B.Tech AI & Data Science)
- [ ] Olympiad Card: **International Mathematics Olympiad (IMO) — Bronze Medalist**
- [ ] Engineering Test Stats: **101 Tests Passed / 79% Statement Coverage** (FinPilot)
- [ ] Production Reliability: **95+ Lighthouse Score** on live production domain

---

## 12. "Now" (Current Focus) & Contact Section

- [ ] Clean "Now" status card:
  - What I'm currently building
  - What I'm currently studying (distributed systems, advanced system design)
  - Competitive programming progression
- [ ] High-contrast, minimal Contact Card:
  - Direct email with quick-copy button (`parth...`)
  - GitHub profile link (`github.com/ParthK0`)
  - LinkedIn profile link
  - LeetCode profile link
  - Interactive "Send a Message" form with input validation

---

## 13. Quality Assurance, Performance & Launch Readiness

- [ ] **Visual Polish & Design Rigor:**
  - Premium dark mode aesthetic with consistent tokens
  - No generic primary colors; curated slate/cyan/violet palette
  - Smooth 60fps micro-animations and hover states
  - Zero placeholder images (use real UI screenshots, diagrams, or generated illustrations)
- [ ] **SEO & Metadata:**
  - OpenGraph cards (`og:image`, `og:title`, `og:description`)
  - Semantic HTML (`main`, `header`, `section`, `article`, `footer`)
  - Unique IDs on all interactive buttons and sections
- [ ] **Cross-Device Responsiveness:**
  - Mobile portrait (375px)
  - Mobile landscape / Tablet (768px)
  - Laptop / Desktop (1024px – 1440px)
  - Ultra-wide displays (1920px+)
- [ ] **Performance & Accessibility Audits:**
  - Google Lighthouse Performance score $\ge 95$
  - Google Lighthouse Accessibility score $\ge 95$
  - Web Vitals: LCP $< 2.0s$, FCP $< 1.2s$, CLS $= 0$
- [ ] **Git & Deployment:**
  - Initial commit of project assets and documentation
  - Automated deployment configuration (Vercel / GitHub Pages / Netlify)
  - Production verification on live custom URL
