// app/about/page.tsx

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/pages/about-page-content"

export const metadata: Metadata = {
  title: "About Arrow Edge Studio | UI/UX, Web Development & Digital Innovation",
  description:
    "Arrow Edge Studio is a digital innovation agency specializing in UI/UX design, web development, app development, chatbots, and performance optimization. Learn about our mission, team, and how we help brands grow through strategy, design, and technology.",
  
  keywords: [
    "About Arrow Edge Studio",
    "digital innovation studio",
    "UI UX design agency",
    "web development agency",
    "app development company",
    "chatbot developers",
    "performance optimization experts",
    "creative digital studio",
    "About us Arrow Edge",
    "digital transformation team",
  ],

  alternates: {
    canonical: "https://arrowedge.in/about",
  },

  openGraph: {
    title:
      "About Arrow Edge Studio | Digital Innovation, UI/UX & Web Development",
    description:
      "Meet the team behind Arrow Edge Studio — experts in UI/UX design, web development, app development, chatbots, SEO, and performance optimization. Discover our story and mission.",
    url: "https://arrowedge.in/about",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/Meta/about.png",
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio About Page Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Arrow Edge Studio | Creative Digital Agency",
    description:
      "Learn about the mission and team behind Arrow Edge Studio — experts in UI/UX design, websites, apps, chatbots, SEO, and performance-driven digital solutions.",
    images: ["/Meta/about.png"],
  },
}

export default function AboutPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* ORGANIZATION + ABOUT PAGE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Arrow Edge Studio",
            url: "https://arrowedge.in/about",
            description:
              "Arrow Edge Studio is a digital innovation agency specializing in UI/UX, web development, app development, chatbots, SEO, and performance optimization.",
            mainEntity: {
              "@type": "Organization",
              name: "Arrow Edge Studio",
              url: "https://arrowedge.in",
              logo: "https://arrowedge.in/LogoArrow.png",
              sameAs: [
                "https://www.linkedin.com/company/arrow-edge-studio/",
                "https://x.com/Arrowedgestudio",
              ],
              description:
                "Arrow Edge Studio helps businesses grow through exceptional UI/UX design, web development, mobile apps, chatbot solutions, branding, and performance tuning.",
            },
          }),
        }}
      />

      <Navigation />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
