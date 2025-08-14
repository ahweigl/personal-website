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
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen md:mt-[550px] px-6 md:px-20'
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
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] min-h-screen md:mt-[100px] px-6 md:px-20'
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
          className='w-full md:w-1/2 md:ml-[50%] flex flex-col justify-center z-[10] py-20 md:mt-[200px] px-6 md:px-20'
          onViewportEnter={() => setHeroText("Experience")}
          onViewportLeave={() => setHeroText("Angela\nWeigl")}
          viewport={{ amount: 0.5 }}
        >
          <div className='max-w-[800px] w-full flex flex-col gap-8'>
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-15 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
                  May - August 2025
                </span>
              </div>
              <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
                Reddit
              </h3>
              <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
                Software Engineer Intern • NYC
              </p>
              <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
                Developed & shipped new ban evasion reporting flow for Safety experiences team to support deleted user reporting and make Reddit a safer platform.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-15 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
                  January - May 2025
                </span>
              </div>
              <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
                WHOOP
              </h3>
              <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
                Software Engineer Co-op • Boston
              </p>
              <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
                Contributed to production of new join/upgrade flow for WHOOP's 5.0 product launch using Next.JS, React, TypeScript, & Java.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-15 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
                  June - August 2024
                </span>
              </div>
              <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
                Apple
              </h3>
              <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
                Software Engineer Intern • San Diego
              </p>
              <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
                Developed full-stack feature end-to-end for Creativity Apps team using React, TypeScript, PostgreSQL, & Radix UI.
              </p>
            </div>

            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-15 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-xs font-tt-ramillas-extralight text-gray-300">
                  January - May 2024
                </span>
              </div>
              <h3 className="font-tt-ramillas-light text-2xl md:text-3xl text-white mb-2">
                Akamai Technologies
              </h3>
              <p className="font-tt-ramillas-extralight text-lg text-gray-300 mb-3">
                Software Development Engineer in Test Co-op • Boston
              </p>
              <p className="font-tt-ramillas-extralight text-sm text-gray-400 leading-relaxed">
                Led redesign of E2E frontend testing systems for Application Security team, App & API Protector.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className='h-[300vh]'></div>
    </div>
  )
}

export default Hero