"use client"

import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.045, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
