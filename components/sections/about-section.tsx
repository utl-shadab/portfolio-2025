"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollHighlightText } from "@/components/RevealText"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div className="about-content mb-12">
            <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase"> <span className="h-2 w-2 bg-pink-500 mx-2">|</span>About Us <span className="h-2 w-2 mx-2 bg-pink-500">|</span></span>
          </motion.div>

          <ScrollHighlightText
            text="At ArrowEdge Studio, we craft digital experiences that elevate your online presence."
            highlightWords={["ArrowEdge", "Studio", "digital", "online"]}
          />

          <motion.div className="about-content">
            <Link href='/about'>
              <Button
                variant="outline"
                className="border-pink-500 text-white hover:bg-white/10 rounded-full px-6 py-3 bg-transparent"
                data-cursor-hover
              >
                Arrow Edge Studio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
