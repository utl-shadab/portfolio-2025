"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Keep animated reveal as progressive enhancement (client-only)
const ScrollHighlightText = dynamic(
  () => import("@/components/RevealText").then((mod) => mod.ScrollHighlightText),
  { ssr: false, loading: () => null }
);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const animConfig = useMemo(
    () => ({
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.14,
    }),
    []
  );

  useEffect(() => {
    // If there is no section, nothing to animate
    if (!sectionRef.current) return;

    // Respect 'prefers-reduced-motion' — stop before loading animation libs
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Make elements visible immediately (so screen readers & crawlers see them without JS anim)
      if (titleRef.current) titleRef.current.style.opacity = "1";
      if (ctaRef.current) ctaRef.current.style.opacity = "1";
      return;
    }

    // Dynamically import gsap + ScrollTrigger inside effect to avoid bundling them in initial JS
    let ctx: any = null;
    let stInstances: any[] = [];

    (async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default || (ScrollTriggerModule as any);

        // Register plugin (some builds auto-register on import, but explicit is safe)
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin && gsap.registerPlugin(ScrollTrigger);
        }

        // Use gsap.context to scope the selectors to this component
        ctx = gsap.context(() => {
          const tl = gsap.timeline({
            defaults: { duration: animConfig.duration, ease: animConfig.ease },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true, // fire once to improve performance
            },
          });

          // mark will-change temporarily
          const elems = [titleRef.current, ctaRef.current].filter(Boolean) as HTMLElement[];
          elems.forEach((el) => {
            try {
              el.style.willChange = "transform, opacity";
            } catch {}
          });

          // Title animation
          tl.fromTo(
            titleRef.current,
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: animConfig.stagger, ease: "power3.out" },
            0
          );

          // CTA animation
          tl.fromTo(
            ctaRef.current,
            { y: 18, opacity: 0, scale: 0.995 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
            ">0.15"
          );

          // remove will-change after animation completes
          tl.call(() => elems.forEach((el) => (el.style.willChange = "")));
        }, sectionRef);

        // collect ScrollTrigger instances for safer cleanup
        stInstances = (window as any).gsap && (window as any).gsap.ScrollTrigger ? (window as any).gsap.ScrollTrigger.getAll?.() || [] : [];

      } catch (err) {
        // If GSAP fails to load for any reason, just reveal the elements so content is accessible
        if (titleRef.current) titleRef.current.style.opacity = "1";
        if (ctaRef.current) ctaRef.current.style.opacity = "1";
        // swallow error — animations are progressive enhancement
      }
    })();

    return () => {
      // revert GSAP context (if created)
      try {
        ctx && ctx.revert && ctx.revert();
      } catch {}

      // Kill any ScrollTrigger instances that belong to this section to avoid memory leaks
      try {
        const ScrollTrigger = (window as any).gsap?.ScrollTrigger;
        if (ScrollTrigger && sectionRef.current) {
          ScrollTrigger.getAll().forEach((st: any) => {
            if (st && st.trigger === sectionRef.current) st.kill();
          });
        }
      } catch {}
    };
  }, [animConfig]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0a0a0a] relative"
      aria-labelledby="about-heading"
      role="region"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Small decorative label (visible and semantic) */}
          <div
            ref={titleRef}
            className="about-content mb-6 opacity-0"
            aria-hidden={false}
            // keep it focusable for accessibility if needed
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
          </div>

          {/* IMPORTANT: server-rendered plain content for SEO (readable by crawlers) */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
            At Arrow Edge Studio, we craft digital experiences that elevate your online presence.
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl">
            We are a full-service digital agency focused on website design, web development, mobile apps and AI chatbot solutions for businesses across India.
            Our services combine modern UI/UX, fast performance, and measurable growth strategies to help you convert visitors into customers.
          </p>

          {/* Progressive enhancement: animated reveal (client-side only) */}
          <div className="mb-6">
            <ScrollHighlightText
              text="At ArrowEdge Studio, we craft digital experiences that elevate your online presence."
              highlightWords={["ArrowEdge", "Studio", "digital", "online"]}
            />
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="about-content opacity-0">
            <Link href="/about" passHref>
              <Button
                variant="outline"
                className="border-pink-500 text-white rounded-full px-6 py-3 bg-transparent"
                data-cursor-hover
                aria-label="Learn more about Arrow Edge Studio"
              >
                Arrow Edge Studio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
