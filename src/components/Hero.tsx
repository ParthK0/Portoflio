import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';
import {
  Volume2,
  VolumeX,
  ShieldCheck,
  X
} from 'lucide-react';
import { TechStackGlobe } from './TechStackGlobe';

const FALLBACK_PORTRAIT =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'><defs><radialGradient id='g' cx='50%' cy='28%' r='60%'><stop offset='0' stop-color='#777'/><stop offset='1' stop-color='#181818'/></radialGradient></defs><rect width='600' height='800' fill='#121212'/><path d='M50 800c0-170 90-250 250-270 160 20 250 100 250 270z' fill='url(#g)'/><ellipse cx='300' cy='290' rx='105' ry='135' fill='url(#g)'/></svg>"
  );



const MARQUEE_ITEMS = [
  'Full-stack engineering',
  'AI agents',
  'Fintech systems',
  'Multi-tenant platforms',
  'Computer vision',
  'Open source',
  'Developer experience',
];

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme.primary || '#b380f7';

  // Refs for DOM and Canvas elements
  const mainTrackRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const orbitalCanvasRef = useRef<HTMLCanvasElement>(null);
  const meImgRef = useRef<HTMLImageElement>(null);
  const copyBlockRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);
  const bodyTextRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // States
  const [orbitMode, setOrbitMode] = useState<'intro' | 'docked' | 'orbit'>('intro');
  const [typedName, setTypedName] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sound.isEnabled());
  const [isSheetOver, setIsSheetOver] = useState(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  // Math helper
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Sound toggle
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = sound.toggle();
    setSoundEnabled(next);
  };



  // 1. Initial Typewriter & Upward Intro Transition
  useEffect(() => {
    let animTimer: ReturnType<typeof setTimeout> | null = null;
    let typeStartTimer: ReturnType<typeof setTimeout> | null = null;
    let typeTimer: ReturnType<typeof setInterval> | null = null;

    const startAnimation = () => {
      setHasEntered(true);
      setOrbitMode('docked');
      // Typewriter name delayed so the slow upward emergence from bottom is savored
      const full = 'Parth Khowal';
      let i = 0;
      typeStartTimer = setTimeout(() => {
        typeTimer = setInterval(() => {
          setTypedName(full.slice(0, ++i));
          if (i >= full.length && typeTimer) clearInterval(typeTimer);
        }, 50);
      }, 600);
    };

    const handleReveal = () => {
      if (animTimer) clearTimeout(animTimer);
      startAnimation();
    };

    window.addEventListener('hero-reveal', handleReveal);
    animTimer = setTimeout(startAnimation, 2800);

    return () => {
      if (animTimer) clearTimeout(animTimer);
      if (typeStartTimer) clearTimeout(typeStartTimer);
      if (typeTimer) clearInterval(typeTimer);
      window.removeEventListener('hero-reveal', handleReveal);
    };
  }, []);

  // 2. Mouse Tracking & Fluid Custom Cursor
  const mouseRef = useRef({ x: -999, y: -999, px: 0, py: 0 });
  const curPosRef = useRef({ cx: -99, cy: -99 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.px = e.clientX / window.innerWidth - 0.5;
      mouseRef.current.py = e.clientY / window.innerHeight - 0.5;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInteractive = target && target.closest('a, button, input, .cursor-pointer');
      if (cursorRef.current) {
        if (isInteractive) {
          cursorRef.current.classList.add('big-c');
        } else {
          cursorRef.current.classList.remove('big-c');
        }
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  // 3. Scroll Sync & The Sticky Sheet Curtain ("MANIFEST")
  const scrollProgRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (!mainTrackRef.current) return;
    const rect = mainTrackRef.current.getBoundingClientRect();
    const scrollableDist = mainTrackRef.current.offsetHeight - window.innerHeight;
    const topOffset = -rect.top;
    const p = clamp(topOffset / (scrollableDist || 1), 0, 1);
    scrollProgRef.current = p;

    // Curved Sheet Ellipse Clip-Path Calculation
    const e0 = clamp((p - 0.04) / 0.4, 0, 1);
    const a = e0 * e0 * (3 - 2 * e0);

    if (sheetRef.current) {
      const rx = lerp(100, 175, a);
      const ry = lerp(0, 140, a);
      sheetRef.current.style.clipPath = `ellipse(${rx}% ${ry}% at 50% 100%)`;
    }

    // Sheet Inner Elements Reveal
    const m = clamp((p - 0.42) / 0.2, 0, 1);
    const q = clamp((p - 0.5) / 0.2, 0, 1);
    const z = clamp((p - 0.58) / 0.2, 0, 1);
    const sStrike = clamp((p - 0.66) / 0.1, 0, 1);
    const uUnderline = clamp((p - 0.76) / 0.1, 0, 1);

    if (colsRef.current) {
      colsRef.current.style.opacity = `${m}`;
      colsRef.current.style.transform = `translateY(${(1 - m) * 40}px)`;
      colsRef.current.style.setProperty('--s', `${sStrike}`);
    }

    if (bodyTextRef.current) {
      bodyTextRef.current.style.opacity = `${q}`;
      bodyTextRef.current.style.transform = `translateY(${(1 - q) * 40}px)`;
    }

    if (bigTextRef.current) {
      bigTextRef.current.style.opacity = `${z}`;
      bigTextRef.current.style.transform = `translateY(${(1 - z) * 40}px)`;
      bigTextRef.current.style.setProperty('--u', `${uUnderline}`);
    }

    if (ringRef.current) {
      ringRef.current.style.setProperty('--rs', `${lerp(0.8, 1.15, p)}`);
    }

    // Toggle inverted header style when sheet dominates viewport
    const sheetDominated = a > 0.7 && rect.bottom > window.innerHeight * 0.45;
    setIsSheetOver(sheetDominated);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 4. Combined 60FPS Canvas Animation Loop (Particles, 3-Body Physics Orbit Logo & Parallax)
  useEffect(() => {
    const pc = particleCanvasRef.current;
    const cv = orbitalCanvasRef.current;
    if (!pc || !cv) return;

    const pg = pc.getContext('2d');
    const x = cv.getContext('2d');
    if (!pg || !x) return;

    let W = (pc.width = cv.width = window.innerWidth);
    let H = (pc.height = cv.height = window.innerHeight);
    let kk = clamp(W / 1500, 0.62, 1);

    // Constellation particle network (balanced midpoint)
    let pts = Array.from({ length: Math.round(W / 16) }, () => ({
      x: Math.random() * W * 0.67,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.75 + 0.9,
    }));

    const onResize = () => {
      W = pc.width = cv.width = window.innerWidth;
      H = pc.height = cv.height = window.innerHeight;
      kk = clamp(W / 1500, 0.62, 1);
      pts = Array.from({ length: Math.round(W / 16) }, () => ({
        x: Math.random() * W * 0.67,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.75 + 0.9,
      }));
    };
    window.addEventListener('resize', onResize);

    // 3-Body Orbital Logo Bodies
    const B = [
      { k: 'main', r: 34, s: 1.9, x: W / 2, y: H / 2, vx: 0, vy: 0 },
      { k: 'dot', r: 13, s: 1.9, x: W / 2, y: H / 2, vx: 0, vy: 0 },
      { k: 'ring', r: 36, s: 1.9, x: W / 2, y: H / 2, vx: 0, vy: 0 },
    ];

    const DK: Record<string, [number, number]> = {
      main: [98, 152],
      dot: [139, 120],
      ring: [97, 225],
    };

    const O = [
      { cx: 190, cy: 270, a: 175, b: 120, rot: -0.35, w: 0.5 },
      { cx: 200, cy: 260, a: 150, b: 185, rot: 0.55, w: -0.35 },
    ];

    const op = (o: (typeof O)[0], th: number) => {
      const c = Math.cos(o.rot);
      const s = Math.sin(o.rot);
      const u = o.a * Math.cos(th);
      const v = o.b * Math.sin(th);
      return [(o.cx + u * c - v * s) * kk, (o.cy + u * s + v * c) * kk];
    };

    let orb = 0;
    let sh = 0;
    let lt = 0;
    const lab: string[][] = ['', ''] as unknown as string[][];
    const t0 = performance.now();
    let animId: number;

    const render = (now: number) => {
      const t = (now - t0) / 1000;
      const p = scrollProgRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const px = mouseRef.current.px;
      const py = mouseRef.current.py;

      orb += ((orbitMode === 'orbit' ? 1 : 0) - orb) * 0.05;
      sh += ((isSheetOver ? 1 : 0) - sh) * 0.1;

      // 1. PARTICLES & CONSTELLATION NETWORK
      pg.clearRect(0, 0, W, H);
      const pa = 1 - clamp(p * 3, 0, 1);
      if (pa > 0.01) {
        const maxX = W * 0.67;
        pg.fillStyle = accentColor;
        pg.strokeStyle = accentColor;

        pts.forEach((q) => {
          q.x += q.vx;
          q.y += q.vy;
          if (q.x < 0 || q.x > maxX) q.vx *= -1;
          if (q.y < 0 || q.y > H) q.vy *= -1;

          // Repel gently from mouse
          const dx = q.x - mx;
          const dy = q.y - my;
          const d = Math.hypot(dx, dy);
          if (d < 130 && d > 0) {
            q.x += (dx / d) * 1.2;
            q.y += (dy / d) * 1.2;
          }

          // Render star node with balanced visibility
          pg.globalAlpha = pa * 0.9;
          pg.beginPath();
          pg.arc(q.x, q.y, q.r, 0, Math.PI * 2);
          pg.fill();
        });

        // Balanced constellation connections between nearby particles
        const maxDist = 110;
        pg.lineWidth = 0.75;
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
            if (d < maxDist) {
              const alphaRatio = 1 - d / maxDist;
              pg.globalAlpha = pa * alphaRatio * 0.50;
              pg.beginPath();
              pg.moveTo(pts[i].x, pts[i].y);
              pg.lineTo(pts[j].x, pts[j].y);
              pg.stroke();
            }
          }

          // Subtle interactive connection from nearby star node to mouse cursor
          if (mx > 0 && my > 0 && mx < maxX + 50) {
            const dm = Math.hypot(pts[i].x - mx, pts[i].y - my);
            if (dm < 125) {
              pg.globalAlpha = pa * (1 - dm / 125) * 0.50;
              pg.beginPath();
              pg.moveTo(pts[i].x, pts[i].y);
              pg.lineTo(mx, my);
              pg.stroke();
            }
          }
        }
        pg.globalAlpha = 1;
      }

      // 2. 3-BODY ORBITAL LOGO SYSTEM
      x.clearRect(0, 0, W, H);
      const ph = [
        [0, 0],
        [1.2, 1],
        [Math.PI * 1.1, 0],
      ];

      B.forEach((b, i) => {
        let tx = 0;
        let ty = 0;
        const d = DK[b.k];
        const drift = b.k === 'ring' ? clamp(p / 0.3, 0, 1) * 28 : 0;

        if (orbitMode === 'intro') {
          tx = W / 2;
          ty = [H * 0.5, H * 0.31, H * 0.74][i];
        } else {
          const o = op(O[ph[i][1]], t * O[ph[i][1]].w + ph[i][0]);
          tx = lerp(d[0] * kk + drift, o[0], orb);
          ty = lerp(d[1] * kk + drift * 0.6, o[1], orb);
        }

        // Gravity pull toward cursor
        if (orb > 0.5 && orbitMode === 'orbit') {
          const dd = Math.hypot(mx - b.x, my - b.y);
          if (dd < 240) {
            tx += (mx - b.x) * 0.18 * (1 - dd / 240);
            ty += (my - b.y) * 0.18 * (1 - dd / 240);
          }
        }

        b.vx = (b.vx + (tx - b.x) * 0.015) * 0.86;
        b.vy = (b.vy + (ty - b.y) * 0.015) * 0.86;
        b.x += b.vx;
        b.y += b.vy;
        b.s += ((orbitMode === 'intro' ? 1.9 : 1) * kk - b.s) * 0.08;
      });

      // Render Orbital Paths & Live Coordinates
      if (orb > 0.01) {
        x.lineWidth = 1;
        x.strokeStyle = accentColor;
        x.globalAlpha = orb * 0.55;

        O.forEach((o) => {
          x.save();
          x.translate(o.cx * kk, o.cy * kk);
          x.rotate(o.rot);
          x.beginPath();
          x.ellipse(0, 0, o.a * kk, o.b * kk, 0, 0, Math.PI * 2);
          x.stroke();
          x.restore();
        });

        x.globalAlpha = orb;
        x.fillStyle = accentColor;
        x.font = '9px JetBrains Mono, monospace';

        [
          [0, 2.4],
          [1, 4.1],
        ].forEach(([k, off], n) => {
          const o = O[k];
          const s = op(o, t * o.w * 1.4 + off);
          x.beginPath();
          x.arc(s[0], s[1], 3.5, 0, Math.PI * 2);
          x.fill();

          if (now - lt > 100) {
            lab[n] = [
              `${s[0] | 0}, ${s[1] | 0}`,
              `Δ ${(Math.abs(o.w) * 1.4 * o.a * kk / 100).toFixed(1)}`,
            ];
          }
          if (lab[n]) {
            x.fillText(lab[n][0], s[0] + 8, s[1] - 2);
            x.fillText(lab[n][1], s[0] + 8, s[1] + 9);
          }
        });

        if (now - lt > 100) lt = now;
        x.globalAlpha = 1;
      }

      // Render 3 Circles
      const ink = 'rgb(238,236,230)';
      B.forEach((b) => {
        const r = b.r * b.s;
        x.beginPath();
        if (b.k === 'main') {
          x.fillStyle = isSheetOver ? '#101010' : accentColor;
          x.arc(b.x, b.y, r, 0, Math.PI * 2);
          x.fill();
        } else if (b.k === 'dot') {
          x.fillStyle = ink;
          x.arc(b.x, b.y, r, 0, Math.PI * 2);
          x.fill();
        } else {
          x.fillStyle = ink;
          x.arc(b.x, b.y, r, 0, Math.PI * 2);
          x.arc(b.x, b.y, r * 0.42, 0, Math.PI * 2, true);
          x.fill('evenodd');
        }
      });

      // 3. SMOOTH PARALLAX TILT ON IMAGE & COPY
      if (meImgRef.current) {
        meImgRef.current.style.transform = `translate3d(${-px * 14}px, ${-p * 80 - py * 8}px, 0)`;
      }

      if (copyBlockRef.current) {
        copyBlockRef.current.style.transform = `translateY(${-p * 40}vh)`;
        copyBlockRef.current.style.opacity = `${1 - clamp(p * 3.5, 0, 1)}`;
      }

      // 4. CURSOR LERP
      curPosRef.current.cx += (mx - curPosRef.current.cx) * 0.2;
      curPosRef.current.cy += (my - curPosRef.current.cy) * 0.2;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curPosRef.current.cx}px, ${curPosRef.current.cy}px)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [orbitMode, isSheetOver, accentColor]);



  return (
    <>
      {/* Fluid Custom Cursor Dot */}
      <div
        id="cd"
        ref={cursorRef}
        style={{ backgroundColor: accentColor }}
        className="fixed z-[99999] left-0 top-0 w-2.5 h-2.5 -m-[5px] rounded-full pointer-events-none transition-[width,height,margin,background-color] duration-250 ease-out"
      />


      {/* Intro Center Tagline */}
      <div
        id="tg"
        className={`fixed z-[26] left-[calc(50%+110px)] top-1/2 -translate-y-1/2 font-outfit font-semibold text-[22px] tracking-wide pointer-events-none transition-opacity duration-700 ${orbitMode === 'intro' ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ color: accentColor }}
      >
        build · ship · iterate
      </div>

      {/* Fixed Fullscreen 3-Body Orbital Physics Canvas */}
      <canvas id="lg" ref={orbitalCanvasRef} className="fixed inset-0 z-25 pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className={`fixed inset-x-0 top-0 z-30 flex justify-end items-center px-6 sm:px-16 py-8 sm:py-10 pointer-events-none transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${hasEntered ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}>

        {/* Right Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={toggleSound}
            aria-label="Toggle audio"
            className="p-2 rounded-full font-mono text-xs text-[#888888] hover:text-[#FFFFFF] bg-[#161616]/70 backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5" style={{ color: accentColor }} />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </button>

          <Link
            to="/work"
            className="pill px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase text-[#EEECE6] bg-[#101010]/60 backdrop-blur-md border border-white/20 hover:border-white transition-all cursor-pointer"
          >
            WORK ↗
          </Link>

          <a
            href="#contact"
            className="pill px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase text-[#EEECE6] bg-[#101010]/60 backdrop-blur-md border border-white/20 hover:border-white transition-all cursor-pointer"
          >
            CONTACT ↗
          </a>
        </div>
      </header>

      {/* 420vh Sticky Stage Wrapper */}
      <main ref={mainTrackRef} className="relative w-full h-[420vh]">
        <div id="stage" className="sticky top-0 h-screen w-full overflow-hidden bg-[#101010] select-none">

          {/* Main Hero Viewport Wrapper: Emerges slowly upward from bottom in sync with purple curved lift */}
          <div
            className={`relative w-full h-full transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${hasEntered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-28 opacity-0 scale-[0.98]'
              }`}
          >
            {/* Particle Network Canvas */}
            <canvas id="pc" ref={particleCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />

            {/* Masked Portrait with Natural Blend & Depth Tilt: Staggered slow emergence */}
            <div
              className={`absolute right-5 sm:right-10 lg:right-16 xl:right-24 -bottom-[20%] origin-bottom pointer-events-none z-10 will-change-transform transition-all duration-[1500ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${hasEntered ? 'translate-y-0 opacity-100 scale-[1.17]' : 'translate-y-36 opacity-0 scale-[1.06]'
                }`}
            >
              <img
                id="me"
                ref={meImgRef}
                src="/me.jpg"
                alt="Portrait of Parth Khowal"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/new.png') {
                    target.src = '/images/new.png';
                  } else {
                    target.src = FALLBACK_PORTRAIT;
                  }
                }}
                className="h-[85vh] sm:h-[90vh] lg:h-[94vh] xl:h-[98vh] w-auto max-w-[85vw] sm:max-w-[60vw] lg:max-w-[52vw] xl:max-w-[46vw] object-cover object-[55%_top] filter grayscale contrast-[1.08] brightness-[0.94] pointer-events-none"
                style={{
                  maskImage:
                    'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%), linear-gradient(to bottom, black 88%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%), linear-gradient(to bottom, black 88%, transparent 100%)',
                }}
              />
            </div>

            {/* Radial Vignette */}
            <div
              className="absolute inset-0 pointer-events-none z-15"
              style={{
                background:
                  'radial-gradient(ellipse at 63% 54%, transparent 50%, #101010 100%), linear-gradient(#101010, transparent 16%)',
              }}
            />

            {/* Hero Typography: Emerges slowly upward */}
            <div
              className={`absolute left-[clamp(24px,6vw,115px)] bottom-[16vh] max-w-[72vw] z-20 will-change-transform transition-all duration-[1400ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${hasEntered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-36 opacity-0 scale-[0.96]'
                }`}
            >
              <div id="copy" ref={copyBlockRef} className="flex flex-col">
                {/* 1. Parth Khowal */}
                <h1
                  className="font-inter-tight font-extrabold text-[clamp(43px,6.5vw,101px)] leading-[0.98] tracking-[-0.035em] transition-colors duration-500"
                  style={{ color: accentColor }}
                >
                  <span>{typedName || 'Parth Khowal'}</span>
                </h1>

                {/* 2. Software Engineer */}
                <h2 className="font-inter-tight font-bold text-[clamp(31px,4.3vw,65px)] leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#EEECE6] via-[#DDDDDD] to-[#97b6da] mt-3 sm:mt-4">
                  Software Engineer
                </h2>

                {/* 3. Building full-stack software with AI */}
                <p className="font-outfit text-[clamp(24px,2.3vw,35px)] text-[#EEECE6]/80 font-normal leading-relaxed max-w-[42ch] mt-2 sm:mt-2.5">
                  Building full-stack software with AI
                </p>
              </div>
            </div>

            {/* Center Sliding Dot Indicator */}
            <div className="sl-line pointer-events-none z-20" />
          </div>

          {/* ========================================================
              THE RISING ACCENT SHEET CURTAIN ("ABOUT ME")
             ======================================================== */}
          <section
            id="sheet"
            ref={sheetRef}
            className="absolute inset-0 z-20 transition-colors duration-500 pt-[12vh] sm:pt-[14vh] px-6 sm:px-16 text-[#101010] pointer-events-auto"
            style={{
              backgroundColor: accentColor,
              clipPath: 'ellipse(100% 0% at 50% 100%)',
            }}
          >
            {/* Scaling Central Geometric Hole/Ring */}
            <div
              id="ring"
              ref={ringRef}
              className="absolute left-1/2 top-[52%] w-[36vw] aspect-square rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200"
              style={{
                background:
                  'radial-gradient(circle, transparent 0 37%, rgba(255,255,255,0.45) 37.4%)',
                transform: 'translate(-50%, -50%) scale(var(--rs, 0.8))',
              }}
            />

            {/* Split Monumental Header: Top-Aligned Left, Center (ABOUT ME), and Right */}
            <div
              id="cols"
              ref={colsRef}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-4 md:gap-[2.5vw] lg:gap-[4vw] text-[#101010]"
            >
              {/* Left Column: THINK BUILD QUESTION (shifted more right, top-aligned) */}
              <div className="order-2 md:order-1 font-outfit font-extrabold text-[clamp(34px,5vw,92px)] leading-[0.93] tracking-[-0.01em] uppercase md:pl-14 lg:pl-24 xl:pl-28 whitespace-nowrap">
                THINK<br />
                BUILD<br />
                QUESTION
              </div>

              {/* Center Column: ABOUT ME (top-aligned to match Left and Right) */}
              <div className="order-1 md:order-2 text-center font-outfit font-bold text-[clamp(18px,1.8vw,24px)] tracking-[0.35em] text-white/95 uppercase pt-2 md:pt-3.5 lg:pt-4 whitespace-nowrap select-none">
                ABOUT ME
              </div>

              {/* Right Column: UNDERSTAND REFINE (top-aligned to match ABOUT ME) */}
              <div className="order-3 md:order-3 font-outfit font-extrabold text-[clamp(34px,5vw,92px)] leading-[0.93] tracking-[-0.01em] uppercase text-left md:text-right whitespace-nowrap">
                UNDERSTAND<br />
                REFINE
              </div>
            </div>

            {/* Manifest / About Me Body Paragraphs */}
            <div
              id="body"
              ref={bodyTextRef}
              className="relative mt-5 md:mt-2 md:ml-[44%] lg:ml-[46%] max-w-full md:max-w-[54%] font-outfit font-medium text-[clamp(13px,1.15vw,17px)] leading-[1.48] text-[#101010]/95 space-y-2.5 sm:space-y-3"
            >
              <p>
                I’ve always been drawn to problems that don’t have an obvious answer.
              </p>
              <p>
                Mathematics taught me to think logically. Software taught me to turn that thinking into systems. AI taught me to question what those systems can actually understand.
              </p>
              <p>
                Somewhere between the three, I found what I enjoy most — taking an idea apart, understanding how it works, and building something better from it.
              </p>
              <p>
                I’m curious about what lies beneath the surface: the logic behind an algorithm, the architecture behind a system, and the decisions that make it reliable.
              </p>
            </div>

            {/* Big Underlined Footer Tagline */}
            <div
              id="big"
              ref={bigTextRef}
              className="absolute left-6 sm:left-16 right-6 sm:right-16 bottom-[5vh] sm:bottom-[7vh] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-[2vw] font-outfit text-[#EEECE6]"
            >
              <span className="font-extrabold text-[clamp(28px,5vw,94px)] leading-none">
                Built to <span className="underline-anim">understand</span>
              </span>
              <hr className="flex-1 border-0 h-[1px] bg-[#EEECE6]/60 hidden sm:block" />
              <small className="font-outfit font-semibold text-[clamp(12px,1.15vw,18px)] text-[#EEECE6]/90 whitespace-nowrap">
                curious by nature. engineering by choice.
              </small>
            </div>
          </section>

        </div>
      </main>

      {/* 3D Interactive Tech Stack Globe */}
      <section
        id="orbit"
        className="relative z-30 bg-[#07070a] border-t border-white/10 overflow-hidden select-none"
      >
        <TechStackGlobe />
      </section>

      {/* Infinite Smooth Marquee Ticker */}
      <div className="relative z-10 bg-[#101010] border-y border-white/10 py-6 overflow-hidden select-none">
        <div className="animate-marquee flex font-outfit font-semibold text-[clamp(18px,2vw,30px)] text-[#EEECE6]/90 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="flex items-center px-[2.2vw]">
              <span>{item}</span>
              <span className="ml-[4.4vw] text-2xl font-bold" style={{ color: accentColor }}>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Privacy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-[99990] bg-[#101010]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 rounded-2xl bg-[#161616] border border-[#262626] shadow-2xl space-y-4 font-mono text-xs text-[#AAAAAA]">
            <div className="flex items-center justify-between text-[#EEECE6] pb-2 border-b border-[#262626]">
              <div className="flex items-center gap-2 font-bold uppercase">
                <ShieldCheck className="w-4 h-4" style={{ color: accentColor }} />
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
              This portfolio operates strictly without third-party ad trackers, third-party cookies, or invasive telemetry. All interactions and 3D simulations run 100% locally on your device hardware at 60 FPS.
            </p>
            <div className="pt-2 text-right">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-4 py-1.5 rounded-full text-[#101010] font-bold"
                style={{ backgroundColor: accentColor }}
              >
                ACKNOWLEDGE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
