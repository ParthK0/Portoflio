import React from 'react';
import { ExternalLink, Github, ArrowRight, Cpu, Eye, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  categoryLabel?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
  categoryLabel
}) => {
  return (
    <article className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#262626] hover:border-[#9D6BEE]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl shadow-black/80 group hover:-translate-y-1">
      <div>
        {/* Cover Image Preview (if present) */}
        {project.coverImage ? (
          <div
            onClick={() => onOpenModal(project)}
            className="relative overflow-hidden rounded-2xl border border-[#262626] mb-6 group/img cursor-pointer aspect-[16/10] bg-[#111111]"
          >
            <img
              src={project.coverImage}
              alt={`${project.title} UI preview`}
              className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 filter grayscale contrast-125 brightness-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-md bg-[#111111]/90 backdrop-blur-md text-[#A87BF5] border border-[#9D6BEE]/30">
              <Eye className="w-3 h-3" />
              <span>Case Study & Details</span>
            </div>
          </div>
        ) : (
          <div className="h-28 rounded-2xl bg-[#181818] border border-[#262626] mb-6 flex items-center justify-center text-[#707070] font-mono text-xs">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9D6BEE]" />
              {project.id === 'sparkx' ? 'Upcoming Platform · In Active Development' : 'System Architecture'}
            </span>
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded bg-[#9D6BEE]/10 text-[#A87BF5] border border-[#9D6BEE]/25">
            {categoryLabel || (project.displayCategory === 'featured' ? 'Featured' : project.displayCategory === 'engineering' ? 'Engineering Focus' : 'Supporting System')}
          </span>
          <span className="text-[11px] text-[#A0A0A0] font-mono">
            {project.team}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3
          onClick={() => onOpenModal(project)}
          className="text-2xl font-extrabold text-[#FFFFFF] tracking-tight mb-1 cursor-pointer group-hover:text-[#9D6BEE] transition-colors"
        >
          {project.title}
        </h3>
        <div className="text-xs sm:text-sm font-semibold text-[#A87BF5] mb-4">
          {project.tagline}
        </div>

        <p className="text-[#E0E0E0] text-xs sm:text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#A0A0A0] leading-normal">
                <span className="text-[#9D6BEE] font-bold shrink-0">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Architecture Pipeline Summary */}
        {project.architecture && (
          <div className="p-3.5 rounded-xl bg-[#111111] border border-[#262626] mb-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#A0A0A0] mb-2 pb-1.5 border-b border-[#262626]">
              <span className="flex items-center gap-1.5 text-[#A87BF5]">
                <Cpu className="w-3 h-3 text-[#9D6BEE]" />
                {project.architecture.title}
              </span>
              <span>{project.architecture.steps.length} Steps</span>
            </div>
            <div className="space-y-1">
              {project.architecture.steps.slice(0, 3).map((step, idx) => (
                <div key={idx} className="text-[11px] font-mono text-[#E0E0E0] truncate flex items-center gap-1.5">
                  <span className="text-[#9D6BEE] text-[9px]">→</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#707070]">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Bottom */}
      <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="px-4 py-2 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#9D6BEE] text-[#A87BF5] font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:text-[#FFFFFF]"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#9D6BEE] text-[#111111] hover:bg-[#A87BF5] transition-colors"
              title="Visit Live Site"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#181818] border border-[#262626] text-[#E0E0E0] hover:text-[#FFFFFF] hover:border-[#9D6BEE]/40 transition-colors"
              title="View Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
