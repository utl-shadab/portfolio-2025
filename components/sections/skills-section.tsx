"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500", icon: "⚛️" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800", icon: "📘" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-700", icon: "🟢" },
    { name: "Python", level: 80, color: "from-yellow-500 to-orange-500", icon: "🐍" },
    { name: "GSAP/Framer Motion", level: 88, color: "from-purple-500 to-pink-500", icon: "✨" },
    { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-blue-500", icon: "🎨" },
    { name: "MongoDB/PostgreSQL", level: 82, color: "from-green-600 to-teal-600", icon: "🗄️" },
    { name: "AWS/Vercel", level: 78, color: "from-orange-500 to-red-500", icon: "☁️" },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "GSAP",
    "Framer Motion",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Docker",
    "GraphQL",
    "REST APIs",
    "Git",
    "Figma",
    "Adobe Creative Suite",
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      gsap.fromTo(
        ".skill-bar",
        { width: 0 },
        {
          width: (i, el) => el.dataset.level + "%",
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      // Animate technology tags
      gsap.fromTo(
        ".tech-tag",
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold font-playfair text-center mb-20 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Skill Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-white font-playfair">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    data-level={skill.level}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Cloud */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-white font-playfair">Technologies I Work With</h3>
            <div className="tech-grid flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-tag px-4 py-3 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer font-medium"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  data-cursor-hover
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
