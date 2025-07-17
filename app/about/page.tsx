import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/pages/about-page-content"

export const metadata = {
  title: "About - Arrow Edge Studio",
  description: "Learn more about Arrow Edge Studio and our team of creative professionals.",
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
