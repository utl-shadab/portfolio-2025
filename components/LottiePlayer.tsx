// components/LottiePlayer.tsx
"use client"

import Lottie from "lottie-react"
import frontendAnimation from "@/public/lotties/frontend.json"
import uiuxAnimation from "@/public/lotties/UiUx.json"
import crossAnimation from "@/public/lotties/cross.json"
import microAnimation from "@/public/lotties/micro.json"
import spaAnimation from "@/public/lotties/spa.json"
import performanceAnimation from "@/public/lotties/performance.json"

const animations = {
  frontend: frontendAnimation,
  uiux: uiuxAnimation,
  cross: crossAnimation,
  micro: microAnimation,
  spa: spaAnimation,
  performance: performanceAnimation,
}

type AnimationType = keyof typeof animations

interface LottiePlayerProps {
  name: AnimationType
  loop?: boolean
  className?: string
  height?: number
  width?: number
}

export default function LottiePlayer({
  name,
  loop = true,
  className = "",
  height = 300,
  width = 300,
}: LottiePlayerProps) {
  const animationData = animations[name]

  if (!animationData) return null

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
      style={{ height, width }}
    />
  )
}
