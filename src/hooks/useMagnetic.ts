import { useState, useCallback, RefObject } from 'react';

export function useMagnetic(elementRef: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!elementRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = elementRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  }, [elementRef]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return { position, handleMouseMove, handleMouseLeave };
}
