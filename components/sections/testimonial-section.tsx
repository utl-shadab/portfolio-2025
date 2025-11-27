"use client";

import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Testimonial = {
  id: number;
  name: string;
  logo: string;
  url?: string;
  category: string;
  content: string;
};

const TESTIMONIALS: Testimonial[] = [
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

// If you keep the full array above in your file, you can replace TESTIMONIALS with that array.
// For brevity I assume you paste original testimonials into TESTIMONIALS.

export function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  // Memoize testimonials to keep stable reference
  const testimonials = useMemo(() => TESTIMONIALS, []);

  // Calculate visible index based on scrollLeft
  const updateIndexFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    // find child whose left is closest to scrollLeft
    const scrollLeft = el.scrollLeft;
    let closestIdx = 0;
    let minDiff = Infinity;
    children.forEach((child, idx) => {
      const diff = Math.abs(child.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setCurrentIndex((prev) => (prev === closestIdx ? prev : closestIdx));
  }, []);

  // Debounced scroll handler
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        updateIndexFromScroll();
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    updateIndexFromScroll();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [updateIndexFromScroll]);

  // Smooth scroll helper with small fallback
  const smoothScroll = useCallback((distance: number) => {
    const el = scrollRef.current;
    if (!el) return;
    // Use native smooth if available
    try {
      el.scrollBy({ left: distance, behavior: "smooth" });
    } catch {
      // fallback for older browsers
      const start = el.scrollLeft;
      const duration = 300;
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.scrollLeft = start + distance * eased;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, []);

  // Public scroll functions (left/right by one viewport)
  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el || isAnimatingRef.current) return;
      const amount = el.clientWidth; // scroll by container width
      isAnimatingRef.current = true;
      smoothScroll(direction === "left" ? -amount : amount);
      // allow next scroll after animation completes
      setTimeout(() => {
        isAnimatingRef.current = false;
        updateIndexFromScroll();
      }, 450);
    },
    [smoothScroll, updateIndexFromScroll]
  );

  // Keyboard navigation: left/right to navigate testimonials
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scroll("left");
      } else if (e.key === "ArrowRight") {
        scroll("right");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scroll]);

  // Announce currently visible testimonial for screen readers
  // We update a live region value (visually hidden) when currentIndex changes
  const [srMessage, setSrMessage] = useState("");
  useEffect(() => {
    const item = testimonials[currentIndex];
    if (item) {
      setSrMessage(`${item.name}, ${item.category}. ${item.content.slice(0, 120)}${item.content.length > 120 ? "…" : ""}`);
    }
  }, [currentIndex, testimonials]);

  // reduced-motion friendly animation props: use framer only when allowed
  const hoverProps = reducedMotion
    ? {}
    : { whileHover: { y: -4 }, transition: { duration: 0.25 } };

  return (
    <section
      className="bg-pink-300 py-24 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#555] max-w-xl">Collaborations that shaped brands and digital experiences.</p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 px-1 snap-x snap-mandatory scrollbar-hide"
            role="list"
            aria-label="Client testimonials"
            tabIndex={0}
          >
            {testimonials.map((t, idx) => (
              <motion.article
                key={t.id}
                {...(hoverProps as any)}
                className="min-w-[320px] md:min-w-[360px] lg:min-w-[400px] bg-[#fafafa] border border-[#e6e6e6] rounded-xl p-8 flex flex-col justify-between text-left snap-start shadow-sm hover:shadow-md transition-shadow outline-none"
                role="listitem"
                aria-current={currentIndex === idx ? "true" : undefined}
                tabIndex={-1}
              >
                <div className="flex mb-4" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-pink-600 text-lg mr-0.5" aria-hidden>
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-[#111] text-lg leading-relaxed mb-8">“{t.content}”</p>

                <div className="flex justify-between items-center">
                  <Link href={t.url || "#"} target="_blank" className="inline-flex flex-col items-start" aria-label={`Visit ${t.name} website`}>
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      sizes="56px"
                      className="object-contain mb-3 w-14 h-14"
                    />
                  </Link>

                  <div className="flex flex-col items-end">
                    <span className="text-xs mt-2 inline-block bg-pink-100 text-pink-500 px-4 py-1 rounded-full font-medium">
                      {t.category}
                    </span>
                    <span className="sr-only">{t.name}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-10 space-x-6">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll testimonials left"
              className="w-12 h-12 rounded-full bg-white border border-[#d1d1d1] flex items-center justify-center shadow-sm hover:shadow-md transition focus:ring-2 focus:ring-pink-400"
            >
              <ChevronLeft className="text-[#0a0a0a] w-6 h-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
              className="w-12 h-12 rounded-full bg-white border border-[#d1d1d1] flex items-center justify-center shadow-sm hover:shadow-md transition focus:ring-2 focus:ring-pink-400"
            >
              <ChevronRight className="text-[#0a0a0a] w-6 h-6" />
            </button>
          </div>

          {/* Dots / position indicator (accessible) */}
          <div className="flex justify-center mt-6 space-x-2" aria-hidden={false}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const child = el.children[i] as HTMLElement | undefined;
                  if (child) {
                    // Scroll so that the child is at start of container (snap-start)
                    const left = child.offsetLeft;
                    el.scrollTo({ left, behavior: "smooth" });
                  }
                }}
                aria-label={`Show testimonial ${i + 1}`}
                aria-pressed={currentIndex === i}
                className={`w-2 h-2 rounded-full ${currentIndex === i ? "bg-[#0a0a0a]" : "bg-[#ffffff80]"} transition-all`}
              />
            ))}
          </div>

          {/* Screen reader live region */}
          <div aria-live="polite" className="sr-only">
            {srMessage}
          </div>
        </div>
      </div>
    </section>
  );
}
