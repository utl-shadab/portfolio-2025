"use client"

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
                Baker<span className="font-normal">studio</span>
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <p className="text-white">
              Plantsoen 23
              <br />
              1741EM Schagen
              <br />
              Nederland
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <a
              href="#"
              className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
              data-cursor-hover
            >
              Instagram ↗
            </a>
            <a
              href="#"
              className="block text-white hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
              data-cursor-hover
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-right">
            <p className="text-gray-400 text-sm">2025 © BAKER STUDIO</p>
            <p className="text-gray-400 text-sm">CREATED BY DOTLINECODE.COM</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">Heb je een vraag of project in gedachte?</p>
            <a
              href="mailto:hello@bakerstudio.com"
              className="text-white font-bold text-xl hover:text-pink-400 transition-colors underline decoration-2 underline-offset-4"
              data-cursor-hover
            >
              hello@bakerstudio.com
            </a>
          </div>

          <div className="text-right">
            <p className="text-gray-400 text-sm">Laat je emailadres achter en ik neem snel contact op.</p>
            <div className="flex space-x-4 mt-2">
              <input
                type="email"
                placeholder="Company name"
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2 rounded-full focus:border-pink-400 focus:outline-none"
                data-cursor-hover
              />
              <input
                type="email"
                placeholder="E-mail"
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2 rounded-full focus:border-pink-400 focus:outline-none"
                data-cursor-hover
              />
              <button
                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
                data-cursor-hover
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
