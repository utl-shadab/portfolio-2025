"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ArrowRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LottiePlayer from "@/components/LottiePlayer"; 
import AnimatedPathLine from "../AnimatedPathLine"


const serviceCategories = ["All", "Design", "Development", "Strategy"];

const services = [
  {
    id: "ui-ux",
    title: "UI/UX Interface",
    description: "Crafting intuitive and beautiful user interfaces that delight users and drive engagement.",
    categories: ["Design"],
    lottieName: "uiux", 
    link: "/services/ui-ux",
  },
  {
    id: "cross-platform",
    title: "Cross-platform Design",
    description: "Ensuring a seamless, consistent, and high-quality experience across all devices and operating systems.",
    categories: ["Design", "Strategy"],
    lottieName: "cross", 
    link: "/services/cross-platform",
  },
  {
    id: "spa-ssr",
    title: "SPA & SSR Development",
    description: "Building fast, modern web apps with Single Page Application or Server-Side Rendering for optimal performance.",
    categories: ["Development"],
    lottieName: "spa", 
    link: "/services/development",
  },
  {
    id: "microinteractions",
    title: "Microinteractions",
    description: "Adding subtle, purposeful animations and feedback that enhance user engagement and usability.",
    categories: ["Design", "Development"],
    lottieName: "micro", 
    link: "/services/microinteractions",
  },
  {
    id: "performance-tuning",
    title: "Performance Tuning",
    description: "Optimizing your application for lightning-fast load times and a smooth, responsive user experience.",
    categories: ["Development", "Strategy"],
    lottieName: "performance", 
    link: "/services/performance",
  },
  {
    id: "headless-cms",
    title: "Headless CMS & API",
    description: "Integrating powerful headless content management systems and custom APIs for flexible content delivery.",
    categories: ["Development"],
    lottieName: "frontend", 
    link: "/services/headless-cms",
  },
];


// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] },
  },
};

// --- COMPONENT ---
export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  
  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      return services
    }
    return services.filter((service) =>
      service.categories.includes(activeCategory)
    )
  }, [activeCategory])

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <AnimatedPathLine/>
        {/* Section Header */}
        <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 md:mb-0">
            Services We Offer
          </h2>
          <Link href="/services">
            <Button variant="outline" className="rounded-full border-white/30 hover:bg-white/10 group">
              View All Services
              <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full"
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 bg-pink-500 rounded-full"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="group"
              >
                <Link href={service.link}>
                  {/* --- IMAGE REPLACED WITH LOTTIE PLAYER --- */}
                  <div className="overflow-hidden rounded-2xl mb-4 bg-transparent border border-gray-500 flex items-center justify-center h-[250px]">
                    <LottiePlayer
                      name={service.lottieName as any}
                       width={250}
                      height={250}
                      className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium flex items-center group-hover:text-pink-500 transition-colors mb-2">
                      {service.title}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
