"use client"

import React from 'react';
import { motion } from 'framer-motion';

const SECONDARY_BIO_TEXT = "Currently, you can find me leading Sandbox at Northeastern building nonprofit software solutions for our community and preparing to graduate in Spring 2026. In my free time, I love hiking in my home state of Colorado, collecting vinyl records, and digital photography on my Fujifilm camera.";

const SecondaryBio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='flex flex-col items-center justify-center py-20 w-full z-[20]'
    >
      <div className='max-w-[800px] w-full flex flex-col gap-8'>
        <motion.p 
          className="font-tt-ramillas-extralight text-lg md:text-xl text-white text-center leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {SECONDARY_BIO_TEXT}
          <span className='block mt-6 opacity-60 italic'>Keep scrolling to learn more about me!</span>
        </motion.p>
      </div>
    </motion.div>
  );
}

export default SecondaryBio; 