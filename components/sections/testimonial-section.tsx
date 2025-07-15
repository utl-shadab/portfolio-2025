"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "D. van Zutphen",
      title: "EIGENAAR VAN ZUTPHEN",
      content:
        "Baker Studio heeft een fantastische website opgeleverd. De nieuwe website straalt precies uit wie we zijn: vakmanschap en betrouwbaarheid. Baker Studio dacht goed mee en zorgde voor een mooi eindresultaat dat ook nog eens eenvoudig te beheren is.",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GOtrTp4CRYBVwOc5AL3rzzlFKhZR5N.png",
    },
    {
      id: 2,
      name: "Jan Bakker",
      title: "CEO STAALBARON",
      content:
        "De samenwerking met Baker Studio was uitstekend. Ze hebben ons geholpen met een complete rebranding en nieuwe website. Het resultaat overtrof onze verwachtingen en heeft geleid tot meer klanten.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "MARKETING DIRECTOR",
      content:
        "Baker Studio's expertise in digital marketing heeft ons bedrijf naar een hoger niveau getild. Hun strategische aanpak en creatieve oplossingen hebben onze online aanwezigheid aanzienlijk verbeterd.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-content",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".testimonial-card",
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="testimonial-content">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 leading-tight">
              Wat klanten
              <br />
              zeggen
            </h2>
          </div>

          {/* Right Testimonial Card */}
          <div className="testimonial-card relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 relative"
            >
              {/* Profile */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold font-space-grotesk">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white">
                Baker Studio heeft een fantastische website opgeleverd
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">{testimonials[currentTestimonial].content}</p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    data-cursor-hover
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    data-cursor-hover
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-pink-500" : "bg-white/30"
                      }`}
                      data-cursor-hover
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
