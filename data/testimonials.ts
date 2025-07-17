export type Testimonial = {
  id: number
  name: string
  title: string
  content: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "D. van Zutphen",
    title: "OWNER OF ZUTPHEN",
    content:
      "Arrow Edge Studio delivered an outstanding website. It perfectly reflects who we are: professional and reliable. They thought along with us and created a beautiful end result that is also easy to manage.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GOtrTp4CRYBVwOc5AL3rzzlFKhZR5N.png ",
  },
  {
    id: 2,
    name: "Jan Bakker",
    title: "CEO OF STAALBARON",
    content:
      "The collaboration with Arrow Edge Studio was excellent. They helped us with a complete rebranding and a new website. The result exceeded our expectations and has led to an increase in clients.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "MARKETING DIRECTOR",
    content:
      "Arrow Edge Studio's expertise in digital marketing has taken our business to the next level. Their strategic approach and creative solutions have significantly improved our online presence.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]