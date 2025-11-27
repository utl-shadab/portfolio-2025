"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

// Dynamically import Play to avoid bundling it with the hero (client-side only)
const Play = dynamic(() => import("../Play"), { ssr: false, loading: () => null });

// Animation variants (kept outside component to avoid re-creation)
const FADE_UP_VARIANTS: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showPlay, setShowPlay] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Close overlay on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPlay(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lazy-load video when hero enters viewport (improves initial load & LCP)
  useEffect(() => {
    if (!heroRef.current) return;

    const node = heroRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !videoLoaded) {
            // set src only when needed to avoid fetching video on initial page load
            // keep preload="metadata" to give browser minimal info for poster frame
            // we set attribute rather than JSX binding so the browser begins loading only now
            const src = "/hero.mp4";
            if (videoRef.current.getAttribute("data-src") !== src) {
              videoRef.current.setAttribute("src", src);
              videoRef.current.setAttribute("data-src", src);
              // attempt to play if autoplay expected (muted & playsInline)
              // but we don't force play to avoid autoplay policies
              setVideoLoaded(true);
            }
          }
        });
      },
      { rootMargin: "200px 0px" } // start loading slightly before entering viewport
    );

    io.observe(node);
    return () => io.disconnect();
  }, [videoLoaded]);

  const openPlay = useCallback(() => setShowPlay(true), []);
  const closePlay = useCallback(() => setShowPlay(false), []);

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Arrow Edge Studio — We grow your online business</title>
        <meta
          name="description"
          content="Arrow Edge Studio is a full-service digital agency specializing in e-commerce, online marketing, web optimization, and design."
        />
        <link rel="canonical" href="https://arrowedge.in/" />
        {/* Preconnect to asset CDN if you use one — change to your CDN domain */}
        {/* <link rel="preconnect" href="https://cdn.your-cdn.com" crossOrigin="anonymous" /> */}

        {/* Preload the poster image to improve LCP */}
        <link rel="preload" as="image" href="/hero-poster.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Arrow Edge Studio — We grow your online business" />
        <meta property="og:description" content="Full-service digital agency: e-commerce, marketing, optimization, design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arrowedge.in/" />
        <meta property="og:image" content="https://arrowedge.in/hero-poster.png" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arrow Edge Studio — We grow your online business" />
        <meta name="twitter:description" content="Full-service digital agency: e-commerce, marketing, optimization, design." />
        <meta name="twitter:image" content="https://arrowedge.in/hero-poster.png" />

        {/* Minimal JSON-LD structured data for Organization / Website */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Arrow Edge Studio",
              url: "https://arrowedge.in/",
              logo: "https://arrowedge.in/LogoArrow.png",
              sameAs: ["https://www.linkedin.com/company/arrow-edge-studio/", "https://x.com/Arrowedgestudio"],
              description: "Full-service digital agency specializing in e-commerce, online marketing, web optimization, and design.",
            }),
          }}
        />
      </Head>

      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-poster.png"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
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
              variants={FADE_UP_VARIANTS}
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
              <Link href="/services" passHref>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 sm:px-8 sm:py-4 font-medium group transition-all duration-300"
                  data-cursor-hover
                >
                  <span>Discover Arrow Studio</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/work" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white bg-pink-400  rounded-full px-6 py-3 sm:px-8 sm:py-4 font-medium"
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

        {/* Decorative Dots (aria-hidden) */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000" aria-hidden="true" />

        {/* Play Button (hidden on small screens) */}
        <button
          onClick={openPlay}
          aria-label="Open play piano overlay"
          className="fixed bottom-6 right-6 hidden md:block z-20 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-700 transition-all"
        >
          ▶ Play
        </button>

        {/* === OVERLAY FOR PLAY PAGE === */}
        {showPlay && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closePlay}
              aria-label="Close play overlay"
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
            >
              <X size={28} />
            </button>

            {/* Play Piano UI */}
            <div className="w-full max-w-4xl" role="document">
              <Play />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
