"use client"

import React from 'react';
import { motion, MotionValue, AnimatePresence } from 'framer-motion';

interface HeroContentProps {
  scrollProgress: MotionValue<number>;
  heroText?: string;
}

const HeroContent = ({ scrollProgress, heroText = "Angela\nWeigl" }: HeroContentProps) => {
  const isExperience = heroText === "Experience";
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <div className="w-full flex flex-col gap-5 justify-center items-center">

        <AnimatePresence mode="wait">
          <motion.div
          key={heroText} // Key change triggers re-mount for animation
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: 90 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth flip
          }}
          className={`font-tt-ramillas-light flex flex-col gap-2 ${
            isExperience 
              ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-left w-full' 
              : 'text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-center'
          } text-white select-none`}
          style={{
            scale: scrollProgress,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <span>
            {heroText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < heroText.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default HeroContent;
