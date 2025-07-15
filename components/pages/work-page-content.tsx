"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function WorkPageContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Branding", "Digital marketing", "Web design"]

  const projects = [
    {
      id: 1,
      title: "DUST",
      category: "Branding",
      year: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Complete brand identity and digital presence for a cutting-edge tech startup.",
      tags: ["Brand Identity", "Logo Design", "Digital Assets"],
      featured: true,
    },
    {
      id: 2,
      title: "StaalBaron",
      category: "Web design",
      year: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Modern e-commerce platform with custom functionality and seamless user experience.",
      tags: ["E-commerce", "Custom Development", "UX/UI"],
      featured: true,
    },
    {
      id: 3,
      title: "Van Zutphen",
      category: "Digital marketing",
      year: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Comprehensive digital marketing campaign that increased online presence by 300%.",
      tags: ["SEO", "Social Media", "Content Strategy"],
      featured: false,
    },
    {
      id: 4,
      title: "Rietdekkersbedrijf",
      category: "Web design",
      year: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ql3esXr6q2X1ZEbDNmoNcn34M71uEQ.png",
      description: "Traditional craftsmanship meets modern web design in this stunning portfolio site.",
      tags: ["Portfolio", "Responsive Design", "Photography"],
      featured: false,
    },
    {
      id: 5,
      title: "Lunexis",
      category: "Branding",
      year: "2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "Luxury brand identity for a high-end consulting firm.",
      tags: ["Luxury Branding", "Print Design", "Corporate Identity"],
      featured: false,
    },
    {
      id: 6,
      title: "Aleron",
      category: "Digital marketing",
      year: "2023",
      image: "/placeholder.svg?height=400&width=600",
      description: "Multi-channel marketing campaign for B2B software company.",
      tags: ["B2B Marketing", "Lead Generation", "Analytics"],
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

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
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">Ons werk</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Een selectie van onze meest succesvolle projecten waarin we creativiteit, strategie en technologie hebben
            gecombineerd om <span className="text-pink-500">uitzonderlijke resultaten</span> te behalen.
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
            <motion.div
              key={project.id}
              className="work-item group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              layout
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

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
                      data-cursor-hover
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
                      data-cursor-hover
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold font-space-grotesk text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

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
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
            data-cursor-hover
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
