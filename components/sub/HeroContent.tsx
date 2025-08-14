"use client"

import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface HeroContentProps {
  scrollProgress: MotionValue<number>;
}

const HeroContent = ({ scrollProgress }: HeroContentProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <div className='w-full flex flex-col gap-5 justify-center items-center'>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='font-tt-ramillas-light flex flex-col gap-2 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white text-center select-none'
          style={{
            scale: scrollProgress
          }}
        >
          <span>
            Angela <br />
            Weigl
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroContent;
