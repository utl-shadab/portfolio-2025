"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import InteractiveProjectTable from "@/components/sections/portfolio-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useRef } from "react"
import { CustomCursor } from "@/components/custom-cursor"
import OurProcess from "@/components/OurProcess"
import { CtaSection } from "@/components/CtaSection"
import ClientSection from "@/components/ClientSection"
export default function Home() {
  const stickyRef = useRef<HTMLDivElement>(null)
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden"> 
      <CustomCursor/>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InteractiveProjectTable />
      <OurProcess/>
      {/* <TestimonialSection /> */}
      <ClientSection/>
      <CtaSection/>
      <ContactSection />
      <Footer />
    </main>
  )
}
