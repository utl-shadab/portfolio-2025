"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Heart, Bookmark, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { blogPosts } from "@/lib/blog-data"

gsap.registerPlugin(ScrollTrigger)

interface BlogPostDetailProps {
  post: BlogPost
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const router = useRouter()
  const pathname = usePathname()
  const contentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const isNavigating = useRef(false)
  const navigationTimeout = useRef<NodeJS.Timeout | null>(null)

  // Get background color based on post slug
  const getBackgroundColor = useCallback(() => {
    const vibrantColors = [
      'from-gray-950 via-gray-900 to-black',
      'from-slate-950 via-slate-900 to-slate-800',
      'from-indigo-950 via-purple-900 to-indigo-950',
      'from-blue-950 via-blue-900 to-sky-900',
      'from-emerald-950 via-teal-900 to-cyan-950',
      'from-red-950 via-rose-900 to-pink-950',
      'from-violet-950 via-indigo-900 to-purple-950',
      'from-stone-950 via-neutral-900 to-zinc-900',
      'from-black via-gray-900 to-neutral-950'
    ]

    const hash = post.slug.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)

    return vibrantColors[Math.abs(hash) % vibrantColors.length]
  }, [post.slug])

  // Handle navigation to next or previous post
  const navigateToPost = useCallback((direction: 'next' | 'prev') => {
    if (isNavigating.current) return

    isNavigating.current = true

    // Calculate target post
    const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug)
    const targetIndex = direction === 'next' 
      ? (currentIndex + 1) % blogPosts.length 
      : (currentIndex - 1 + blogPosts.length) % blogPosts.length
    const targetPost = blogPosts[targetIndex]

    // Smooth exit animation
    const exitTl = gsap.timeline({
      onComplete: () => {
        // Clear any existing timeout
        if (navigationTimeout.current) {
          clearTimeout(navigationTimeout.current)
        }

        // Force scroll to top before navigation
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Navigate to target post
        router.push(`/blog/${targetPost.slug}`)
        
        // Reset navigation state after a delay
        navigationTimeout.current = setTimeout(() => {
          isNavigating.current = false
        }, 1000)
      }
    })

    exitTl
      .to(".blog-content-item", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      .to(wrapperRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.inOut"
      }, 0.1)
  }, [post.slug, router])

  // Main animation effect and progress bar
  useEffect(() => {
    // Reset navigation state
    isNavigating.current = false

    // Force scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Clean up all existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(wrapperRef.current, { opacity: 0, y: 20 })
      gsap.set(".blog-content-item", { opacity: 0, y: 30 })

      // Entry animation
      const entryTl = gsap.timeline()
      entryTl
        .to(wrapperRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        })
        .to(".blog-content-item", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, 0.2)

      // Progress bar trigger
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (progressRef.current) {
            gsap.to(progressRef.current, {
              scaleX: self.progress,
              duration: 0.1,
              ease: "none"
            })
          }
        }
      })
    }, wrapperRef)

    // Cleanup
    return () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }
      ctx.revert()
    }
  }, [post.slug])

  // Handle browser navigation
  useEffect(() => {
    const handlePopState = () => {
      isNavigating.current = false
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const backgroundGradient = getBackgroundColor()

  const renderContent = (contentBlock: BlogPost["content"][0], index: number) => {
    switch (contentBlock.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 blog-content-item text-white leading-relaxed">
            {contentBlock.value}
          </p>
        )
      case "heading":
        const level = Math.min(Math.max(contentBlock.level || 2, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6
        const headingComponents = {
          1: 'h1',
          2: 'h2',
          3: 'h3',
          4: 'h4',
          5: 'h5',
          6: 'h6',
        } as const
        const HeadingTag = headingComponents[level]
        const headingClasses = {
          1: 'text-4xl font-bold mb-6 mt-12',
          2: 'text-3xl font-bold mb-4 mt-10',
          3: 'text-2xl font-bold mb-4 mt-8',
          4: 'text-xl font-semibold mb-3 mt-6',
          5: 'text-lg font-semibold mb-3 mt-6',
          6: 'text-base font-semibold mb-2 mt-4',
        }
        return (
          <HeadingTag key={index} className={`${headingClasses[level]} blog-content-item text-white`}>
            {contentBlock.value}
          </HeadingTag>
        )
      case "list":
        return (
          <ul key={index} className="list-disc list-inside space-y-3 mb-8 blog-content-item text-gray-300">
            {(contentBlock.value as string[]).map((item, i) => (
              <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={post.slug}
        className={`min-h-screen bg-gradient-to-br ${backgroundGradient} text-white relative overflow-hidden`}
        ref={wrapperRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/3 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className={`relative z-10 bg-gradient-to-br ${backgroundGradient} backdrop-blur-sm pt-32 pb-20`}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              className="text-sm text-gray-400 mb-6 blog-content-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/blog" className="hover:text-gray-300 text-white transition-colors duration-200">
                Blog
              </Link>
              <span className="mx-2 text-white">•</span>
              <span className="text-white">{post.category}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-8 leading-tight blog-content-item text-white">
              {post.title}
            </h1>

            <div className="flex items-center text-white mb-12 blog-content-item">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt={post.author}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-sm text-white opacity-80">
                  {post.date} • {post.readTime}
                </div>
              </div>
            </div>

            <motion.div
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl blog-content-item"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} opacity-20 rounded-2xl`} />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12">
              <article ref={contentRef} className="prose prose-lg max-w-none">
                {post.content.map((block, index) => renderContent(block, index))}

                <div className="blog-content-item mt-20 pt-8 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => navigateToPost('prev')}
                      className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isNavigating.current}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Previous Article</span>
                    </button>
                    <button
                      onClick={() => navigateToPost('next')}
                      className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isNavigating.current}
                    >
                      <span>Next Article</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>

              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="flex flex-col space-y-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                    {[
                      { Icon: Heart, label: "Like", color: "hover:text-red-400" },
                      { Icon: Bookmark, label: "Save", color: "hover:text-green-400" },
                      { Icon: Share2, label: "Share", color: "hover:text-purple-400" },
                    ].map(({ Icon, label, color }, i) => (
                      <button
                        key={i}
                        title={label}
                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 ${color} hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                    <button
                      onClick={() => navigateToPost('prev')}
                      title="Previous Article"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-blue-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isNavigating.current}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigateToPost('next')}
                      title="Next Article"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-blue-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isNavigating.current}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                    <div className="relative w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                      <div
                        ref={progressRef}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-sm"
                        style={{
                          transformOrigin: 'left center',
                          transform: 'scaleX(0)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}