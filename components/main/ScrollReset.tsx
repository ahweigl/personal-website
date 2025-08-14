"use client"

import { useEffect } from 'react'

const ScrollReset = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    scrollToTop()

    const handleBeforeUnload = () => scrollToTop()
    
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        scrollToTop()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return null
}

export default ScrollReset 