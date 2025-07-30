"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-col items-center justify-center px-6 md:px-20 mt-48 md:mt-48 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center items-center text-center'>
       
<motion.div variants={slideInFromLeft(0.5)} className='font-swell flex flex-col gap-2 mt-15 text-6xl md:text-8xl lg:text-9xl text-white text-center'>
  <span className='text-center'>
    Hello, <br/> I&apos;m 
    <span className="font-swell text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-blue-900"> Angela Weigl! </span>
  </span>
</motion.div>
      </div>
    </motion.div>
  );
}

export default HeroContent;
