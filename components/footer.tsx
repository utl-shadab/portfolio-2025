"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">*</span>
              </div>
              <span className="text-white font-bold text-lg font-space-grotesk">
                Arrow edge<span className="font-normal">studio</span>
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <p className="text-white">
              Punjabi bagh
              <br />
              Delhi, India
            
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <Link
              href="https://www.linkedin.com/company/arrow-edge-studio/"
              className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
            >
              LinkedIn ↗
            </Link>
            <Link
              href="https://x.com/Arrowedgestudio"
              className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
            >
              Twitter ↗
            </Link>
           
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-right">
            <p className="text-gray-400 text-sm">2025 © Arrow Edge Studio</p>
           
          </div>
        </div>

      
      </div>
    </footer>
  )
}
