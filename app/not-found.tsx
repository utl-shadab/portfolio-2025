import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import Play from "@/components/Play"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold font-space-grotesk mb-4 text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. 
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/work">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 bg-transparent"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </Link>
        </div>
        {/* <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <Search className="w-8 h-8 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Need help finding something?</h3>
          <p className="text-gray-400 mb-4">
            If you're looking for a specific project or service, feel free to contact us directly.
          </p>
          <Link href="/contact">
            <Button variant="ghost" className="text-pink-400 hover:text-pink-300">
              Contact Us
            </Button>
          </Link>
        </div> */}
       <Play/>
      </div>
    </div>
  )
}
