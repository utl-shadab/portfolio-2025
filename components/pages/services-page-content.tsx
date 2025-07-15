"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Code, TrendingUp, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function ServicesPageContent() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      id: 1,
      title: "Branding",
      subtitle: "Complete Brand Identity",
      description: "We create powerful brand identities that resonate with your audience and stand out in the market.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Marketing Materials"],
      icon: Palette,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Web Design",
      subtitle: "Modern Digital Experiences",
      description: "Custom websites that combine stunning design with exceptional user experience and performance.",
      features: ["Responsive Design", "User Experience", "Performance Optimization", "CMS Integration", "E-commerce"],
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Growth-Driven Strategies",
      description: "Data-driven marketing campaigns that deliver measurable results and sustainable growth.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Conversion Optimization",
      subtitle: "Maximize Your Results",
      description: "Optimize your digital presence to convert more visitors into customers and increase revenue.",
      features: [
        "A/B Testing",
        "User Journey Analysis",
        "Landing Page Optimization",
        "Performance Tracking",
        "ROI Improvement",
      ],
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-item",
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
    <section ref={sectionRef} className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">
            Design your
            <br />
            future with us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Meer rendement uit je online business halen? Wij zorgen voor de juiste strategie die jouw bedrijf verder{" "}
            <span className="text-pink-500">laat groeien</span>.
          </p>

          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <ArrowRight className="w-6 h-6" />
            <p>
              Onze expertise in branding, digital marketing, webdesign en conversie-optimalisatie helpt je bedrijf
              verder.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">ONZE DIENSTEN</span>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mt-4 mb-8">What we offer</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                className="service-item group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold font-space-grotesk mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg text-pink-400 mb-4 font-medium">{service.subtitle}</p>

                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-center space-x-2">
                        <span className="text-pink-400">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-2 bg-transparent group-hover:border-pink-400 group-hover:text-pink-400 transition-all duration-300"
                    data-cursor-hover
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Tilde Animation */}
                  <motion.div
                    className="absolute top-6 right-6 text-2xl text-pink-500 opacity-0 group-hover:opacity-100"
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
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 15}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">HOW WE WORK</span>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mt-4 mb-8">Our process</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "We dive deep into your business goals and challenges" },
            { step: "02", title: "Strategy", description: "We develop a comprehensive plan tailored to your needs" },
            { step: "03", title: "Creation", description: "We bring your vision to life with expert craftsmanship" },
            { step: "04", title: "Launch", description: "We deploy and optimize for maximum impact and results" },
          ].map((process, index) => (
            <motion.div
              key={process.step}
              className="service-item text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-pink-400">{process.step}</span>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk mb-4 text-white group-hover:text-pink-400 transition-colors">
                {process.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
