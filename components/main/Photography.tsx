"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
/* eslint-disable @next/next/no-img-element */

const photos: { src: string; width: number; height: number }[] = [
  { src: '/photos/flowers.jpg', width: 1184, height: 1776 },
  { src: '/photos/gibson_1.jpg', width: 1184, height: 1776 },
  { src: '/photos/apples.jpg', width: 1184, height: 1776 },
  { src: '/photos/ireland_street.jpg', width: 1184, height: 1776 },
  { src: '/photos/ISG.jpg', width: 1184, height: 1776 },
  { src: '/photos/dog.jpg', width: 1184, height: 1776 },
  { src: '/photos/fireworks.jpg', width: 1184, height: 1776 },
  { src: '/photos/ireland.jpg', width: 1184, height: 1776 },
  { src: '/photos/isec.jpg', width: 1184, height: 1776 },
  { src: '/photos/flowers_pink.jpg', width: 1184, height: 1776 },
  { src: '/photos/waterfall.jpg', width: 1184, height: 1776 },
  { src: '/photos/world_trade_center.jpg', width: 1184, height: 1776 },
]

const topRow = photos.filter((_, i) => i % 2 === 0)
const bottomRow = photos.filter((_, i) => i % 2 === 1)

const polaroidStyles = [
  { rotate: -2 },
  { rotate: 1.5 },
  { rotate: -3 },
  { rotate: 2 },
  { rotate: -1.5 },
  { rotate: 3 },
]

export default function Photography() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  const topX = useTransform(scrollYProgress, (p) => {
    if (!topRef.current) return 0
    const scrollWidth = topRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const maxTranslate = scrollWidth - viewportWidth + 80
    const progress = Math.max(0, Math.min(1, (p - 0.05) / 0.9))
    if (viewportWidth < 768) {
      const centerOffset = -(scrollWidth - viewportWidth) / 2
      return centerOffset - progress * (maxTranslate / 2)
    }
    return -progress * maxTranslate
  })

  const bottomX = useTransform(scrollYProgress, (p) => {
    if (!bottomRef.current) return 0
    const scrollWidth = bottomRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const maxTranslate = scrollWidth - viewportWidth + 80
    const progress = Math.max(0, Math.min(1, (p - 0.05) / 0.9))
    if (viewportWidth < 768) {
      const centerOffset = -(scrollWidth - viewportWidth) / 2
      return centerOffset + progress * (maxTranslate / 2)
    }
    return -maxTranslate + progress * maxTranslate
  })

  return (
    <div ref={wrapperRef} style={{ minHeight: '300vh', position: 'relative' }}>
      <div className='sticky top-0 h-screen overflow-hidden flex flex-col justify-center md:justify-start'>
        <div className='px-6 md:px-16 pt-20 md:pt-24 pb-1 md:pb-2 text-center md:text-left'>
          <h2 className='font-tt-ramillas-light text-3xl md:text-5xl lg:text-6xl text-[#F6FDFF] leading-none'>
            Photography
          </h2>
          <p className='font-tt-ramillas-extralight text-sm md:text-base text-[#F6FDFF]/60 mt-2 md:mt-3'>
            Some of my work! (all shot on Fujifilm X100V)
          </p>
        </div>

        <motion.div
          ref={topRef}
          style={{ x: topX }}
          className='flex flex-row gap-6 md:gap-10 lg:gap-14 px-6 md:px-16 py-2 md:py-3 items-center justify-center'
        >
          {topRow.map((photo, i) => {
            const style = polaroidStyles[i % polaroidStyles.length]
            return (
              <div
                key={i}
                className='shrink-0'
                style={{ transform: `rotate(${style.rotate}deg)` }}
              >
                <div className='w-[110px] md:w-[140px] lg:w-[165px] bg-[#F6FDFF]/10 border border-[#F6FDFF]/20 rounded-sm shadow-lg p-1.5 pb-6 md:p-2 md:pb-8'>
                  <img
                    src={photo.src}
                    alt={`Photo ${i + 1}`}
                    loading='lazy'
                    className='w-full h-auto rounded-sm'
                  />
                </div>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          ref={bottomRef}
          style={{ x: bottomX }}
          className='flex flex-row gap-6 md:gap-10 lg:gap-14 px-6 md:px-16 py-2 md:py-3 items-center justify-center'
        >
          {bottomRow.map((photo, i) => {
            const style = polaroidStyles[(i + 3) % polaroidStyles.length]
            return (
              <div
                key={i}
                className='shrink-0'
                style={{ transform: `rotate(${style.rotate}deg)` }}
              >
                <div className='w-[110px] md:w-[140px] lg:w-[165px] bg-[#F6FDFF]/10 border border-[#F6FDFF]/20 rounded-sm shadow-lg p-1.5 pb-6 md:p-2 md:pb-8'>
                  <img
                    src={photo.src}
                    alt={`Photo ${i + 1}`}
                    loading='lazy'
                    className='w-full h-auto rounded-sm'
                  />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
