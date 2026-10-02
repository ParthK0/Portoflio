import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProjects = PROJECTS.filter((p) => p.tier !== 'tier3');
  const supportingProjects = PROJECTS.filter((p) => p.tier === 'tier3');

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Featured Systems & Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A collection of production platforms, zero-hallucination deterministic engines, and real-time AI architectures.
          </p>
        </div>

        {/* Flagship Projects Grid */}
        <div className="space-y-10">
          {flagshipProjects.map((project) => (
            <article
              key={project.id}
              className="p-8 md:p-10 rounded-3xl bg-[#111622]/85 backdrop-blur-md border border-white/10 hover:border-cyan-500/35 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xl shadow-black/25 group"
            >
              {/* Main Info (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded ${
                      project.id === 'skt' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {project.tier === 'tier1' ? 'Flagship' : 'Systems & AI'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.team}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 mb-4">
                    {project.tagline}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                        <span className="text-cyan-400 font-bold shrink-0">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Engineering Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Architecture & Metrics Visual (5 cols) */}
              <div className="lg:col-span-5 bg-[#090b10] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      {project.architecture.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      Pipeline
                    </span>
                  </div>

                  {/* Flow Steps */}
                  <div className="space-y-2 font-mono text-xs mb-6">
                    {project.architecture.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <span className="text-cyan-400 font-bold text-[11px]">0{idx + 1}.</span>
                        <div className="bg-white/5 p-2 rounded border border-white/5 flex-1 text-[11px] leading-tight">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className={`text-xl font-bold font-mono ${
                        metric.color === 'emerald' ? 'text-emerald-400' :
                        metric.color === 'violet' ? 'text-purple-400' : 'text-cyan-400'
                      }`}>
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Supporting Projects */}
        {supportingProjects.length > 0 && (
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-[#111622]/50 border border-white/10 border-dashed flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                {supportingProjects[0].title} — {supportingProjects[0].tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                {supportingProjects[0].description}
              </p>
            </div>
            <a
              href={supportingProjects[0].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs hover:bg-white/10 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
