import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#10141f] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {project.team}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {project.title}
          </h2>
          <p className="text-base text-cyan-400 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto pr-2 space-y-8 flex-1">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-lg font-bold font-mono text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline */}
          <div className="p-5 rounded-2xl bg-[#090b10] border border-white/10">
            <h3 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-4 flex items-center gap-2">
              <span>Execution Pipeline & Data Flow</span>
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {project.architecture.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5 flex-1">{step}</span>
                  {idx < project.architecture.steps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-cyan-500/60 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Problem & Solution */}
          {project.caseStudy && (
            <div className="space-y-6 pt-2 border-t border-white/10">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  The Problem & Architectural Bottleneck
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  The Engineered Solution
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Challenges */}
              {project.caseStudy.challenges && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Key Engineering Challenges Overcome
                  </h4>
                  <ul className="space-y-2">
                    {project.caseStudy.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Decisions */}
              {project.caseStudy.technicalDecisions && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Technical Decision Rationale
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.technicalDecisions.map((td, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                        <div className="text-xs font-mono text-purple-300 font-bold mb-1">
                          {td.decision}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {td.rationale}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
