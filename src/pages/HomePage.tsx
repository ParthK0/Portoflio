import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Pillars } from '../components/Pillars';
import { Journey } from '../components/Journey';
import { Experience } from '../components/Experience';
import { HomeProjects } from '../components/HomeProjects';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Parth Khowal | Software Engineer & Full-Stack Developer";
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Includes 3D Tech Orbit Cylinder) */}
      <Hero />

      {/* 2. About + My Journey */}
      <div id="about">
        <Pillars />
        <Journey />
      </div>

      {/* 3. Experience */}
      <Experience />

      {/* 4. Top 5 Projects (PROBE, ReconCraft, Shree Krishna, AetherFace, ElectIQ) */}
      <HomeProjects />
    </div>
  );
};
