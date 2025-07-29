"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import * as Tone from "tone";

// All supported keys in QWERTY layout (top to bottom)
const keyRows = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// Generate tones for each key
const allKeys = keyRows.flat();
const notes = allKeys.map((_, i) => {
  const baseNote = 48 + i;
  return Tone.Frequency(baseNote, "midi").toNote();
});

// Define unique colors for each key (ensuring contrast with #0a0a0a background)
const keyColors = [
  "#EF4444", // Red-500
  "#F97316", // Orange-500
  "#F59E0B", // Amber-500
  "#EAB308", // Yellow-500
  "#22C55E", // Green-500
  "#10B981", // Emerald-500
  "#14B8A6", // Teal-500
  "#06B6D4", // Cyan-500
  "#3B82F6", // Blue-500
  "#6366F1", // Indigo-500
  "#8B5CF6", // Violet-500
  "#A855F7", // Purple-500
  "#D946EF", // Fuchsia-500
  "#EC4899", // Pink-500
  "#F43F5E", // Rose-500
  "#EF4444", // Red-500 (cycle repeats for remaining keys)
  "#F97316", // Orange-500
  "#F59E0B", // Amber-500
  "#EAB308", // Yellow-500
  "#22C55E", // Green-500
  "#10B981", // Emerald-500
  "#14B8A6", // Teal-500
  "#06B6D4", // Cyan-500
  "#3B82F6", // Blue-500
  "#6366F1", // Indigo-500
  "#8B5CF6", // Violet-500
  "#A855F7", // Purple-500
  "#D946EF", // Fuchsia-500
  "#EC4899", // Pink-500
  "#F43F5E", // Rose-500
  "#EF4444", // Red-500
  "#F97316", // Orange-500
  "#F59E0B", // Amber-500
  "#EAB308", // Yellow-500
  "#22C55E", // Green-500
  "#10B981", // Emerald-500
];

// Map each key to its color
const keyColorMap = Object.fromEntries(
  allKeys.map((key, index) => [key, keyColors[index]])
);

export default function Play() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const playTone = async (index: number) => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(notes[index], "8n");
  };

  const handlePress = (key: string) => {
    const index = allKeys.indexOf(key.toUpperCase());
    if (index === -1) return;

    setActiveKey(key.toUpperCase());
    playTone(index);
    setTimeout(() => setActiveKey(null), 200);
  };

  // Keyboard events
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      handlePress(e.key);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative container mx-auto py-12 px-4 flex flex-col items-center justify-center">
      {/* Display pressed key and tone */}
      <motion.div
        className="mb-8 px-6 py-4 rounded-xl bg-black/80 text-white text-2xl tracking-widest border border-gray-700"
        animate={{ opacity: activeKey ? 1 : 0.4 }}
        transition={{ duration: 0.3 }}
      >
        {activeKey
          ? `Key: ${activeKey} → ${notes[allKeys.indexOf(activeKey)]}`
          : "Press any A–Z or 0–9 key"}
      </motion.div>

      {/* Piano Keys Aligned like Keyboard */}
      <div className="flex flex-col gap-2 items-center">
        {keyRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((key) => (
              <motion.button
                key={key}
                onClick={() => handlePress(key)}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "w-20 h-20 rounded-md border border-gray-600 font-bold text-md shadow-md transition-all duration-100",
                  activeKey === key
                    ? `bg-[${keyColorMap[key]}] text-white shadow-inner scale-95`
                    : "bg-white text-black"
                )}
              >
                {key}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}