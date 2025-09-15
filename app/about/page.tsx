// app/about/page.tsx

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/pages/about-page-content"

export const metadata: Metadata = {
  title: "About Us | Arrow Edge - A Digital Innovation Studio",
  description:
      "Meet the passionate team behind Arrow Edge, a digital studio specializing in UI/UX design, web development, and performance optimization. Learn about our mission to help businesses succeed with scalable and intuitive digital solutions.",
    keywords: [
    "about Arrow Edge",
    "digital agency",
    "web development team",
    "UI/UX experts",
    "our story",
    "mission and values",
    "digital innovation",
    "creative partners",
    "our team",
    "about us"
  ],
  openGraph: {
    title: "About Us | Arrow Edge - A Digital Innovation Studio",
    description:
       "Get to know the creative minds at Arrow Edge. Discover our story, mission, and how we bring ideas to life through design, branding, and digital innovation.",
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
