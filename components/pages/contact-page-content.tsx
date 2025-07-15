"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactPageContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [selectedService, setSelectedService] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", company: "", service: "", message: "" })
    setSelectedService("")

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
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

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">Let's connect!</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Contact me and create something extraordinary together
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div className="contact-item space-y-6">
              <div>
                <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-4">
                  EMAIL OR CALL ME
                </h3>
                <a
                  href="mailto:hello@bakerstudio.co"
                  className="block text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4 mb-2"
                  data-cursor-hover
                >
                  hello@bakerstudio.co
                </a>
                <a
                  href="tel:+31201234567"
                  className="block text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
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
                <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-4">OFFICE</h3>
                <p className="text-white leading-relaxed">
                  Keizergracht 123
                  <br />
                  1015 CJ Amsterdam
                  <br />
                  Nederland
                </p>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div className="contact-item space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "hello@bakerstudio.co",
                  href: "mailto:hello@bakerstudio.co",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+31 20 123 4567",
                  href: "tel:+31201234567",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Amsterdam, Nederland",
                  href: "#",
                },
              ].map(({ icon: Icon, title, content, href }) => (
                <motion.a
                  key={title}
                  href={href}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  data-cursor-hover
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{title}</div>
                    <div className="text-white font-medium">{content}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Contact Form */}
          <motion.div className="contact-item">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-6">
                SEND ME A MESSAGE
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
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
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-3 font-medium transition-all duration-300"
                    data-cursor-hover
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Let's talk"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
