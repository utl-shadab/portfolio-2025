"use client"

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tone from 'tone';
import AnimatedPathLine from "../AnimatedPathLine";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

interface ProjectType {
  id: number;
  title: string;
  category: string;
  role: string;
  year: number;
}
const projects: ProjectType[] = [
  {
    id: 1,
    title: "XYLO",
    category: "Frontend Development",
    role: "Freelance with Code Resolution",
    year: 2024,
  },
  {
    id: 2,
    title: "Society Studios",
    category: "Frontend",
    role: "Freelance with Code Resolution",
    year: 2025,
  },
  {
    id: 3,
    title: "Prospect House",
    category: "Frontend Development",
    role: "Freelance",
    year: 2024,
  },
  {
    id: 4,
    title: "Better Angels Ventures",
    category: "Frontend",
    role: "Freelance with Code Resolution",
    year: 2022,
  },
  {
    id: 5,
    title: "Divino Harrogate",
    category: "Frontend Development",
    role: "Freelance",
    year: 2023,
  },
  {
    id: 6,
    title: "A Touch Of Ink",
    category: "Design & Frontend Development",
    role: "Freelance",
    year: 2021,
  },
];

interface ProjectRowProps {
  project: ProjectType;
  playSound: () => void;
}

const ProjectRow = ({ project, playSound }: ProjectRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
          <span className="hidden lg:inline-block">{project.role}</span>
        </div>
      </div>
    </div>
  );
};


export default function InteractiveProjectTable() {
  const synth = useRef<Tone.Synth | null>(null);
  const isAudioReady = useRef(false);
  const lastPlayTime = useRef(0);
  useEffect(() => {
    if (!synth.current) {
      synth.current = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 }
      }).toDestination();
    }

    return () => {

      if (synth.current) {
        synth.current.dispose();
        synth.current = null;
      }
    };
  }, []);

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
          {/* Left: Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">
            Recent work
          </h2>

          {/* Center: Animated line with flex-grow */}
          <div className="flex-1 mx-6">
            <AnimatedPathLine />
          </div>

          {/* Right: Button link */}
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
      </div>
      <div className="container mx-auto px-6 relative">
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
      </div>
    </section>
  );
}
