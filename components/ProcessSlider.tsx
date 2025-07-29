"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { MoveLeft, MoveRight } from 'lucide-react';

// --- Enhanced Data with Descriptions ---
const processStepsData = [
  { 
    title: 'Discovery & Research',
    description: 'We dive deep into your brand, audience, and goals to build a strategic foundation for the project.'
  },
  { 
    title: 'Prototyping & UX',
    description: 'Mapping out user journeys and creating interactive wireframes to define the structure and flow.'
  },
  { 
    title: 'Visual Design (UI)',
    description: 'Crafting a stunning, brand-aligned visual identity that ensures a delightful user experience.'
  },
  { 
    title: 'Development',
    description: 'Bringing the designs to life with clean, efficient, and scalable code using modern technologies.'
  },
  { 
    title: 'Testing & QA',
    description: 'Rigorously testing across devices and browsers to ensure a flawless, bug-free launch.'
  },
  { 
    title: 'Launch & Deploy',
    description: 'Deploying the project to the world and ensuring a smooth transition to a live environment.'
  },
  {
    title: 'Iterate & Grow',
    description: 'Analyzing performance data and user feedback to continuously improve and evolve the product.'
  }
];

// --- Custom Hook for Responsiveness ---
const useVisibleCards = () => {
    const [visibleCards, setVisibleCards] = useState(3);

    const handleResize = useCallback(() => {
        if (window.innerWidth < 768) {
            setVisibleCards(1);
        } else if (window.innerWidth < 1024) {
            setVisibleCards(2);
        } else {
            setVisibleCards(3);
        }
    }, []);

    useEffect(() => {
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return visibleCards;
};


const ProcessSlider = ({ processSteps = processStepsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 const sliderRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const visibleCards = useVisibleCards();

  const maxIndex = processSteps.length - visibleCards;

  useEffect(() => {
    if (sliderRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth;
      const offset = itemWidth + 32;
      gsap.to(sliderRef.current, {
        x: -currentIndex * offset,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }
  }, [currentIndex, visibleCards]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  return (
    <section className="bg-[#F5F3EF] w-full py-20 lg:py-28  antialiased">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-sm font-medium text-neutral-600 uppercase tracking-[0.2em]">
            Our Process
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Step"
              className="disabled:opacity-30 transition-opacity duration-300"
            >
              <MoveLeft className="w-6 h-6 text-neutral-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next Step"
              className="disabled:opacity-30 transition-opacity duration-300"
            >
              <MoveRight className="w-6 h-6 text-neutral-700" />
            </button>
          </div>
        </div>

      
        <div className="overflow-hidden">
          <div ref={sliderRef} className="flex gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={index === 0 ? itemRef : null}
                className="group w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <div className="bg-white/50 p-8 rounded-2xl aspect-[4/3] flex flex-col justify-between h-full transition-all duration-300 ease-in-out">
                    <h3 className="text-3xl md:text-4xl font-medium text-neutral-800 leading-tight pr-10">
                      {step.title}
                    </h3>
                    <div className="flex justify-between items-end">
                       <div className="overflow-hidden">
                         <p className="text-neutral-600 leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                            {step.description}
                         </p>
                       </div>
                       <span className="flex items-center justify-center w-8 h-8 flex-shrink-0 border border-neutral-400 rounded-full text-sm text-neutral-600 ml-4">
                         {index + 1}
                       </span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSlider;
