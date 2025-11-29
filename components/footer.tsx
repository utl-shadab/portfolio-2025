"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const GIANT_TEXT = "ARROWEDGE"

export function Footer() {
  const giantRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!giantRef.current || !footerRef.current) return

    const chars = Array.from(
      giantRef.current.querySelectorAll<HTMLSpanElement>(".giant-char")
    )

    // initial letter reveal
    const reveal = gsap.fromTo(
      chars,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.06,
        ease: "power3.out"
      }
    )

    // parallax for giant text
    const par = gsap.to(giantRef.current, {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })

    return () => {
      reveal.kill()
      par.kill()
      ScrollTrigger.getAll().forEach((s) => s.kill())
    }
  }, [])

  const renderChars = (text: string) =>
    Array.from(text).map((char, i) => (
      <span
        key={i}
        className="giant-char inline-block opacity-0"
        aria-hidden="true"
      >
        {char}
      </span>
    ))

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-10 overflow-hidden"
    >
      {/* Top structured content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 grid md:grid-cols-3 gap-16 relative z-20"
      >
        {/* LEFT INFO */}
        <div className="space-y-4 max-w-sm">
          <p className="text-sm leading-relaxed text-gray-300">
            Founded by creative minds redefining digital experiences, ArrowEdge Studio blends
            design, development & innovation for modern brands.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Punjabi Bagh
            <br />
            Delhi, India
          </p>

          <div className="flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/company/arrow-edge-studio/"
              className="text-sm hover:text-pink-400 transition-colors"
            >
              LinkedIn ↗
            </Link>
            <Link
              href="https://x.com/Arrowedgestudio"
              className="text-sm hover:text-pink-400 transition-colors"
            >
              Twitter ↗
            </Link>
          </div>
        </div>

        {/* CENTER MENU — boxed vertical list with hover fill-from-bottom */}
        <div className="space-y-4">
          <ul className="flex flex-col divide-y divide-white/5 border-l border-r border-white/5">
            {[
              { href: "/work", label: "PROJECTS ↗" },
              { href: "/about", label: "ABOUT ↗" },
              { href: "/services", label: "Services ↗" },
              { href: "/blog", label: "LATEST NEWS ↗" },
              { href: "/contact", label: "GET IN TOUCH ↗" }

            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative overflow-hidden"
              // keep each item tall like your screenshot — adjust py if you want bigger
              >
                {/* animated overlay: scales from bottom -> top on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out pointer-events-none"
                  // change this gradient to any color you prefer for the hover fill
                  // currently a subtle pink-to-transparent (rising from bottom)
                  style={{ background: "linear-gradient(0deg, rgba(235,128,172,0.06), transparent)" }}
                />

                {/* item content (keeps on top of overlay) */}
                <Link
                  href={item.href}
                  className="relative z-10 block px-6 py-6 text-sm md:text-base text-white group-hover:text-white/95 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium tracking-tight">{item.label}</span>
                    <span className="ml-4 text-sm opacity-80 transform group-hover:translate-x-1 transition-transform duration-300">↗</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CTA */}
        <div className="space-y-4">
          <h3 className="text-xl font-light leading-snug">
            Ready to kick start a <br /> discovery session?
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Share your idea with us — we’ll help turn it into something meaningful.
          </p>
          <Link
            href="/contact"
            className="text-sm underline underline-offset-4 decoration-2 hover:text-pink-400"
          >
            Start Now ↗
          </Link>
        </div>
      </motion.div>


      {/* Giant filled text (Tailwind only) */}
      <div className="relative mt-32 flex justify-center select-none z-10">
        <div
          ref={giantRef}
          className="tracking-tighter"
          // tiny inline style only to specify font-family — if you prefer, add this family to Tailwind config
          style={{ fontFamily: "GT-Super-Display-Light" }}
        >
          {/* responsive text sizes via Tailwind arbitrary values */}
          <div className="text-[15vw] text-white sm:text-[18vw] md:text-[14vw] lg:text-[15.5vw]  leading-[0.85]">
            {renderChars(GIANT_TEXT)}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-16 container mx-auto px-6 flex justify-between text-xs text-gray-500 relative z-20">
        <p>© {new Date().getFullYear()} ArrowEdge Studio</p>
        <p>Website by ArrowEdge Studio</p>
      </div>
    </footer>
  )
}

export default Footer
