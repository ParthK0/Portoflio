import React, { useState, useEffect, useRef } from 'react';
import { HERO_CONFIG } from './hero/HeroConfig';
import { OrbitLogo } from './hero/OrbitLogo';
import { PortraitParallax } from './hero/PortraitParallax';
import { SkillOrbit } from './hero/SkillOrbit';
import { HeroCursor } from './hero/HeroCursor';
import { HeroScrollTransition } from './hero/HeroScrollTransition';
import { HeroCanvasBackground } from './hero/HeroCanvasBackground';
import { Github, Linkedin, ArrowUpRight, ShieldCheck, X, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const [isOrbitActive, setIsOrbitActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sound.isEnabled());

  const { currentTheme } = useTheme();

  const heroSectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightPortraitRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Dynamic accent based on active Theme + Orbit engagement
  const currentAccent = isOrbitActive
    ? currentTheme.light
    : currentTheme.primary || HERO_CONFIG.palette.powderBlue;

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = sound.toggle();
    setSoundEnabled(next);
  };

  // Entrance numeric counter animation (e.g. 0.00 to 1.00)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 0.05;
      if (current >= 1.0) {
        setCounter(1.0);
        clearInterval(interval);
      } else {
        setCounter(parseFloat(current.toFixed(2)));
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Timeline & ScrollTrigger Parallax
  useEffect(() => {
    if (!heroSectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headerRef.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.1 }
      )
        .fromTo(
          leftContentRef.current ? leftContentRef.current.children : [],
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          rightPortraitRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'opacity' },
          '-=0.8'
        )
        .fromTo(
          [scrollIndicatorRef.current, footerRef.current].filter(Boolean),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 },
          '-=0.5'
        );

      // 2. ScrollTrigger Parallax on scroll down (Depth motion only, NEVER fade opacity)
      gsap.to(rightPortraitRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(leftContentRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Custom Eased Lagging Blue Dot Cursor */}
      <HeroCursor accentColor={currentAccent} />

      {/* Main 100vh Full-Screen Hero Container */}
      <section
        id="hero"
        ref={heroSectionRef}
        className="relative w-full min-h-screen h-screen flex flex-col justify-between overflow-hidden select-none bg-[#101010] text-[#EEECE6]"
        style={{
          backgroundImage: `radial-gradient(ellipse 85% 75% at 50% 50%, #171717 0%, #101010 100%)`,
        }}
      >
        {/* Interactive Mouse-Deflection Particle Canvas Layer */}
        <HeroCanvasBackground accentColor={currentAccent} />

        {/* Top Navigation Bar: Orbital Logo (left) + Controls (right) */}
        <header
          ref={headerRef}
          className="relative z-30 w-full px-6 sm:px-12 pt-6 pb-4 flex items-center justify-between"
        >
          {/* Orbital Logo System (top-left) */}
          <OrbitLogo onOrbitStateChange={(orbiting) => setIsOrbitActive(orbiting)} />

          {/* Action Links & Audio Button (top-right) */}
          <nav className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              aria-label={soundEnabled ? 'Mute audio' : 'Enable audio'}
              className="p-2 rounded-full text-xs font-mono text-[#888888] hover:text-[#FFFFFF] bg-[#161616] border border-[#262626] hover:border-[var(--accent-primary)] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
              title={soundEnabled ? 'Audio: ON (click to mute)' : 'Audio: MUTED (click to enable)'}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5" style={{ color: currentAccent }} />
              ) : (
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
              )}
            </button>

            {/* Single "Contact" Navigation Link */}
            <Link
              to={HERO_CONFIG.navContactHref}
              onClick={() => sound.playClick(920, 0.03)}
              className="px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase text-[#EEECE6] bg-[#161616] border border-[#262626] hover:border-[var(--accent-primary)] transition-all duration-300 flex items-center gap-1.5 shadow-sm group"
              style={{
                borderColor: isOrbitActive ? `${currentAccent}88` : undefined,
              }}
            >
              <span>{HERO_CONFIG.navContactText}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: currentAccent }}
              />
            </Link>
          </nav>
        </header>

        {/* Center Canvas: Split Grid (Left Text Block & 3D Skill Ring | Right Prominent Portrait) */}
        <div className="relative z-20 flex-1 max-w-[1440px] mx-auto w-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Anchored in lower-left with generous breathing space */}
          <div
            ref={leftContentRef}
            className="lg:col-span-6 flex flex-col justify-end h-full pb-8 sm:pb-12 space-y-8"
          >
            
            {/* Live Telemetry / Ready Counter Badge */}
            <div className="inline-flex items-center gap-3 font-mono text-[11px] text-[#888888] tracking-widest uppercase">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: currentAccent }}
              />
              <span>SYS_READY // {counter.toFixed(2)}</span>
              <span className="text-[#333333]">|</span>
              <span className="text-[#97B6DA] font-medium hidden sm:inline">60 FPS DETERMINISTIC</span>
            </div>

            {/* Typography: Name in small bold letter-spaced type + Tagline below in lighter gray */}
            <div className="space-y-4">
              <h1 className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] uppercase text-[#EEECE6] flex items-center gap-2">
                <span>{HERO_CONFIG.name}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentAccent }} />
              </h1>

              {/* Tagline: Typewriter / Mask-wipe look */}
              <div className="text-3xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-[#EEECE6] leading-[1.08] max-w-xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EEECE6] via-[#CCCCCC] to-[#97B6DA]">
                  {HERO_CONFIG.tagline}
                </span>
                <span style={{ color: currentAccent }}>.</span>
              </div>

              {/* Sub-description with wide breathing space */}
              <p className="text-xs sm:text-sm font-sans text-[#888888] max-w-md leading-relaxed pt-1">
                {HERO_CONFIG.subDescription}
              </p>
            </div>

            {/* Drag-To-Orbit 3D Skill Label Object */}
            <div className="pt-2">
              <SkillOrbit accentColor={currentAccent} />
            </div>

          </div>

          {/* Right Side: Prominent, larger black-and-white portrait */}
          <div
            ref={rightPortraitRef}
            className="lg:col-span-6 h-full flex items-center justify-center lg:justify-end"
          >
            <PortraitParallax accentColor={currentAccent} />
          </div>

        </div>

        {/* Center Vertical Scroll Hint (Above the footer divider) */}
        <div
          ref={scrollIndicatorRef}
          className="relative z-20 flex flex-col items-center justify-center pb-2 pointer-events-none"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#97B6DA]/40 to-[#97B6DA] relative overflow-hidden">
            {/* Sliding Dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ backgroundColor: currentAccent }}
            />
          </div>
        </div>

        {/* Bottom 1px Divider and Footer Bar */}
        <footer
          ref={footerRef}
          className="relative z-30 w-full border-t border-[#222222] bg-[#101010]/95 backdrop-blur-sm px-6 sm:px-12 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#888888]"
        >
          
          {/* Left Text */}
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: currentAccent }}
            />
            <span>{HERO_CONFIG.footerText}</span>
          </div>

          {/* Centered Privacy Link */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-[#EEECE6] transition-colors cursor-pointer underline decoration-[#333333] hover:decoration-[#97B6DA] underline-offset-4"
            >
              {HERO_CONFIG.privacyText}
            </button>
          </div>

          {/* Right Social Icons: GitHub + LinkedIn */}
          <div className="flex items-center gap-4">
            <a
              href={HERO_CONFIG.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#EEECE6] transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={HERO_CONFIG.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#EEECE6] transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </footer>

        {/* Privacy Modal / Sheet */}
        {privacyOpen && (
          <div className="fixed inset-0 z-[99990] bg-[#101010]/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="max-w-md w-full p-6 rounded-2xl bg-[#161616] border border-[#262626] shadow-2xl space-y-4 font-mono text-xs text-[#AAAAAA]">
              <div className="flex items-center justify-between text-[#EEECE6] pb-2 border-b border-[#262626]">
                <div className="flex items-center gap-2 font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" style={{ color: currentAccent }} />
                  <span>Privacy Notice</span>
                </div>
                <button
                  onClick={() => setPrivacyOpen(false)}
                  className="p-1 hover:text-[#FFFFFF] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="leading-relaxed">
                This personal portfolio operates strictly without third-party ad trackers, third-party cookies, or invasive telemetry. All interactions and 3D simulations run 100% locally on your device hardware at 60 FPS.
              </p>
              <div className="pt-2 text-right">
                <button
                  onClick={() => setPrivacyOpen(false)}
                  className="px-4 py-1.5 rounded-full text-[#101010] font-bold"
                  style={{ backgroundColor: currentAccent }}
                >
                  ACKNOWLEDGE
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Scroll Transition Arc Section Rising from Bottom */}
      <HeroScrollTransition accentColor={currentAccent} />
    </>
  );
};

export default Hero;
