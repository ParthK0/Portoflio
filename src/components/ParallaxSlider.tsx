import React from 'react';
import { motion } from 'framer-motion';
import { useParallaxSlider } from '../hooks/useParallaxSlider';

interface ParallaxSliderProps {
  children: React.ReactNode;
  repeat?: number;
  baseVelocity?: number;
}

export const ParallaxSlider: React.FC<ParallaxSliderProps> = ({
  children,
  repeat = 4,
  baseVelocity = 1.5,
}) => {
  const x = useParallaxSlider(baseVelocity);

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap select-none">
      <motion.div className="flex flex-nowrap shrink-0" style={{ x }}>
        {Array.from({ length: repeat }).map((_, idx) => (
          <div key={idx} className="flex shrink-0">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
