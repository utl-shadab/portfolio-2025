"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { ProcessItem, processItems } from "@/data/processItems";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastIndexRef = useRef<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(1); // default 2nd card active

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!container || !section || processItems.length === 0) return;

    // Helper to compute scroll distance (horizontal)
    const computeTotalScroll = () => Math.max(0, container.scrollWidth - section.clientWidth);

    // If user prefers reduced motion, do a simple fallback: no pin, set active based on scrollTop
    if (prefersReduced) {
      // simple scroll listener to update active index (vertical scroll fallback)
      const onScroll = () => {
        // compute approximate progress based on section bounding rect
        const rect = section.getBoundingClientRect();
        const height = window.innerHeight || document.documentElement.clientHeight;
        const progress = Math.min(1, Math.max(0, 1 - (rect.top / height)));
        const idx = Math.round(progress * (processItems.length - 1));
        if (idx !== lastIndexRef.current) {
          lastIndexRef.current = idx;
          setActiveIndex(idx);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Use gsap.context to scope selectors and make cleanup simpler
    const ctx = gsap.context(() => {
      // ensure container has transform GPU hint during animation
      const origWillChange = container.style.willChange;
      container.style.willChange = "transform";

      // Calculate total horizontal scroll distance
      const totalScroll = computeTotalScroll();

      // GSAP animation: translate container left by totalScroll, scrubbed to scroll position
      const tween = gsap.to(container, {
        x: () => `-${computeTotalScroll()}px`,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${computeTotalScroll()}`, // scroll distance equals horizontal scroll width
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // avoid setState directly inside ScrollTrigger callback to reduce re-renders
            // schedule an RAF and only update when index changed
            const progress = self.progress;
            const idx = Math.round(progress * (processItems.length - 1));
            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              // batch state update in next RAF
              if (rafRef.current) cancelAnimationFrame(rafRef.current);
              rafRef.current = requestAnimationFrame(() => {
                setActiveIndex(idx);
              });
            }
          },
        },
      });

      // Refresh handler to recalc will-change removal after refresh (safety)
      ScrollTrigger.addEventListener("refreshInit", () => {
        container.style.willChange = "transform";
      });
      ScrollTrigger.addEventListener("refresh", () => {
        // after refresh, remove will-change to avoid long-lived hints
        container.style.willChange = origWillChange || "";
      });

      // On initial refresh ensure ScrollTrigger measurements are correct
      ScrollTrigger.refresh();

      // Cleanup: kill tween explicitly when context reverts (though ctx.revert handles it)
      return () => {
        tween.kill();
        container.style.willChange = origWillChange || "";
      };
    }, sectionRef);

    // Recalculate on resize using ResizeObserver for accuracy
    const ro = new ResizeObserver(() => {
      // Let ScrollTrigger know about size change; invalidateOnRefresh will cause gsap to recompute x()
      ScrollTrigger.refresh();
    });
    ro.observe(section);
    ro.observe(container);

    return () => {
      // cancel RAF if any
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      ctx.revert(); // kills tweens, scrolltriggers created in this context
      // ensure no ScrollTriggers remain for this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0c0c0e] text-white overflow-hidden min-h-screen flex items-center"
      aria-labelledby="process-heading"
    >
      <div className="absolute top-20 left-8 text-sm font-semibold uppercase tracking-widest z-10">
        <span className="sr-only">Section:</span> Why Arrow Edge
      </div>

      <div className="w-full overflow-x-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 mx-auto px-8 items-stretch"
          role="list"
          aria-label="Our process steps"
          // avoid setting width manually — let natural layout determine scrollWidth
        >
          {processItems.map((item: ProcessItem, index: number) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={item.id}
                role="listitem"
                aria-current={isActive ? "true" : undefined}
                className={clsx(
                  "process-item flex-shrink-0 rounded-3xl border border-neutral-800 bg-[#131417] overflow-hidden transition-all duration-700 ease-in-out",
                  isActive
                    ? "w-[90vw] md:w-[45vw] px-8 py-10 scale-100 shadow-lg"
                    : "w-[78vw] md:w-[35vw] px-6 py-8 opacity-70 transform-gpu"
                )}
                style={{
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                  // promote to its own layer only when active for better perf
                  willChange: isActive ? "transform, opacity" : "auto",
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden>
                    {isActive ? "→" : "↓"}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3" id={`process-${item.id}`}>
                      {item.title}
                    </h3>
                    {isActive && (
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-md transition-opacity duration-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
