import React from 'react';
import {
  Briefcase,
  Calendar,
  Layers,
  Layout,
  Server,
  Database,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { currentTheme } = useTheme();

  const layers = [
    {
      number: '01',
      title: 'Product',
      description:
        'Building and maintaining responsive interfaces and reusable UI components with Next.js, React and Tailwind CSS.',
      icon: <Layout className="w-4 h-4" />,
    },
    {
      number: '02',
      title: 'Backend',
      description:
        'Contributing to REST APIs, runtime validation, error handling, and backend architecture using Node.js and Express.',
      icon: <Server className="w-4 h-4" />,
    },
    {
      number: '03',
      title: 'Data',
      description:
        'Designing PostgreSQL schemas, optimizing queries, and working with indexing strategies for client workflows.',
      icon: <Database className="w-4 h-4" />,
    },
    {
      number: '04',
      title: 'Production',
      description:
        'Working on a live product where reliability, maintainability, and real-world requirements matter beyond the code itself.',
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
  ];

  const scopeAreas = [
    'Frontend',
    'Backend',
    'Database',
    'API Design',
    'Production',
  ];

  const technologies = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Tailwind CSS',
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#0a0a0c] border-y border-[#222222] relative select-none"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent-border-subtle)] text-[var(--accent-light)] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: currentTheme.primary }}
            />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline mb-3">
            Industry Experience
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-lg">
            <span
              className="font-semibold transition-colors duration-300"
              style={{ color: currentTheme.primary }}
            >
              One role. Multiple layers.
            </span>
            <span className="hidden sm:inline text-neutral-600">—</span>
            <span className="text-neutral-400">
              Building and maintaining software in a real production environment.
            </span>
          </div>
        </div>

        {/* Experience Card: The Journey */}
        <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#111113] border border-[#262626] hover:border-[#383838] transition-all duration-300 relative overflow-hidden shadow-2xl shadow-black/90 group">
          {/* Subtle Accent Side Bar */}
          <div
            className="absolute top-0 left-0 w-1.5 h-full transition-colors duration-500"
            style={{ backgroundColor: currentTheme.primary }}
          />

          {/* Header Row: Company Logo, Role, Dates */}
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8 pb-6 border-b border-[#222222]">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-white/20 shadow-xl flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/mskard.jpg"
                  alt="MSKard Business Solutions Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight mb-1 font-headline">
                  Full-Stack Developer Intern
                </h3>
                <div className="text-base sm:text-lg font-semibold flex items-center gap-2 text-neutral-300">
                  <Briefcase
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: currentTheme.primary }}
                  />
                  <span>MSKard Business Solutions</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    Internship
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-neutral-300">
              <Calendar
                className="w-3.5 h-3.5 transition-colors duration-300"
                style={{ color: currentTheme.primary }}
              />
              <span>May 2025 — Present</span>
            </div>
          </div>

          {/* Core Focus Statement */}
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#161619] border border-white/5 flex items-start sm:items-center gap-3.5">
            <span
              className="p-2 rounded-xl shrink-0 transition-colors duration-300"
              style={{
                backgroundColor: 'var(--accent-subtle)',
                color: currentTheme.primary,
              }}
            >
              <Sparkles className="w-4 h-4" />
            </span>
            <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
              Working across the frontend, backend, and database layers of a production e-commerce platform.
            </p>
          </div>

          {/* The 4 Architectural Engineering Layers */}
          <div className="mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-4 flex items-center gap-2">
              <Layers
                className="w-3.5 h-3.5 transition-colors duration-300"
                style={{ color: currentTheme.primary }}
              />
              <span>Scope of Engineering Across Layers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layers.map((layer) => (
                <div
                  key={layer.number}
                  className="p-5 rounded-2xl bg-[#151518] border border-[#222222] hover:border-[#333333] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono font-bold transition-colors duration-300"
                        style={{ color: currentTheme.primary }}
                      >
                        {layer.number} —
                      </span>
                      <span className="text-sm font-bold text-white uppercase tracking-tight">
                        {layer.title}
                      </span>
                    </div>
                    <span className="text-neutral-500">{layer.icon}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture Map: Convergence into Live Production Platform */}
          <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-[#0d0d10] border border-[#222222]">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                Architecture Flow Map
              </span>
            </div>

            {/* 3 Source Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Frontend Column */}
              <div className="p-4 rounded-xl bg-[#131316] border border-white/5 text-center">
                <div
                  className="text-xs font-mono uppercase font-bold tracking-wider mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.primary }}
                >
                  Frontend
                </div>
                <div className="text-xs font-mono text-neutral-300 space-y-1">
                  <div>Next.js · React</div>
                  <div>Tailwind CSS</div>
                  <div className="text-neutral-500 text-[11px]">Reusable UI Systems</div>
                </div>
              </div>

              {/* Backend Column */}
              <div className="p-4 rounded-xl bg-[#131316] border border-white/5 text-center">
                <div
                  className="text-xs font-mono uppercase font-bold tracking-wider mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.primary }}
                >
                  Backend
                </div>
                <div className="text-xs font-mono text-neutral-300 space-y-1">
                  <div>Node.js · Express</div>
                  <div>REST APIs</div>
                  <div className="text-neutral-500 text-[11px]">Validation & Handlers</div>
                </div>
              </div>

              {/* Data Column */}
              <div className="p-4 rounded-xl bg-[#131316] border border-white/5 text-center">
                <div
                  className="text-xs font-mono uppercase font-bold tracking-wider mb-2 transition-colors duration-300"
                  style={{ color: currentTheme.primary }}
                >
                  Data
                </div>
                <div className="text-xs font-mono text-neutral-300 space-y-1">
                  <div>PostgreSQL</div>
                  <div>Schema Design</div>
                  <div className="text-neutral-500 text-[11px]">Query Optimization</div>
                </div>
              </div>
            </div>

            {/* Downward Arrows */}
            <div className="flex justify-center my-3 text-neutral-500">
              <div className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-neutral-400">
                <ArrowDown className="w-4 h-4 animate-bounce" />
                <span>Converging into</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>

            {/* Bottom Destination Node: Production E-Commerce Platform */}
            <div className="p-5 rounded-xl bg-[#16161a] border border-white/10 text-center shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Live in Production</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white uppercase tracking-tight font-headline">
                Production E-Commerce Platform
              </div>
              <div className="text-xs text-neutral-400 font-mono mt-1">
                Real-world reliability, maintainability, and client workflow automation
              </div>
            </div>
          </div>

          {/* Bottom Summary: Scope of Ownership + Technologies */}
          <div className="pt-6 border-t border-[#222222] grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Role / Scope */}
            <div>
              <div
                className="text-xs font-mono uppercase tracking-wider font-bold mb-3 transition-colors duration-300"
                style={{ color: currentTheme.primary }}
              >
                My Role // Scope
              </div>
              <div className="flex flex-wrap gap-2">
                {scopeAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-[#18181b] border border-neutral-700/80 text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400 mb-3">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#131315] border border-neutral-800 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
