import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]');
        setIsHovering(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none">
      {/* Primary Crosshair & Ring with mix-blend-mode difference */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {/* Inverted circle / crosshair box */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out flex items-center justify-center ${
            isHovering
              ? 'w-10 h-10 border border-[#FFFFFF] bg-[#FFFFFF] mix-blend-difference'
              : 'w-6 h-6 border border-[#FFFFFF]/80 mix-blend-difference'
          } ${isClicking ? 'scale-75' : 'scale-100'}`}
        >
          {/* Center Point */}
          <div
            className={`transition-all duration-100 ${
              isHovering ? 'w-2 h-2 bg-[#000000]' : 'w-1 h-1 bg-[#FFFFFF]'
            }`}
          />

          {/* Minimalist Crosshairs (when not hovered) */}
          {!isHovering && (
            <>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#FFFFFF]/60" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#FFFFFF]/60" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-[1px] w-1.5 bg-[#FFFFFF]/60" />
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-[1px] w-1.5 bg-[#FFFFFF]/60" />
            </>
          )}
        </div>

        {/* Coordinate Readout Tag (Snappy & Technical) */}
        <div className="absolute left-4 top-4 font-mono text-[9px] text-[#FFFFFF] tracking-wider whitespace-nowrap bg-[#000000] border border-[#333333] px-1.5 py-0.5 opacity-70 pointer-events-none hidden md:block">
          X:{Math.round(pos.x)} Y:{Math.round(pos.y)}
        </div>
      </div>
    </div>
  );
};
