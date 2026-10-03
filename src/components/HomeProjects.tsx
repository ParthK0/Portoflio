import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Eye, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

// Exactly the top 5 projects specified by the user
const HOME_PROJECT_IDS = ['probe', 'reconcraft', 'skt', 'aetherface', 'electiq'];

export const HomeProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter top 5 projects in designated order
  const featuredProjects = HOME_PROJECT_IDS
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <section id="featured-projects" className="py-20 bg-[#000000] border-b border-[#222222] relative select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#1c1c1c] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-4">
              <span className="text-[var(--accent-primary)] font-bold">//</span>
              <span>[05 // ARTIFACTS & SYSTEMS]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline">
              SELECTED WORKS
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#0a0a0a] border border-[#2a2a2a] px-4 py-2 hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-colors group"
          >
            <span>CATALOG ARCHIVE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Top 5 Project Cards Stack */}
        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 md:p-10 bg-[#080808] border border-[#222222] hover:border-[#444444] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 relative group"
            >
              {/* Corner crosshairs */}
              <span className="absolute -top-2.5 -left-1.5 font-mono text-xs text-[#555555] pointer-events-none select-none">+</span>
              <span className="absolute -top-2.5 -right-1.5 font-mono text-xs text-[#555555] pointer-events-none select-none">+</span>

              {/* Left Column: Details & Tech (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 pb-4 mb-4 border-b border-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold uppercase text-[var(--accent-primary)]">
                      [PROJECT 0{index + 1} / 05]
                    </span>
                    <span className="text-xs font-mono text-[#555555]">
                      // {project.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-[#888888] font-mono ml-auto">
                      [{project.team}]
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight mb-2 uppercase font-headline group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-4">
                    // {project.tagline}
                  </div>

                  <p className="text-[#999999] text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6 font-mono text-xs">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[#CCCCCC] leading-normal">
                        <span className="text-[var(--accent-primary)] font-bold shrink-0">{'->'}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2 py-1 bg-[#000000] border border-[#222222] text-[#888888]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: Brutalist Inverted Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#1a1a1a] font-mono text-xs font-bold uppercase">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 bg-[#FFFFFF] text-[#000000] border border-[#FFFFFF] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:text-[#000000] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>SYSTEM SPECS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#000000] border border-[#333333] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF] transition-colors flex items-center gap-1.5"
                    >
                      <span>LIVE SYSTEM</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#000000] border border-[#333333] text-[#888888] hover:text-[#FFFFFF] hover:border-[#555555] transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Preview & Architecture (5 cols) */}
              <div className="lg:col-span-5 bg-[#040404] border border-[#222222] p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  {/* Real Project Cover Image */}
                  {project.coverImage && (
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative overflow-hidden border border-[#222222] mb-4 group/img cursor-pointer aspect-[16/10] bg-[#000000]"
                    >
                      <img 
                        src={project.coverImage} 
                        alt={`${project.title} UI preview`}
                        className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 bg-[#000000] text-[#FFFFFF] border border-[#333333]">
                        <Eye className="w-3 h-3 text-[var(--accent-primary)]" />
                        <span>[SPEC DETAILS]</span>
                      </div>
                    </div>
                  )}

                  {/* Architecture Flow */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#1c1c1c] mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888888] flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      {project.architecture.title}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#000000] border border-[#222222] text-[#666666]">
                      PIPELINE
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {project.architecture.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#AAAAAA] font-mono">
                        <span className="w-4 h-4 bg-[#0a0a0a] border border-[#222222] text-[var(--accent-primary)] text-[10px] flex items-center justify-center shrink-0">
                          {sIdx + 1}
                        </span>
                        <span className="truncate">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#1c1c1c]">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-2.5 bg-[#000000] border border-[#222222]">
                      <div className="text-[10px] text-[#666666] font-mono uppercase truncate">{metric.label}</div>
                      <div className="text-sm font-bold text-[#FFFFFF] font-mono">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Work CTA Bar - Brutalist Banner */}
        <div className="mt-14 p-8 bg-[#080808] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-[11px] font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-1">
              // ARCHIVE INDEX
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] uppercase font-headline">
              EXPLORE COMPLETE ENGINEERING ARCHIVE
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] font-mono">
              Complete catalog of production projects, internal tools, and algorithms.
            </p>
          </div>
          <Link
            to="/work"
            className="px-6 py-3.5 bg-[#FFFFFF] text-[#000000] hover:bg-[var(--accent-primary)] hover:border-[var(--accent-primary)] border border-[#FFFFFF] font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>VIEW COMPLETE WORK [ALL]</span>
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
