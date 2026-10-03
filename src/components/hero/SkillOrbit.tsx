import React, { useRef, useEffect, useState } from 'react';
import { HERO_CONFIG } from './HeroConfig';
import { Rotate3D, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';

interface SkillOrbitProps {
  accentColor?: string;
}

const SKILL_DOMAINS: Record<string, string> = {
  'React': 'Frontend & Next.js Architecture',
  'Python': 'Backend APIs, PyTorch & AI Pipelines',
  'Next.js': 'Server Components & Edge Runtime',
  'TensorFlow': 'Deep Learning & Neural Networks',
  'FastAPI': 'Async Microservices & OpenAPI',
  'TypeScript': 'Strictly Typed Enterprise Architecture',
  'PostgreSQL': 'Relational DB & Query Optimization',
  'Docker': 'Containerization & Orchestration',
};

export const SkillOrbit: React.FC<SkillOrbitProps> = ({
  accentColor = HERO_CONFIG.palette.powderBlue,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const velocityRef = useRef(0.006);
  const animFrameRef = useRef<number | null>(null);

  const skills = HERO_CONFIG.skills;
  const radius = 100;

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isDraggingRef.current) {
        velocityRef.current = velocityRef.current * 0.96 + 0.004 * 0.04;
        setRotationAngle((prev) => (prev + velocityRef.current * dt * 60) % (Math.PI * 2));
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handlePointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    velocityRef.current = 0;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    startXRef.current = clientX;
    const deltaAngle = deltaX * 0.012;
    velocityRef.current = deltaAngle * 0.5;
    setRotationAngle((prev) => prev + deltaAngle);
    if (Math.abs(deltaX) > 4) {
      sound.playClick(600 + Math.random() * 200, 0.01);
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleSkillClick = (skill: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playBlip(750, 0.03);
    setSelectedSkill(skill === selectedSkill ? null : skill);

    // Rotate selected skill toward front (angle = Math.PI / 2)
    const targetBaseAngle = (index / skills.length) * Math.PI * 2;
    setRotationAngle(Math.PI / 2 - targetBaseAngle);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div
        ref={containerRef}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
        className="relative w-64 h-36 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      >
        {/* 3D Orbit Axis Ring (SVG Perspective Ellipse) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <ellipse
            cx="128"
            cy="72"
            rx={radius}
            ry="32"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="3 4"
            className="opacity-25"
          />
          {/* Central Core Pulse */}
          <circle
            cx="128"
            cy="72"
            r="3"
            fill={accentColor}
            className="opacity-60"
          />
        </svg>

        {/* Orbiting Skill Chips */}
        {skills.map((skill, index) => {
          const baseAngle = (index / skills.length) * Math.PI * 2;
          const currentAngle = baseAngle + rotationAngle;

          const x = Math.cos(currentAngle) * radius;
          const y = Math.sin(currentAngle) * 30;
          const z = Math.sin(currentAngle);

          const isSelected = selectedSkill === skill;
          const scale = isSelected ? 1.15 : 0.72 + (z + 1) * 0.16;
          const opacity = isSelected ? 1 : 0.35 + (z + 1) * 0.32;
          const zIndex = isSelected ? 99 : Math.round((z + 1) * 50);

          return (
            <div
              key={skill}
              onClick={(e) => handleSkillClick(skill, index, e)}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 cursor-pointer pointer-events-auto"
              style={{
                left: `${128 + x}px`,
                top: `${72 + y}px`,
                transform: `scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#222222] border-white text-white shadow-lg ring-1'
                    : z > 0.4
                    ? 'bg-[#181818] border-[#444444] hover:border-white text-[#EEECE6] shadow-sm'
                    : 'bg-[#121212]/90 border-[#262626] text-[#888888]'
                }`}
                style={{
                  borderColor: isSelected || z > 0.4 ? accentColor : undefined,
                  color: isSelected || z > 0.4 ? '#EEECE6' : undefined,
                  boxShadow: isSelected ? `0 0 15px ${accentColor}40` : undefined,
                }}
              >
                {skill}
              </div>
            </div>
          );
        })}

        {/* Caption */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-[9px] text-[#666666] uppercase tracking-widest pointer-events-none">
          <Rotate3D className="w-2.5 h-2.5 opacity-60" />
          <span>drag or tap to inspect</span>
        </div>
      </div>

      {/* Selected Skill Quick Inspector Callout */}
      {selectedSkill && (
        <div className="w-64 px-3 py-2 rounded-lg bg-[#141414] border border-[#262626] font-mono text-[10px] flex items-center justify-between shadow-lg animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="flex items-center gap-1.5 truncate">
            <Sparkles className="w-3 h-3 flex-shrink-0" style={{ color: accentColor }} />
            <span className="text-[#AAAAAA] truncate">{SKILL_DOMAINS[selectedSkill] || 'Core Stack'}</span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-[#666666] hover:text-[#FFFFFF] ml-2 text-xs"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
