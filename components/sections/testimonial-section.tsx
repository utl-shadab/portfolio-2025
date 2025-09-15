"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Import testimonials from the data file
import { testimonials } from "@/data/testimonials"

gsap.registerPlugin(ScrollTrigger)

export function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-content",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5, // Increased duration for smoother effect
          ease: "power2.out", // Smoother easing
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Debounced navigation to prevent rapid clicks
  const debounceNavigation = useCallback((direction: "next" | "prev") => {
    if (isNavigating) return
    setIsNavigating(true)

    if (direction === "next") {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    // Reset navigation lock after animation completes
    setTimeout(() => setIsNavigating(false), 500) // Matches motion transition duration
  }, [isNavigating])

  const nextTestimonial = () => debounceNavigation("next")
  const prevTestimonial = () => debounceNavigation("prev")

  const testimonial = testimonials[currentTestimonial]

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="testimonial-content">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 leading-tight">
              What clients
              <br />
              say
            </h2>
          </div>

          {/* Right Testimonial Card */}
          <div className="testimonial-card relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative">
              {/* Testimonial Content with Framer Motion Animation */}
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // Custom easing for smoother feel
                className="space-y-6"
              >
                {/* Profile */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        src={testimonial.avatar.trimEnd() || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                        priority // Load image eagerly for smoother transitions
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-space-grotesk">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white">
                  {testimonial.name === "D. van Zutphen"
                    ? "Arrow Edge Studio delivered an outstanding website"
                    : "An excellent collaboration"}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">{testimonial.content}</p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      data-cursor-hover
                      disabled={isNavigating}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      data-cursor-hover
                      disabled={isNavigating}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => !isNavigating && setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? "bg-pink-500" : "bg-white/30"
                        }`}
                        data-cursor-hover
                        disabled={isNavigating}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}