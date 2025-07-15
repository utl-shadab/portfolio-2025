"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      id: 1,
      title: "Branding",
      description: "Complete brand identity design and strategy",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Web design",
      description: "Modern, responsive websites that convert",
      icon: "💻",
    },
    {
      id: 3,
      title: "Digitale marketing",
      description: "Data-driven marketing campaigns that deliver results",
      icon: "📈",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
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

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-4 block">
            ONZE DIENSTEN
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">
            Design your
            <br />
            future with us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meer rendement uit je online business halen? Wij zorgen voor de juiste strategie die jouw bedrijf verder{" "}
            <span className="text-pink-500">laat groeien</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              data-cursor-hover
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Edge Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white group-hover:text-pink-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{service.description}</p>

                {/* Tilde Animation */}
                <motion.div
                  className="absolute top-4 right-4 text-pink-500 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  ~
                </motion.div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-8 block">
            ONZE KLANTEN
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["CHELLO", "VAN ZUTPHEN", "StaalBaron", "ALERON", "CLYRA", "LUNEXIS"].map((client) => (
              <span key={client} className="text-white font-bold text-lg">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
