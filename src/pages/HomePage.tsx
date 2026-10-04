import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { HomeProjects } from '../components/HomeProjects';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Parth Khowal | Software Engineer & Full-Stack Developer";
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Includes 3D Tech Orbit Cylinder & About Me Curtain) */}
      <Hero />

      {/* 2. Selected Works (Top 5 Projects: PROBE, ReconCraft, Shree Krishna, AetherFace, ElectIQ) */}
      <HomeProjects />

      {/* 3. Industry Experience */}
      <Experience />
    </div>
  );
};
