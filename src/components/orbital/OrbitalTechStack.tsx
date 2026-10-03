import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Orbit, 
  Grid3X3, 
  CheckCircle2
} from 'lucide-react';
import './orbital.css';
import { 
  ORBITAL_CATEGORIES, 
  TOTAL_SKILLS_COUNT, 
  TOTAL_DOMAINS_COUNT, 
  PRODUCTION_PROJECTS_COUNT,
  type OrbitalTechSkill 
} from '../../data/techOrbitalData';
import { OrbitalCore } from './OrbitalCore';
import { OrbitalRing } from './OrbitalRing';
import { DetailPanel } from './DetailPanel';
import { TechDrilldown } from './TechDrilldown';

type ViewMode = 
  | { mode: 'orbit' }
  | { mode: 'category'; categoryId: string }
  | { mode: 'tech'; categoryId: string; techName: string };

export const OrbitalTechStack: React.FC = () => {
  const [viewState, setViewState] = useState<ViewMode>({ mode: 'orbit' });
  const [isPaused, setIsPaused] = useState(false);
  const [layoutStyle, setLayoutStyle] = useState<'orbital' | 'grid'>('orbital');
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 8, y: 0 });
  const [scaleMultiplier, setScaleMultiplier] = useState(1);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive scale calculation for rings
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScaleMultiplier(0.62);
      } else if (width < 768) {
        setScaleMultiplier(0.75);
      } else if (width < 1024) {
        setScaleMultiplier(0.85);
      } else if (width < 1280) {
        setScaleMultiplier(0.92);
      } else {
        setScaleMultiplier(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subtle 2.5D mouse parallax tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Constrain tilt between 2deg and 14deg on X, -7deg and +7deg on Y
    const tiltX = 8 - (y / (rect.height / 2)) * 6;
    const tiltY = (x / (rect.width / 2)) * 6;

    setTilt({ x: tiltX, y: tiltY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 8, y: 0 });
  }, []);

  // State machine navigation
  const activeCategoryId = viewState.mode !== 'orbit' ? viewState.categoryId : null;
  const activeCategory = ORBITAL_CATEGORIES.find(c => c.id === activeCategoryId) || null;

  const activeTechName = viewState.mode === 'tech' ? viewState.techName : null;
  const activeTech = activeCategory?.skills.find(s => s.name === activeTechName) || null;

  const handleFocusCategory = (categoryId: string) => {
    setViewState({ mode: 'category', categoryId });
  };

  const handleSelectTech = (skill: OrbitalTechSkill, categoryId?: string) => {
    const catId = categoryId || activeCategoryId || 'languages';
    setViewState({ mode: 'tech', categoryId: catId, techName: skill.name });
  };

  const handleBackToOrbit = () => {
    setViewState({ mode: 'orbit' });
  };

  const handleBackToCategory = () => {
    if (activeCategoryId) {
      setViewState({ mode: 'category', categoryId: activeCategoryId });
    } else {
      setViewState({ mode: 'orbit' });
    }
  };

  return (
    <section 
      id="tech-stack" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 sm:py-24 relative bg-[#000000] border-b border-[#222222] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1c1c1c] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0a0a0a] border border-[#222222] text-[11px] font-mono tracking-widest uppercase text-[#888888] mb-4">
              <span className="text-[var(--accent-primary)] font-bold">//</span>
              <span>[03 // TECH MATRIX & CAPABILITIES]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight uppercase font-headline">
              ORBITAL TECH MATRIX
            </h2>
          </div>
          <p className="text-[#888888] text-sm sm:text-base max-w-xl font-mono leading-relaxed">
            Technologies engineered across 6 distinct orbital domains — from deterministic Python arithmetic and Spring Boot biometrics to real-time voice and high-concurrency cloud systems.
          </p>
        </div>

        {/* Toolbar & Category Selectors */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          
          {/* Category Filter Pills (Brutalist Sharp Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={handleBackToOrbit}
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer border flex items-center gap-1.5 ${
                viewState.mode === 'orbit'
                  ? "bg-[#FFFFFF] text-[#000000] border-[#FFFFFF]"
                  : "bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]"
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>[ALL SYSTEMS]</span>
            </button>

            {ORBITAL_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategoryId === cat.id;

              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleFocusCategory(cat.id)}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer border flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[var(--accent-primary)] text-[#000000] font-bold border-[var(--accent-primary)]"
                      : "bg-[#080808] text-[#888888] border-[#222222] hover:text-[#FFFFFF] hover:bg-[#141414]"
                  }`}
                >
                  <Icon 
                    className="w-3.5 h-3.5" 
                    style={{ color: isActive ? '#000000' : '#888888' }} 
                  />
                  <span>[{cat.shortName}]</span>
                  <span className="text-[10px] opacity-60">({cat.skills.length})</span>
                </button>
              );
            })}
          </div>

          {/* View Toggles & Orbit Controls */}
          <div className="flex items-center gap-2 ml-auto">
            {layoutStyle === 'orbital' && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                title={isPaused ? "Resume orbits" : "Pause orbits for inspection"}
                className="p-2 rounded-xl bg-[#161616] border border-[#2B2B2B] text-[#A0A0A0] hover:text-white hover:border-[#444] transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5"
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            )}

            {/* Layout switch: 3D Orbit vs Traditional Grid */}
            <div className="flex items-center p-1 rounded-xl bg-[#161616] border border-[#2A2A2A]">
              <button
                type="button"
                onClick={() => setLayoutStyle('orbital')}
                className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all cursor-pointer ${
                  layoutStyle === 'orbital'
                    ? "bg-[#252525] text-white shadow-sm"
                    : "text-[#888888] hover:text-white"
                }`}
                title="Cinematic 3D Orbital View"
              >
                <Orbit className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span className="hidden sm:inline">Orbit</span>
              </button>
              
              <button
                type="button"
                onClick={() => setLayoutStyle('grid')}
                className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all cursor-pointer ${
                  layoutStyle === 'grid'
                    ? "bg-[#252525] text-white shadow-sm"
                    : "text-[#888888] hover:text-white"
                }`}
                title="Traditional Card Grid"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: 3D ORBITAL VIEW */}
        {layoutStyle === 'orbital' ? (
          <div className="relative">
            {/* 3D Perspective Stage */}
            <div className="orbital-container w-full min-h-[560px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[820px] rounded-3xl bg-radial from-[#151515] to-[#0D0D0D] border border-[#222222] flex items-center justify-center overflow-hidden relative shadow-2xl">
              
              {/* Starfield / Subtle grid matrix */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}
              />

              {/* Orbital Interactive Stage with 2.5D Parallax */}
              <div
                className={`orbital-stage relative w-full h-full flex items-center justify-center ${
                  isPaused ? 'is-paused' : ''
                }`}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* 6 Concentric Orbital Rings */}
                {ORBITAL_CATEGORIES.map((cat, idx) => {
                  const isFocused = activeCategoryId === cat.id || hoveredCategory === cat.id;
                  const isDimmed = activeCategoryId !== null && activeCategoryId !== cat.id;

                  return (
                    <OrbitalRing
                      key={cat.id}
                      category={cat}
                      isFocused={isFocused}
                      isDimmed={isDimmed}
                      selectedTechName={activeTechName}
                      onFocusCategory={handleFocusCategory}
                      onSelectTech={(skill, categoryId) => handleSelectTech(skill, categoryId)}
                      scaleMultiplier={scaleMultiplier}
                      index={idx}
                    />
                  );
                })}

                {/* Central Core Anchor Hub */}
                <OrbitalCore
                  activeCategory={activeCategory}
                  activeTech={activeTech}
                  onReset={handleBackToOrbit}
                  totalSkills={TOTAL_SKILLS_COUNT}
                  totalDomains={TOTAL_DOMAINS_COUNT}
                  projectsCount={PRODUCTION_PROJECTS_COUNT}
                />
              </div>

              {/* Overlay Hints */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-[#666666] pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Gravitational Simulation
                </span>
                <span className="hidden sm:inline">
                  Move cursor for 2.5D parallax tilt • Click core or nodes to inspect
                </span>
              </div>
            </div>

            {/* Drilldown Slide-in Panels (Appears below the stage when an item is selected) */}
            <AnimatePresence mode="wait">
              {viewState.mode === 'tech' && activeTech && activeCategory && (
                <div className="mt-8">
                  <TechDrilldown
                    key={`drill-${activeTech.name}`}
                    skill={activeTech}
                    category={activeCategory}
                    onBackToCategory={handleBackToCategory}
                    onBackToOrbit={handleBackToOrbit}
                  />
                </div>
              )}

              {viewState.mode === 'category' && activeCategory && (
                <div className="mt-8">
                  <DetailPanel
                    key={`panel-${activeCategory.id}`}
                    category={activeCategory}
                    onBack={handleBackToOrbit}
                    onSelectTech={(skill) => handleSelectTech(skill, activeCategory.id)}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* VIEW MODE 2: CLASSIC ACCESSIBLE CARD GRID (Enhanced with Drilldown) */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategoryId 
                ? ORBITAL_CATEGORIES.filter(c => c.id === activeCategoryId) 
                : ORBITAL_CATEGORIES
              ).map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="bg-[#161616] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--accent-primary)]/40 transition-all duration-300 group shadow-xl shadow-black/40 hover:-translate-y-1"
                  >
                    <div>
                      {/* Category Title & Icon */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#262626]">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center transition-all group-hover:scale-110"
                            style={{ color: category.ringColor }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[var(--accent-primary)] transition-colors">
                              {category.name}
                            </h3>
                            <span className="text-[10px] font-mono text-[#777]">
                              {category.orbitRadius}px Orbit
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#181818] border border-[#262626] text-[#A0A0A0]">
                          {category.skills.length} tools
                        </span>
                      </div>

                      <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
                        {category.description}
                      </p>

                      {/* Skills Grid */}
                      <div className="space-y-3">
                        {category.skills.map((skill) => (
                          <button
                            type="button"
                            key={skill.name}
                            onClick={() => handleSelectTech(skill, category.id)}
                            className="w-full text-left p-3 rounded-xl bg-[#181818] border border-[#262626] hover:border-[#383838] transition-all cursor-pointer group/item hover:bg-[#1E1E1E]"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold text-[#FFFFFF] flex items-center gap-2 group-hover/item:text-[var(--accent-primary)] transition-colors">
                                <span 
                                  className="w-1.5 h-1.5 rounded-full" 
                                  style={{ backgroundColor: category.ringColor }}
                                />
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-[var(--accent-primary)] border border-[var(--accent-border)] font-medium">
                                {skill.level}
                              </span>
                            </div>
                            {skill.note && (
                              <div className="text-[11px] text-[#A0A0A0] font-sans ps-3.5 line-clamp-1">
                                {skill.note}
                              </div>
                            )}
                            {skill.usedIn.length > 0 && (
                              <div className="mt-1.5 ps-3.5 text-[10px] font-mono text-[var(--accent-primary)]/80 flex items-center gap-1">
                                <span>Used in {skill.usedIn.length} production {skill.usedIn.length === 1 ? 'project' : 'projects'}</span>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Footer badge */}
                    <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#707070] font-mono">
                      <span>Production Grade</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Drilldown Panel in Grid Mode */}
            <AnimatePresence>
              {viewState.mode === 'tech' && activeTech && activeCategory && (
                <div className="mt-8">
                  <TechDrilldown
                    skill={activeTech}
                    category={activeCategory}
                    onBackToCategory={handleBackToCategory}
                    onBackToOrbit={handleBackToOrbit}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
};
