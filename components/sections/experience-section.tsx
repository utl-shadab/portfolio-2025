"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, MapPin, Building } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of scalable web applications serving 100K+ users",
      "Architected microservices infrastructure reducing load times by 40%",
      "Mentored junior developers and established coding best practices",
      "Collaborated with design teams to implement pixel-perfect UI/UX",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "TypeScript"],
    current: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Implemented advanced animations and micro-interactions",
      "Optimized application performance achieving 95+ Lighthouse scores",
      "Worked closely with UX designers to create intuitive user interfaces",
    ],
    technologies: ["React", "Vue.js", "GSAP", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupHub",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: [
      "Built and maintained company websites and web applications",
      "Collaborated with cross-functional teams in agile environment",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in code reviews and continuous learning initiatives",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-item",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )

      // Animate timeline line
      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
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
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold font-playfair text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey through innovative companies and challenging projects
        </motion.p>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="experience-item relative flex items-start space-x-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-4 h-4 rounded-full ${exp.current ? "bg-blue-500" : "bg-gray-500"} border-4 border-[#0a0a0a] flex-shrink-0 mt-2`}
                >
                  {exp.current && <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping" />}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-playfair text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-300 mb-2">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-400 font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Current</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-blue-400 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
