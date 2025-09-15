"use client"

import type React from "react"
import { useEffect } from "react"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default

      lenis = new Lenis({
        duration:  2, 
        easing: (t: number) => 1 - Math.pow(1 - t, 4), 
        smoothWheel: true,
        wheelMultiplier: 0.6, 
        touchMultiplier: 1.2, 
        lerp: 0.03, 
        infinite: false,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis().catch(console.error) 

    return () => lenis?.destroy() 
  }, [])

  return <>{children}</>
}