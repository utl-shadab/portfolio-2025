// app/blog/page.tsx

import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/pages/blog-list"

export const metadata: Metadata = {
  title: "Blog | Arrow Edge - Insights on Web Design & Digital Solutions",
  description:
    "Explore our expert-written articles on the latest trends in UI/UX design, modern web development, performance optimization, and digital marketing. Stay updated with valuable insights from the Arrow Edge team.",
  keywords: [
    "blog", 
    "web design articles", 
    "digital marketing insights", 
    "UI/UX blog", 
    "web development trends", 
    "SEO tips", 
    "digital solutions blog", 
    "Arrow Edge Studio"
  ],
  openGraph: {
    title: "Blog | Arrow Edge - Insights on Web Design & Digital Solutions",
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
    images: ["/Meta/blog.png"],
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
