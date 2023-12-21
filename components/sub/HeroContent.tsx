"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div variants={slideInFromLeft(0.5)} className='font-wild-mango flex flex-col gap-6 mt-15 text-6xl  text-white max-w-[600px] w-auto h-auto'>
          <span>
            Hello, <br/> I&apos;m 
            <span className=" font-wildmango text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-blue-900"> Angela Weigl! </span>
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="font-proxima-nova text-lg text-gray-400 max-w-[750px]">
          I<span className="font-montserrat text-lg text-gray-400/">&apos;</span>m a second<span className="font-montserrat text-lg text-gray-400/">-</span>year Honors CS and Business major at Northeastern University in Boston. 
          Currently, you can find me developing software for Lockheed Martin Space<span className="font-montserrat text-lg text-gray-400/">&apos;</span>s HiveStar autonomous missions distribution platform, leading Northeastern<span className="font-montserrat text-lg text-gray-400/">&apos;</span>s 
          Sandbox software consultancy as Operations Director, and volunteering as Northeastern<span className="font-montserrat text-lg text-gray-400/">&apos;</span>s NCWIT Campus Rep.
         </motion.p>
        <motion.p variants={slideInFromLeft(0.8)} className="font-proxima-nova text-lg text-gray-400 max-w-[750px]">
          My experience lies in leadership, full<span className="font-montserrat text-lg text-gray-400/">-</span>stack web development, object<span className="font-montserrat text-lg text-gray-400/">-</span>oriented programming, agile methodologies, autonomous systems, and hardware integration.
          I<span className="font-montserrat text-lg text-gray-400/">'</span>m interested in further exploring other aspects of software engineering and product management. In my free time, I love hiking in my home state of Colorado, collecting vinyl records and houseplants, curating niche Spotify playlists, and searching for the best gluten free pasta. 
        </motion.p>
        <motion.a variants={slideInFromLeft(1)} className="font-proxima-nova py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Download my resume!
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center"> 
        <Image src="/Headshot.png" alt="headshot" height={450} width={450} />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
