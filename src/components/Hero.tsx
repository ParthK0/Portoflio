import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';
import { Volume2, VolumeX, ShieldCheck, X } from 'lucide-react';

const FALLBACK_PORTRAIT =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'><defs><radialGradient id='g' cx='50%' cy='28%' r='60%'><stop offset='0' stop-color='#777'/><stop offset='1' stop-color='#181818'/></radialGradient></defs><rect width='600' height='800' fill='#121212'/><path d='M50 800c0-170 90-250 250-270 160 20 250 100 250 270z' fill='url(#g)'/><ellipse cx='300' cy='290' rx='105' ry='135' fill='url(#g)'/></svg>"
  );

const TECH_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Three.js',
  'GSAP',
  'Node.js',
  'PostgreSQL',
  'TensorFlow',
  'LLM agents',
];

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
  const orbRingRef = useRef<HTMLDivElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);

  // States
  const [orbitMode, setOrbitMode] = useState<'intro' | 'docked' | 'orbit'>('intro');
  const [typedName, setTypedName] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sound.isEnabled());
  const [isSheetOver, setIsSheetOver] = useState(false);

  // Math helper
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Sound toggle
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = sound.toggle();
    setSoundEnabled(next);
  };

  // Switch orbit mode
  const toggleOrbit = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.playWarp();
    setOrbitMode((prev) => (prev === 'orbit' ? 'docked' : 'orbit'));
  };

  // 1. Initial Typewriter & Intro Transition
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const startAnimation = () => {
      setOrbitMode('docked');
      // Typewriter name
      const full = 'PARTH KHOWAL'.split('').join(' ');
      let i = 0;
      const timer = setInterval(() => {
        setTypedName(full.slice(0, ++i));
        if (i >= full.length) clearInterval(timer);
      }, 45);
    };

    if (prefersReduced) {
      startAnimation();
    } else {
      const timeout = setTimeout(startAnimation, 1800);
      return () => clearTimeout(timeout);
    }
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

    // Particle network
    let pts = Array.from({ length: Math.round(W / 16) }, () => ({
      x: Math.random() * W * 0.62,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.6,
    }));

    const onResize = () => {
      W = pc.width = cv.width = window.innerWidth;
      H = pc.height = cv.height = window.innerHeight;
      kk = clamp(W / 1500, 0.62, 1);
      pts = Array.from({ length: Math.round(W / 16) }, () => ({
        x: Math.random() * W * 0.62,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.6,
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

      // 1. PARTICLES NETWORK
      pg.clearRect(0, 0, W, H);
      const pa = 1 - clamp(p * 3, 0, 1);
      pg.globalAlpha = pa;
      pg.fillStyle = accentColor;
      pg.strokeStyle = accentColor;

      pts.forEach((q) => {
        q.x += q.vx;
        q.y += q.vy;
        if (q.x < 0 || q.x > W * 0.62) q.vx *= -1;
        if (q.y < 0 || q.y > H) q.vy *= -1;

        // Repel from mouse
        const dx = q.x - mx;
        const dy = q.y - my;
        const d = Math.hypot(dx, dy);
        if (d < 120 && d > 0) {
          q.x += (dx / d) * 1.2;
          q.y += (dy / d) * 1.2;
        }

        pg.beginPath();
        pg.arc(q.x, q.y, q.r, 0, Math.PI * 2);
        pg.fill();
      });

      // Connections between nearby particles
      pg.lineWidth = 0.5;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 95) {
            pg.globalAlpha = pa * (1 - d / 95) * 0.35;
            pg.beginPath();
            pg.moveTo(pts[i].x, pts[i].y);
            pg.lineTo(pts[j].x, pts[j].y);
            pg.stroke();
          }
        }
      }
      pg.globalAlpha = 1;

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

  // 5. Interactive 3D Orbit Cylinder Drag
  useEffect(() => {
    const o = orbContainerRef.current;
    const rg = orbRingRef.current;
    if (!o || !rg) return;

    let ang = 0;
    let v = 0.15;
    let dn = 0;
    let lx = 0;
    let animId: number;

    const onPointerDown = (e: PointerEvent) => {
      dn = 1;
      lx = e.clientX;
      o.setPointerCapture(e.pointerId);
    };

    const onPointerUp = () => {
      dn = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (dn) {
        v = (e.clientX - lx) * 0.3;
        lx = e.clientX;
      }
    };

    o.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    o.addEventListener('pointermove', onPointerMove);

    const its = Array.from(rg.children) as HTMLElement[];

    const loop = () => {
      ang += v;
      if (!dn) v += (0.15 - v) * 0.03;
      const R = Math.min(window.innerWidth * 0.36, 440);

      its.forEach((e, i) => {
        const a = ang + (i * 360) / its.length;
        const rad = (a * Math.PI) / 180;
        const c = Math.cos(rad);
        e.style.transform = `translate(-50%, -50%) rotateY(${a}deg) translateZ(${R}px) rotateY(${-a}deg)`;
        e.style.opacity = `${(0.18 + (0.82 * (c + 1)) / 2).toFixed(2)}`;
        e.style.zIndex = `${(c * 100) | 0}`;
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      o.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      o.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      {/* Fluid Custom Cursor Dot */}
      <div
        id="cd"
        ref={cursorRef}
        style={{ backgroundColor: accentColor }}
        className="fixed z-[99999] left-0 top-0 w-2.5 h-2.5 -m-[5px] rounded-full pointer-events-none transition-[width,height,margin,background-color] duration-250 ease-out"
      />

      {/* Floating Status Tab */}
      <div className="vertical-tab hidden sm:grid">
        <span>Open to work</span>
      </div>

      {/* Intro Center Tagline */}
      <div
        id="tg"
        className={`fixed z-[26] left-[calc(50%+110px)] top-1/2 -translate-y-1/2 font-outfit font-semibold text-[22px] tracking-wide pointer-events-none transition-opacity duration-700 ${
          orbitMode === 'intro' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ color: accentColor }}
      >
        build · ship · iterate
      </div>

      {/* Fixed Fullscreen 3-Body Orbital Physics Canvas */}
      <canvas id="lg" ref={orbitalCanvasRef} className="fixed inset-0 z-25 pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex justify-between items-center px-6 sm:px-16 py-8 sm:py-10 pointer-events-none">
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Lowercase Wordmark */}
          <a
            href="#"
            className={`font-outfit font-extrabold text-3xl sm:text-[34px] tracking-tight relative transition-colors duration-500 ${
              isSheetOver ? 'text-[#101010]' : ''
            }`}
            style={{ color: isSheetOver ? '#101010' : accentColor }}
          >
            parth
            <span
              className="absolute -right-2 top-1.5 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isSheetOver ? '#101010' : accentColor }}
            />
          </a>

          {/* Gravitize Button */}
          <button
            id="gz"
            onClick={toggleOrbit}
            className="chip flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase bg-[#101010]/60 backdrop-blur-md border border-white/20 text-[#EEECE6] hover:border-white transition-colors cursor-pointer"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span>{orbitMode === 'orbit' ? '● ORBITING' : '● GRAVITIZE'}</span>
          </button>
        </div>

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
          
          {/* Particle Network Canvas */}
          <canvas id="pc" ref={particleCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />

          {/* Masked Portrait with Natural Blend & Depth Tilt */}
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
            className="absolute right-0 bottom-0 h-full w-full sm:w-[54%] object-cover object-[55%_top] filter grayscale contrast-[1.08] brightness-[0.94] opacity-100 transition-transform duration-75 pointer-events-none z-10"
            style={{
              maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 18%, #000 40%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 18%, #000 40%)',
            }}
          />

          {/* Radial Vignette */}
          <div
            className="absolute inset-0 pointer-events-none z-15"
            style={{
              background:
                'radial-gradient(ellipse at 72% 45%, transparent 38%, #101010 100%), linear-gradient(#101010, transparent 16%)',
            }}
          />

          {/* Hero Typography & Lines */}
          <div
            id="copy"
            ref={copyBlockRef}
            className="absolute left-[clamp(24px,6vw,115px)] bottom-[15vh] max-w-[64vw] z-20 will-change-transform"
          >
            {/* Telemetry */}
            <div className="font-mono text-xs tracking-wider text-[#EEECE6]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span>SYS_READY // 1.00</span>
              <span className="text-[#444444]">|</span>
              <b className="text-[#97b6da] font-medium">60 FPS DETERMINISTIC</b>
            </div>

            {/* Typewriter Name */}
            <div className="font-inter-tight font-extrabold text-[15px] tracking-[0.38em] text-[#EEECE6] my-6 min-h-[1.3em] flex items-center gap-2.5">
              <span>{typedName}</span>
              <i
                className="inline-block w-2.5 h-2.5 rounded-full transition-colors duration-500"
                style={{ backgroundColor: accentColor }}
              />
            </div>

            {/* Monumental Headline */}
            <h1 className="font-inter-tight font-extrabold text-[clamp(44px,6.6vw,112px)] leading-[0.98] tracking-[-0.035em] text-[#EEECE6]">
              <div className="overflow-hidden pb-1">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EEECE6] via-[#CCCCCC] to-[#97b6da]">
                  full-stack developer
                </span>
              </div>
              <div className="overflow-hidden pb-1">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EEECE6] via-[#CCCCCC] to-[#97b6da]">
                  &amp; AI engineer
                  <em className="not-italic transition-colors duration-500" style={{ color: accentColor }}>
                    .
                  </em>
                </span>
              </div>
            </h1>

            {/* Sub-description */}
            <p className="mt-4 max-w-[46ch] text-[clamp(14px,1.2vw,18px)] leading-relaxed text-[#EEECE6]/60">
              Specializing in deterministic software, production web systems and AI-powered products.
            </p>
          </div>

          {/* Center Sliding Dot Indicator */}
          <div className="sl-line pointer-events-none z-20" />

          {/* Footer Bar */}
          <footer className="absolute inset-x-0 bottom-0 h-16 border-t border-white/10 flex items-center justify-between px-6 sm:px-16 font-outfit text-sm text-[#EEECE6]/55 z-20 bg-[#101010]/80 backdrop-blur-sm">
            <span>© parth 2026 — built with passion, code &amp; AI.</span>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span className="flex items-center gap-5">
              <a
                href="https://github.com/ParthK0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/parth-khowal-a37903294"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </span>
          </footer>

          {/* ========================================================
              THE RISING ACCENT SHEET CURTAIN ("MANIFEST")
             ======================================================== */}
          <section
            id="sheet"
            ref={sheetRef}
            className="absolute inset-0 z-20 transition-colors duration-500 pt-[13vh] px-6 sm:px-16 text-[#101010] pointer-events-auto"
            style={{
              backgroundColor: accentColor,
              clipPath: 'ellipse(100% 0% at 50% 100%)',
            }}
          >
            <div className="text-center font-outfit font-semibold text-xs tracking-[0.35em] text-white/85">
              MANIFEST
            </div>

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

            {/* Split 3-Column Monumental Header */}
            <div
              id="cols"
              ref={colsRef}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-[4vw] mt-[2vh] font-outfit font-extrabold text-[clamp(40px,5.6vw,104px)] leading-[0.93] tracking-[-0.01em] uppercase text-[#101010]"
            >
              <div>
                Build<br />
                Ship<br />
                Iterate.
              </div>
              <div className="text-center">Not</div>
              <div className="text-right">
                <span className="strike-anim">Guess.</span><br />
                Measure.
              </div>
            </div>

            {/* Manifest Body Paragraphs */}
            <div
              id="body"
              ref={bodyTextRef}
              className="relative mt-[5vh] md:ml-[46%] max-w-full md:max-w-[50%] font-outfit font-semibold text-[clamp(14px,1.2vw,20px)] leading-[1.45] text-[#101010]/90 space-y-4"
            >
              <p>
                I build production web systems and AI products where behavior is predictable and failures are visible.
              </p>
              <p>
                Architecture first, then speed: typed boundaries, tests that mean something, and models that sit behind systems instead of replacing them.
              </p>
              <p>
                B.Tech student in AI &amp; Data Science and full-stack developer intern, shipping across fintech, automation and open source.
              </p>
            </div>

            {/* Big Underlined Footer Tagline */}
            <div
              id="big"
              ref={bigTextRef}
              className="absolute left-6 sm:left-16 right-6 sm:right-16 bottom-[8vh] flex items-center gap-[2vw] font-outfit font-extrabold text-[clamp(34px,5.6vw,104px)] leading-none text-[#EEECE6]"
            >
              <span>
                Built to <span className="underline-anim">ship</span>.
              </span>
              <hr className="flex-1 border-0 h-[1px] bg-[#EEECE6]/60 hidden sm:block" />
              <small className="font-outfit font-semibold text-[clamp(12px,1.1vw,18px)] text-[#EEECE6]/80 whitespace-nowrap">
                for startups, fintech and AI products
              </small>
            </div>
          </section>

        </div>
      </main>

      {/* 3D Interactive Rotating Cylinder of Technologies */}
      <section
        id="orbit"
        className="relative z-10 bg-[#101010] py-20 px-6 overflow-hidden select-none"
      >
        <div
          id="orb"
          ref={orbContainerRef}
          className="relative h-[78vh] perspective-[1100px] cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden flex items-center justify-center"
        >
          {/* Central Glowing Core */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(16vw,150px)] aspect-square rounded-full transition-colors duration-500 shadow-2xl"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 80px ${accentColor}50`,
            }}
          />

          {/* 3D Cylinder Ring Container */}
          <div ref={orbRingRef} className="absolute left-1/2 top-1/2 preserve-3d">
            {TECH_ITEMS.map((item) => (
              <div
                key={item}
                className="absolute left-0 top-0 font-outfit font-extrabold text-[clamp(22px,3.2vw,54px)] text-[#EEECE6] whitespace-nowrap tracking-tight transition-opacity duration-75 select-none"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-mono text-xs text-[#EEECE6]/50 tracking-[0.2em] uppercase mt-4">
          DRAG TO ORBIT
        </p>
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
