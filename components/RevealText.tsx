"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollHighlightTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

export function ScrollHighlightText({
  text,
  highlightWords = [],
  className = "",
}: ScrollHighlightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 40%"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.8,
  });

  // Pre-process text to insert a line break before a specific word
  const processedText = text.replace("presence", "\n" + "presence");

  // Split into words, then map each word to an array of characters
  const words = processedText.split(" ");

  const flattenedChars: {
    char: string;
    isHighlighted: boolean;
    isLineBreak: boolean;
  }[] = [];

  words.forEach((word, wordIndex) => {
    const isHighlightedWord = highlightWords.includes(word.replace("\n", ""));

    word.split("").forEach((char) => {
      flattenedChars.push({
        char,
        isHighlighted: isHighlightedWord,
        isLineBreak: false,
      });
    });

    // Add space after each word
    flattenedChars.push({
      char: " ",
      isHighlighted: false,
      isLineBreak: false,
    });

    // Add explicit line break if word starts with `\n`
    if (word.startsWith("\n")) {
      flattenedChars.splice(flattenedChars.length - word.length - 1, 0, {
        char: "",
        isHighlighted: false,
        isLineBreak: true,
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden py-10 px-4 md:px-0 ${className}`}
    >
      <div className="max-w-5xl flex flex-wrap gap-y-4 leading-snug">
        {flattenedChars.map((item, index) => {
          const total = flattenedChars.length;
          const start = index / total;
          const end = (index + 1) / total;

          const x = useTransform(smoothScroll, [start, end], [40, 0]);
          const opacity = useTransform(smoothScroll, [start, end], [0, 1]);

          if (item.isLineBreak) {
            return <br key={`br-${index}`} />;
          }

          return (
            <motion.span
              key={index}
              style={{ x, opacity }}
              className={`inline-block whitespace-pre text-2xl md:text-4xl font-space-grotesk font-semibold ${
                item.isHighlighted ? "text-pink-500" : "text-gray-400"
              }`}
            >
              {item.char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
