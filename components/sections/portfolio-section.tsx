"use client";

import { useEffect, useRef, memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tone from "tone";
import AnimatedPathLine from "../AnimatedPathLine";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight, Loader2 } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/types/project";

interface ProjectRowProps {
  project: Project;
  playSound: () => void;
}


const ProjectRow = memo(function ProjectRow({ project, playSound }: ProjectRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/work/${project.slug}`}>
      <div
        onMouseEnter={() => {
          playSound();
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
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
                  transition={{ duration: 0.2 }}
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
});

export default function InteractiveProjectTable() {
  const synth = useRef<Tone.Synth | null>(null);
  const isAudioReady = useRef(false);
  const lastPlayTime = useRef(0);
const [visibleProjects, setVisibleProjects] = useState(10);
 const [isLoading, setIsLoading] = useState(false);
  // Initialize Tone.js synth
  useEffect(() => {
    if (!synth.current) {
      synth.current = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 },
      }).toDestination();
    }

    return () => {
      if (synth.current) {
        synth.current.dispose();
        synth.current = null;
      }
    };
  }, []);

  // Debounced sound playback
  const playSound = async () => {
    const now = Tone.now();
    if (now - lastPlayTime.current < 0.1) return;
    lastPlayTime.current = now;

    if (!isAudioReady.current) {
      await Tone.start();
      isAudioReady.current = true;
    }

    if (synth.current) {
      synth.current.triggerAttackRelease("A4", "8n", now);
    }
  };
const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    // Simulate loading delay (e.g., fetching more data)
    await new Promise((resolve) => setTimeout(resolve, 500));
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
    setIsLoading(false);
  }, []);

  // Memoized visible projects to prevent unnecessary slicing
  const displayedProjects = useMemo(
    () => projects.slice(0, visibleProjects),
    [visibleProjects]
  );

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center mb-12 space-y-6 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">
            Recent work
          </h2>
          <div className="flex-1 mx-6">
            <AnimatedPathLine />
          </div>
          <Link href="/work">
            <Button
              variant="outline"
              className="rounded-full border-white/30 hover:bg-white/10 group whitespace-nowrap"
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
            {projects.map((project) => (
              <ProjectRow
                key={project.id}
                project={project}
                playSound={playSound}
              />
            ))}
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
              >
                <span className="flex items-center">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Load More
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