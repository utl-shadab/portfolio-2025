"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ArrowRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// --- NEW DATA STRUCTURE FOR PORTFOLIO PROJECTS ---
const projectCategories = ["All", "UI/UX", "Development", "Branding", "3D Animation"]

const projects = [
  {
    id: "munity",
    title: "Munity",
    categories: ["UI/UX", "Development", "3D Animation"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=Munity", // Replace with your actual image path
    link: "#",
  },
  {
    id: "kong",
    title: "Kong",
    categories: ["UI/UX", "Development", "3D Animation"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=Kong", // Replace with your actual image path
    link: "#",
  },
  {
    id: "branding-project",
    title: "Brand Identity",
    categories: ["Branding"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=Branding", // Replace with your actual image path
    link: "#",
  },
  {
    id: "dev-project",
    title: "Web App",
    categories: ["Development"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=Web+App", // Replace with your actual image path
    link: "#",
  },
    {
    id: "another-3d",
    title: "3D Showcase",
    categories: ["3D Animation"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=3D+Showcase", // Replace with your actual image path
    link: "#",
  },
  {
    id: "ux-case-study",
    title: "UX Case Study",
    categories: ["UI/UX"],
    imageUrl: "https://placehold.co/600x400/0a0a0a/ffffff?text=UX+Study", // Replace with your actual image path
    link: "#",
  },
]

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] },
  },
};

// --- COMPONENT ---
export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Memoize the filtered projects to avoid re-calculation on every render
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects
    }
    return projects.filter((project) =>
      project.categories.includes(activeCategory)
    )
  }, [activeCategory])

  return (
    <section id="work" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 md:mb-0">
            Our Craft, Your Expression.
          </h2>
          <Button variant="outline" className="rounded-full border-white/30 hover:bg-white/10 group">
            View All
            <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full"
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 bg-orange-500 rounded-full"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="group"
              >
                <Link href={project.link}>
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {project.categories.join(" / ")}
                    </p>
                    <h3 className="text-xl font-medium flex items-center group-hover:text-orange-500 transition-colors">
                      {project.title}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
