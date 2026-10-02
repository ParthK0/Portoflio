import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-sm">
        <div className="text-slate-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Engineered with React 19, TypeScript, and Tailwind CSS v4.
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Work</a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
