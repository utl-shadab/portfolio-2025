"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function CtaSection({
  title = "Ready to start your project?",
  subtitle = "Let's discuss how our services can help bring your vision to life.",
  buttonText = "Contact Us",
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-500/20 to-cyan-500/20">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">
          {title}
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 
            text-white rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl transition"
          >
            {buttonText}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
