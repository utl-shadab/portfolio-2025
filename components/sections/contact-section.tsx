"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [selectedService, setSelectedService] = useState("")

  const services = ["Branding", "Web Design", "Digital Marketing", "Other"]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* 3D Geometric Element */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20">
        <motion.div
          className="w-full h-full"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-cyan-500 rounded-3xl transform rotate-45" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div className="contact-item">
              <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 leading-tight">Let's connect!</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Contact me and create something extraordinary together
              </p>
            </motion.div>

            <div className="contact-item space-y-6">
              <div>
                <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-2">
                  EMAIL OR CALL ME
                </h3>
                <a
                  href="mailto:hello@bakerstudio.co"
                  className="text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                  data-cursor-hover
                >
                  hello@bakerstudio.co
                </a>
                <br />
                <a
                  href="tel:+31201234567"
                  className="text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                  data-cursor-hover
                >
                  +31 20 123 4567
                </a>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-4">SOCIAL MEDIA</h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                    data-cursor-hover
                  >
                    Instagram ↗
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                    data-cursor-hover
                  >
                    Facebook ↗
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                    data-cursor-hover
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-2">OFFICE</h3>
                <p className="text-white">
                  Keizergracht 123
                  <br />
                  1015 CJ Amsterdam
                  <br />
                  Nederland
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <motion.div className="contact-item">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-6">
                SEND ME A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    data-cursor-hover
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    data-cursor-hover
                  />
                </div>

                <div>
                  <p className="text-white mb-4">Select service</p>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <Button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        variant={selectedService === service ? "default" : "outline"}
                        className={`rounded-full px-4 py-2 transition-all duration-300 ${
                          selectedService === service
                            ? "bg-white text-black"
                            : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                        }`}
                        data-cursor-hover
                      >
                        {service}
                      </Button>
                    ))}
                  </div>
                </div>

                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 resize-none rounded-2xl"
                  data-cursor-hover
                />

                <div className="text-sm text-gray-400">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" required />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I accept the{" "}
                    <a href="#" className="underline hover:text-white transition-colors">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-3 font-medium"
                  data-cursor-hover
                >
                  Let's talk
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
