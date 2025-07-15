"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["Filter", "Branding", "Digital marketing", "Web design", "All"]

  const projects = [
    {
      id: 1,
      title: "DUST",
      category: "Branding",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Complete brand identity and digital presence",
    },
    {
      id: 2,
      title: "StaalBaron",
      category: "Web design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Modern e-commerce platform with custom functionality",
    },
    {
      id: 3,
      title: "Van Zutphen",
      category: "Digital marketing",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Comprehensive digital marketing campaign",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">Ons werk</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                }`}
                data-cursor-hover
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-item group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              data-cursor-hover
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-white group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.category}</p>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium"
            data-cursor-hover
          >
            Bekijk al onze projecten
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
