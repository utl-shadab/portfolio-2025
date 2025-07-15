"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            <Link href="/" className="text-white font-bold text-lg font-space-grotesk">
              Baker<span className="font-normal">studio</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-pink-400 transition-colors relative group ${
                  pathname === item.href ? "text-pink-400" : ""
                }`}
                data-cursor-hover
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-medium transition-all duration-300"
                data-cursor-hover
              >
                Let's talk
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10 rounded-full w-12 h-12"
              data-cursor-hover
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="text-center mb-8">
                <span className="text-white font-bold text-2xl font-space-grotesk">
                  Baker<span className="font-normal">studio</span>
                </span>
              </div>

              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-2xl hover:text-pink-400 transition-colors font-space-grotesk ${
                        pathname === item.href ? "text-pink-400" : "text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-cursor-hover
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-8 mt-8">
                <div className="flex space-x-4 text-sm text-gray-400">
                  <span className="border-b border-white/40 text-white">NL</span>
                  <span>EN</span>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <a
                  href="#"
                  className="block text-white hover:text-pink-400 transition-colors underline"
                  data-cursor-hover
                >
                  Instagram ↗
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-pink-400 transition-colors underline"
                  data-cursor-hover
                >
                  LinkedIn ↗
                </a>
              </div>

              <Link href="/contact">
                <Button
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium mt-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-cursor-hover
                >
                  Let's talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
