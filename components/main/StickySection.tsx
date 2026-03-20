"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface Props {
  heading: string
  children: React.ReactNode
  zIndex: number
  minHeight?: string
}

export default function StickySection({ heading, children, zIndex, minHeight = '350vh' }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  // Dynamically translate cards upward so all content is reachable
  const cardsY = useTransform(scrollYProgress, (p) => {
    if (!cardsRef.current) return 0
    const available = window.innerHeight - 80 // top padding offset
    const maxTranslate = Math.max(0, cardsRef.current.scrollHeight - available + 80)
    // map 5%–88% of wrapper scroll to the full card travel
    const progress = Math.max(0, Math.min(1, (p - 0.05) / 0.83))
    return -progress * maxTranslate
  })

  return (
    <div ref={wrapperRef} data-snap-section style={{ zIndex, position: 'relative', minHeight }}>
      <div className='sticky top-0 h-screen overflow-hidden flex flex-col'>
        <div className='flex flex-1 min-h-0'>

        {/* Left column — heading pinned */}
        <div ref={headingRef} className='w-1/2 px-8 md:px-16 pt-24 flex-shrink-0'>
          <h2 className='font-tt-ramillas-light text-4xl md:text-5xl lg:text-6xl text-[#F6FDFF] leading-none'>
            {heading}
          </h2>
        </div>

        {/* Right column — cards scroll upward, right-aligned */}
        <div className='w-1/2 h-screen overflow-hidden flex-shrink-0'>
          <motion.div ref={cardsRef} style={{ y: cardsY }} className='pt-24 pr-8 md:pr-16 pb-16 flex flex-col items-end'>
            {children}
          </motion.div>
        </div>

        </div>
      </div>
    </div>
  )
}
