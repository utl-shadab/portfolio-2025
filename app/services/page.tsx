import type { Metadata } from "next" // Ensure Metadata is imported
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/pages/services-page-content"

export const metadata: Metadata = {
  title: "Services | Arrow Edge Studio",
  description:
    "Discover our comprehensive digital services including branding, web design, and digital marketing. We craft innovative solutions to elevate your online presence and drive growth.",
  keywords: ["services", "branding", "web design", "digital marketing", "conversion optimization", "agency", "studio"],
  openGraph: {
    title: "Services | Arrow Edge Studio",
    description:
      "Explore our comprehensive digital services: branding, web design, digital marketing, and conversion optimization. Partner with us to transform your vision into reality.",
    url: "https://yourwebsite.com/services",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", 
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
    title: "Services | Arrow Edge Studio",
    description: "Discover our comprehensive digital services including branding, web design, and digital marketing.",
    images: ["/placeholder.svg?height=630&width=1200"], 
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
