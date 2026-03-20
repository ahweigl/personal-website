"use client"

import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useLenis } from 'lenis/react'

const ScrollProgressBar = () => {
  const raw = useMotionValue(0)
  const scaleX = useSpring(raw, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useLenis(({ progress }) => {
    raw.set(progress)
  })

  return (
    <motion.div
      className="fixed top-[65px] left-0 right-0 h-[2px] bg-[#F6FDFF] z-50"
      style={{ scaleX, transformOrigin: 'left' }}
    />
  )
}

export default ScrollProgressBar
