"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Use spring animations for a smoother feel
  const springConfig = { damping: 28, stiffness: 500 }
  const followerSpringConfig = { damping: 15, stiffness: 150 }

  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const followerSpringX = useSpring(x, followerSpringConfig)
  const followerSpringY = useSpring(y, followerSpringConfig)

  useEffect(() => {
    let isHovering = false

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a, button, [data-cursor-hover]")
      ) {
        isHovering = true
        // Animate scale on hover
        if (cursorRef.current) cursorRef.current.style.transform = `scale(1.5)`
        if (followerRef.current) followerRef.current.style.transform = `scale(2)`
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a, button, [data-cursor-hover]")
      ) {
        isHovering = false
        // Reset scale
        if (cursorRef.current) cursorRef.current.style.transform = "scale(1)"
        if (followerRef.current) followerRef.current.style.transform = "scale(1)"
      }
    }

    // Use event delegation for better performance
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-pink-500 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />
      <motion.div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          translateX: followerSpringX,
          translateY: followerSpringY,
          opacity: 0.3,
        }}
      />
    </>
  )
}
