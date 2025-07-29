import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    slug: "malik-architecture",
    title: "Malik Architecture",
    category: "Branding",
    year: "2024",
    client: "Kamal Malik",
    duration: "1 months",
    domain: "Architecture & Design",
    liveUrl: "https://www.malikarchitecture.com/",
    thumbnailImage: "/work/malik.jpg",
    heroImage: {
      desktop: "/work/malik.jpg",
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

    shortDescription: "Malik Architecture is an award-winning, Mumbai-based multidisciplinary design practice with over 47 years of experience, approaching architecture as a synthesis of 'ecology' and 'spirit' to define a contemporary Indian design language.",
    fullDescription:
      "Malik Architecture is a highly distinguished, award-winning design practice based in Mumbai, India, with over four decades of experience. Founded by Kamal Malik and now co-led by his son Arjun Malik, the firm is a leading voice in contemporary Indian architecture. Their work is celebrated for its powerful and context-sensitive designs that are deeply rooted in a unique philosophy. This core philosophy is a synthesis of Ecology (a building's holistic relationship with its environment, climate, and materials) and Spirit (its connection to India's cultural, historical, and philosophical heritage). This approach results in a distinct style of vernacular modernism, creating buildings that are both globally modern and authentically Indian.",
    objective:
      "The primary objective of Malik Architecture is to develop and define a contemporary design syntax for the Indian subcontinent. They aim to achieve this by approaching architecture as a seamless and holistic synthesis of 'ecology' and 'spirit,' creating meaningful spaces that are culturally resonant, environmentally sustainable, and timeless.",

    technologies: [
      { name: "HTML", category: "tools", icon: "/technology/html.svg" },
      { name: "CSS", category: "tools", icon: "/technology/css.svg" },
      { name: "JAVASCRIPT", category: "tools", icon: "/technology/js.svg" },
      { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
      { name: "BOOTSTRAP", category: "tools", icon: "/technology/bootstrap.svg" },
      { name: "PHP", category: "tools", icon: "/technology/cdi.svg" },
    ],
    framework: [],
   colorTheme: {
    primary: "#6E6E6E",
    secondary: "#A8A8A8",
    accent: "#CFCFCF",
    background: "#F5F5F5",
    text: "#333333",
  },


    

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
        image: "/svg/discover.webp",
      },
      {
        title: "Concept Development",
        description:
          "Exploring multiple creative directions through sketching, mood boards, and initial digital concepts.",
        image: "/svg/concept.svg",
      },
      {
        title: "Design Refinement",
        description:
          "Iterating on selected concepts, testing across applications, and refining based on stakeholder feedback.",
        image: "/svg/designing.svg",
      },
      {
        title: "Brand Guidelines",
        description: "Creating comprehensive documentation and asset libraries for consistent brand implementation.",
        image: "/svg/brand-guide.svg",
      },
    ],
    challenges: [],
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
    slug: "vardhman-textile",
    title: "Vardhman",
    category: "Web design",
    year: "2023",
    client: "Vardhman textile",
    duration: "4 months",
    domain: "Textile",
    liveUrl: "https://vardhman.com",

    thumbnailImage: "/work/vardhman-thumb.jpg",
    heroImage: {
      desktop: "/work/vardhman-thumb.jpg",
      tablet: "/work/vardhman-thumb.jpg",
      mobile: "/work/vardhman-thumb.jpg",
      alt: "vardhman",
    },
    galleryImages: [
      {
        desktop: "/work/vardhman.png",
        tablet: "/public/projects/staalbaron/gallery-1-tablet.png",
        mobile: "/work/vmobile.jpg",
        alt: "Product catalog interface",
      },
      {
        desktop: "/work/vardhman-thumb.jpg",
        tablet: "/work/vardhman-thumb.jpg",
        mobile: "/work/vmobile.jpg",
        alt: "Mobile shopping experience",
      },
    ],

    shortDescription: "In an industry that thrives on changing trends, agility and flexibility are vital contributors to success. Only those who can outpace stand a chance to out-grow.",
    fullDescription:
      "Vardhman Group achieves excellence through a culture of innovation and continuous improvement. As an organisation, we believe in well-thought-out consistent growth and a holistic approach. We are committed to sustainability with initiatives directed at long-term positive impact through our sustainability framework 'PRO - Proactively Responsible Organisation’.",
    objective:
      "To digitally showcase Vardhman's leadership as a vertically integrated textile powerhouse, highlighting our commitment to innovation, quality, and sustainability to a global audience of partners, customers, and stakeholders.",

    technologies: [
     
      { name: "HTML", category: "tools", icon: "/technology/html.svg" },
      { name: "CSS", category: "tools", icon: "/technology/css.svg" },
      { name: "JAVASCRIPT", category: "tools", icon: "/technology/js.svg" },
      { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
      { name: "BOOTSTRAP", category: "tools", icon: "/technology/bootstrap.svg" },
      { name: "PHP", category: "tools", icon: "/technology/cdi.svg" },
      { name: "MYSQL", category: "tools", icon: "/technology/sql.svg" },
    ],
    framework: [],
   colorTheme: {
  primary: "#008B47",
  secondary: "#e8e8e8",
  accent: "#008B47",
  background: "#EFEFEF",
  text: "#080808",
},

   challenges: [],

  achievements: [
  {
    metric: "API Response Time",
    value: "< 50ms",
    description: "Optimized database queries and implemented a multi-layered caching strategy, reducing the average API response time to under 50ms for a snappy user experience.",
  },
  {
    metric: "Core Web Vitals",
    value: "95+ Score",
    description: "Achieved a Google Lighthouse score of over 95 by implementing code splitting, image optimization, and lazy loading, resulting in superior performance and improved SEO.",
  },
  {
    metric: "Scalability",
    value: "1M+ Users",
    description: "Engineered a cloud-native architecture capable of handling over a million concurrent users during peak traffic without performance degradation.",
  },
  {
    metric: "Development Velocity",
    value: "+40%",
    description: "Established a robust CI/CD pipeline with automated testing, increasing team development velocity by 40% and accelerating feature deployment.",
  },
  { 
    metric: "Mobile Traffic", 
    value: "+185%", 
    description: "A mobile-first responsive design led to a significant increase in engagement from mobile users." 
  },
  { 
    metric: "Support Tickets", 
    value: "-60%", 
    description: "An intuitive UI and comprehensive documentation led to a sharp reduction in customer service inquiries." 
  },
  {
    metric: "Code Maintainability",
    value: "A+ Grade",
    description: "Refactored the legacy codebase into a modular, component-based architecture, achieving an A+ grade on code quality scans and reducing future technical debt."
  },
  {
    metric: "Security Hardening",
    value: "Zero Breaches",
    description: "Implemented end-to-end security protocols, including content security policies and regular vulnerability scanning, resulting in zero security breaches post-launch."
  }
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
    framework: [],
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
    framework: [],
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
    framework: [],
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
    framework: [],
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
