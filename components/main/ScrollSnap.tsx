"use client"

import { useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'

// px/s — snap triggers when scroll velocity drops below this
const VELOCITY_THRESHOLD = 30

function getOffsetTop(el: HTMLElement): number {
  let top = 0
  let node: HTMLElement | null = el
  while (node) {
    top += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return top
}

function computeSnapPoints(): number[] {
  const points: number[] = [0]

  // Each StickySection start
  document.querySelectorAll<HTMLElement>('[data-snap-section]').forEach(el => {
    points.push(getOffsetTop(el))
  })

  return points.sort((a, b) => a - b)
}

export default function ScrollSnap() {
  const snapPointsRef = useRef<number[]>([])
  const isSnappingRef = useRef(false)
  const lastVelocityRef = useRef(0)

  useEffect(() => {
    const update = () => { snapPointsRef.current = computeSnapPoints() }
    const timer = setTimeout(update, 200)
    window.addEventListener('resize', update)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', update)
    }
  }, [])

  useLenis((lenis) => {
    if (isSnappingRef.current) return

    const { scroll, velocity } = lenis

    // Track last meaningful direction before velocity dies
    if (Math.abs(velocity) > 1) lastVelocityRef.current = velocity
    if (Math.abs(velocity) > VELOCITY_THRESHOLD) return

    const points = snapPointsRef.current
    if (!points.length) return

    // Direction-aware: snap to the next point in the direction of travel
    const direction = lastVelocityRef.current >= 0 ? 1 : -1
    let target: number

    if (direction > 0) {
      target = points.find(p => p > scroll + 10) ?? points[points.length - 1]
    } else {
      target = [...points].reverse().find(p => p < scroll - 10) ?? points[0]
    }

    if (Math.abs(target - scroll) < 2) return

    isSnappingRef.current = true
    lenis.scrollTo(target, {
      duration: 1.2,
      easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      onComplete: () => { isSnappingRef.current = false },
    })
  })

  return null
}
