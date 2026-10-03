import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Pillars } from '../components/Pillars';
import { Journey } from '../components/Journey';
import { OrbitalTechStack } from '../components/orbital/OrbitalTechStack';
import { Experience } from '../components/Experience';
import { HomeProjects } from '../components/HomeProjects';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Parth Khowal | Software Engineer & Full-Stack Developer";
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About + My Journey */}
      <div id="about">
        <Pillars />
        <Journey />
      </div>

      {/* 3. Tech Stack */}
      <OrbitalTechStack />

      {/* 4. Experience */}
      <Experience />

      {/* 5. Top 5 Projects (PROBE, ReconCraft, Shree Krishna, AetherFace, ElectIQ) */}
      <HomeProjects />

      {/* 6. Contact */}
      <Contact />
    </div>
  );
};
