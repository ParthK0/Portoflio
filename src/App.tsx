import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Leadership } from './components/Leadership';
import { Proof } from './components/Proof';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Journey />
        <Experience />
        <Projects />
        <Architecture />
        <Leadership />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
