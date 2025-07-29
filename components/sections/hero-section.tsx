"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Play from "../Play";

// Define the animation variants with explicit Variants type
const FADE_UP_VARIANTS: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // easeOut is a valid easing function
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
const [showPlay, setShowPlay] = useState(false)

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setShowPlay(false);
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);
  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.png"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent md:to-black/50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl space-y-6 md:space-y-8"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Title */}
          <motion.h1
            variants={FADE_UP_VARIANTS} // Use variants prop instead of spreading
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk leading-tight"
          >
            We grow your
            <br className="hidden sm:inline" />
            {" "}online business
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={FADE_UP_VARIANTS}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            We are a full-service digital agency specializing in e-commerce,
            online marketing, web optimization, and design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={FADE_UP_VARIANTS}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 sm:px-8 sm:py-4 font-medium group transition-all duration-300"
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
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-3 sm:px-8 sm:py-4 font-medium"
                data-cursor-hover
              >
                <span>Our Work</span>
              </Button>
            </Link>
          </motion.div>

          {/* Signature */}
          <motion.div
            variants={FADE_UP_VARIANTS}
            className="mt-12 text-xs sm:text-sm text-gray-400 font-medium"
          >
            <span className="border-l-2 border-pink-500 pl-4">ARROW EDGE STUDIO</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000" />
      <button
        onClick={() => setShowPlay(true)}
        className="fixed bottom-6 right-6  hidden md:block z-20 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-700 transition-all"
      >
        ▶ Play
      </button>

      {/* === OVERLAY FOR PLAY PAGE === */}
      {showPlay && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setShowPlay(false)}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition"
          >
            <X size={28} />
          </button>

          {/* Play Piano UI */}
          <div className="w-full max-w-4xl">
            <Play />
          </div>
        </div>
      )}
    </section>
  );
}