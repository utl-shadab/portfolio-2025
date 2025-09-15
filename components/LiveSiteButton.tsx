"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function LiveSiteButton({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center overflow-hidden rounded-full border border-white/30 bg-white/20 px-4 py-2 text-white backdrop-blur-sm"
      initial={{ width: 48 }}
      animate={{ width: 180 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.span
        initial={{ marginRight: 0 }}
        animate={{ marginRight: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.span>

      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="whitespace-nowrap overflow-hidden text-sm"
      >
        View Live Site
      </motion.span>
    </motion.a>
  );
}
