import React from 'react';
import { type OrbitalCategory, type OrbitalTechSkill } from '../../data/techOrbitalData';
import { TechNode } from './TechNode';

interface OrbitalRingProps {
  category: OrbitalCategory;
  isFocused: boolean;
  isDimmed: boolean;
  selectedTechName: string | null;
  onFocusCategory: (categoryId: string) => void;
  onSelectTech: (skill: OrbitalTechSkill, categoryId: string) => void;
  scaleMultiplier: number;
  index: number;
}

export const OrbitalRing: React.FC<OrbitalRingProps> = ({
  category,
  isFocused,
  isDimmed,
  selectedTechName,
  onFocusCategory,
  onSelectTech,
  scaleMultiplier,
}) => {
  const currentRadius = Math.round(category.orbitRadius * scaleMultiplier);
  const diameter = currentRadius * 2;
  const count = category.skills.length;
  const spinClass = category.orbitDirection === 'cw' ? 'spin-cw' : 'spin-ccw';

  return (
    <div
      className={`orbital-ring-container ${spinClass} transition-opacity duration-500`}
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        // @ts-expect-error CSS variable
        '--orbit-duration': `${category.orbitDuration}s`,
        opacity: isDimmed ? 0.15 : 1,
        filter: isDimmed ? 'blur(1.5px)' : 'none',
        transform: isFocused ? 'scale(1.04)' : undefined,
      }}
    >
      {/* SVG Circular Orbit Track */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        <circle
          cx={currentRadius}
          cy={currentRadius}
          r={currentRadius - 1}
          fill="none"
          stroke={isFocused ? category.ringColor : '#2A2A2A'}
          strokeWidth={isFocused ? '1.5' : '1'}
          strokeDasharray={isFocused ? '6 4' : '3 6'}
          className={isFocused ? 'orbital-track-dash' : ''}
          style={{
            transition: 'stroke 0.4s ease, stroke-width 0.4s ease',
          }}
        />
      </svg>

      {/* Ring Hit Target for easy category selection */}
      <button
        type="button"
        onClick={() => onFocusCategory(category.id)}
        aria-label={`Focus ${category.name} orbit ring`}
        className="absolute inset-0 w-full h-full rounded-full cursor-pointer pointer-events-auto border border-transparent hover:border-white/20 transition-colors focus:outline-none"
        style={{
          boxShadow: isFocused ? `0 0 30px ${category.ringColor}22` : undefined,
        }}
      />

      {/* Orbiting Technology Nodes */}
      {category.skills.map((skill, sIdx) => {
        const angleDeg = (sIdx / count) * 360;
        const isSelected = selectedTechName === skill.name;

        return (
          <TechNode
            key={`${category.id}-${skill.name}`}
            skill={skill}
            angleDeg={angleDeg}
            radius={currentRadius}
            category={category}
            isSelected={isSelected}
            isFocusedCategory={isFocused}
            onSelect={() => onSelectTech(skill, category.id)}
            orbitDuration={category.orbitDuration}
            orbitDirection={category.orbitDirection}
          />
        );
      })}
    </div>
  );
};
