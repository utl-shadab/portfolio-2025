import type { Metadata } from "next" 
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/pages/contact-page-content"

export const metadata: Metadata = {
  title: "Contact | Arrow Edge Studio",
  description:
    "Get in touch with Arrow Edge Studio to discuss your next branding, web design, or digital marketing project. Let's create something amazing together.",
  keywords: ["contact", "get in touch", "inquiry", "quote", "consultation", "agency contact"],
  openGraph: {
    title: "Contact | Arrow Edge Studio",
    description:
      "Reach out to Arrow Edge Studio for inquiries, project discussions, or to get a quote. We're ready to help you achieve your digital goals.",
    url: "https://arrow-2025.netlify.app/contact", 
    siteName: "Arrow Edge Studio",
    images: [
      {
        url: "/Meta/contact.png", 
        width: 1200,
        height: 630,
        alt: "Contact Arrow Edge Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Arrow Edge Studio",
    description: "Get in touch with Arrow Edge Studio to discuss your next project.",
    images: ["/Meta/contact.png"], 
  },
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
