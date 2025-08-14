"use client"

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroContent from '../sub/HeroContent'
import StarBackground from './StarBackground'
import Bio from './Bio'
import SecondaryBio from './SecondaryBio'

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const [heroText, setHeroText] = useState("Angela\nWeigl")
  
  // Custom easing function that starts fast and slows down
  const fastToSlowEase = (t: number) => 1 - Math.pow(1 - t, 3)

  // Custom easing function that starts slow and speeds up
  const slowToFastEase = (t: number) => Math.pow(t, 3)

  // Transform values for the layout transition
  const heroContentWidth = useTransform(scrollYProgress, [0, 0.28], ['100%', '50%'], {
    ease: fastToSlowEase
  })
  const heroContentLeft = useTransform(scrollYProgress, [0, 0.28], ['0%', '0%'], {
    ease: fastToSlowEase
  })
  const fontSize = useTransform(scrollYProgress, [0, 0.28], [1, 0.8], {
    ease: fastToSlowEase
  })
  // Bio: Desktop animation vs Mobile always visible
  const bioOpacity = useTransform(scrollYProgress, [0.03, 0.08, 0.14, 0.45], [0, 0.4, 1, 0], {
    ease: fastToSlowEase
  })
  const bioScale = useTransform(scrollYProgress, [0.03, 0.08, 0.14, 0.45], [0.9, 0.95, 1, 0.9], {
    ease: fastToSlowEase
  })
  const bioY = useTransform(scrollYProgress, [0.03, 0.14], [200, 0], {
    ease: fastToSlowEase
  })
  // SecondaryBio: starts even earlier in scroll sequence to have more room
  const secondaryBioOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.36, 0.55], [0, 0.4, 1, 0], {
    ease: fastToSlowEase
  })
  const secondaryBioScale = useTransform(scrollYProgress, [0.25, 0.3, 0.36, 0.55], [0.9, 0.95, 1, 0.9], {
    ease: fastToSlowEase
  })
  const secondaryBioY = useTransform(scrollYProgress, [0.25, 0.36], [200, 0], {
    ease: fastToSlowEase
  })

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
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen md:mt-[500px] px-6 md:px-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {
              opacity: bioOpacity,
              scale: bioScale,
              y: bioY,
            } : {})
          }}
        >
            <Bio/>
        </motion.div>

        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen md:mt-[50px] px-6 md:px-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          style={{
            ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {
              opacity: secondaryBioOpacity,
              scale: secondaryBioScale,
              y: secondaryBioY,
            } : {})
          }}
        >
            <SecondaryBio/>
        </motion.div>

        <motion.div 
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] py-20 md:mt-[100px] px-6 md:px-20'
          onViewportEnter={() => setHeroText("Experience")}
          onViewportLeave={() => setHeroText("Angela\nWeigl")}
          viewport={{ amount: 0.3 }}
        >
          <div className='max-w-[800px] w-full flex flex-col gap-8'>
            <h2 className="font-tt-ramillas-light text-4xl md:text-6xl text-white text-center">
              Experience
            </h2>
          </div>
        </motion.div>
        
        <div className='h-[300vh]'></div>
    </div>
  )
}

export default Hero