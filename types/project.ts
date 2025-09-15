export interface ProjectImage {
  desktop: string
  tablet: string
  mobile: string
  alt: string
}

export interface ProjectTechnology {
  name: string
  category: "frontend" | "backend" | "database" | "tools" | "deployment"
  icon?: string
}

export interface ProjectChallenge {
  title: string
  description: string
  solution: string
}

export interface ProjectAchievement {
  metric: string
  value: string
  description: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: "Branding" | "Digital marketing" | "Web design" | "Design & Development" | "Digital agency" | "Web application" | "Dashboard / Web App Design"
  year: string
  client: string
  duration: string
  domain: string
  liveUrl?: string
  githubUrl?: string

  /* Images */
  thumbnailImage: string
  heroImage: ProjectImage
  galleryImages: ProjectImage[]

  /* Content */
  shortDescription: string
  fullDescription: string
  objective: string

  /* Technical details */
  technologies: ProjectTechnology[]
  framework: string[]
  colorTheme: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }

  /* Project details */
  challenges: ProjectChallenge[]
  achievements: ProjectAchievement[]
  keyFeatures: string[]

  /* SEO */
  metaTitle: string
  metaDescription: string
  tags: string[]
  featured: boolean

  /* Optional sections */
  testimonial?: {
    quote: string
    author: string
    position: string
    company: string
    avatar: string
  }

  processSteps?: {
    title: string
    description: string
    image?: string
  }[]

  results?: {
    title: string
    description: string
    metrics?: ProjectAchievement[]
  }
}

export type ProjectCategory = Project["category"]
export type TechnologyCategory = ProjectTechnology["category"]
