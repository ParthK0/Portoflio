import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  );
};

export default App;
