// app/about/page.tsx

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/pages/about-page-content"

export const metadata: Metadata = {
  title: "About Us | Arrow Edge Studio",
  description:
    "Meet the passionate team behind Arrow Edge Studio. Learn about our mission, values, and creative journey in building cutting-edge digital solutions.",
  keywords: [
    "about Arrow Edge Studio",
    "creative agency",
    "design studio",
    "our team",
    "branding experts",
    "web design agency",
    "UI/UX team",
    "digital marketing team",
    "who we are"
  ],
  openGraph: {
    title: "About Us | Arrow Edge Studio",
    description:
      "Get to know the creative minds at Arrow Edge Studio. Discover our story, mission, and how we bring ideas to life through design, branding, and digital innovation.",
    url: "https://arrow-2025.netlify.app/about",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/Meta/about.png", 
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Arrow Edge Studio",
    description:
      "Learn more about the mission, vision, and team of Arrow Edge Studio — your creative partners in digital transformation.",
    images: ["/Meta/about.png"],
  },
}

export default function AboutPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
