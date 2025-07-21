"use client"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { ArrowRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LottiePlayer from "@/components/LottiePlayer"
import AnimatedPathLine from "../AnimatedPathLine"
import { services } from "@/lib/services"

// Define the allowed lottieName values to match LottiePlayer's expected type
type LottieName = "uiux" | "cross" | "spa" | "micro" | "performance" | "frontend"

// Define the structure of the lotties array
interface LottieConfig {
  slug: string
  lottieName: LottieName
}

// Updated lotties array to match service slugs and LottiePlayer's expected name prop
const lotties: LottieConfig[] = [
  { slug: "ui-ux-interface", lottieName: "uiux" },
  { slug: "cross-platform", lottieName: "cross" },
  { slug: "spa-ssr-development", lottieName: "spa" },
  { slug: "microinteractions", lottieName: "micro" },
  { slug: "performance-tuning", lottieName: "performance" },
  { slug: "headless-cms-api", lottieName: "frontend" }, // Reverted to "frontend" to match LottiePlayerProps
]

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

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
}

// --- COMPONENT ---
export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center mb-12 space-y-6 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left: Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">
            Services
          </h2>

          {/* Center: Animated line with flex-grow */}
          <div className="flex-1 mx-6">
            <AnimatedPathLine />
          </div>

          {/* Right: Button link */}
          <Link href="/services">
            <Button
              variant="outline"
              className="rounded-full border-white/30 hover:bg-white/10 group whitespace-nowrap"
            >
              View All Services
              <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence>
            {services.map((service) => {
              // Find the corresponding lottie for the service slug
              const lottie = lotties.find((l) => l.slug === service.slug) || {
                lottieName: "uiux", // Fallback to a valid lottieName
              }

              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="group"
                >
                  <Link href={`/services/${service.slug}`}>
                    {/* --- IMAGE REPLACED WITH LOTTIE PLAYER --- */}
                    <div className="overflow-hidden rounded-2xl mb-4 bg-transparent border border-gray-500 flex items-center justify-center h-[250px]">
                      <LottiePlayer
                        name={lottie.lottieName}
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
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}