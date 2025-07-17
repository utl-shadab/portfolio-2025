"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FADE_UP_VARIANTS = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        style={{
          willChange: "transform",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk mb-8 leading-tight"
            variants={FADE_UP_VARIANTS}
            style={{
              willChange: "transform, opacity",
            }}
          >
            We grow your
            <br />
            online business
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            variants={FADE_UP_VARIANTS}
            style={{
              willChange: "transform, opacity",
            }}
          >
            We are a full-service digital agency specializing in e-commerce,
            online marketing, web optimization, and design.
          </motion.p>

          <motion.div
            className="flex items-center space-x-6"
            variants={FADE_UP_VARIANTS}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 font-medium group transition-all duration-300"
                data-cursor-hover
              >
                <span>Discover Arrow Studio</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/work">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 font-medium"
                data-cursor-hover
              >
                <span>Our Work</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 text-sm text-gray-400"
            variants={FADE_UP_VARIANTS}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <span className="border-l-2 border-pink-500 pl-4">
              ARROW EDGE STUDIO
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000" />
    </section>
  );
}