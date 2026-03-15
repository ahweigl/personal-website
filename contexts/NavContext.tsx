"use client"

import { createContext, useContext, useEffect, useRef, useState } from 'react'

const NavContext = createContext({ isVisible: true })

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const visible = current < lastScrollY.current || current < 100
      setIsVisible(visible)
      lastScrollY.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavContext.Provider value={{ isVisible }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNav = () => useContext(NavContext)
