export interface ServiceImage {
  desktop: string
  tablet: string
  mobile: string
  alt: string
}

export interface Service {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  features: string[]
  icon: string // Path to the icon image
  metaTitle: string
  metaDescription: string
  tags: string[]
  heroImage: ServiceImage
  processSteps?: {
    title: string
    description: string
    image?: string
  }[]
  results?: {
    title: string
    description: string
    metrics?: {
      metric: string
      value: string
      description: string
    }[]
  }
  testimonial?: {
    quote: string
    author: string
    position: string
    company: string
    avatar: string
  }
}
