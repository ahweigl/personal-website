"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const Bio = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full z-[20]'>
      <div className='max-w-[800px] w-full flex flex-col gap-8'>
        <motion.p variants={slideInFromLeft(0.8)} className="text-lg md:text-xl text-white text-center leading-relaxed font-light">
          I&apos;m a fourth-year Honors CS and Business major at Northeastern University, combining my love for technology and creativity to build digital experiences that make a difference. 
          My previous experience spans fullstack development across multiple domains at companies like WHOOP, Apple, Akamai, Lockheed Martin Space, and NIST.
        </motion.p>
        <motion.p variants={slideInFromLeft(0.8)} className="text-lg md:text-xl text-white text-center leading-relaxed font-light">
          Currently, you can find me developing for Reddit&apos;s Safety team in NYC, leading Sandbox at Northeastern building nonprofit software solutions for our community, and championing inclusion in tech as Northeastern&apos;s NCWIT Campus Rep. 
          In my free time, I love hiking in my home state of Colorado, collecting vinyl records and houseplants, curating niche Spotify playlists, and searching for the best gluten free pasta. 
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Bio; 