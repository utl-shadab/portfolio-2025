"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from "next/link"

export function ContactPageContent() {
  const sectionRef = useRef<HTMLElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [captchaQuestion, setCaptchaQuestion] = useState("")
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  const services = ["Branding", "Web Design", "Digital Marketing", "Other"]

  // Generate random math question
  useEffect(() => {
    generateCaptcha()
  }, [])

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operator = Math.random() > 0.5 ? "+" : "-"
    setCaptchaQuestion(`What is ${num1} ${operator} ${num2}?`)
  }

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
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required"
    if (!formData.phone.match(/^\+?[0-9\s\-()]{7,}$/)) newErrors.phone = "Valid phone number is required"
    if (!formData.budget.trim()) newErrors.budget = "Budget is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    const captchaResult = eval(captchaQuestion.replace("What is ", "").replace("?", ""))
    if (parseInt(captchaAnswer) !== captchaResult) {
      newErrors.captcha = "CAPTCHA answer is incorrect"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error("Please fix the errors below")
      return
    }

    // Clear errors
    setErrors({})
    setLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", budget: "", message: "" })
        setSelectedServices([])
        setCaptchaAnswer("")
        generateCaptcha()
      } else {
        toast.error("Failed to send message.")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("An error occurred while sending the message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
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
                  <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-2">
                    EMAIL OR CALL ME
                  </h3>
                  <a
                    href="mailto:shadab28696@gmail.com"
                    className="text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                  >
                    shadab28696@gmail.com
                  </a>
                  <br />
                  <a
                    href="tel:+919756188580"
                    className="text-2xl font-bold text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                  >
                    +91 975 618 8580
                  </a>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase mb-4">SOCIAL MEDIA</h3>
                  <div className="space-y-2">
                    <Link
                      href="https://in.linkedin.com/in/shadab--choudhary "
                      className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
                    >
                      LinkedIn ↗
                    </Link>
                  </div>
                </div>

              </motion.div>

              {/* Contact Cards */}
              <motion.div className="contact-item space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "shadab28696@gmail.com",
                    href: "mailto:shadab28696@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 975 618 8580",
                    href: "tel:+919756188580",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Punjabi bagh Delhi",
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    />
                    {errors.email && <p className="text-red-400 text-sm col-span-2">{errors.email}</p>}
                  </div>

                  {/* Phone & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    />
                    {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

                    <Input
                      type="text"
                      name="budget"
                      placeholder="Budget (e.g., $5000)"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    />
                    {errors.budget && <p className="text-red-400 text-sm">{errors.budget}</p>}
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-white mb-2">Select Service(s)</p>
                    <div className="flex flex-wrap gap-3">
                      {services.map((service) => (
                        <label key={service} className="inline-flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 accent-pink-500"
                          />
                          <span className="text-sm text-white">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 resize-none rounded-2xl"
                  />
                  {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

                  {/* CAPTCHA */}
                  <div>
                    <label className="block text-white mb-2">{captchaQuestion}</label>
                    <Input
                      type="number"
                      placeholder="Your answer"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-pink-400 rounded-2xl"
                    />
                    {errors.captcha && <p className="text-red-400 text-sm mt-1">{errors.captcha}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-3 font-medium flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Let's talk"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}
