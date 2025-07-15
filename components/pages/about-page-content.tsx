"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function AboutPageContent() {
  const sectionRef = useRef<HTMLElement>(null)

  const teamMembers = [
    {
      name: "Jan Bakker",
      role: "Founder & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 10 years of experience in digital design, Jan leads our creative vision and strategy.",
    },
    {
      name: "Lucas Keizer",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Lucas brings technical excellence to every project with his expertise in modern web technologies.",
    },
    {
      name: "Sophia Nowak",
      role: "Digital Marketing Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia drives results through data-driven marketing strategies and creative campaigns.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-item",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-32">
        <motion.div
          className="about-item text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-8 leading-tight">
            Baker studio
            <br />
            <span className="text-4xl md:text-5xl">Est 2024</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Baker Studio is ontstaan met een duidelijke missie: marktvisionairs vertalen naar digitale ervaringen die{" "}
            <span className="text-pink-500">de lat hoger leggen</span>.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="about-item">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-HKBviP6ADWIfLh1m1hu0ccO68iayvm.jpeg"
                alt="Baker Studio Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div className="about-item space-y-8">
            <div>
              <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">OUR STORY</span>
              <h2 className="text-4xl font-bold font-space-grotesk mt-4 mb-6">
                Baker Studio is ontstaan met een duidelijke missie: marktvisionairs vertalen naar digitale ervaringen
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Gespecialiseerd door de dynamiek van het ontwerp en bouw-cyclus die de digitale wereld kenmerkt, hebben
                wij ons gevestigd als een studio die niet alleen meedenkt, maar ook daadwerkelijk meewerkt aan het
                realiseren van jouw visie.
              </p>
              <p>
                Onze aanpak kent handen in de aarde-mentaliteit waarin we niet alleen adviseren, maar ook daadwerkelijk
                meewerken aan het realiseren van jouw visie. We geloven in partnerships waarin we samen bouwen aan iets
                bijzonders.
              </p>
              <p>
                Elke opdracht is voor ons een kans om grenzen te verleggen. Van conceptualisering tot realisatie, wij
                begeleiden je door het hele proces heen. Onze expertise ligt in het vertalen van complexe ideeën naar
                eenvoudige, krachtige digitale oplossingen.
              </p>
            </div>

            <motion.button
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              data-cursor-hover
            >
              Read more
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 mb-32">
        <motion.div className="about-item text-center mb-16">
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">OUR TEAM</span>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mt-4 mb-8">Meet the team</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div key={member.name} className="about-item group" whileHover={{ y: -10 }} data-cursor-hover>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk mb-2 text-white">{member.name}</h3>
                <p className="text-pink-400 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6">
        <motion.div className="about-item text-center mb-16">
          <span className="text-sm text-gray-400 font-space-grotesk tracking-wider uppercase">OUR VALUES</span>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mt-4 mb-8">What drives us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We push boundaries and explore new possibilities in every project.",
            },
            {
              title: "Quality",
              description: "Excellence is not negotiable. We deliver nothing but the best.",
            },
            {
              title: "Partnership",
              description: "We work alongside our clients as true partners in success.",
            },
            {
              title: "Creativity",
              description: "Original thinking and creative solutions are at our core.",
            },
            {
              title: "Results",
              description: "We measure success by the impact we create for our clients.",
            },
            {
              title: "Growth",
              description: "Continuous learning and improvement drive everything we do.",
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="about-item bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05 }}
              data-cursor-hover
            >
              <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white group-hover:text-pink-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
