"use client"

import StarBackground from './StarBackground'
import ExperienceCards from './ExperienceCards'
import LeadershipCards from './LeadershipCards'
import WhatImSection from './WhatImSection'
import StickySection from './StickySection'

const BIO = "I'm a full-stack developer and Honors CS and Business student at Northeastern University, combining my love for technology and creativity to build digital experiences that make a difference."
const BIO_2 = "Currently, you can find me leading Sandbox at Northeastern building nonprofit software solutions for our community and preparing to graduate in Spring 2026. In my free time, I love hiking in my home state of Colorado, collecting vinyl records, and digital photography on my Fujifilm camera."

const Hero = () => {
  return (
    <div id='about-me' className='relative w-full'>

      {/* Hero — sticky within wrapper so Experience slides over it */}
      <div data-hero-wrapper style={{ position: 'relative', zIndex: 10, minHeight: '400vh' }}>
        <div className='sticky top-0 h-screen overflow-hidden'>
          <StarBackground />

          {/* Name + bio — centered */}
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center px-8 md:px-16 text-center gap-6'>
            <h1 className='font-corinthia text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-white leading-none select-none'>
              Angela Weigl
            </h1>
            <p className='font-tt-ramillas-extralight text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl'>
              {BIO}
            </p>
            <p className='font-tt-ramillas-extralight text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl'>
              {BIO_2}
            </p>
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
