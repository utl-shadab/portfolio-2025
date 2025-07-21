import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl font-bold font-space-grotesk mb-4 text-transparent bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">Service Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Sorry, we couldn't find the service you're looking for. It may have been moved, renamed, or doesn't exist.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white rounded-full px-8 py-4 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 bg-transparent"
            >
              Go Home
            </Button>
          </Link>
        </div>
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <Search className="w-8 h-8 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Looking for something specific?</h3>
          <p className="text-gray-400 mb-4">
            Check out our services or get in touch if you need help finding a particular solution.
          </p>
          <Link href="/contact">
            <Button variant="ghost" className="text-pink-400 hover:text-pink-300">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
