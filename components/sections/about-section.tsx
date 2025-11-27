"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Dynamically import ScrollHighlightText to keep initial bundle smaller.
// It's client-only because it uses animation/reveal internals (if any).
const ScrollHighlightText = dynamic(
  () => import("@/components/RevealText").then((mod) => mod.ScrollHighlightText),
  { ssr: false, loading: () => null }
);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // Create a small shared timeline config (memoized)
  const animConfig = useMemo(
    () => ({
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.14,
    }),
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    // Respect prefers-reduced-motion — if set, skip animations entirely
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // Make elements visible immediately if reduced motion requested
      if (titleRef.current) titleRef.current.style.opacity = "1";
      if (ctaRef.current) ctaRef.current.style.opacity = "1";
      return;
    }

    // Use gsap.context to scope selectors to this component for safety & performance
    const ctx = gsap.context(() => {
      // Create a timeline for entrance animations
      const tl = gsap.timeline({
        defaults: { duration: animConfig.duration, ease: animConfig.ease },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          // once: true -> better for perf (fires only once)
          once: true,
        },
      });

      // From-to for title / label
      tl.fromTo(
        titleRef.current,
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, stagger: animConfig.stagger, ease: "power3.out" },
        0
      );

      // Slight pop for the CTA button container, delayed a bit
      tl.fromTo(
        ctaRef.current,
        { y: 18, opacity: 0, scale: 0.995 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
        ">0.15"
      );

      // Hint: mark elements with will-change for better compositing (small perf win)
      // We set and remove after the animation finishes to avoid long-lived will-change.
      const elems = [titleRef.current, ctaRef.current].filter(Boolean) as HTMLElement[];
      elems.forEach((el) => {
        el.style.willChange = "transform, opacity";
      });
      tl.call(() => elems.forEach((el) => (el.style.willChange = "")));
    }, sectionRef);

    return () => {
      // proper teardown
      ctx.revert();
      // kill all ScrollTrigger instances attached to this section to avoid memory leaks
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && sectionRef.current && st.trigger === sectionRef.current) st.kill();
      });
    };
  }, [animConfig]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-[#0a0a0a] relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Decorative label / small title */}
          <motion.div
            ref={titleRef}
            className="about-content mb-12 opacity-0"
            aria-hidden={false}
          >
            <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase flex items-center">
              <span
                className="inline-block h-2 w-2 bg-pink-500 rounded-sm mr-3"
                aria-hidden="true"
              />
              <span id="about-heading">About Us</span>
              <span
                className="inline-block h-2 w-2 bg-pink-500 rounded-sm ml-3"
                aria-hidden="true"
              />
            </span>
          </motion.div>

          {/* The reveal text is dynamically imported; it will not block initial load.
              Provide a small fallback or let it render null while loading. */}
          <div className="mb-6">
            <ScrollHighlightText
              text="At ArrowEdge Studio, we craft digital experiences that elevate your online presence."
              highlightWords={["ArrowEdge", "Studio", "digital", "online"]}
            />
          </div>

          {/* CTA */}
          <motion.div ref={ctaRef} className="about-content opacity-0">
            <Link href="/about" passHref>
              <Button
                variant="outline"
                className="border-pink-500 text-white  rounded-full px-6 py-3 bg-transparent"
                data-cursor-hover
                aria-label="Learn more about Arrow Edge Studio"
              >
                Arrow Edge Studio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
