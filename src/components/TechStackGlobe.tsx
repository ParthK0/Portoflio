import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

interface CategoryData {
  title: string;
  skills: string[];
}

const DATA: CategoryData[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'C++', 'TypeScript', 'SQL'],
  },
  {
    title: 'ML & Computer Vision',
    skills: ['OpenCV', 'FaceNet', 'LBPH', 'Scikit-learn'],
  },
  {
    title: 'Web & Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Prisma', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    title: 'AI, Multi-Agent & Real-Time',
    skills: ['Gemini API', 'Claude AI', 'LangGraph', 'WebSocket', 'Agora', 'Firecrawl'],
  },
  {
    title: 'Coursework',
    skills: ['DSA', 'Computer Vision', 'DBMS', 'OOP', 'Probability & Statistics', 'Operating Systems', 'Linear Algebra'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Maven', 'Firebase'],
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Communication', 'Leadership', 'Adaptability'],
  },
];

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '');
  if (clean.length === 3) {
    return {
      r: parseInt(clean[0] + clean[0], 16),
      g: parseInt(clean[1] + clean[1], 16),
      b: parseInt(clean[2] + clean[2], 16),
    };
  }
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

// Precompute Fibonacci sphere coordinates for 8 categories
const n = DATA.length;
const categoryPoints: [number, number, number][] = [];
for (let i = 0; i < n; i++) {
  const y = 0.9 - (i / (n - 1)) * 1.8;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const th = i * 2.399963;
  categoryPoints.push([Math.cos(th) * r, y, Math.sin(th) * r]);
}

// Precompute nearest neighbor pairs for constellation lines
const constellationPairs: [number, number][] = [];
for (let i = 0; i < n; i++) {
  const neighbors = categoryPoints
    .map((p, j) => [j, p[0] * categoryPoints[i][0] + p[1] * categoryPoints[i][1] + p[2] * categoryPoints[i][2]] as [number, number])
    .filter((a) => a[0] !== i)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  neighbors.forEach(([j]) => {
    if (!constellationPairs.some((p) => (p[0] === i && p[1] === j) || (p[0] === j && p[1] === i))) {
      constellationPairs.push([i, j]);
    }
  });
}

// Precompute 280 Fibonacci surface dots
const surfaceDots: [number, number, number][] = [];
for (let i = 0; i < 280; i++) {
  const y = 1 - (i / 279) * 2;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const th = i * 2.399963;
  surfaceDots.push([Math.cos(th) * r, y, Math.sin(th) * r]);
}

// Background twinkling stars
const starField = Array.from({ length: 130 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: Math.random() * 1.2 + 0.2,
  p: Math.random() * 6,
  s: Math.random() * 0.002 + 0.0005,
}));

export const TechStackGlobe: React.FC = () => {
  const { currentTheme } = useTheme();
  const accentColor = currentTheme?.primary || '#9D6BEE';
  const lightColor = currentTheme?.light || '#A87BF5';

  const rgb = useMemo(() => hexToRgb(accentColor), [accentColor]);
  const isLightAccent = useMemo(() => {
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 170;
  }, [rgb]);

  const themeColorRef = useRef({ r: rgb.r, g: rgb.g, b: rgb.b, hex: accentColor });

  useEffect(() => {
    themeColorRef.current = { r: rgb.r, g: rgb.g, b: rgb.b, hex: accentColor };
  }, [rgb, accentColor]);

  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [pinnedCategory, setPinnedCategory] = useState<number | null>(null);
  const [panelPos, setPanelPos] = useState<{ left: number; top: number } | null>(null);

  const hoverRef = useRef<number>(-1);
  const pinnedRef = useRef<number>(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const boostRef = useRef<number[]>(Array(n).fill(0));

  const currentDisplayIndex = pinnedCategory !== null ? pinnedCategory : activeCategory;

  // Position the panel relative to active/pinned element
  const updatePanelPlacement = useCallback((targetIndex: number) => {
    const stage = stageRef.current;
    const panel = panelRef.current;
    const itemEl = itemRefs.current[targetIndex];
    if (!stage || !panel || !itemEl) return;

    const sr = stage.getBoundingClientRect();
    const hr = itemEl.getBoundingClientRect();
    const pw = panel.offsetWidth || 280;
    const ph = panel.offsetHeight || 180;
    const H = stage.clientHeight;
    const W = stage.clientWidth;

    let l = hr.left - sr.left + hr.width / 2 - pw / 2;
    let tp = hr.top - sr.top + hr.height + 14;

    if (tp + ph > H - 12) {
      tp = hr.top - sr.top - ph - 14;
    }

    l = Math.max(12, Math.min(W - pw - 12, l));
    tp = Math.max(12, Math.min(H - ph - 12, tp));

    setPanelPos({ left: l, top: tp });
  }, []);

  const handleEnter = (index: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (hoverRef.current !== index) {
      hoverRef.current = index;
      setActiveCategory(index);
      sound.playBlip(720 + index * 25, 0.015);
      requestAnimationFrame(() => updatePanelPlacement(index));
    }
  };

  const handleLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    hoverRef.current = -1;
    setActiveCategory(null);
  };

  const handleItemClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const nextPinned = pinnedRef.current === index ? -1 : index;
    pinnedRef.current = nextPinned;
    setPinnedCategory(nextPinned >= 0 ? nextPinned : null);
    hoverRef.current = index;
    setActiveCategory(index);
    sound.playClick(600, 0.03);
    requestAnimationFrame(() => updatePanelPlacement(index));
  };

  useEffect(() => {
    const stage = stageRef.current;
    const cv = canvasRef.current;
    if (!stage || !cv) return;

    const ctx = cv.getContext('2d');
    if (!ctx) return;

    let W = stage.clientWidth;
    let H = stage.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!stage || !cv) return;
      W = stage.clientWidth;
      H = stage.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = pinnedRef.current >= 0 ? pinnedRef.current : hoverRef.current;
      if (target >= 0) {
        updatePanelPlacement(target);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        resize();
      });
      resizeObserver.observe(stage);
    }

    let yaw = 0;
    let pitch = 0.3;
    let ivy = 0;
    let ivp = 0;
    let moved = false;
    let dragging = false;
    let last = performance.now();
    const t0 = last;
    let mx = 0;
    let my = 0;

    const slow = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.3 : 1;
    const projected: { x: number; y: number; k: number }[] = categoryPoints.map(() => ({ x: 0, y: 0, k: 0 }));

    let animId: number;

    const frame = (t: number) => {
      if (stage.clientWidth !== W || stage.clientHeight !== H) {
        resize();
      }

      const dt = Math.min(t - last, 50);
      last = t;

      const e0 = Math.min(1, (t - t0) / 2000);
      const e = 1 - Math.pow(1 - e0, 3);

      const openIdx = pinnedRef.current >= 0 ? pinnedRef.current : hoverRef.current;

      if (!dragging) {
        // Continuous, lively auto-rotation - never stops, freezes, or decays to a standstill
        const baseSpeed = (openIdx >= 0 ? 0.00015 : 0.0003) * slow;
        yaw += dt * (baseSpeed + ivy);
        pitch += (0.24 - pitch) * 0.02 + dt * ivp;
        ivy *= 0.94;
        ivp *= 0.94;
      }

      const Rx = Math.min(W * 0.42, 540);
      const Ry = Math.min(H * 0.38, 320);
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const cx = W / 2;
      const cyy = H / 2;

      ctx.clearRect(0, 0, W, H);

      const { r, g, b, hex } = themeColorRef.current;

      // 1. Stars background
      for (const s of starField) {
        const al = 0.25 + 0.6 * Math.abs(Math.sin(t * s.s + s.p));
        ctx.fillStyle = `rgba(225,230,255,${al})`;
        ctx.fillRect(s.x * W + mx * s.r * 12, s.y * H + my * s.r * 12, s.r, s.r);
      }

      // 2. 280 Fibonacci surface dots tinted with active website theme
      for (const [x, y, z] of surfaceDots) {
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const k = (z2 + 1) / 2;

        ctx.fillStyle = `rgba(${r},${g},${b},${(0.06 + 0.55 * k * k) * e})`;
        ctx.beginPath();
        ctx.arc(cx + x1 * Rx * e, cyy + y2 * Ry * e, 0.5 + 1.3 * k, 0, 6.283);
        ctx.fill();
      }

      // 3. 8 Category nodes projections
      for (let i = 0; i < n; i++) {
        const [x, y, z] = categoryPoints[i];
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        const k = (z2 + 1) / 2;
        const s = 0.7 + 0.45 * k;

        const px = cx + x1 * Rx * e;
        const py = cyy + y2 * Ry * e;
        projected[i].x = px;
        projected[i].y = py;
        projected[i].k = k;

        const isHighlighted = i === openIdx;
        boostRef.current[i] += ((isHighlighted ? 1 : 0) - boostRef.current[i]) * 0.15;

        const el = itemRefs.current[i];
        if (el) {
          el.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px) translate(-50%,-50%) scale(${(s * (1 + 0.05 * boostRef.current[i])).toFixed(3)})`;
          el.style.opacity = ((0.22 + 0.78 * k) * e).toFixed(3);
          el.style.zIndex = String(Math.round(k * 10));
          el.style.pointerEvents = z2 < -0.25 ? 'none' : 'auto';
        }
      }

      // 4. Constellation connecting lines
      ctx.lineWidth = 1;
      for (const [i, j] of constellationPairs) {
        const al = 0.16 * (projected[i].k + projected[j].k) * e;
        ctx.strokeStyle = `rgba(${r},${g},${b},${al})`;
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      }

      // 5. Laser beam to active category
      if (openIdx >= 0 && projected[openIdx]) {
        const grad = ctx.createLinearGradient(cx, cyy, projected[openIdx].x, projected[openIdx].y);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0.95)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowColor = hex;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.moveTo(cx, cyy);
        ctx.lineTo(projected[openIdx].x, projected[openIdx].y);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Smoothly update detail panel position so it stays anchored to the revolving node
      if (openIdx >= 0 && panelRef.current && itemRefs.current[openIdx] && stageRef.current) {
        const stage = stageRef.current;
        const panel = panelRef.current;
        const itemEl = itemRefs.current[openIdx];
        const sr = stage.getBoundingClientRect();
        const hr = itemEl.getBoundingClientRect();
        const pw = panel.offsetWidth || 280;
        const ph = panel.offsetHeight || 180;

        let l = hr.left - sr.left + hr.width / 2 - pw / 2;
        let tp = hr.top - sr.top + hr.height + 14;

        if (tp + ph > H - 12) {
          tp = hr.top - sr.top - ph - 14;
        }

        l = Math.max(12, Math.min(W - pw - 12, l));
        tp = Math.max(12, Math.min(H - ph - 12, tp));

        panel.style.left = `${l}px`;
        panel.style.top = `${tp}px`;
      }

      // If active node rotates to the backside of the sphere while not pinned, dismiss cleanly
      if (openIdx >= 0 && pinnedRef.current !== openIdx && projected[openIdx].k < 0.25) {
        hoverRef.current = -1;
        setActiveCategory(null);
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);

    // Pointer drag & mousemove logic
    let sx = 0;
    let sy0 = 0;
    let lx = 0;
    let ly = 0;
    let lt = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (panelRef.current && panelRef.current.contains(e.target as Node)) return;
      dragging = true;
      moved = false;
      sx = lx = e.clientX;
      sy0 = ly = e.clientY;
      lt = performance.now();
      ivy = ivp = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      mx = (e.clientX - rect.left) / W - 0.5;
      my = (e.clientY - rect.top) / H - 0.5;
      stage.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      stage.style.setProperty('--my', `${e.clientY - rect.top}px`);

      if (!dragging) return;

      if (!moved && Math.hypot(e.clientX - sx, e.clientY - sy0) > 6) {
        moved = true;
        stage.classList.add('globe-drag');
        pinnedRef.current = -1;
        hoverRef.current = -1;
        setPinnedCategory(null);
        setActiveCategory(null);
      }

      if (!moved) return;

      const now = performance.now();
      const d = Math.max(now - lt, 8);
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      const clampV = (v: number) => Math.max(-0.004, Math.min(0.004, v));

      yaw += dx * 0.006;
      pitch -= dy * 0.006;
      ivy = clampV((dx * 0.006) / d);
      ivp = clampV((-dy * 0.006) / d);
      lx = e.clientX;
      ly = e.clientY;
      lt = now;
    };

    const onPointerUp = () => {
      dragging = false;
      stage.classList.remove('globe-drag');
    };

    const onStageClick = () => {
      if (moved) return;
      pinnedRef.current = -1;
      hoverRef.current = -1;
      setPinnedCategory(null);
      setActiveCategory(null);
    };

    stage.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    stage.addEventListener('click', onStageClick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (resizeObserver) resizeObserver.disconnect();
      stage.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      stage.removeEventListener('click', onStageClick);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [updatePanelPlacement]);

  // Update panel placement whenever active or pinned item changes
  useEffect(() => {
    if (currentDisplayIndex !== null) {
      updatePanelPlacement(currentDisplayIndex);
    }
  }, [currentDisplayIndex, updatePanelPlacement]);

  const activeData = currentDisplayIndex !== null ? DATA[currentDisplayIndex] : null;

  return (
    <div className="relative w-full overflow-hidden">
      {/* 3D Knowledge Globe Stage */}
      <div
        id="globe-stage"
        ref={stageRef}
        className="relative w-full h-[75vh] min-h-[620px] max-h-[880px] overflow-hidden select-none cursor-grab active:cursor-grabbing bg-[#07070a]"
        style={{
          touchAction: 'pan-y',
        }}
      >
        {/* Background Canvas for stars, surface dots, and constellation lines */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* Dynamic Interactive Cursor Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(${rgb.r},${rgb.g},${rgb.b},0.16), transparent 60%)`,
          }}
        />

        {/* Ambient Center Glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vmin,600px)] aspect-square pointer-events-none rounded-full transition-all duration-500"
          style={{
            background: `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.32), rgba(${rgb.r},${rgb.g},${rgb.b},0.08) 45%, transparent 70%)`,
          }}
        />

        {/* Concentric Rotating Orbital Rings */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(34vmin,280px)] aspect-square rounded-full border border-dashed pointer-events-none animate-[spin_24s_linear_infinite] transition-colors duration-500"
          style={{ borderColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.3)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(46vmin,380px)] aspect-square rounded-full border border-dotted pointer-events-none animate-[spin_36s_linear_infinite_reverse] transition-colors duration-500"
          style={{ borderColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.3)` }}
        />

        {/* Central Solid Globe Orb with Radiant Aura surrounding it */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(22vmin,180px)] aspect-square rounded-full pointer-events-none transition-all duration-500 z-0"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 50px rgba(${rgb.r},${rgb.g},${rgb.b},0.6), 0 0 100px rgba(${rgb.r},${rgb.g},${rgb.b},0.3), 0 0 160px rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`,
          }}
        />

        {/* Center Orb Title - Solid high-contrast text */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-extrabold text-[clamp(14px,2.5vmin,24px)] tracking-[0.18em] leading-tight pointer-events-none z-20 select-none transition-colors duration-500"
          style={{
            color: isLightAccent ? '#101010' : '#FFFFFF',
          }}
        >
          TECH
          <br />
          STACK
        </div>

        {/* 8 3D Category Nodes */}
        {DATA.map((cat, i) => {
          const isItemActive = currentDisplayIndex === i;
          const isDim = currentDisplayIndex !== null && !isItemActive;

          return (
            <div
              key={cat.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              onClick={(e) => handleItemClick(e, i)}
              className={`globe-item absolute left-0 top-0 whitespace-nowrap cursor-pointer font-extrabold tracking-tight text-[clamp(15px,2vw,26px)] leading-none px-0.5 py-0 transition-[color,text-shadow,filter] duration-150 select-none ${
                isItemActive ? 'globe-item-active' : ''
              } ${isDim ? 'globe-item-dim' : ''}`}
              style={{
                color: isItemActive ? lightColor : '#f1f1f3',
                textShadow: isItemActive
                  ? `0 0 24px ${accentColor}, 0 0 50px rgba(${rgb.r},${rgb.g},${rgb.b},0.65)`
                  : '0 2px 10px rgba(0,0,0,0.6)',
                filter: isDim ? 'blur(1.6px)' : undefined,
                willChange: 'transform, opacity',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {cat.title}
            </div>
          );
        })}

        {/* Glassmorphic Interactive Skills Panel */}
        <div
          ref={panelRef}
          className={`globe-panel absolute w-[min(320px,calc(100%-24px))] rounded-2xl p-4 sm:p-5 backdrop-blur-xl border z-30 overflow-hidden transition-all duration-200 ${
            activeData && panelPos
              ? pinnedCategory !== null
                ? 'opacity-100 pointer-events-auto scale-100'
                : 'opacity-100 pointer-events-none scale-100'
              : 'opacity-0 pointer-events-none scale-95 -translate-y-1'
          }`}
          style={
            panelPos && activeData
              ? {
                  left: `${panelPos.left}px`,
                  top: `${panelPos.top}px`,
                  background: 'linear-gradient(160deg, rgba(24,24,30,0.96), rgba(12,12,16,0.96))',
                  borderColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.45)`,
                  boxShadow: `0 24px 70px rgba(0,0,0,0.7), 0 0 50px rgba(${rgb.r},${rgb.g},${rgb.b},0.22)`,
                }
              : undefined
          }
        >
          {activeData && (
            <>
              {/* Top Accent Line */}
              <div
                className="absolute left-0 right-0 top-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                }}
              />

              <div className="flex items-center justify-between gap-2 mb-3">
                <h3
                  className="m-0 font-bold text-base sm:text-lg flex items-center gap-2"
                  style={{ color: lightColor }}
                >
                  <span>{activeData.title}</span>
                  <span
                    className="text-[11px] font-mono rounded-full px-2 py-0.5"
                    style={{
                      color: lightColor,
                      backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`,
                    }}
                  >
                    {activeData.skills.length}
                  </span>
                </h3>
                {pinnedCategory !== null && (
                  <span
                    className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold"
                    style={{
                      backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.25)`,
                      color: lightColor,
                    }}
                  >
                    PINNED
                  </span>
                )}
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {activeData.skills.map((skill, k) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-[#f1f1f3] rounded-lg px-2.5 py-1 border transition-transform duration-200"
                    style={{
                      borderColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.4)`,
                      backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`,
                      animation: `chipIn 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.3) forwards`,
                      animationDelay: `${k * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-[11px] sm:text-xs text-[#8a8a94] tracking-[0.18em] uppercase pointer-events-none">
          Drag to spin 360° · Hover or tap any discipline to inspect
        </div>
      </div>

      <style>{`
        @keyframes chipIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};
