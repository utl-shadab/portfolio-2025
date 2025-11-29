import React, { useEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FaqItem = {
  id: string;
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    q: "What kind of services does Arrow Edge Studio  offer?",
    a: "Arrow Edge Studio builds modern websites and interactive experiences — from landing pages to full SaaS UIs. We focus on clean performance, animation-driven UX (GSAP), and accessible, responsive code that scales.",
  },
  {
    id: "faq-2",
    q: "Do you use GSAP for every animation on the site?",
    a: "We use GSAP selectively: micro-interactions, hero transitions, scroll-triggered reveals and complex timeline sequences. For simple hover/focus states we prefer CSS where possible for better performance.",
  },
  {
    id: "faq-3",
    q: "Will animations slow my website down?",
    a: "No — when implemented carefully they enhance UX without hurting performance. We use requestAnimationFrame-friendly GSAP transforms, lazy-load animation code, and reduce layout thrashing to keep sites snappy.",
  },
  {
    id: "faq-4",
    q: "Can I customize the animations and styles?",
    a: "Absolutely. All animations and styles are modular. We document animation triggers and variables so you — or another developer — can tweak timing, easing, and triggers at a component level.",
  },
  {
    id: "faq-5",
    q: "Are designs accessible and SEO-friendly?",
    a: "Yes. We build semantic HTML, keyboard-navigable components, and accessible ARIA patterns. Content is structured for crawlers and screen readers while visual polish comes from CSS + GSAP.",
  },
  {
    id: "faq-6",
    q: "Do you provide ongoing maintenance and updates?",
    a: "We offer optional maintenance packages: security updates, performance audits, and content changes. For active projects we also provide quick-turn fixes and A/B testing support.",
  },
  {
    id: "faq-7",
    q: "What integrations do you support (analytics, eCommerce, CMS)?",
    a: "We support Google Analytics/GA4, consent managers, headless CMSs (Strapi, Contentful), commerce platforms (Shopify, Snipcart), and custom APIs. Integrations are implemented with privacy and performance in mind.",
  },
  {
    id: "faq-8",
    q: "How do you ensure fast page loads?",
    a: "We optimize images (modern formats + responsive sizes), use code-splitting, lazy-load non-critical scripts, and prefer CSS-first interactions. GSAP code is dynamically imported so it doesn't block initial paint.",
  },
  {
    id: "faq-9",
    q: "What licensing or usage rights do I get for the code?",
    a: "You receive a repository with project code and deployment instructions. Licensing details vary by engagement — commercial projects include full source access; ask for a custom agreement if you need redistribution rights.",
  },
  {
    id: "faq-10",
    q: "How do I get started or request a quote?",
    a: "Visit arrowedge.in and use the contact form, or email the team with a short brief (goals, budget, timeline). We'll respond with a proposed scope and estimate within 48 hours.",
  },
];

const Arrow = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctxRef = useRef<any>(null);

  // Load GSAP + ScrollTrigger only when needed
  useEffect(() => {
    let mounted = true;

    const initGSAP = async () => {
      if (!mounted) return;

      // Register plugins
      gsap.registerPlugin(ScrollTrigger);

      // GSAP Context for safe cleanup
      ctxRef.current = gsap.context(() => {
        gsap.from(".faq-row", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });
      }, containerRef);
    };

    initGSAP();

    return () => {
      mounted = false;
      ctxRef.current?.revert();
    };
  }, []);

  // Animate height when openIndex changes
  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (!el) return;

      const isOpen = openIndex === idx;

      // Measure scrollHeight before any changes
      if (isOpen) {
        el.style.height = "0px";
        el.style.opacity = "0";
        const height = el.scrollHeight;
        gsap.to(el, {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            el.style.height = "auto";
          },
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex]);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      ref={containerRef}
      className="bg-neutral-900 text-neutral-100 py-20 px-6 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column */}
        <div className="">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest text-neutral-400 mb-4 uppercase">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="font-extrabold text-3xl md:text-4xl leading-tight -tracking-tight mb-8"
            >
              Everything you<br />need to know
            </h2>
            <p className="text-neutral-300 text-lg leading-7 max-w-xl">
              If you have more questions, feel free to send us an email at{" "}
              <a href="mailto:hello@arrowedge.in" className="text-white underline underline-offset-4">
                hello@arrowedge.in
              </a>
              . We’ll reply quickly and help you choose the best solution.
            </p>
          </div>
        </div>

        {/* Right Column - FAQ List */}
        <div className="space-y-4 md:col-span-2 ">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <article
                key={faq.id}
                className="faq-row border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm"
              >
                <header>
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-xl"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className="flex-shrink-0 w-10 h-10 hidden sm:flex rounded-full bg-neutral-800  items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-medium text-sm sm:text-lg text-neutral-100 sm:pr-4">
                        {faq.q}
                      </span>
                    </div>
                    <Arrow open={isOpen} />
                  </button>
                </header>

                <div
                  id={`${faq.id}-content`}
                  role="region"
                  aria-labelledby={faq.id}
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 pt-2 text-neutral-300 text-sm md:text-base leading-relaxed border-t border-neutral-800/50">
                    {faq.a}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(FaqSection);