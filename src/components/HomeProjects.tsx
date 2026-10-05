import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useTheme } from '../context/ThemeContext';

interface EditorialProjectCard {
  id: string;
  number: string;
  category: string;
  roleStatus: string;
  name: string;
  projectType: string;
  shortDescription: string;
  decision1Title: string;
  decision1Detail: string;
  decision2Title: string;
  decision2Detail: string;
  techList: string[];
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
}

const EDITORIAL_PROJECTS: EditorialProjectCard[] = [
  {
    id: 'probe',
    number: '01 / 05',
    category: 'Real-Time Voice & Multi-Agent AI',
    roleStatus: 'Team of 4 · Agora Hackathon',
    name: 'PROBE',
    projectType: 'Adaptive Multi-Agent AI Voice Interview Platform',
    shortDescription:
      'A real-time AI interview platform where multiple AI interviewers conduct adaptive, resume-grounded conversations through voice and 3D avatars.',
    decision1Title: 'Real-time voice pipeline',
    decision1Detail:
      'MediaPipe and WebRTC stream candidate audio through Agora RTC to a FastAPI backend for sub-second voice interaction.',
    decision2Title: 'Multi-agent orchestration',
    decision2Detail:
      'Claude manages interviewer handoffs while Murf TTS and ARKit blendshapes drive synchronized 3D avatar conversations.',
    techList: [
      'Next.js 16',
      'React 19',
      'Claude',
      'Agora RTC',
      'Murf TTS',
      'FastAPI',
      'MongoDB',
      'Redis',
      'Three.js',
      'MediaPipe',
    ],
    coverImage: '/images/probe/dashboardhero.png',
    githubUrl: 'https://github.com/ParthK0',
  },
  {
    id: 'reconcraft',
    number: '02 / 05',
    category: 'Financial Systems & Deterministic AI',
    roleStatus: 'Solo Engineering · Razorpay AI Buildathon',
    name: 'RECONCRAFT / FINPILOT',
    projectType: 'Deterministic Financial Reconciliation with AI Verification',
    shortDescription:
      'A financial reconciliation engine that matches invoices, bank statements, and settlements — using AI only where deterministic rules cannot decide.',
    decision1Title: 'Deterministic pipeline',
    decision1Detail:
      'Resolves 90–95% of records before an LLM is ever called.',
    decision2Title: 'Zero-trust validation',
    decision2Detail:
      'Independently re-derives every AI claim using Decimal arithmetic down to ₹0.01 precision.',
    techList: [
      'FastAPI',
      'Python',
      'Pydantic',
      'PostgreSQL',
      'Pandas',
      'Pytest',
      'Docker',
      'Tally XML',
    ],
    coverImage: '/images/reconcraft/hero.png',
    githubUrl: 'https://github.com/ParthK0',
  },
  {
    id: 'skt',
    number: '03 / 05',
    category: 'Production Web & Logistics',
    roleStatus: 'Solo Engineering · Live Production',
    name: 'SHREE KRISHNA TRANSPORT',
    projectType: 'Commercial Logistics & Route Intelligence Platform',
    shortDescription:
      'A live freight platform connecting industrial shippers with verified fleet operators across 18+ high-density transport corridors.',
    decision1Title: 'Route intelligence',
    decision1Detail:
      'React and Leaflet power corridor mapping while a programmatic route engine generates SEO pages with dynamic JSON-LD.',
    decision2Title: 'Lead dispatch',
    decision2Detail:
      'A dual-channel pipeline sends leads instantly to WhatsApp while preserving a background email fallback.',
    techList: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind v4',
      'Express',
      'Leaflet',
      'EmailJS',
      'WhatsApp API',
    ],
    coverImage: '/images/shree-krishna-transport/hero1.png',
    liveUrl: 'https://shree-krishna-transport.org',
    githubUrl: 'https://github.com/ParthK0',
  },
  {
    id: 'aetherface',
    number: '04 / 05',
    category: 'Biometrics & Vector Systems',
    roleStatus: 'Solo Engineering · Architecture Modernization',
    name: 'AETHERFACE.AI',
    projectType: 'Biometric Attendance & Vector Intelligence Platform',
    shortDescription:
      'A real-time facial recognition platform using vector search to identify faces in milliseconds while keeping biometric data encrypted.',
    decision1Title: 'Vector recognition',
    decision1Detail:
      'Browser-side face detection generates 512-D vectors matched through a PostgreSQL pgvector HNSW index across 10k+ records.',
    decision2Title: 'Secure real-time updates',
    decision2Detail:
      'Spring Boot secures biometric data with AES-256-GCM while WebSocket STOMP delivers attendance updates in real time.',
    techList: [
      'Java 21',
      'Spring Boot 3',
      'React 19',
      'PostgreSQL',
      'pgvector',
      'AES-256-GCM',
      'WebSocket',
      'Docker',
    ],
    coverImage: '/images/aetherface/hero.png',
    githubUrl: 'https://github.com/ParthK0',
  },
  {
    id: 'electiq',
    number: '05 / 05',
    category: 'Civic Tech & Grounded AI',
    roleStatus: 'Solo Full-Stack Engineer · Capstone Platform',
    name: 'ELECTIQ',
    projectType: 'AI-Powered Civic Education & Election Intelligence',
    shortDescription:
      'A civic intelligence platform helping people understand electoral systems and voter information across six democratic nations.',
    decision1Title: 'Secure AI layer',
    decision1Detail:
      'An Express proxy isolates Gemini API credentials while rate limiting and Zod validation protect the application.',
    decision2Title: 'Grounded AI',
    decision2Detail:
      'Neutrality guardrails guide AI responses while Vitest and Playwright validate the platform through automated CI/CD.',
    techList: [
      'React 19',
      'Vite',
      'Express 5',
      'Gemini',
      'Firebase',
      'Zod',
      'Playwright',
      'Vitest',
      'Tailwind CSS',
    ],
    coverImage: '/images/electiq/hero.png',
    githubUrl: 'https://github.com/ParthK0',
  },
];

export const HomeProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { currentTheme } = useTheme();

  return (
    <section
      id="projects"
      data-section="featured-projects"
      className="py-16 sm:py-24 relative select-none transition-colors duration-500 text-[#101010]"
      style={{
        backgroundColor: currentTheme.primary,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header: Clean editorial typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b-2 border-black/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#000000] text-[#FFFFFF] rounded-full text-xs font-mono font-medium tracking-wide mb-3 shadow-md">
              <span
                className="w-2 h-2 rounded-full transition-colors duration-500"
                style={{ backgroundColor: currentTheme.primary }}
              />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase font-headline text-[#000000]">
              Featured Systems
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white bg-[#000000] hover:bg-neutral-900 border border-black px-6 py-3 rounded-xl transition-all duration-300 group shadow-xl"
          >
            <span>Catalog Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Top 5 Project Cards Layered Stacking Over-Scrolling Deck */}
        <div className="relative pb-16 sm:pb-24">
          {EDITORIAL_PROJECTS.map((item, index) => {
            const originalProject = PROJECTS.find((p) => p.id === item.id);

            return (
              <div
                key={item.id}
                className={`sticky will-change-transform ${
                  index === EDITORIAL_PROJECTS.length - 1
                    ? 'mb-0'
                    : 'mb-[20vh] sm:mb-[28vh]'
                }`}
                style={{
                  top: `calc(5rem + ${index * 14}px)`,
                  zIndex: index + 10,
                }}
              >
                {/* Project Card: Clean Editorial Black & White Theme */}
                <article className="p-5 sm:p-6 md:p-7 min-h-[500px] lg:min-h-[570px] bg-[#000000] text-white border-2 border-white/20 hover:border-white/50 rounded-2xl sm:rounded-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.6),0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center relative group overflow-hidden">
                  {/* Subtle top edge highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  {/* Left Column: Details, Engineering & Technology (7 cols) */}
                  <div className="lg:col-span-7 h-full flex flex-col justify-between">
                    <div>
                      {/* Top Hierarchy: Number, Category, Role · Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-white/10 text-xs">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="font-mono font-bold tracking-wider transition-colors duration-300"
                            style={{ color: currentTheme.primary }}
                          >
                            {item.number}
                          </span>
                          <span className="text-neutral-400 font-medium">—</span>
                          <span className="text-neutral-300 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <span className="text-neutral-400 font-medium">
                          {item.roleStatus}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-headline tracking-tight mb-1 transition-colors duration-300 group-hover:brightness-110"
                        style={{ color: currentTheme.primary }}
                      >
                        {item.name}
                      </h3>

                      {/* One-line Project Type */}
                      <div className="text-xs sm:text-sm font-medium text-neutral-300 mb-2">
                        {item.projectType}
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-4">
                        {item.shortDescription}
                      </p>

                      {/* Engineering: Two Technical Decisions */}
                      <div className="mb-4 pt-2.5 border-t border-white/10">
                        <div
                          className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold mb-2 transition-colors duration-300"
                          style={{ color: currentTheme.primary }}
                        >
                          Engineering
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="text-xs font-semibold text-white mb-0.5">
                              {item.decision1Title}
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.decision1Detail}
                            </p>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white mb-0.5">
                              {item.decision2Title}
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.decision2Detail}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Technology: Tech Stack */}
                      <div className="mb-4 pt-2.5 border-t border-white/10">
                        <div
                          className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold mb-2 transition-colors duration-300"
                          style={{ color: currentTheme.primary }}
                        >
                          Technology
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.techList.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#121214] text-neutral-300 border border-neutral-800 rounded-md hover:border-white hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View System · Source Links */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/10 text-xs font-semibold">
                      <button
                        onClick={() => setSelectedProject(originalProject || null)}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white text-black border border-white rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View System</span>
                      </button>

                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-neutral-900 border border-neutral-700 text-white rounded-lg hover:border-white transition-colors flex items-center gap-1.5"
                        >
                          <span>Live System ↗</span>
                        </a>
                      )}

                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg hover:text-white hover:border-neutral-600 transition-colors flex items-center gap-1.5"
                        >
                          <span>Source ↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Clean Photo (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div
                      onClick={() => setSelectedProject(originalProject || null)}
                      className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-black group/img cursor-pointer aspect-[16/10] max-h-[340px] shadow-2xl transition-all duration-300 hover:border-white/60"
                    >
                      <img
                        src={item.coverImage}
                        alt={`${item.name} preview`}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* View All Work CTA Bar - Clean Editorial Styling */}
        <div className="mt-8 sm:mt-12 p-8 sm:p-10 bg-[#000000] text-white border-2 border-black rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <div
              className="text-xs uppercase tracking-wider mb-1 font-bold transition-colors duration-300"
              style={{ color: currentTheme.primary }}
            >
              Complete Catalog Archive
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-headline">
              Explore All Production Archive Projects
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Internal tools, high-speed algorithms, distributed microservices, and AI pipelines.
            </p>
          </div>
          <Link
            to="/work"
            className="px-6 py-3.5 bg-white text-black hover:bg-neutral-200 border border-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer rounded-xl shadow-lg"
          >
            <span>View Complete Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
