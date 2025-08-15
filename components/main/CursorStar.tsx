"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react'

type Point = { x: number; y: number }
type TrailPoint = { x: number; y: number; life: number }

const CONFIG = {
  TRAIL_MAX: 45,
  BASE_SIZE: 20,
  DECAY_PER_FRAME: 0.03,
  MOVE_THRESHOLD: 0.5,
  STATIONARY_THRESHOLD: 0.05,
  SMOOTHING_FACTOR: 0.2,
  PULSE_AMPLITUDE: 0.2,
  PULSE_DURATION: 2500,
} as const

const StarIcon = ({ size, pulseScale, isStationary }: {
  size: number
  pulseScale: number
  isStationary: boolean
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: `translate(-50%, -50%) scale(${pulseScale})`,
      opacity: isStationary ? 0.8 : 1,
      transition: isStationary ? 'none' : 'opacity 0.2s ease-out'
    }}
  >
    <path d="M12 2l2.39 6.96H22l-5.7 4.14 2.18 6.9L12 16.9 5.52 20l2.18-6.9L2 8.96h7.61L12 2z" />
  </svg>
)

const TrailDot = ({ point, index }: { point: TrailPoint; index: number }) => {
  const size = CONFIG.BASE_SIZE * (0.4 + 0.3 * point.life)
  const opacity = 0.5 * point.life

  return (
    <div
      key={index}
      className="fixed top-0 left-0"
      style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
    >
      <div
        className="rounded-full bg-white blur-sm"
        style={{
          width: size,
          height: size,
          opacity,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}

const CursorStar: React.FC = () => {
  const [pos, setPos] = useState<Point>({ x: -100, y: -100 })
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [enabled, setEnabled] = useState(true)
  const [isStationary, setIsStationary] = useState(false)
  const [pulseScale, setPulseScale] = useState(1)
  const [isOverNavbar, setIsOverNavbar] = useState(false)

  const targetRef = useRef<Point>({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)
  const pulseRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    setEnabled(!hasCoarsePointer)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      
      const target = e.target as Element
      const isOverNav = target?.closest('.navbar') !== null
      const isOverMusicPlayer = target?.closest('.music-player') !== null
      setIsOverNavbar(isOverNav || isOverMusicPlayer)
    }

    const updatePosition = () => {
      setPos(prev => {
        const { x: targetX, y: targetY } = targetRef.current
        const nextX = prev.x + (targetX - prev.x) * CONFIG.SMOOTHING_FACTOR
        const nextY = prev.y + (targetY - prev.y) * CONFIG.SMOOTHING_FACTOR
        const next = { x: nextX, y: nextY }

        const distance = Math.hypot(nextX - prev.x, nextY - prev.y)
        const stationary = distance < CONFIG.STATIONARY_THRESHOLD
        setIsStationary(stationary)

        setTrail(currentTrail => {
          const fadedTrail = currentTrail
            .map(p => ({ ...p, life: Math.max(0, p.life - CONFIG.DECAY_PER_FRAME) }))
            .filter(p => p.life > 0.01)

          if (distance > CONFIG.MOVE_THRESHOLD) {
            const newPoint: TrailPoint = { x: nextX, y: nextY, life: 1 }
            return [newPoint, ...fadedTrail].slice(0, CONFIG.TRAIL_MAX)
          }

          return fadedTrail
        })

        return next
      })

      rafRef.current = requestAnimationFrame(updatePosition)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  useEffect(() => {
    if (!isStationary) {
      setPulseScale(1)
      if (pulseRef.current) {
        cancelAnimationFrame(pulseRef.current)
        pulseRef.current = null
      }
      return
    }

    const startTime = Date.now()

    const updatePulse = () => {
      const elapsed = Date.now() - startTime
      const progress = (elapsed % CONFIG.PULSE_DURATION) / CONFIG.PULSE_DURATION
      const scale = 1 + CONFIG.PULSE_AMPLITUDE * Math.sin(progress * Math.PI * 2)

      setPulseScale(scale)
      pulseRef.current = requestAnimationFrame(updatePulse)
    }

    pulseRef.current = requestAnimationFrame(updatePulse)

    return () => {
      if (pulseRef.current) {
        cancelAnimationFrame(pulseRef.current)
        pulseRef.current = null
      }
    }
  }, [isStationary])

    if (!enabled || isOverNavbar) return null

  return (
    <div 
      aria-hidden 
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      {trail.map((point, index) => (
        <TrailDot key={index} point={point} index={index} />
      ))}

      <div
        className="fixed top-0 left-0"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        <StarIcon
          size={CONFIG.BASE_SIZE}
          pulseScale={pulseScale}
          isStationary={isStationary}
        />
      </div>
    </div>
  )
}

export default CursorStar 