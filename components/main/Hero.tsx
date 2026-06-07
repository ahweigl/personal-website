"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import StarBackground from './StarBackground'
import ExperienceCards from './ExperienceCards'
import WhatImSection from './WhatImSection'
import Photography from './Photography'
import StickySection from './StickySection'

const BIO_LINE_1 = "I'm a full-stack software engineer "
const BIO_LINE_2 = "with a degree in CS & Business "
const BIO_LINE_3 = "from Northeastern University "
const BIO_LINE_4 = "dedicated to building impactful "
const BIO_LINE_5 = "and delightful software."
const BIO_2_LINE_1 = "Currently, you can find me "
const BIO_2_LINE_2 = "at Reddit on their Safety team."
const BIO_2_LINE_3 = "In my free time, I love hiking"
const BIO_2_LINE_4 = "in my home state of Colorado, collecting vinyl records, and digital photography on my "
const BIO_2_LINE_5 = "Fujifilm camera."

const HERO_TEXT = 'Angela Weigl'
const TOTAL_CHARS = HERO_TEXT.replace(' ', '').length

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

  const mobileBioOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 1])
  const mobileBioY = useTransform(scrollYProgress, [0.02, 0.08], [30, 0])
  const bio1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.38], [1, 1, 0])
  const bio1Y = useTransform(scrollYProgress, [0.3, 0.38], [0, -40])
  const bio2Opacity = useTransform(scrollYProgress, [0.35, 0.43, 1], [0, 1, 1])
  const bio2Y = useTransform(scrollYProgress, [0.35, 0.43], [40, 0])

  let charIndex = 0

  return (
    <div id='about-me' className='relative w-full'>

      <div ref={bioWrapperRef} data-hero-wrapper style={{ position: 'relative', zIndex: 10, minHeight: '200vh' }}>
        <div className='sticky top-0 h-screen overflow-hidden'>
          <StarBackground />

          <div className='absolute inset-0 z-10 flex items-center px-6 md:px-16 lg:px-24'>
            <div className='flex flex-col items-center text-center md:text-left md:flex-row md:items-center gap-6 md:gap-16 w-full'>
              <motion.h1
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className='font-butik text-[5rem] sm:text-[8rem] md:text-[13rem] lg:text-[16rem] text-[#F6FDFF] leading-[0.85] select-none shrink-0 origin-center md:origin-left -mt-24 md:mt-0'
              >
                {['Angela', 'Weigl'].map((word, wi) => (
                  <span key={wi} className={`block ${wi === 1 ? 'md:ml-[0.5em]' : ''}`}>
                    {word.split('').map((char) => {
                      const i = charIndex++
                      return <GlowLetter key={i} char={char} index={i} scrollYProgress={scrollYProgress} />
                    })}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                style={{ opacity: mobileBioOpacity, y: mobileBioY }}
                className='md:hidden max-w-sm'
              >
                <div className='relative'>
                  <motion.p
                    style={{ opacity: bio1Opacity, y: bio1Y }}
                    className='font-tt-ramillas-extralight text-base text-[#F6FDFF]/80 leading-relaxed text-center'
                  >
                    {BIO_LINE_1} {BIO_LINE_2} {BIO_LINE_3} {BIO_LINE_4} {BIO_LINE_5}
                  </motion.p>
                  <motion.p
                    style={{ opacity: bio2Opacity, y: bio2Y }}
                    className='font-tt-ramillas-extralight text-base text-[#F6FDFF]/80 leading-relaxed text-center absolute inset-0'
                  >
                    {BIO_2_LINE_1} {BIO_2_LINE_2} {BIO_2_LINE_3} {BIO_2_LINE_4} {BIO_2_LINE_5}
                  </motion.p>
                </div>
              </motion.div>

              <div className='relative max-w-md self-center hidden md:block'>
                <motion.p
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ opacity: bio1Opacity, y: bio1Y }}
                  className='font-tt-ramillas-extralight text-lg md:text-2xl text-[#F6FDFF]/80 leading-relaxed text-right origin-right'
                >
                  {BIO_LINE_1}<br />{BIO_LINE_2}<br /> {BIO_LINE_3}<br /> {BIO_LINE_4}<br /> {BIO_LINE_5}
                </motion.p>
                <motion.p
                  style={{ opacity: bio2Opacity, y: bio2Y }}
                  className='font-tt-ramillas-extralight text-lg md:text-2xl text-[#F6FDFF]/80 leading-relaxed text-right absolute inset-0'
                >
                  {BIO_2_LINE_1}<br /> {BIO_2_LINE_2}<br /> {BIO_2_LINE_3}<br /> {BIO_2_LINE_4}<br /> {BIO_2_LINE_5}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickySection heading="Experience" zIndex={20} minHeight="500vh" carousel>
        <ExperienceCards />
      </StickySection>

      <div style={{ position: 'relative', zIndex: 30 }}>
        <Photography />
      </div>

      <StickySection heading="What I'm..." zIndex={40} minHeight="150vh">
        <WhatImSection />
      </StickySection>

    </div>
  )
}

export default Hero
