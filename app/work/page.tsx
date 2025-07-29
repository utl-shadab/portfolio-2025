import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkPageContent } from "@/components/pages/work-page-content"
import PositiveImpact from "@/components/PositiveImpact"
import ProcessSlider from "@/components/ProcessSlider"

export const metadata: Metadata = {
  title: "Our Work | Arrow Edge Studio",
  description:
    "Explore a selection of our studio’s most impactful projects in branding, web design, and digital marketing.",
  keywords: ["portfolio", "web design", "branding", "digital marketing", "case studies"],
  openGraph: {
    title: "Our Work | Arrow Edge Studio",
    description:
      "Explore a selection of our studio’s most impactful projects in branding, web design, and digital marketing.",
    url: "https://yourwebsite.com/work",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/public/projects/dust/hero-desktop.png", 
        width: 1200,
        height: 630,
        alt: "Our Work Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Arrow Edge Studio",
    description:
      "Explore a selection of our studio’s most impactful projects in branding, web design, and digital marketing.",
    images: ["/public/projects/dust/hero-desktop.png"],
  },
}

export default function WorkPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <WorkPageContent />
      <ProcessSlider/>
      <PositiveImpact/>
      <Footer />
    </main>
  )
}
