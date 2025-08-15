import type { Metadata } from "next" 
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/pages/services-page-content"

export const metadata: Metadata = {
  title: "Services | Arrow Edge: Digital Solutions & Web Development",
  description:
    "Explore our comprehensive digital services, including UI/UX design, cross-platform app development, and performance tuning. We craft innovative, scalable solutions to elevate your brand's online presence and drive tangible growth.",
  keywords: [
    "digital services",
    "web development",
    "web design",
    "UI/UX design", 
    "cross-platform apps",
    "mobile app development",
    "headless CMS",
    "performance optimization",
    "digital agency",
    "web studio",
    "Arrow Edge"
  ],
  openGraph: {
    title: "Services | Arrow Edge: Digital Solutions & Web Development",
    description:
      "Explore our comprehensive digital services: UI/UX design, cross-platform development, and modern web solutions. Partner with us to transform your vision into reality.",
    url: "https://arrow-2025.netlify.app/services",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/Meta/services.png", 
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Arrow Edge: Digital Solutions & Web Development",
    description: "Discover our comprehensive digital services including UI/UX design, web development, and performance tuning.",
    images: ["/Meta/services.png"], 
  },
}

export default function ServicesPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
