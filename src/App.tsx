import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CommandPalette } from './components/CommandPalette';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { BeyondPage } from './pages/BeyondPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Listen for replay boot sequence event from Command Palette
  useEffect(() => {
    const handleReplay = () => setIsLoading(true);
    window.addEventListener('replay-boot-sequence', handleReplay);
    return () => window.removeEventListener('replay-boot-sequence', handleReplay);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <div className="min-h-screen bg-[#111111] text-[#FFFFFF] selection:bg-[var(--accent-primary)] selection:text-[#111111] font-sans flex flex-col justify-between">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/beyond" element={<BeyondPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CommandPalette />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
