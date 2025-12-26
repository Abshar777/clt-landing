
import React, { useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, decimals = 0 }) => {
  // useSpring creates a physically-based animation for that "modern time counter" bounce/smoothness
  const springValue = useSpring(0, {
    mass: 1,
    stiffness: 45, // Lower stiffness for a smoother, luxurious glide
    damping: 15,
  });

  const displayValue = useTransform(springValue, (latest) => {
    // Format the number with commas and specified decimals
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(Number(latest.toFixed(decimals)));
  });

  useEffect(() => {
    // Animate the spring to the target value when it changes
    springValue.set(value);
  }, [value, springValue]);

  return (
    <motion.span>
      {displayValue}
    </motion.span>
  );
};
