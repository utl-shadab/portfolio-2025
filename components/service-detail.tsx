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
import ProcessSlider from "./ProcessSlider"
import PositiveImpact from "./PositiveImpact"
import { CtaSection } from "./CtaSection"
import ClientSection from "./ClientSection"

gsap.registerPlugin(ScrollTrigger)

interface ServiceDetailProps {
  service: Service
  relatedServices?: Service[]
}

export function ServiceDetail({ service, relatedServices = [] }: ServiceDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Adjusted parallax with less movement and proper clamping
  const y = useTransform(scrollY, [0, 800], [0, -120], { clamp: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optimize animate-on-scroll elements
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse", 
            },
          }
        )
      })

      // Alternative GSAP parallax (optional - you can use either this or framer-motion)
      // gsap.to(".hero-bg", {
      //   yPercent: -15, 
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: heroRef.current,
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      // })
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
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={image.desktop || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover hidden lg:block"
        sizes="100vw"
      />
      <Image
        src={image.tablet || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover hidden md:block lg:hidden"
        sizes="100vw"
      />
      <Image
        src={image.mobile || "/placeholder.svg"}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover block md:hidden"
        sizes="100vw"
      />
    </div>
  )

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-screen min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax - increased height to compensate for movement */}
        <motion.div
          className="hero-bg absolute inset-0 will-change-transform"
          style={{
            y,
            willChange: "transform",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            // Add extra height to ensure coverage during parallax
            height: "120%",
            top: "-10%",
          }}
        >
          <ResponsiveImage 
            image={service.heroImage} 
            className="w-full h-full" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              {service.title}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk mb-6">
              {service.subtitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>

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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
     <ProcessSlider/>
     <PositiveImpact/>

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

   <ClientSection/>
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
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden flex items-center justify-center bg-pink-900">
                      <Image
                        src={relatedService.icon || "/placeholder.svg"}
                        alt={relatedService.title}
                        width={200}
                        height={200}
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
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
     <CtaSection/>
    </div>
  )
}