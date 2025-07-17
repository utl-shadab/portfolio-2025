import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/pages/services-page-content"

export const metadata = {
  title: "Services - Arrow edge Studio",
  description: "Discover our comprehensive digital services including branding, web design, and digital marketing.",
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
