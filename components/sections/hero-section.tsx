"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the background image
      gsap.to(imageRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-Ibxeyn2B8IA4p0B9WLbMBkudm9bqgr.jpeg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-8 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We grow your
            <br />
            online business
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We are a full-service digital agency specializing in e-commerce, online marketing, web optimization, and
            design.
          </motion.p>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-medium group transition-all duration-300"
              data-cursor-hover
            >
              <span>Discover Baker Studio</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 font-medium group transition-all duration-300"
              data-cursor-hover
            >
              <span>Our Work</span>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="border-l-2 border-pink-500 pl-4">BAKER STUDIO</span>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000" />
    </section>
  )
}
