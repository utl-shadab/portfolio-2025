// app/blog/page.tsx

import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/pages/blog-list"

export const metadata: Metadata = {
  title: "Blog | Arrow Edge Studio",
  description:
    "Read the latest insights, tips, and case studies on branding, web design, and digital marketing by Arrow Edge Studio. Stay ahead with our expert blog content.",
  keywords: [
    "blog", "branding insights", "web design tips", "digital marketing trends", 
    "case studies", "UI/UX", "agency blog", "Arrow Edge Studio"
  ],
  openGraph: {
    title: "Blog | Arrow Edge Studio",
    description:
      "Stay updated with the latest blogs on branding, web design, digital marketing, and more from Arrow Edge Studio.",
    url: "https://arrow-2025.netlify.app/blog",
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/Meta/blog.png", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Arrow Edge Studio Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Arrow Edge Studio",
    description:
      "Explore expert-written blogs on branding, design, and marketing strategies from Arrow Edge Studio.",
    images: ["/Meta/blog.png"], // Ensure this file is available in public folder
  },
}

export default function BlogPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <BlogList />
      <Footer />
    </main>
  )
}
