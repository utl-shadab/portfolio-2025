"use client"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Quote, Target, TrendingUp } from "lucide-react"
import type { Service } from "@/types/service"

gsap.registerPlugin(ScrollTrigger)

interface ServiceDetailProps {
  service: Service
  relatedServices?: Service[]
}

export function ServiceDetail({ service, relatedServices = [] }: ServiceDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            },
          },
        )
      })
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const ResponsiveImage = ({
    image,
    className = "",
    priority = false,
  }: {
    image: { desktop: string; tablet: string; mobile: string; alt: string }
    className?: string
    priority?: boolean
  }) => (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.desktop || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover hidden lg:block"
        sizes="(max-width: 1024px) 0vw, 100vw"
      />
      <Image
        src={image.tablet || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover hidden md:block lg:hidden"
        sizes="(max-width: 768px) 0vw, (max-width: 1024px) 100vw, 0vw"
      />
      <Image
        src={image.mobile || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover block md:hidden"
        sizes="(max-width: 768px) 100vw, 0vw"
      />
    </div>
  )

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white">
      {/* Back Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/services">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="hero-bg absolute inset-0 scale-110" style={{ y }}>
          <ResponsiveImage image={service.heroImage} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Badge className="mb-6 bg-white/20 text-white border-white/30">{service.title}</Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk mb-6">{service.subtitle}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 animate-on-scroll">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-8">Service Overview</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.fullDescription}</p>
                <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-2xl p-6 border border-white/10">
                  <h3 className="flex items-center text-xl font-semibold mb-4">
                    <Target className="w-5 h-5 mr-3 text-pink-400" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Service Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={24}
                        height={24}
                        className="mr-3"
                      />
                      <div>
                        <p className="text-sm text-gray-400">Category</p>
                        <p className="font-medium">{service.title}</p>
                      </div>
                    </div>
                    {/* Add more service-specific details here if needed */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {service.processSteps && (
        <section className="py-24 animate-on-scroll bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-space-grotesk text-center mb-16">Our Process</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {service.processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    {step.image && (
                      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {service.results && (
        <section className="py-24 animate-on-scroll bg-gradient-to-r from-pink-500/10 to-cyan-500/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="flex items-center justify-center text-4xl font-bold font-space-grotesk mb-4">
                <TrendingUp className="w-10 h-10 mr-4 text-green-400" />
                {service.results.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.results.description}</p>
            </div>
            {service.results.metrics && (
              <div className="grid md:grid-cols-3 gap-6">
                {service.results.metrics.map((metric, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                      <h4 className="font-semibold mb-2">{metric.metric}</h4>
                      <p className="text-sm text-gray-400">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {service.testimonial && (
        <section className="py-24 animate-on-scroll">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border-white/20">
              <CardContent className="p-12 text-center">
                <Quote className="w-12 h-12 text-pink-400 mx-auto mb-6" />
                <blockquote className="text-2xl font-medium mb-8 leading-relaxed italic">
                  "{service.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={service.testimonial.avatar || "/placeholder.svg"}
                    alt={service.testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-lg">{service.testimonial.author}</p>
                    <p className="text-gray-400">
                      {service.testimonial.position} at {service.testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Related Services (if any) */}
      {relatedServices.length > 0 && (
        <section className="py-24 animate-on-scroll bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-space-grotesk text-center mb-16">Other Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link key={relatedService.id} href={`/services/${relatedService.slug}`}>
                  <motion.div
                    className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-cyan-500/10">
                      <Image
                        src={relatedService.icon || "/placeholder.svg"}
                        alt={relatedService.title}
                        width={80}
                        height={80}
                        className="object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-white/20 text-white border-white/30">{relatedService.title}</Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                        {relatedService.subtitle}
                      </h3>
                      <p className="text-gray-400 text-sm">{relatedService.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 animate-on-scroll bg-gradient-to-r from-pink-500/20 to-cyan-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our services can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
