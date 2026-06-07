"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface Props {
  heading: string
  children: React.ReactNode
  zIndex: number
  minHeight?: string
  carousel?: boolean
  static?: boolean
}

export default function StickySection({ heading, children, zIndex, minHeight = '350vh', carousel = false, static: isStatic = false }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  const cardsY = useTransform(scrollYProgress, (p) => {
    if (!cardsRef.current) return 0
    if (carousel && window.innerWidth >= 768) return 0
    const available = window.innerHeight - 80
    const maxTranslate = Math.max(0, cardsRef.current.scrollHeight - available + 80)
    const progress = Math.max(0, Math.min(1, (p - 0.05) / 0.83))
    return -progress * maxTranslate
  })

  const cardsX = useTransform(scrollYProgress, (p) => {
    if (!carousel || !cardsRef.current) return 0
    if (window.innerWidth < 768) return 0
    const available = window.innerWidth
    const maxTranslate = Math.max(0, cardsRef.current.scrollWidth - available + 80)
    const progress = Math.max(0, Math.min(1, (p - 0.05) / 0.83))
    return -progress * maxTranslate
  })

  if (isStatic) {
    return (
      <div ref={wrapperRef} data-snap-section style={{ zIndex, position: 'relative', minHeight }}>
        <div className='sticky top-0 min-h-screen flex flex-col'>
          <div className='px-6 md:px-16 pt-20 md:pt-12 pb-4 md:pb-8 text-center md:text-left'>
            <h2 className='font-tt-ramillas-light text-3xl md:text-5xl lg:text-6xl text-[#F6FDFF] leading-none'>
              {heading}
            </h2>
          </div>

          <div className='flex-1 flex items-start md:items-center justify-center pb-16 overflow-visible'>
            {children}
          </div>
        </div>
      </div>
    )
  }

  if (carousel) {
    return (
      <div ref={wrapperRef} data-snap-section style={{ zIndex, position: 'relative', minHeight }}>
        <div className='sticky top-0 h-screen overflow-hidden flex flex-col'>
          <div ref={headingRef} className='px-6 md:px-16 pt-20 md:pt-24 pb-4 md:pb-8 text-center md:text-left'>
            <h2 className='font-tt-ramillas-light text-3xl md:text-5xl lg:text-6xl text-[#F6FDFF] leading-none'>
              {heading}
            </h2>
          </div>

          <div className='flex-1 overflow-hidden'>
            <motion.div
              ref={cardsRef}
              style={{ x: cardsX, y: cardsY }}
              className='flex flex-col md:flex-row gap-6 md:gap-8 px-6 md:px-16 py-4 md:py-0 md:h-full items-center'
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} data-snap-section style={{ zIndex, position: 'relative', minHeight }}>
      <div className='sticky top-0 h-screen overflow-hidden flex flex-col'>
        <div className='flex flex-col md:flex-row flex-1 min-h-0'>

        <div ref={headingRef} className='w-full md:w-1/2 px-6 md:px-16 pt-20 md:pt-24 pb-4 md:pb-0 flex-shrink-0 text-center md:text-left'>
          <h2 className='font-tt-ramillas-light text-3xl md:text-5xl lg:text-6xl text-[#F6FDFF] leading-none'>
            {heading}
          </h2>
        </div>

        <div className='w-full md:w-1/2 h-screen overflow-hidden flex-shrink-0'>
          <motion.div ref={cardsRef} style={{ y: cardsY }} className='pt-6 md:pt-24 px-6 md:px-0 md:pr-16 pb-16 flex flex-col items-center md:items-end'>
            {children}
          </motion.div>
        </div>

        </div>
      </div>
    </div>
  )
}
