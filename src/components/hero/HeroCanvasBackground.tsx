import React, { useRef, useEffect } from 'react';

interface HeroCanvasBackgroundProps {
  accentColor: string;
}

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export const HeroCanvasBackground: React.FC<HeroCanvasBackgroundProps> = ({ accentColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shockwavesRef = useRef<{ x: number; y: number; radius: number; maxRadius: number; opacity: number }[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle grid spacing
    const spacing = 48;
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          particles.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            size: (i + j) % 3 === 0 ? 1.4 : 0.9,
          });
        }
      }
    };

    initParticles();

    // Mouse movement
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Click shockwave
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      shockwavesRef.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: 280,
        opacity: 0.6,
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('click', onClick, { passive: true });

    // Animation Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Render shockwaves
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 240 * dt;
        sw.opacity *= 0.94;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = accentColor;
        ctx.globalAlpha = Math.max(0, sw.opacity);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();

        if (sw.radius >= sw.maxRadius || sw.opacity < 0.02) {
          shockwavesRef.current.splice(i, 1);
        }
      }

      // Physics update & draw particles
      ctx.fillStyle = '#EEECE6';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Mouse repulsion
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 110;
          if (distSq < maxDist * maxDist && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist) * 35;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // 2. Shockwave force
        for (let j = 0; j < shockwavesRef.current.length; j++) {
          const sw = shockwavesRef.current[j];
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - sw.radius);
          if (diff < 30) {
            const waveForce = (1 - diff / 30) * 12 * sw.opacity;
            p.vx += (dx / (dist || 1)) * waveForce;
            p.vy += (dy / (dist || 1)) * waveForce;
          }
        }

        // 3. Spring back to origin
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;
        p.vx += homeDx * 7 * dt;
        p.vy += homeDy * 7 * dt;

        // Friction damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Distance from home for highlight
        const distFromHome = Math.abs(p.x - p.originX) + Math.abs(p.y - p.originY);
        const isDisplaced = distFromHome > 3;

        ctx.save();
        if (isDisplaced) {
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = Math.min(0.85, 0.25 + distFromHome * 0.05);
        } else {
          ctx.fillStyle = '#EEECE6';
          ctx.globalAlpha = 0.08;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, isDisplaced ? p.size * 1.5 : p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
    };
  }, [accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};
