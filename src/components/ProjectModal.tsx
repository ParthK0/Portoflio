import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setActiveImage(project.coverImage || (project.gallery && project.gallery[0]) || null);
    }
  }, [project]);

  if (!project) return null;

  const allImages = [
    ...(project.coverImage ? [project.coverImage] : []),
    ...(project.gallery ? project.gallery.filter(img => img !== project.coverImage) : [])
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#141414] border border-[#262626] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-[#181818] border border-[#262626] text-[#A0A0A0] hover:text-[#FFFFFF] hover:border-[#9D6BEE] transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-[#9D6BEE]/10 text-[#A87BF5] border border-[#9D6BEE]/25">
              {project.category}
            </span>
            <span className="text-xs text-[#A0A0A0] font-mono">
              {project.team}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mb-1.5">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#A87BF5] font-semibold">
            {project.tagline}
          </p>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto pr-1 sm:pr-3 space-y-8 flex-1 custom-scrollbar">
          
          {/* Interactive Image Gallery */}
          {allImages.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-[#9D6BEE]" />
                  Visual Documentation & Diagrams ({allImages.length} images)
                </span>
                <span className="text-[11px] text-[#707070] font-mono">Click thumbnail to inspect</span>
              </div>

              {/* Main Active Image Display */}
              {activeImage && (
                <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#0c0c0c] aspect-[16/10] sm:aspect-[16/9]">
                  <img
                    src={activeImage}
                    alt={`${project.title} active view`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-2 left-3 px-2 py-1 rounded bg-[#111111]/90 backdrop-blur-md text-[11px] font-mono text-[#A87BF5] border border-[#262626]">
                    {activeImage.split('/').pop()}
                  </div>
                </div>
              )}

              {/* Thumbnails Carousel */}
              {allImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        activeImage === img ? 'border-[#9D6BEE] ring-2 ring-[#9D6BEE]/40 scale-105' : 'border-[#262626] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* System Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-[#E0E0E0] text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#181818] border border-[#262626]">
                <div className="text-lg font-bold font-mono text-[#9D6BEE]">
                  {metric.value}
                </div>
                <div className="text-xs text-[#A0A0A0]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline */}
          <div className="p-5 rounded-2xl bg-[#111111] border border-[#262626]">
            <h3 className="text-xs font-mono uppercase text-[#A87BF5] tracking-wider mb-4 flex items-center gap-2">
              <span>Execution Pipeline & Data Flow</span>
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {project.architecture.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#E0E0E0]">
                  <span className="text-[#9D6BEE] font-bold">0{idx + 1}.</span>
                  <span className="bg-[#181818] px-2.5 py-1.5 rounded border border-[#262626] flex-1">{step}</span>
                  {idx < project.architecture.steps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#9D6BEE]/60 hidden sm:block shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Problem & Solution */}
          {project.caseStudy && (
            <div className="space-y-6 pt-2 border-t border-[#262626]">
              <div>
                <h4 className="text-sm font-semibold text-[#FFFFFF] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  The Problem & Architectural Bottleneck
                </h4>
                <p className="text-[#E0E0E0] text-sm leading-relaxed bg-[#181818] p-4 rounded-xl border border-[#262626]">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#FFFFFF] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9D6BEE]"></span>
                  The Engineered Solution
                </h4>
                <p className="text-[#E0E0E0] text-sm leading-relaxed bg-[#181818] p-4 rounded-xl border border-[#262626]">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Challenges */}
              {project.caseStudy.challenges && (
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] mb-2">
                    Key Engineering Challenges Overcome
                  </h4>
                  <ul className="space-y-2">
                    {project.caseStudy.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E0E0E0]">
                        <CheckCircle2 className="w-4 h-4 text-[#9D6BEE] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Decisions */}
              {project.caseStudy.technicalDecisions && (
                <div>
                  <h4 className="text-sm font-semibold text-[#FFFFFF] mb-2">
                    Technical Decision Rationale
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.technicalDecisions.map((td, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#181818] border border-[#262626]">
                        <div className="text-xs font-mono text-[#A87BF5] font-bold mb-1">
                          {td.decision}
                        </div>
                        <div className="text-xs text-[#A0A0A0] leading-relaxed">
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
            <h3 className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#181818] border border-[#262626] text-[#E0E0E0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-5 mt-5 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#9D6BEE] text-[#111111] font-bold text-xs hover:bg-[#A87BF5] transition-colors flex items-center gap-1.5"
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
                className="px-5 py-2.5 rounded-xl bg-[#181818] border border-[#262626] text-[#FFFFFF] font-semibold text-xs hover:border-[#9D6BEE]/40 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

