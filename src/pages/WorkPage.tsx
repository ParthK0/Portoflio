import React, { useState, useEffect } from 'react';
import { Sparkles, Cpu, Wrench } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export const WorkPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured' | 'engineering' | 'supporting'>('all');

  useEffect(() => {
    document.title = "Work & Engineering Projects | Parth Khowal";
  }, []);

  const featuredList = PROJECTS.filter((p) => p.displayCategory === 'featured');
  const engineeringList = PROJECTS.filter((p) => p.displayCategory === 'engineering');
  const supportingList = PROJECTS.filter((p) => p.displayCategory === 'supporting');

  return (
    <div className="pt-28 pb-24 bg-[#000000] min-h-screen text-[#FFFFFF] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Page Hero Header */}
        <div className="mb-14 border-b border-[#1c1c1c] pb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-4">
            <span className="text-[var(--accent-primary)] font-bold">//</span>
            <span>[CATALOG ARCHIVE // COMPLETE INDEX]</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline mb-4">
            PRODUCTION ARCHIVE
          </h1>
          <p className="text-[#888888] text-sm sm:text-base max-w-3xl font-mono leading-relaxed">
            From low-latency multi-agent voice pipelines and zero-hallucination deterministic financial reconciliation to sub-10ms pgvector similarity search.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-[#222222]">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer border ${
              filter === 'all'
                ? 'bg-[#FFFFFF] text-[#000000] border-[#FFFFFF]'
                : 'bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]'
            }`}
          >
            [ALL WORKS // {PROJECTS.length}]
          </button>

          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer border flex items-center gap-2 ${
              filter === 'featured'
                ? 'bg-[var(--accent-primary)] text-[#000000] border-[var(--accent-primary)]'
                : 'bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>[FLAGSHIP // {featuredList.length}]</span>
          </button>

          <button
            onClick={() => setFilter('engineering')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer border flex items-center gap-2 ${
              filter === 'engineering'
                ? 'bg-[var(--accent-primary)] text-[#000000] border-[var(--accent-primary)]'
                : 'bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>[ENGINEERING // {engineeringList.length}]</span>
          </button>

          <button
            onClick={() => setFilter('supporting')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer border flex items-center gap-2 ${
              filter === 'supporting'
                ? 'bg-[var(--accent-primary)] text-[#000000] border-[var(--accent-primary)]'
                : 'bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>[SUPPORTING // {supportingList.length}]</span>
          </button>
        </div>

        {/* Section 1: Featured Projects */}
        {(filter === 'all' || filter === 'featured') && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9D6BEE] shadow-[0_0_8px_#9D6BEE]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                Featured Flagship Systems
              </h2>
              <span className="text-xs font-mono text-[#A87BF5] bg-[#9D6BEE]/10 px-2.5 py-0.5 rounded border border-[#9D6BEE]/20">
                PROBE · ReconCraft · Shree Krishna Transport
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                  categoryLabel="Featured Flagship"
                />
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Engineering Focus */}
        {(filter === 'all' || filter === 'engineering') && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A87BF5] shadow-[0_0_8px_#A87BF5]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                Engineering Focus
              </h2>
              <span className="text-xs font-mono text-[#A87BF5] bg-[#9D6BEE]/10 px-2.5 py-0.5 rounded border border-[#9D6BEE]/20">
                AetherFace · ElectIQ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineeringList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                  categoryLabel="Engineering Focus"
                />
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Supporting Systems */}
        {(filter === 'all' || filter === 'supporting') && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#707070]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                Supporting & Innovation Projects
              </h2>
              <span className="text-xs font-mono text-[#A0A0A0] bg-[#181818] px-2.5 py-0.5 rounded border border-[#262626]">
                QuantCraft · SparkX 3.0
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportingList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                  categoryLabel="Supporting System"
                />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
