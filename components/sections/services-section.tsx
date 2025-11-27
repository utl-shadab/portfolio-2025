"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedPathLine from "../AnimatedPathLine";
import { services } from "@/lib/services";

// LottiePlayer — dynamically imported for performance
const LottiePlayer = dynamic(() => import("@/components/LottiePlayer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
      Loading…
    </div>
  ),
});

// Allowed lottie names
type LottieName = "uiux" | "cross" | "spa" | "micro" | "performance" | "frontend";

// Lottie config
interface LottieConfig {
  slug: string;
  lottieName: LottieName;
}

// Mapping slugs → lottie animations
const lotties: LottieConfig[] = [
  { slug: "ui-ux-interface", lottieName: "uiux" },
  { slug: "cross-platform", lottieName: "cross" },
  { slug: "spa-ssr-development", lottieName: "spa" },
  { slug: "microinteractions", lottieName: "micro" },
  { slug: "performance-tuning", lottieName: "performance" },
  { slug: "headless-cms-api", lottieName: "frontend" },
];

// --------------- VARIANTS (outside component → better perf) --------------
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

// ------------------------------- COMPONENT -------------------------------
export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#0a0a0a] text-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header Row */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center mb-12 space-y-6 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold font-space-grotesk"
          >
            Services
          </h2>

          {/* Animated Line */}
          <div className="flex-1 mx-6">
            <AnimatedPathLine />
          </div>

          {/* View All Button */}
          <Link href="/services">
            <Button
              variant="outline"
              aria-label="View all Arrow Edge Studio services"
              className="rounded-full border-white/30 bg-pink-500 text-white group whitespace-nowrap"
            >
              View All Services
              <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }} // Render animation only once = better perf
        >
          <AnimatePresence>
            {services.map((service) => {
              const lottie =
                lotties.find((l) => l.slug === service.slug) || {
                  lottieName: "uiux",
                };

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="group will-change-transform will-change-opacity"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={`Read more about ${service.title}`}
                  >
                    {/* Lottie Animation Card */}
                    <div className="overflow-hidden rounded-2xl mb-4 bg-transparent border border-gray-600 h-[250px] flex items-center justify-center">
                      <LottiePlayer
                        name={lottie.lottieName}
                        width={240}
                        height={240}
                        className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Title & Text */}
                    <div>
                      <h3 className="text-xl font-medium flex items-center group-hover:text-pink-500 transition-colors mb-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                      <p className="text-sm text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
