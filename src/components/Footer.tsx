import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#262626] bg-[#111111] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-[#A0A0A0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9D6BEE] shadow-[0_0_8px_#9D6BEE]"></span>
          <span>© {new Date().getFullYear()} <strong className="text-[#FFFFFF] font-medium">{PERSONAL_INFO.name}</strong>. Built with React 19, TypeScript & Tailwind CSS.</span>
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-[#A0A0A0]">
          <Link to="/" className="hover:text-[#9D6BEE] transition-colors">Home</Link>
          <Link to="/work" className="hover:text-[#9D6BEE] transition-colors">Work</Link>
          <Link to="/about" className="hover:text-[#9D6BEE] transition-colors">About</Link>
          <Link to="/beyond" className="hover:text-[#9D6BEE] transition-colors">Beyond</Link>
          <Link to="/contact" className="hover:text-[#9D6BEE] transition-colors">Contact</Link>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#9D6BEE] transition-colors">GitHub ↗</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#9D6BEE] transition-colors">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
};
