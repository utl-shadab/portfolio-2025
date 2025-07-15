import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/pages/contact-page-content"

export const metadata = {
  title: "Contact - Baker Studio",
  description: "Get in touch with Baker Studio to discuss your next project.",
}

export default function ContactPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
