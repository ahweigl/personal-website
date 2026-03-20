"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import StarBackground from './StarBackground'
import ExperienceCards from './ExperienceCards'
import LeadershipCards from './LeadershipCards'
import WhatImSection from './WhatImSection'
import StickySection from './StickySection'

const BIO_LINE_1 = "I'm a full-stack developer and Honors"
const BIO_LINE_2 = "Computer Science & Business student at Northeastern University,"
const BIO_LINE_3 = "combining my love for technology and creativity to build impactful software that balances function with delightful user experience."
const BIO_2_LINE_1 = "Currently, you can find me leading Sandbox building nonprofit software projects for the NEU community"
const BIO_2_LINE_2 = "and preparing to graduate in Spring 2026. In my free time, I love hiking"
const BIO_2_LINE_3 = "in my home state of Colorado, collecting vinyl records, and digital photography on my Fujifilm camera."

const HERO_TEXT = 'Angela Weigl'
const TOTAL_CHARS = HERO_TEXT.replace(' ', '').length // 11 letters

const GlowLetter = ({ char, index, scrollYProgress }: { char: string; index: number; scrollYProgress: MotionValue<number> }) => {
  const start = (index / TOTAL_CHARS) * 0.4
  const end = start + 0.4 / TOTAL_CHARS

  const textShadow = useTransform(scrollYProgress, [start, end], [
    '0 0 0px rgba(246,253,255,0), 0 0 0px rgba(246,253,255,0)',
    '0 0 14px rgba(246,253,255,0.7), 0 0 28px rgba(246,253,255,0.35)',
  ])

  return (
    <motion.span style={{ textShadow }} className='inline-block'>
      {char}
    </motion.span>
  )
}

const Hero = () => {
  const bioWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: bioWrapperRef,
    offset: ['start start', 'end start'],
  })

  const bio1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0])
  const bio1Y = useTransform(scrollYProgress, [0.08, 0.12], [0, -40])
  const bio2Opacity = useTransform(scrollYProgress, [0.10, 0.14, 1], [0, 1, 1])
  const bio2Y = useTransform(scrollYProgress, [0.10, 0.14], [40, 0])

  let charIndex = 0

  return (
    <div id='about-me' className='relative w-full'>

      {/* Hero — sticky within wrapper so Experience slides over it */}
      <div ref={bioWrapperRef} data-hero-wrapper style={{ position: 'relative', zIndex: 10, minHeight: '200vh' }}>
        <div className='sticky top-0 h-screen overflow-hidden'>
          <StarBackground />

          {/* Name + bio — two columns, vertically centered */}
          <div className='absolute inset-0 z-10 flex items-center px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full'>
              <motion.h1
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className='font-butik text-[7rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] text-[#F6FDFF] leading-[0.85] select-none shrink-0 origin-left'
              >
                {['Angela', 'Weigl'].map((word, wi) => (
                  <span key={wi} className={`block ${wi === 1 ? 'ml-[0.5em]' : ''}`}>
                    {word.split('').map((char) => {
                      const i = charIndex++
                      return <GlowLetter key={i} char={char} index={i} scrollYProgress={scrollYProgress} />
                    })}
                  </span>
                ))}
              </motion.h1>
              <div className='relative max-w-md self-center'>
                <motion.p
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ opacity: bio1Opacity, y: bio1Y }}
                  className='font-tt-ramillas-extralight text-lg md:text-2xl text-[#F6FDFF]/80 leading-relaxed text-right origin-right'
                >
                  {BIO_LINE_1}<br />{BIO_LINE_2}<br /> {BIO_LINE_3}
                </motion.p>
                <motion.p
                  style={{ opacity: bio2Opacity, y: bio2Y }}
                  className='font-tt-ramillas-extralight text-lg md:text-2xl text-[#F6FDFF]/80 leading-relaxed text-right absolute inset-0'
                >
                  {BIO_2_LINE_1}<br /> {BIO_2_LINE_2}<br /> {BIO_2_LINE_3}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickySection heading="Experience" zIndex={20}>
        <ExperienceCards />
      </StickySection>

      <StickySection heading="Leadership" zIndex={30}>
        <LeadershipCards />
      </StickySection>

      <StickySection heading="What I'm..." zIndex={40} minHeight="150vh">
        <WhatImSection />
      </StickySection>

    </div>
  )
}

export default Hero
