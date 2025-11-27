"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tone from "tone";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight, Loader2 } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/types/project";

const AnimatedPathLine = dynamic(() => import("../AnimatedPathLine"), {
  ssr: false,
  loading: () => <div className="h-4" aria-hidden />,
});

interface ProjectRowProps {
  project: Project;
  playSound: () => void;
}

const ProjectRow = memo(function ProjectRow({ project, playSound }: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use pointer events for better cross-device support (mouse + touch)
  return (
    <Link href={`/work/${project.slug}`}>
      <div
        onPointerEnter={() => {
          playSound();
          setIsHovered(true);
        }}
        onPointerLeave={() => {
          setIsHovered(false);
        }}
        role="listitem"
        className="group relative cursor-pointer border-b border-neutral-800 transition-colors duration-300 hover:bg-neutral-900/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1.5fr_1.5fr_auto] md:items-center gap-x-6 gap-y-1 py-6 px-6">
          <h2 className="col-span-1 text-2xl md:text-3xl font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h2>

          <span className="col-span-1 md:col-start-5 text-right text-neutral-400 group-hover:text-white transition-colors duration-300 text-lg">
            {project.year}
          </span>

          <div className="hidden md:flex items-center justify-center md:col-start-2">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-pink-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="col-span-2 md:col-span-1 md:col-start-3 flex flex-col md:flex-row md:items-center text-neutral-500 text-sm mt-1 md:mt-0">
            <span className="md:pr-8">{project.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
},
// shallow compare by project id and reference stability of playSound
(prev, next) => prev.project.id === next.project.id && prev.playSound === next.playSound
);

export default function InteractiveProjectTable() {
  // We keep synth in a ref and only allocate when user interacts (lazy init)
  const synthRef = useRef<Tone.Synth | null>(null);
  const isAudioReady = useRef(false);
  const lastPlayTime = useRef(0);

  // Pagination / visible items
  const [visibleProjects, setVisibleProjects] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  // Memoized slice for displayed projects (minimize recalculation)
  const displayedProjects = useMemo(() => projects.slice(0, visibleProjects), [visibleProjects]);

  // Lazy init synth on first play — reduces initial work during SSR/hydration
  const ensureSynth = useCallback(async () => {
    if (!synthRef.current) {
      synthRef.current = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 },
      }).toDestination();
    }
  }, []);

  // Debounced, stable playSound
  const playSound = useCallback(async () => {
    try {
      const now = Tone.now();
      if (now - lastPlayTime.current < 0.1) return; // simple debounce
      lastPlayTime.current = now;

      if (!isAudioReady.current) {
        // Tone.start() must be called from user gesture; playSound is triggered by pointer enter -> ok
        await Tone.start();
        isAudioReady.current = true;
      }

      await ensureSynth();

      if (synthRef.current) {
        // Use small duration and scheduled now to avoid glitches
        synthRef.current.triggerAttackRelease("A4", "8n", now);
      }
    } catch (err) {
      // fail silently — audio issues shouldn't break UI
      // optionally log to analytics in production
      // console.warn("Audio init failed", err);
    }
  }, [ensureSynth]);

  // Load more handler (memoized)
  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    // Simulate server fetch delay; replace with real fetch if needed
    await new Promise((resolve) => setTimeout(resolve, 450));
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    setIsLoading(false);
  }, []);

  // Optional: Pre-warm audio on the first user interaction proactively using requestIdleCallback
  useEffect(() => {
    const warm = () => {
      // try to create synth in idle time AFTER user has interacted (if available)
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => {
          // don't call Tone.start() here (requires user gesture)
          if (!synthRef.current) {
            synthRef.current = new Tone.Synth({
              oscillator: { type: "sine" },
              envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 },
            }).toDestination();
            // immediately disconnect so it doesn't produce sound; will be ready when Tone.start() is called.
            synthRef.current.disconnect();
          }
        });
      }
    };

    window.addEventListener("pointerdown", warm, { once: true });
    return () => window.removeEventListener("pointerdown", warm);
  }, []);

  return (
    <section className="bg-black text-white py-20 md:py-32" aria-labelledby="recent-work-heading">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center mb-12 space-y-6 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="recent-work-heading" className="text-4xl md:text-5xl font-bold font-space-grotesk">
            Recent work
          </h2>

          <div className="flex-1 mx-6">
            <AnimatedPathLine />
          </div>

          <Link href="/work">
            <Button
              variant="outline"
              className="rounded-full border-white/30 bg-pink-500 text-white group whitespace-nowrap"
              aria-label="View all projects"
            >
              View All Project
              <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Project List */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div role="list" aria-label="Recent projects" className="divide-y divide-neutral-800">
              {displayedProjects.map((project) => (
                <ProjectRow key={project.id} project={project} playSound={playSound} />
              ))}
            </div>
          </motion.div>

          {/* Load More Button */}
          {visibleProjects < projects.length && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="relative bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium group disabled:opacity-50"
                aria-label="Load more projects"
                type="button"
              >
                <span className="flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden />
                      <span>Loading…</span>
                    </>
                  ) : (
                    <>
                      <span>Load More</span>
                      <MoveRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
