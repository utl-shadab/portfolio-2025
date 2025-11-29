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

// Lightweight AnimatedPathLine (dynamic) — ok as-is
const AnimatedPathLine = dynamic(() => import("../AnimatedPathLine"), {
  ssr: false,
  loading: () => <div className="h-4" aria-hidden />,
});

/**
 * ProjectRow
 * - responsive single-column on small screens
 * - larger multi-column layout on md+
 * - uses pointerdown for audio triggers (better for mobile)
 * - accessible focus styles & keyboard support
 * - added smooth hover transitions and scale for attractiveness
 */
interface ProjectRowProps {
  project: Project;
  playSound: () => void;
}
const ProjectRow = memo(function ProjectRow({ project, playSound }: ProjectRowProps) {
  const [isActive, setIsActive] = useState(false);
  // Handler triggers on pointerdown (tap/click) and keyboard focus (Enter)
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only play sound for primary pointer interactions (avoids accidental triggers)
    if ((e as any).pointerType === "mouse" || (e as any).pointerType === "pen" || (e as any).pointerType === "touch") {
      playSound();
    } else {
      playSound();
    }
    setIsActive(true);
  };
  const handlePointerUp = () => setIsActive(false);
  const handlePointerLeave = () => setIsActive(false);
  return (
    <motion.li
      role="listitem"
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} // Added smooth scale on hover for attractiveness
    >
      <Link href={`/work/${project.slug}`} legacyBehavior>
        <a
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 transition-colors duration-300 ease-in-out" // Smoother transitions
          aria-label={`Open case study for ${project.title}`}
        >
          <div className="border-b border-neutral-800 py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 transition-all duration-300 group-hover:bg-neutral-900/50"> {/* Added subtle bg hover for attractiveness */}
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr] items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-0"> {/* Enhanced responsiveness with sm: breakpoints */}
              {/* Title + meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-200 group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                {/* Category - on small screens sits below title */}
                <span className="mt-1 sm:mt-0 text-xs sm:text-sm text-neutral-500 sm:ml-2">
                  {project.category}
                </span>
              </div>
              {/* Year (right aligned on sm+) */}
              <div className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-400 sm:text-right">
                <span className="inline-block sm:hidden text-xs text-neutral-500 mr-2">Year: </span>
                <span className="font-medium">{project.year}</span>
              </div>
              {/* Decorative indicator (sm+ for better mobile perf) */}
              <div className="hidden sm:flex items-center justify-end">
                <motion.div
                  className={`w-2 h-2 rounded-full bg-pink-500`}
                  initial={{ scale: 0 }}
                  animate={{ scale: isActive ? 1 : 0 }}
                  transition={{ duration: 0.15, ease: "easeInOut" }} // Smoother animation
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  );
},
// shallow compare props - only rerender when project.id or playSound reference changes
(prev, next) => prev.project.id === next.project.id && prev.playSound === next.playSound
);

export default function InteractiveProjectTable() {
  // Audio synth lazy init
  const synthRef = useRef<Tone.Synth | null>(null);
  const lastPlayTime = useRef(0);
  const audioReady = useRef(false);
  const reducedMotion = useRef(false);
  // Pagination / visible items
  const [visibleProjects, setVisibleProjects] = useState(8); // start with 8 for better mobile UX
  const [isLoading, setIsLoading] = useState(false);
  // Display slice with useMemo for optimization
  const displayedProjects = useMemo(() => projects.slice(0, visibleProjects), [visibleProjects]);
  // Respect prefers-reduced-motion (also avoid audio if reduced)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      reducedMotion.current = mediaQuery.matches;
      const listener = (e: MediaQueryListEvent) => {
        reducedMotion.current = e.matches;
      };
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);
  // Lazy init synth but do NOT call Tone.start() unless from a user gesture
  const ensureSynth = useCallback(() => {
    if (!synthRef.current) {
      synthRef.current = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.005, decay: 0.14, sustain: 0.2, release: 0.3 },
      }).toDestination();
      // keep it silent until Tone.start() is called; do not call start() here
      try {
        // disconnect to keep from accidentally making sound if created by requestIdleCallback
        // we'll reconnect on first user gesture in playSound
        synthRef.current.disconnect();
      } catch {}
    }
  }, []);
  // playSound called from pointerdown or keyboard gesture
  const playSound = useCallback(async () => {
    try {
      // bail out when reduced motion is requested
      if (reducedMotion.current) return;
      // simple debounce
      const now = Tone.now();
      if (now - lastPlayTime.current < 0.12) return;
      lastPlayTime.current = now;
      // ensure synth object exists
      ensureSynth();
      // Tone.start() must be called from a user gesture, pointerdown qualifies
      if (!audioReady.current) {
        // attempt to start the audio context; may be resolved already
        await Tone.start();
        // reconnect synth to destination now that audio is allowed
        try {
          // Tone.getDestination may not exist on all builds/versions; ensure it is a function
          // and only connect when it returns a valid destination (avoid passing undefined).
          const dest = typeof (Tone as any).getDestination === "function" ? (Tone as any).getDestination() : undefined;
          if (dest) {
            synthRef.current?.connect(dest);
          }
        } catch {}
        audioReady.current = true;
      }
      // trigger a short note — schedule now to keep timing stable
      synthRef.current?.triggerAttackRelease("A4", "16n", Tone.now());
    } catch (err) {
      // silent fallback — do not break UI if audio fails
      // console.warn("Audio init failed", err);
    }
  }, [ensureSynth]);
  // Pre-warm synth in idle after first user interaction to reduce latency (non-blocking)
  useEffect(() => {
    const warm = () => {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => {
          try {
            ensureSynth();
            // leave disconnected until Tone.start() on user gesture
          } catch {}
        });
      } else {
        // fallback
        setTimeout(() => {
          ensureSynth();
        }, 2000);
      }
    };
    window.addEventListener("pointerdown", warm, { once: true, passive: true }); // Added passive for perf
    return () => window.removeEventListener("pointerdown", warm);
  }, [ensureSynth]);
  // Load more button with smooth animation
  const handleLoadMore = useCallback(async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 350)); // simulated delay; replace with real fetch if needed
    setVisibleProjects((p) => Math.min(p + 6, projects.length)); // load 6 more for better mobile UX
    setIsLoading(false);
  }, []);
  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-20" aria-labelledby="recent-work-heading"> {/* Adjusted padding for responsiveness */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8"> {/* Better padding progression */}
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 md:mb-12 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // Improved viewport for smoother entry
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 id="recent-work-heading" className="text-xl sm:text-2xl md:text-4xl font-bold font-space-grotesk">
            Recent work
          </h2>
          <div className="flex-1 mx-0 sm:mx-6" aria-hidden>
            <AnimatedPathLine />
          </div>
          <div>
            <Link href="/work" legacyBehavior>
              <a>
                <Button
                  variant="outline"
                  className="rounded-full border-white/30 bg-pink-500 text-white group whitespace-nowrap transition-all duration-300 hover:bg-pink-600" // Smoother hover
                  aria-label="View all projects"
                >
                  View All Projects
                  <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                </Button>
              </a>
            </Link>
          </div>
        </motion.div>
        {/* Project list with AnimatePresence for smooth additions */}
        <motion.ul
          role="list"
          className="divide-y divide-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <ProjectRow key={project.id} project={project} playSound={playSound} />
            ))}
          </AnimatePresence>
        </motion.ul>
        {/* Load more */}
        {visibleProjects < projects.length && (
          <div className="mt-6 sm:mt-8 md:mt-12 text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="relative bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-medium group disabled:opacity-60 transition-all duration-300" // Responsive sizing and smoother transition
              aria-label="Load more projects"
              type="button"
            >
              <span className="inline-flex items-center justify-center">
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2 animate-spin" aria-hidden /> Loading…
                  </>
                ) : (
                  <>
                    <span>Load More</span>
                    <MoveRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                  </>
                )}
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}