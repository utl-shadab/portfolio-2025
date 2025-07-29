"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"
import type { Project } from "@/types/project"

gsap.registerPlugin(ScrollTrigger)

export function WorkPageContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Branding", "Digital marketing", "Web design"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project: Project) => project.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-item",
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
    <section ref={sectionRef} className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">Our Work </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            A selection of our studio’s most impactful projects, where we bring{" "}
            <span className="text-pink-500">stories to life</span> through a combination of creativity, strategy, and
            technology
          </p>
        </motion.div>
      </div>
      {/* Filter Section */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
      {/* Projects Grid */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/work/${project.slug}`}>
              <motion.div
                className="work-item group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                layout
                data-cursor-hover
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.thumbnailImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold font-space-grotesk text-white group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">
            Ready to create
            <br />
            something amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
              data-cursor-hover
            >
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
