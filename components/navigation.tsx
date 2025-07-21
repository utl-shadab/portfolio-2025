"use client"

import { useState, useRef } from "react"
import clsx from "clsx";
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image";

// Define the structure for the navigation items
const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
]

// --- ANIMATION VARIANTS (Corrected & Updated) ---

const menuVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    pointerEvents: "none",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    pointerEvents: "none",
    transition: {
      duration: 0.3,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const navLinkVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3 + index * 0.06
    }
  }),
  exit: { opacity: 0, y: 15 },
}

const Logo = ({ className = "text-black" }) => (
  <Link href="/" data-cursor-hover className={className}>
    <Image
      src="/LogoArrow.png"
      alt=" LogoArrow Logo"
      width={100}
      height={40}
      priority
    />
  </Link>
);

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" />

          <div className="flex items-center gap-4">
            <Button
              aria-label="toggle"
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              data-cursor-hover
              className={clsx(
                "rounded-full w-12 h-12 relative z-[50] transition-all duration-300",
                isMobileMenuOpen
                  ? "bg-black text-white hover:bg-pink-500 hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.nav>


      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-4 right-4 z-40 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200"
          >


            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <div className="flex flex-col items-start space-y-2 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={navLinkVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Link
                      href={item.href}
                      className={`block text-3xl font-light text-black hover:text-neutral-500 transition-colors py-2 ${pathname === item.href ? "font-medium" : ""}`}
                      onClick={toggleMenu}
                      data-cursor-hover
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <div className="border-t border-neutral-200 pt-6 flex items-center space-x-8">
                  {socialLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-neutral-600 transition-colors flex items-center group text-sm"
                      data-cursor-hover
                    >
                      {link.name}
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}