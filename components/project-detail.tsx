"use client"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Globe,
  Palette,
  Code,
  Target,
  TrendingUp,
  CheckCircle,
  Quote,
} from "lucide-react"
import type { Project } from "@/types/project"
import ProcessSlider from "./ProcessSlider"
import LiveSiteButton from "./LiveSiteButton"

gsap.registerPlugin(ScrollTrigger)

interface ProjectDetailProps {
  project: Project
  relatedProjects?: Project[]
}

export function ProjectDetail({ project, relatedProjects = [] }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reset",
            },
          },
        )
      })
      // Parallax hero image
      gsap.to(".hero-bg", {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const ResponsiveImage = ({
    image,
    className = "",
    priority = false,
    loading = "lazy",
  }: {
    image: { desktop: string; tablet: string; mobile: string; alt: string }
    className?: string
    priority?: boolean
    loading?: "eager" | "lazy";
  }) => (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Desktop Image */}
      <Image
        src={image.desktop || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-fill hidden lg:block"
        sizes="(max-width: 1024px) 0vw, 100vw"
      />
      {/* Tablet Image */}
      <Image
        src={image.tablet || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover hidden md:block lg:hidden"
        sizes="(max-width: 768px) 0vw, (max-width: 1024px) 100vw, 0vw"
      />
      {/* Mobile Image */}
      <Image
        src={image.mobile || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        loading={loading}
        className="object-cover block md:hidden "
      // sizes="(max-width: 768px) 100vw, 0vw"
      />
    </div>
  )

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden ">
        <motion.div className="hero-bg absolute inset-0 scale-110">
          <ResponsiveImage image={project.heroImage} className="w-full h-full" priority loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Badge className="mb-6 bg-white/20 text-white border-white/30">{project.category}</Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">{project.shortDescription}</p>

            {/* Action Buttons */}
            <LiveSiteButton url={project.liveUrl ?? "#"} />
          </motion.div>
        </div>
      </section>
      {/* Project Overview */}
      <section className="py-24 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-8">Project Overview</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.fullDescription}</p>
                <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-2xl p-6 border border-white/10">
                  <h3 className="flex items-center text-xl font-semibold mb-4">
                    <Target className="w-5 h-5 mr-3 text-pink-400" />
                    Project Objective
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.objective}</p>
                </div>
              </div>
            </div>
            {/* Project Info Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-3 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Client</p>
                        <p className="font-medium text-white">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Year</p>
                        <p className="font-medium text-white">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="font-medium text-white">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-3 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Domain</p>
                        <p className="font-medium text-white">{project.domain}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Color Theme */}
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="flex items-center text-xl font-semibold mb-4 text-white">
                    <Palette className="w-5 h-5 mr-3" />
                    Color Theme
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.colorTheme).map(([name, color]) => (
                      <div key={name} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: color }} />
                        <div>
                          <p className="text-sm capitalize font-medium text-white">{name}</p>
                          <p className="text-xs text-gray-400  ">{color}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies & Framework */}
      <section className="py-24 animate-on-scroll bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-16">
            <div>
              <h2 className="flex items-center text-3xl font-bold font-space-grotesk mb-8">
                <Code className="w-8 h-8 mr-4 text-cyan-400" />
                Technologies Used
              </h2>
              <div className="space-y-6">
                {["frontend", "backend", "database", "tools", "deployment"].map((category) => {
                  const categoryTechs = project.technologies.filter((tech) => tech.category === category)
                  if (categoryTechs.length === 0) return null

                  return (
                    <div key={category}>
                      <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-3 font-medium">{category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {categoryTechs.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20 py-2 px-4 text-sm"
                          >
                            {tech.icon && (
                              <Image
                                src={tech.icon || "/placeholder.svg"}
                                alt={tech.name}
                                width={16}
                                height={16}
                                className="mr-2"
                              />
                            )}
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Image Gallery */}
      {/* Image Gallery */}
      {project.galleryImages.length > 0 && (
        <section className="py-24 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-space-grotesk text-center mb-16">
              Project Showcase
            </h2>

            <div className="flex flex-col gap-16">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="
              relative 
              w-full 
              overflow-hidden 
              rounded-xl 
              group 
              cursor-pointer

              h-[220px]          /* Mobile */
              sm:h-[300px]       /* Small Tablet */
              md:h-[380px]       /* Tablet */

              lg:h-[80vh]        /* Desktop → big immersive section */
              lg:w-screen        /* full width */
              lg:mx-[calc(50%-50vw)] /* break container → true full width */
            "
                  whileHover={{ scale: 1.02 }}
                >
                  <ResponsiveImage
                    image={image}
                    className="w-full h-full object-cover"
                  />

                  <div className="
              absolute inset-0 
              bg-gradient-to-t 
              from-black/50 
              to-transparent 
              opacity-0 
              group-hover:opacity-100 
              transition-opacity duration-300
            " />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Key Features */}
      <section className="py-24 animate-on-scroll">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-space-grotesk text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-6 bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Achievements & Results */}
      <section className="py-24 animate-on-scroll bg-gradient-to-r from-pink-500/10 to-cyan-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center text-4xl font-bold font-space-grotesk mb-4">
              <TrendingUp className="w-10 h-10 mr-4 text-green-400" />
              Project Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {project.results?.description || "Measurable impact and key achievements from this project"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold font-space-grotesk text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-xl font-semibold mb-3">{achievement.metric}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* Process Steps */}
      <ProcessSlider />
      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-24 animate-on-scroll bg-white/5">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border-white/20">
              <CardContent className="p-12 text-center">
                <Quote className="w-12 h-12 text-pink-400 mx-auto mb-6" />
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed italic">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={project.testimonial.avatar || "/placeholder.svg"}
                    alt={project.testimonial.author}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-lg">{project.testimonial.author}</p>
                    <p className="text-gray-400">
                      {project.testimonial.position} at {project.testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 animate-on-scroll">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-space-grotesk text-center mb-16">Related Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/work/${relatedProject.slug}`}>
                  <motion.div
                    className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.thumbnailImage || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-white/20 text-white border-white/30">{relatedProject.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{relatedProject.shortDescription}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="py-24 animate-on-scroll bg-gradient-to-r from-pink-500/20 to-cyan-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">Ready for your next project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with the same attention to detail and results-driven
            approach.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 bg-transparent"
              >
                View All Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
