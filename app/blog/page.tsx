"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/pages/blog-list"

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <BlogList />
      <Footer />
    </>
  )
}