import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    slug: "dust-brand-identity",
    title: "DUST",
    category: "Branding",
    year: "2024",
    client: "DUST Technologies",
    duration: "3 months",
    domain: "Technology",
    liveUrl: "https://dust-tech.com",
    githubUrl: "https://github.com/dust-project",

    thumbnailImage: "/public/projects/dust/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/dust/hero-desktop.png",
      tablet: "/public/projects/dust/hero-tablet.png",
      mobile: "/public/projects/dust/hero-mobile.png",
      alt: "DUST brand identity showcase",
    },
    galleryImages: [
      {
        desktop: "/public/projects/dust/gallery-1-desktop.png",
        tablet: "/public/projects/dust/gallery-1-tablet.png",
        mobile: "/public/projects/dust/gallery-1-mobile.png",
        alt: "DUST logo variations",
      },
      {
        desktop: "/public/projects/dust/gallery-2-desktop.png",
        tablet: "/public/projects/dust/gallery-2-tablet.png",
        mobile: "/public/projects/dust/gallery-2-mobile.png",
        alt: "DUST brand applications",
      },
    ],

    shortDescription: "Complete brand identity and digital presence for a cutting-edge tech startup.",
    fullDescription:
      "DUST Technologies approached us to create a comprehensive brand identity that would position them as innovative leaders in the AI automation space. The project encompassed everything from logo design to digital asset creation, establishing a cohesive visual language that resonates with their target audience of enterprise clients and tech enthusiasts.",
    objective:
      "Create a modern, trustworthy brand identity that communicates innovation while maintaining professional credibility in the B2B tech sector.",

    technologies: [
      { name: "Adobe Illustrator", category: "tools", icon: "/public/icons/illustrator.png" },
      { name: "Adobe Photoshop", category: "tools", icon: "/public/icons/photoshop.png" },
      { name: "Figma", category: "tools", icon: "/public/icons/figma.png" },
      { name: "After Effects", category: "tools", icon: "/public/icons/after-effects.png" },
    ],
    framework: ["Brand Guidelines", "Logo System", "Digital Assets", "Print Materials"],
    colorTheme: {
      primary: "#6366F1",
      secondary: "#EC4899",
      accent: "#06B6D4",
      background: "#0F172A",
      text: "#F1F5F9",
    },

    challenges: [
      {
        title: "Market Differentiation",
        description:
          "The AI/tech space is saturated with similar-looking brands using predictable color schemes and typography.",
        solution:
          "We developed a unique visual language combining organic shapes with technical precision, using an unexpected color palette that stands out while remaining professional.",
      },
      {
        title: "Scalability Requirements",
        description:
          "The brand needed to work across multiple touchpoints from business cards to large-scale digital displays.",
        solution:
          "Created a modular logo system with multiple variations and established clear guidelines for usage across different mediums and sizes.",
      },
    ],

    achievements: [
      { metric: "Brand Recognition", value: "+250%", description: "Increase in brand recall among target audience" },
      { metric: "Engagement Rate", value: "+180%", description: "Improvement in social media engagement" },
      { metric: "Lead Quality", value: "+95%", description: "Increase in qualified leads from brand touchpoints" },
    ],

    keyFeatures: [
      "Comprehensive logo system with 8+ variations",
      "Complete brand guideline documentation",
      "Digital asset library (social media templates, presentations)",
      "Print collateral design (business cards, brochures)",
      "Brand voice and tone guidelines",
      "Implementation roadmap and training materials",
    ],

    metaTitle: "DUST Brand Identity - Complete Rebranding Project | Arrow Edge Studio",
    metaDescription:
      "Discover how we transformed DUST Technologies with a complete brand identity redesign, increasing brand recognition by 250% and lead quality by 95%.",
    tags: ["Brand Identity", "Logo Design", "Digital Assets", "B2B Branding"],
    featured: true,

    testimonial: {
      quote:
        "Arrow Edge Studio didn't just design a logo – they crafted our entire brand story. The new identity has transformed how our clients perceive us and significantly improved our market positioning.",
      author: "Sarah Chen",
      position: "CEO & Founder",
      company: "DUST Technologies",
      avatar: "/public/testimonials/sarah-chen.png",
    },

    processSteps: [
      {
        title: "Discovery & Research",
        description:
          "Deep dive into company culture, target audience, and competitive landscape to establish brand foundations.",
        image: "/public/process/discovery.png",
      },
      {
        title: "Concept Development",
        description:
          "Exploring multiple creative directions through sketching, mood boards, and initial digital concepts.",
        image: "/public/process/concept.png",
      },
      {
        title: "Design Refinement",
        description:
          "Iterating on selected concepts, testing across applications, and refining based on stakeholder feedback.",
        image: "/public/process/refinement.png",
      },
      {
        title: "Brand Guidelines",
        description: "Creating comprehensive documentation and asset libraries for consistent brand implementation.",
        image: "/public/process/guidelines.png",
      },
    ],

    results: {
      title: "Measurable Impact",
      description:
        "The new brand identity delivered significant improvements across all key metrics, positioning DUST as a premium player in the AI automation space.",
      metrics: [
        { metric: "Website Conversion", value: "+67%", description: "Improvement in visitor-to-lead conversion" },
        { metric: "Brand Valuation", value: "+$2.1M", description: "Estimated increase in company valuation" },
        { metric: "Employee Pride", value: "94%", description: "Team members proud to represent the brand" },
      ],
    },
  },
  {
    id: 2,
    slug: "staalbaron-ecommerce",
    title: "StaalBaron",
    category: "Web design",
    year: "2024",
    client: "StaalBaron Industries",
    duration: "4 months",
    domain: "Industrial Equipment",
    liveUrl: "https://staalbaron.nl",

    thumbnailImage: "/public/projects/staalbaron/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/staalbaron/hero-desktop.png",
      tablet: "/public/projects/staalbaron/hero-tablet.png",
      mobile: "/public/projects/staalbaron/hero-mobile.png",
      alt: "StaalBaron e-commerce platform",
    },
    galleryImages: [
      {
        desktop: "/public/projects/staalbaron/gallery-1-desktop.png",
        tablet: "/public/projects/staalbaron/gallery-1-tablet.png",
        mobile: "/public/projects/staalbaron/gallery-1-mobile.png",
        alt: "Product catalog interface",
      },
      {
        desktop: "/public/projects/staalbaron/gallery-2-desktop.png",
        tablet: "/public/projects/staalbaron/gallery-2-tablet.png",
        mobile: "/public/projects/staalbaron/gallery-2-mobile.png",
        alt: "Mobile shopping experience",
      },
    ],

    shortDescription: "Modern e-commerce platform with custom functionality and seamless user experience.",
    fullDescription:
      "StaalBaron needed a complete digital transformation to compete in the modern industrial equipment market. We built a comprehensive e-commerce solution that handles complex B2B transactions, custom product configurations, and integrates with their existing ERP systems.",
    objective:
      "Develop a user-friendly e-commerce platform that simplifies complex industrial equipment purchasing while maintaining the technical depth B2B customers require.",

    technologies: [
      { name: "Next.js", category: "frontend", icon: "/public/icons/nextjs.png" },
      { name: "TypeScript", category: "frontend", icon: "/public/icons/typescript.png" },
      { name: "Node.js", category: "backend", icon: "/public/icons/nodejs.png" },
      { name: "PostgreSQL", category: "database", icon: "/public/icons/postgresql.png" },
      { name: "Stripe", category: "tools", icon: "/public/icons/stripe.png" },
      { name: "Docker", category: "deployment", icon: "/public/icons/docker.png" },
    ],
    framework: ["Next.js", "Tailwind CSS", "Prisma ORM", "NextAuth.js"],
    colorTheme: {
      primary: "#1E40AF",
      secondary: "#F59E0B",
      accent: "#059669",
      background: "#F9FAFB",
      text: "#1F2937",
    },

    challenges: [
      {
        title: "Complex Product Configurations",
        description:
          "Industrial equipment often requires custom specifications and configurations that traditional e-commerce platforms can't handle.",
        solution:
          "Built a dynamic product configurator that guides customers through complex specification choices while providing real-time pricing and availability.",
      },
      {
        title: "ERP Integration",
        description:
          "Seamless integration with existing inventory and order management systems was critical for operational efficiency.",
        solution:
          "Developed custom API middleware that synchronizes product data, inventory levels, and order information in real-time with their SAP system.",
      },
    ],

    achievements: [
      { metric: "Online Sales", value: "+320%", description: "Increase in online revenue within 6 months" },
      { metric: "Order Processing", value: "-75%", description: "Reduction in manual order processing time" },
      { metric: "Customer Satisfaction", value: "4.8/5", description: "Average customer rating for the platform" },
    ],

    keyFeatures: [
      "Advanced product search and filtering",
      "Custom product configurator",
      "B2B pricing and quote management",
      "Multi-language support (Dutch, English, German)",
      "Mobile-responsive design",
      "Real-time inventory integration",
      "Automated order processing",
      "Customer portal with order history",
    ],

    metaTitle: "StaalBaron E-commerce Platform - Custom B2B Solution | Arrow Edge Studio",
    metaDescription:
      "See how we built a modern e-commerce platform for StaalBaron that increased online sales by 320% and reduced order processing time by 75%.",
    tags: ["E-commerce", "Custom Development", "UX/UI", "B2B Platform"],
    featured: true,

    testimonial: {
      quote:
        "The new platform has revolutionized our business. Our customers love the ease of use, and we've seen tremendous growth in online sales. The technical execution was flawless.",
      author: "Mark van der Berg",
      position: "Managing Director",
      company: "StaalBaron Industries",
      avatar: "/public/testimonials/mark-vandenberg.png",
    },

    processSteps: [
      {
        title: "Requirements Analysis",
        description:
          "Comprehensive analysis of business processes, user needs, and technical requirements for B2B e-commerce.",
        image: "/public/process/requirements.png",
      },
      {
        title: "UX/UI Design",
        description:
          "Creating intuitive interfaces that simplify complex industrial product selection and purchasing processes.",
        image: "/public/process/ux-design.png",
      },
      {
        title: "Development & Integration",
        description: "Building the platform with modern technologies and integrating with existing business systems.",
        image: "/public/process/development.png",
      },
      {
        title: "Testing & Launch",
        description: "Comprehensive testing across devices and scenarios, followed by phased rollout and training.",
        image: "/public/process/testing.png",
      },
    ],

    results: {
      title: "Digital Transformation Success",
      description:
        "The new e-commerce platform positioned StaalBaron as a digital leader in their industry, delivering measurable business growth.",
      metrics: [
        { metric: "Mobile Traffic", value: "+185%", description: "Increase in mobile users" },
        { metric: "Cart Abandonment", value: "-45%", description: "Reduction in abandoned purchases" },
        { metric: "Support Tickets", value: "-60%", description: "Fewer customer service inquiries" },
      ],
    },
  },
  {
    id: 3,
    slug: "van-zutphen-marketing",
    title: "Van Zutphen",
    category: "Digital marketing",
    year: "2024",
    client: "Van Zutphen Group",
    duration: "5 months",
    domain: "Construction",
    liveUrl: "https://vanzutphen.nl",
    thumbnailImage: "/public/projects/van-zutphen/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/van-zutphen/hero-desktop.png",
      tablet: "/public/projects/van-zutphen/hero-tablet.png",
      mobile: "/public/projects/van-zutphen/hero-mobile.png",
      alt: "Van Zutphen digital marketing campaign showcase",
    },
    galleryImages: [],
    shortDescription: "Comprehensive digital marketing campaign that increased online presence by 300%.",
    fullDescription:
      "Van Zutphen Group, a leading construction company, sought to enhance their digital footprint and generate more qualified leads. We devised and executed a multi-faceted digital marketing strategy encompassing SEO, social media, and content marketing, resulting in significant growth in online visibility and lead generation.",
    objective:
      "Increase online presence and lead generation through a targeted digital marketing strategy for the construction sector.",
    technologies: [
      { name: "Google Analytics", category: "tools", icon: "/public/icons/google-analytics.png" },
      { name: "Google Ads", category: "tools", icon: "/public/icons/google-ads.png" },
      { name: "Meta Ads", category: "tools", icon: "/public/icons/meta-ads.png" },
      { name: "SEMrush", category: "tools", icon: "/public/icons/semrush.png" },
    ],
    framework: ["SEO Strategy", "Social Media Management", "Content Marketing", "Paid Advertising"],
    colorTheme: {
      primary: "#10B981",
      secondary: "#EF4444",
      accent: "#3B82F6",
      background: "#0F172A",
      text: "#F1F5F9",
    },
    challenges: [],
    achievements: [],
    keyFeatures: ["SEO optimization", "Social media content creation", "Targeted ad campaigns", "Performance tracking"],
    metaTitle: "Van Zutphen Digital Marketing - Case Study | Arrow Edge Studio",
    metaDescription:
      "Explore how our digital marketing campaign boosted Van Zutphen Group's online presence by 300% and increased lead quality.",
    tags: ["SEO", "Social Media", "Content Strategy", "Digital Marketing"],
    featured: false,
  },
  {
    id: 4,
    slug: "rietdekkersbedrijf-portfolio",
    title: "Rietdekkersbedrijf",
    category: "Web design",
    year: "2024",
    client: "Rietdekkersbedrijf Jansen",
    duration: "2 months",
    domain: "Construction",
    liveUrl: "https://rietdekkersbedrijf-jansen.nl",
    thumbnailImage: "/public/projects/rietdekkersbedrijf/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/rietdekkersbedrijf/hero-desktop.png",
      tablet: "/public/projects/rietdekkersbedrijf/hero-tablet.png",
      mobile: "/public/projects/rietdekkersbedrijf/hero-mobile.png",
      alt: "Rietdekkersbedrijf portfolio website showcase",
    },
    galleryImages: [],
    shortDescription: "Traditional craftsmanship meets modern web design in this stunning portfolio site.",
    fullDescription:
      "Rietdekkersbedrijf Jansen, a traditional thatch roofing company, needed a modern online presence to showcase their exquisite craftsmanship. We designed and developed a visually rich portfolio website that highlights their projects with high-quality photography and a clean, responsive design.",
    objective:
      "Create an elegant and responsive portfolio website to showcase traditional craftsmanship and attract new clients.",
    technologies: [
      { name: "HTML5", category: "frontend", icon: "/public/icons/html5.png" },
      { name: "CSS3", category: "frontend", icon: "/public/icons/css3.png" },
      { name: "JavaScript", category: "frontend", icon: "/public/icons/javascript.png" },
      { name: "Figma", category: "tools", icon: "/public/icons/figma.png" },
    ],
    framework: ["Responsive Design", "Image Gallery", "Contact Form"],
    colorTheme: {
      primary: "#4B5563",
      secondary: "#D1D5DB",
      accent: "#FCD34D",
      background: "#F9FAFB",
      text: "#1F2937",
    },
    challenges: [],
    achievements: [],
    keyFeatures: ["High-resolution image galleries", "Mobile-first responsive design", "Client testimonial section"],
    metaTitle: "Rietdekkersbedrijf Jansen - Thatch Roofing Portfolio | Arrow Edge Studio",
    metaDescription:
      "Discover our web design project for Rietdekkersbedrijf Jansen, blending traditional craftsmanship with modern web aesthetics.",
    tags: ["Portfolio", "Responsive Design", "Photography", "Web Design"],
    featured: false,
  },
  {
    id: 5,
    slug: "lunexis-branding",
    title: "Lunexis",
    category: "Branding",
    year: "2023",
    client: "Lunexis Consulting",
    duration: "3 months",
    domain: "Consulting",
    liveUrl: "https://lunexis.com",
    thumbnailImage: "/public/projects/lunexis/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/lunexis/hero-desktop.png",
      tablet: "/public/projects/lunexis/hero-tablet.png",
      mobile: "/public/projects/lunexis/hero-mobile.png",
      alt: "Lunexis luxury brand identity showcase",
    },
    galleryImages: [],
    shortDescription: "Luxury brand identity for a high-end consulting firm.",
    fullDescription:
      "Lunexis Consulting required a sophisticated and exclusive brand identity to reflect their premium services in strategic consulting. We developed a minimalist yet impactful visual system, including logo, typography, and a refined color palette, to convey professionalism and prestige.",
    objective:
      "Craft a luxurious and professional brand identity that resonates with high-profile clients in the consulting sector.",
    technologies: [
      { name: "Adobe Illustrator", category: "tools", icon: "/public/icons/illustrator.png" },
      { name: "Adobe InDesign", category: "tools", icon: "/public/icons/indesign.png" },
    ],
    framework: ["Brand Guidelines", "Logo System", "Stationery Design", "Presentation Templates"],
    colorTheme: {
      primary: "#1F2937",
      secondary: "#9CA3AF",
      accent: "#FCD34D",
      background: "#F9FAFB",
      text: "#1F2937",
    },
    challenges: [],
    achievements: [],
    keyFeatures: ["Elegant logo design", "Premium stationery suite", "Consistent brand messaging"],
    metaTitle: "Lunexis Brand Identity - Luxury Consulting | Arrow Edge Studio",
    metaDescription:
      "See our work on Lunexis Consulting's luxury brand identity, designed to convey professionalism and prestige.",
    tags: ["Luxury Branding", "Print Design", "Corporate Identity", "Branding"],
    featured: false,
  },
  {
    id: 6,
    slug: "aleron-marketing",
    title: "Aleron",
    category: "Digital marketing",
    year: "2023",
    client: "Aleron Software",
    duration: "4 months",
    domain: "Software",
    liveUrl: "https://aleron.com",
    thumbnailImage: "/public/projects/aleron/thumbnail.png",
    heroImage: {
      desktop: "/public/projects/aleron/hero-desktop.png",
      tablet: "/public/projects/aleron/hero-tablet.png",
      mobile: "/public/projects/aleron/hero-mobile.png",
      alt: "Aleron B2B marketing campaign showcase",
    },
    galleryImages: [],
    shortDescription: "Multi-channel marketing campaign for B2B software company.",
    fullDescription:
      "Aleron Software, a B2B SaaS provider, aimed to increase their market share and generate high-quality leads. We developed and implemented a robust multi-channel digital marketing strategy, integrating content marketing, email campaigns, and targeted advertising to reach their enterprise audience effectively.",
    objective:
      "Drive lead generation and market share growth for a B2B SaaS company through integrated digital marketing.",
    technologies: [
      { name: "HubSpot", category: "tools", icon: "/public/icons/hubspot.png" },
      { name: "Salesforce", category: "tools", icon: "/public/icons/salesforce.png" },
      { name: "Google Analytics", category: "tools", icon: "/public/icons/google-analytics.png" },
    ],
    framework: ["Content Strategy", "Email Marketing", "Lead Nurturing", "CRM Integration"],
    colorTheme: {
      primary: "#3B82F6",
      secondary: "#F59E0B",
      accent: "#10B981",
      background: "#0F172A",
      text: "#F1F5F9",
    },
    challenges: [],
    achievements: [],
    keyFeatures: ["Targeted content creation", "Automated email sequences", "CRM integration for lead tracking"],
    metaTitle: "Aleron Digital Marketing - B2B SaaS Case Study | Arrow Edge Studio",
    metaDescription:
      "Learn how our multi-channel digital marketing campaign helped Aleron Software achieve significant lead generation and market growth.",
    tags: ["B2B Marketing", "Lead Generation", "Analytics", "Digital Marketing"],
    featured: false,
  },
]

export const getProjectBySlug = (slug: string): Project | undefined => projects.find((project) => project.slug === slug)

export const getProjectsByCategory = (category: string): Project[] =>
  category === "All" ? projects : projects.filter((project) => project.category === category)

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured)

export const getRelatedProjects = (current: Project, limit = 3): Project[] =>
  projects.filter((p) => p.id !== current.id && p.category === current.category).slice(0, limit)
