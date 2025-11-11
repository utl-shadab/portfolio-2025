"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Testimonial = {
  id: number
  name: string
  logo: string
  url?: string
  category: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Malik Architecture",
    logo: "/logos/malik.jpg",
    url: "https://malikarchitecture.com/",
    category: "Architecture",
    content:
      "The Arrow Edge Studio team translated our vision into a digital experience that perfectly reflects our architectural ethos. Brilliant design and exceptional execution.",
  },
  {
    id: 2,
    name: "Khalida Toukkani",
    logo: "/logos/khalida.jpg",
    url: "https://khalidatoukkani.com/",
    category: "Personal Brand",
    content:
      "Arrow Edge Studio brought sophistication and clarity to my online identity. Their attention to detail and commitment are unmatched.",
  },
  {
    id: 3,
    name: "Ace CogAT",
    logo: "/logos/acecogat.png",
    url: "https://www.acecogat.com/",
    category: "EdTech",
    content:
      "Outstanding results — fast, modern, and performance-focused. The site exceeded our expectations both visually and functionally.",
  },
  {
    id: 4,
    name: "Mulyantaran",
    logo: "/logos/mulyantaran.webp",
    url: "https://www.mulyantaran.com/",
    category: "Web 3",
    content:
      "Arrow Edge helped us completely reimagine our brand online. The new website has improved engagement and sales significantly.",
  },
  {
    id: 5,
    name: "Tila",
    logo: "/logos/tila.webp",
    url: "https://the-javed.netlify.app/",
    category: "Portfolio",
    content:
      "They understood our creative vision immediately and delivered something beyond expectations. A truly seamless experience.",
  },
  {
    id: 6,
    name: "Acrebytes",
    logo: "/logos/acrebyte.svg",
    url: "https://app.dev.acrebytes.com/",
    category: "SaaS",
    content:
      "Superb UX/UI development. Arrow Edge Studio has become our go-to digital partner for all design-driven builds.",
  },
  {
    id: 7,
    name: "Allcargo Gati",
    logo: "/logos/alcargo.svg",
    url: "https://www.allcargogati.com/",
    category: "Logistics",
    content:
      "Professional, reliable, and forward-thinking. Their team knows how to deliver enterprise-grade performance with modern design.",
  },
  {
    id: 8,
    name: "Vardhman",
    logo: "/logos/vardhman.svg",
    url: "https://www.vardhman.com/",
    category: "Manufacturing",
    content:
      "A fresh, sleek, and high-performance web experience. Arrow Edge brought precision and craftsmanship to digital design.",
  },
  {
    id: 9,
    name: "AYM Syntex",
    logo: "/logos/aym-logo.png",
    url: "https://www.aymsyntex.com/",
    category: "Manufacturing",
    content:
      "Impressive responsiveness and detail-oriented approach. They deliver premium quality work, every time.",
  },
  {
    id: 10,
    name: "Neon Attack",
    logo: "/logos/neon.svg",
    url: "https://www.neonattack.com/",
    category: "E-Commerce",
    content:
      "Incredible design sensibility. The new storefront has enhanced our customer experience and brand appeal massively.",
  },
  {
    id: 11,
    name: "Full-Bore",
    logo: "/logos/fullbore.webp",
    url: "https://www.full-bore.com/",
    category: "Industrial",
    content:
      "Arrow Edge Studio combines strong technical expertise with beautiful, strategic design. Couldn’t recommend them more.",
  },
  {
    id: 12,
    name: "Nifi Payments",
    logo: "/logos/nifi.png",
    url: "https://nifipayments.com/",
    category: "FinTech",
    content:
      "The team at Arrow Edge turned our fintech vision into an intuitive, secure, and elegant web platform.",
  },
  {
    id: 13,
    name: "TraceGuard",
    logo: "/logos/traceguard.avif",
    url: "https://www.traceguard.io/",
    category: "Cybersecurity",
    content:
      "Seamless collaboration from start to finish. The final product showcases technical precision with a refined aesthetic.",
  },
  {
    id: 14,
    name: "Innersmith",
    logo: "/logos/InnerSmith-Logo-Final.png",
    url: "https://innersmith.com/",
    category: "Wellness",
    content:
      "Our new website radiates calm and trust — exactly what we envisioned. Excellent communication and execution.",
  },
  {
    id: 15,
    name: "IQFin",
    logo: "/logos/IQFin-RC.png",
    url: "https://www.iqfin.in/",
    category: "Finance",
    content:
      "Arrow Edge Studio delivered high-caliber design aligned with our corporate standards. A reliable partner for digital transformation.",
  },
  {
    id: 16,
    name: "Brickland",
    logo: "/logos/Brickland-Logo.png",
    url: "https://bricklandindia.com/",
    category: "Construction",
    content:
      "Visually stunning and built for scalability. Arrow Edge’s attention to structural and aesthetic details sets them apart.",
  },
  {
    id: 17,
    name: "Workfeed",
    logo: "/logos/workfeed.svg",
    url: "https://workfeed.io/",
    category: "SaaS",
    content:
      "A flawless blend of creativity and technical execution. Our new platform feels bold, modern, and effortless.",
  },
]

export function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="bg-pink-300 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#555] max-w-xl">
            Collaborations that shaped brands and digital experiences.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 px-1 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="min-w-[320px] md:min-w-[360px] lg:min-w-[400px] bg-[#fafafa] border border-[#e6e6e6] rounded-xl p-8 flex flex-col justify-between text-left snap-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-pink-600 text-lg mr-0.5">★</span>
                  ))}
                </div>

                <p className="text-[#111] text-lg leading-relaxed mb-8">“{t.content}”</p>

                <div className="flex justify-between items-center">
                  <Link
                    href={t.url || "#"}
                    target="_blank"
                    className="inline-flex flex-col items-start"
                  >
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="object-contain mb-3 w-14 h-14"
                    />
                  </Link>
                  <div className="flex flex-col">

                    <span className="text-xs mt-2 inline-block bg-pink-100 text-pink-500 px-4 py-1 rounded-full font-medium">
                      {t.category}
                    </span>
                    {/* <span className="font-semibold text-[#0a0a0a] text-base">{t.name}</span> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-6">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white border border-[#d1d1d1] flex items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <ChevronLeft className="text-[#0a0a0a] w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white border border-[#d1d1d1] flex items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <ChevronRight className="text-[#0a0a0a] w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
