"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

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
            <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">WIE ZIJN WIJ</span>
          </motion.div>

          <motion.h2 className="about-content text-4xl md:text-6xl font-bold font-space-grotesk mb-8 leading-tight">
            Bij Baker Studio bieden we maatwerk digitale
            <br />
            oplossingen die helpen om het maximale
            <br />
            uit je <span className="text-pink-500">online business</span> te halen.
          </motion.h2>

          <motion.div className="about-content">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-3 bg-transparent"
              data-cursor-hover
            >
              Ontdek Baker Studio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
