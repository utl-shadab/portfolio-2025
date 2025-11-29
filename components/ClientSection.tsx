// components/ClientSection.tsx
"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, cubicBezier } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  logo: string;
  url?: string;
  category?: string;
  content: string;
};

const ALL_TESTIMONIALS: Testimonial[] = [
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
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: cubicBezier(0.42, 0, 0.58, 1) } },
};

export default function ClientSection() {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(3);
  const total = ALL_TESTIMONIALS.length;
  const testimonials = useMemo(() => ALL_TESTIMONIALS, []);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load GSAP + ScrollTrigger dynamically for optional scroll effect on vertical rule
  useEffect(() => {
    let kill = false;
    (async () => {
      if (reduceMotion) return;
      try {
        // dynamic import so it doesn't add to initial bundle
        const gsapModule = await import("gsap");
        const scrollModule = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTrigger = scrollModule.ScrollTrigger || scrollModule.default || scrollModule;
        gsap.registerPlugin && gsap.registerPlugin(ScrollTrigger);

        if (kill) return;

        // small subtle parallax for the vertical rules on desktop only
        const rules = containerRef.current?.querySelectorAll<HTMLElement>("[data-vline]");
        if (rules && rules.length) {
          const ctx = gsap.context(() => {
            rules.forEach((r, i) => {
              gsap.fromTo(
                r,
                { y: 6 },
                {
                  y: -6,
                  ease: "sine.inOut",
                  scrollTrigger: {
                    trigger: r,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                }
              );
            });
          }, containerRef);
          // cleanup on unmount
          return () => {
            try {
              ctx.revert();
            } catch {}
          };
        }
      } catch {
        // silently ignore; gsap optional
      }
    })();

    return () => {
      kill = true;
    };
  }, [reduceMotion]);

  const canLoadMore = visibleCount < total;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((v) => Math.min(total, v + 3));
    // smooth scroll to newly revealed area (small timeout to wait for animation layout)
    setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;
      const firstNewIdx = Math.max(0, visibleCount);
      const item = el.querySelectorAll("[data-testimonial]")[firstNewIdx] as HTMLElement | undefined;
      if (item) item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 180);
  }, [visibleCount, total]);

  return (
    <section aria-labelledby="client-testimonials-heading" className="py-20 bg-white text-[#1b1320]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left heading */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2
              id="client-testimonials-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
              Client
              <br />
              Testimonials
            </h2>
          </div>

          {/* Right: testimonials */}
          <div className="md:col-span-8 lg:col-span-9">
            <motion.div
              ref={containerRef}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              variants={listVariants}
            >
              <div className="space-y-12">
                <AnimatePresence initial={false}>
                  {testimonials.slice(0, visibleCount).map((t, idx) => (
                    <motion.article
                      key={t.id}
                      data-testimonial
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
                      className="flex items-start gap-6 md:gap-8"
                    >
                      {/* vertical line (desktop only) */}
                      <div
                        data-vline
                        className="hidden md:block w-0.5 bg-[#1b1320] self-stretch"
                        style={{ minHeight: 96 }}
                        aria-hidden="true"
                      />

                      {/* content */}
                      <div className="flex-1 pl-0 md:pl-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-0.5">
                            <a href={t.url} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} website`}>
                              <div className="w-12 h-12 relative rounded">
                                <Image
                                  src={t.logo}
                                  alt={t.name}
                                  fill
                                  sizes="48px"
                                  className="object-contain"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                            </a>
                          </div>

                          <div>
                            <blockquote className="text-base lg:text-lg leading-relaxed text-[#2b2b2b] mb-3">
                              {t.content}
                            </blockquote>

                            <div className="text-sm text-[#6b6b6b]">
                              <div className="font-medium text-[#1b1320]">{t.name}</div>
                              {t.category && <div className="text-xs mt-1">{t.category}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* View more / All logos logic */}
              <div className="mt-8 md:mt-12 flex items-center">
                {canLoadMore ? (
                  <button
                    onClick={handleLoadMore}
                    className="ml-auto text-sm text-[#e11d6a] hover:underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 px-2 py-1"
                    aria-label="View more testimonials"
                  >
                    View more
                  </button>
                ) : (
                  <div className="ml-auto" aria-hidden>
                    {/* when all visible, show a subtle note */}
                    <span className="text-sm text-[#6b6b6b]">Showing all testimonials</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Logos grid shown only when all testimonials revealed */}
            {!canLoadMore && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                className="mt-12 pt-8 border-t border-[#f0f0f0]"
              >
                <h3 className="text-xl font-semibold mb-2">Brands we've worked with</h3>
                <p className="text-sm text-[#6b6b6b] max-w-2xl mb-6">
                  Selected partners and clients from across industries — enterprise, B2B, SaaS, retail and more.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
                  {testimonials.map((t) => (
                    <a
                      key={t.id}
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 bg-white/5 rounded-md border border-white/6 hover:scale-105 transition-transform"
                      aria-label={`Visit ${t.name}`}
                    >
                      <div className="relative w-20 h-12">
                        <Image src={t.logo} alt={t.name} fill className="object-contain" sizes="80px" loading="lazy" decoding="async" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
