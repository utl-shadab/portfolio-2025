"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Volume2, VolumeX } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    longDescription:
      "This comprehensive e-commerce platform features advanced inventory management, secure payment processing with Stripe, real-time notifications, and a powerful admin dashboard. Built with modern technologies for optimal performance and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Interactive dashboard with machine learning insights and predictive analytics.",
    longDescription:
      "An advanced analytics platform that leverages machine learning to provide actionable insights. Features real-time data visualization, predictive modeling, and interactive charts built with D3.js and Python backend services.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social platform with chat functionality and media sharing.",
    longDescription:
      "A modern social media application featuring real-time messaging, media sharing, story features, and advanced privacy controls. Built with React Native for cross-platform compatibility and Socket.io for real-time communication.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Mobile",
  },
  {
    id: 4,
    title: "3D Portfolio Website",
    description: "Award-winning portfolio site with advanced animations and 3D elements.",
    longDescription:
      "An immersive portfolio experience featuring Three.js 3D elements, GSAP animations, and performance optimization. This project showcases advanced web technologies and creative design implementation.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Creative",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Full Stack", "AI/ML", "Mobile", "Creative"]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleProjectHover = async (projectId: number) => {
    setHoveredProject(projectId)
  }

  const playAIDescription = async (projectId: number) => {
    setIsPlaying(projectId)

    try {
      const project = projects.find((p) => p.id === projectId)
      if (project) {
        try {
          const response = await fetch("/api/ai-description", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              projectTitle: project.title,
              projectDescription: project.longDescription,
            }),
          })

          if (response.ok) {
            const data = await response.json()
            console.log("AI Description:", data.description)
            // play / display description here
          }
        } catch (error) {
          console.error("Error with AI description:", error)
        }
      }
    } catch (error) {
      console.error("Error with AI description:", error)
    }

    setTimeout(() => {
      setIsPlaying(null)
    }, 3000)
  }

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold font-playfair text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A curated selection of my most impactful work, showcasing innovation, creativity, and technical excellence
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              data-cursor-hover
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* AI Voice Button */}
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                  onClick={(e) => {
                    e.stopPropagation()
                    playAIDescription(project.id)
                  }}
                  data-cursor-hover
                >
                  {isPlaying === project.id ? (
                    <VolumeX className="w-4 h-4 animate-pulse" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold font-playfair mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2 bg-transparent border-white/30 text-white hover:bg-white/10"
                    data-cursor-hover
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                  
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
              />
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
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-medium"
            data-cursor-hover
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
