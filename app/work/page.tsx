import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkPageContent } from "@/components/pages/work-page-content"

export const metadata = {
  title: "Our Work - Baker Studio",
  description: "Explore our portfolio of successful projects and creative solutions.",
}

export default function WorkPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <WorkPageContent />
      <Footer />
    </main>
  )
}
