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
  const [activeIndex, setActiveIndex] = useState<number>(1); // second card active by default

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const items = gsap.utils.toArray(".process-item") as HTMLElement[];

    if (!container || !section || items.length === 0) return;

    // Calculate total width of the container to ensure all cards are visible
    const totalCardWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
    const totalGapWidth = (items.length - 1) * 6; // Gap between cards (6px)
    const containerWidth = totalCardWidth + totalGapWidth;

    // Set the container's width dynamically
    container.style.width = `${containerWidth}px`;

    // Calculate total scroll width
    const totalScrollWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: () => `-${totalScrollWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.round(progress * (items.length - 1));

          // Clamp index between 0 and last
          const clampedIndex = Math.max(0, Math.min(index, items.length - 1));

          setActiveIndex(clampedIndex);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0c0c0e] text-white overflow-hidden h-screen flex items-center justify-center"
    >
      <div className="absolute top-20 left-8 text-sm font-semibold uppercase tracking-widest z-10">
        Why Arrow Edge
      </div>

      <div className="overflow-x-hidden w-full">
        <div
          ref={containerRef}
          className="flex gap-6 w-max mx-auto px-8"
        >
          {processItems.map((item: ProcessItem, index: number) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                className={clsx(
                  "process-item flex-shrink-0 transition-all duration-700 ease-in-out rounded-3xl border border-neutral-800 bg-[#131417] overflow-hidden",
                  isActive
                    ? "w-[90vw] md:w-[45vw] px-8 py-10"
                    : "w-[90vw] md:w-[45vw] px-6 py-8 opacity-70"
                )}
                style={{
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{isActive ? "→" : "↓"}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    {isActive && (
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-md transition-opacity duration-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}