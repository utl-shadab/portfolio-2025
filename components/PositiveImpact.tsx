"use client";

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// --- Data for the component ---
// This structure makes it easy to add or modify content.
const impactData = [
 {
    title: 'Impactful work',
    description: `We leverage our diverse, long-standing international partnerships to create a positive impact on society and the environment. Through sustainability and inclusivity training, we infuse our projects with knowledge that raises awareness and inspires substantial change.`,
    color: '#FFC700', // Yellow
  },
  {
    title: 'Environment',
    description: 'Our commitment to the environment involves using sustainable materials, reducing waste, and designing energy-efficient buildings that harmonize with their natural surroundings, ensuring a lighter footprint on our planet.',
    color: '#4CAF50', // Green
  },
  {
    title: 'Community',
    description: 'We believe in building more than just structures; we build communities. Our projects often include public spaces, local artisan collaborations, and initiatives that foster social interaction and local economic growth.',
    color: '#2196F3', // Blue
  },
  {
    title: 'Diversity, Equity, Inclusion & Belonging',
    description: 'Our studio is a microcosm of the world we want to see. We champion diversity in our team, ensure equity in our practices, and create inclusive spaces where everyone feels a sense of belonging and is empowered to thrive.',
    color: '#E91E63', // Pink
  },
];

const PositiveImpact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };
  
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLDivElement>('.impact-card', containerRef.current);

    cards.forEach((card, index) => {
      const content = card.querySelector('.impact-content');
      const title = card.querySelector('.impact-title');
      const isActive = index === activeIndex;

      gsap.to(card, {
        backgroundColor: isActive ? impactData[index].color : '#111111',
        duration: 0.5,
        ease: 'power3.inOut',
      });
      
      gsap.to(title, {
        color: isActive ? '#000000' : '#FFFFFF',
        duration: 0.5,
        ease: 'power3.inOut',
      });

      gsap.to(content, {
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        duration: 0.5,
        ease: 'power3.out',
        delay: isActive ? 0.1 : 0,
      });
    });

  }, [activeIndex]);

  return (
    <section className="bg-black text-white w-full py-20 lg:py-28  antialiased">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] mb-12">
          Positive Impact
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-800">
          {impactData.map((item, index) => (
            <div
              key={item.title}
              onMouseEnter={() => handleMouseEnter(index)}
              className="impact-card relative p-8 border-b border-r border-neutral-800 cursor-pointer overflow-hidden"
              style={{ backgroundColor: '#111111' }} 
            >
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[350px] md:min-h-[450px]">
                {/* Title */}
                <h3 className="impact-title text-2xl md:text-3xl font-medium text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <div className="impact-content opacity-0">
                  <p 
                    className="text-black text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositiveImpact;
