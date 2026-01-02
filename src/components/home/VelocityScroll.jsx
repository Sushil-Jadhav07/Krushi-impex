import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

// Utility function to wrap values
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Parallax Text Component
const ParallaxText = ({ children, baseVelocity = 100, className = '' }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = React.useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      ref={containerRef}
    >
      <motion.div className={`inline-block ${className}`} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span className="mb-4" key={i} ref={i === 0 ? textRef : null}>
            {children}{' '}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Main Velocity Scroll Component
const VelocityScroll = ({ 
  text1 = "Birthday Candles", 
  text2 = "Balloons",
  default_velocity = 5,
  className = ''
}) => {
  return (
    <section className="relative w-full bg-white py-8 md:py-12">
      <div className="w-full">
        <ParallaxText baseVelocity={default_velocity} className={className}>
          {text1}
        </ParallaxText>
        <ParallaxText baseVelocity={-default_velocity} className={className}>
          {text2}
        </ParallaxText>
      </div>
    </section>
  );
};

export default VelocityScroll;