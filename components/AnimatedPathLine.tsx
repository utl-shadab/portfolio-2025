"use client";

import { useRef, useEffect } from "react";
import * as Tone from "tone";

export default function AnimatedPathLine() {
  const pathRef = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  const synthRef = useRef<Tone.Synth | null>(null);
  const lastToneTime = useRef<number>(0);

  useEffect(() => {
    setPath(progress);

    // Initialize Synth only once
    synthRef.current = new Tone.Synth({
      oscillator: {
        type: "sine",
      },
    }).toDestination();
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    if (pathRef.current) {
      pathRef.current.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
    }
  };

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const manageMouseEnter = async () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }

    // Ensure Tone.js context is resumed on interaction (required in most browsers)
    await Tone.start();
  };

  const playRandomTone = () => {
    const now = Tone.now();
    const toneGap = 0.1; // play new tone every 100ms max

    if (now - lastToneTime.current >= toneGap) {
      const note = getRandomNote();
      synthRef.current?.triggerAttackRelease(note, "8n");
      lastToneTime.current = now;
    }
  };

  const getRandomNote = () => {
    const notes = ["C4", "D4", "E4", "G4", "A4", "B4", "C5"];
    return notes[Math.floor(Math.random() * notes.length)];
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    if (!pathRef.current) return;
    const pathBound = pathRef.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
    playRandomTone();
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="relative w-full h-[1px] mb-5">
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="relative z-[1] w-full h-10 -top-[20px] hover:h-[500px] hover:-top-[250px] transition-all duration-300 ease-in-out"
      ></div>
      <svg className="absolute top-[-250px] w-full h-[500px]">
        <path ref={pathRef} className="stroke-white stroke-[1px] fill-none" />
      </svg>
    </div>
  );
}
