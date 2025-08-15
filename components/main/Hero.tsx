"use client"

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroContent from '../sub/HeroContent'
import StarBackground from './StarBackground'
import Bio from './Bio'
import SecondaryBio from './SecondaryBio'
import ExperienceCards from './ExperienceCards'
import LeadershipCards from './LeadershipCards'

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const [heroText, setHeroText] = useState("Angela\nWeigl")
  
  const fastToSlowEase = (t: number) => 1 - Math.pow(1 - t, 3)

  const heroContentWidth = useTransform(scrollYProgress, [0, 0.28], ['100%', '50%'], {
    ease: fastToSlowEase
  })
  const heroContentLeft = useTransform(scrollYProgress, [0, 0.28], ['0%', '0%'], {
    ease: fastToSlowEase
  })
  const fontSize = useTransform(scrollYProgress, [0, 0.28], [1, 0.8], {
    ease: fastToSlowEase
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const experienceStart = windowHeight * 2; 
      const leadershipStart = windowHeight * 4; 
      const leadershipEnd = windowHeight * 6; 
      
      if (scrollY < experienceStart) {
        setHeroText("Angela\nWeigl");
      } else if (scrollY >= experienceStart && scrollY < leadershipStart) {
        setHeroText("Experience");
      } else if (scrollY >= leadershipStart && scrollY < leadershipEnd) {
        setHeroText("Leadership");
      } else if (scrollY >= leadershipEnd) {
        setHeroText("Angela\nWeigl");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='about-me' className='relative w-full overflow-hidden'>
        <StarBackground />
  
        <motion.div 
          className='hidden md:flex h-screen fixed top-0 left-0 items-center justify-start p-6 md:p-20 z-[20]'
          style={{
            width: heroContentWidth,
            left: heroContentLeft
          }}
        >
            <HeroContent scrollProgress={fontSize} heroText={heroText}/>
        </motion.div>
        
        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen md:mt-[550px] px-6 md:px-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
            <Bio/>
        </motion.div>

        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen px-6 md:px-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
            <SecondaryBio/>
        </motion.div>

        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] py-20 md:mt-[200px] px-6 md:px-20'
        >
          <ExperienceCards />
        </motion.div>
        
        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] py-20 md:mt-[400px] px-6 md:px-20'
        >
          <LeadershipCards />
        </motion.div>
        
        <div className='h-[300vh]'></div>
    </div>
  )
}

export default Hero