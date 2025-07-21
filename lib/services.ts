import type { Service } from "@/types/service"

export const services: Service[] = [
  {
    id: 1,
    slug: "branding",
    title: "Branding",
    subtitle: "Complete Brand Identity",
    description: "We create powerful brand identities that resonate with your audience and stand out in the market.",
    fullDescription:
      "Our branding services encompass everything from initial strategy and concept development to comprehensive brand guideline creation and asset delivery. We work closely with you to define your brand's core values, mission, and visual language, ensuring a cohesive and impactful presence across all touchpoints.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Marketing Materials"],
    icon: "/public/icons/palette.png", // Placeholder icon
    metaTitle: "Branding Services | Arrow Edge Studio",
    metaDescription: "Comprehensive branding services including logo design, brand strategy, and visual identity.",
    tags: ["Branding", "Logo Design", "Brand Strategy", "Visual Identity"],
    heroImage: {
      desktop: "/public/services/branding-hero-desktop.png",
      tablet: "/public/services/branding-hero-tablet.png",
      mobile: "/public/services/branding-hero-mobile.png",
      alt: "Branding services hero image",
    },
    processSteps: [
      {
        title: "Discovery",
        description: "Deep dive into your brand's vision, values, and target audience.",
        image: "/public/process/discovery.png",
      },
      {
        title: "Concept Development",
        description: "Brainstorming and sketching initial logo concepts and visual directions.",
        image: "/public/process/concept.png",
      },
      {
        title: "Refinement",
        description: "Iterating on chosen concepts and developing a full brand system.",
        image: "/public/process/refinement.png",
      },
      {
        title: "Guidelines & Delivery",
        description: "Creating comprehensive brand guidelines and delivering all assets.",
        image: "/public/process/guidelines.png",
      },
    ],
    testimonial: {
      quote:
        "Arrow Edge Studio transformed our brand. Their strategic approach and creative execution gave us an identity that truly stands out.",
      author: "Emily White",
      position: "Marketing Director",
      company: "Innovate Corp",
      avatar: "/public/testimonials/sarah-chen.png", // Reusing existing testimonial image
    },
  },
  {
    id: 2,
    slug: "web-design",
    title: "Web Design",
    subtitle: "Modern Digital Experiences",
    description: "Custom websites that combine stunning design with exceptional user experience and performance.",
    fullDescription:
      "Our web design process focuses on creating visually appealing, highly functional, and user-friendly websites. From responsive layouts to intuitive navigation and optimized performance, we build digital experiences that engage your audience and achieve your business objectives.",
    features: ["Responsive Design", "User Experience", "Performance Optimization", "CMS Integration", "E-commerce"],
    icon: "/public/icons/code.png", // Placeholder icon
    metaTitle: "Web Design Services | Arrow Edge Studio",
    metaDescription: "Custom web design and development for responsive, high-performance websites.",
    tags: ["Web Design", "Responsive", "UX/UI", "Performance", "E-commerce"],
    heroImage: {
      desktop: "/public/services/web-design-hero-desktop.png",
      tablet: "/public/services/web-design-hero-tablet.png",
      mobile: "/public/services/web-design-hero-mobile.png",
      alt: "Web design services hero image",
    },
    processSteps: [
      {
        title: "Requirements",
        description: "Gathering detailed requirements and defining project scope.",
        image: "/public/process/requirements.png",
      },
      {
        title: "UX/UI Design",
        description: "Crafting wireframes, mockups, and interactive prototypes.",
        image: "/public/process/ux-design.png",
      },
      {
        title: "Development",
        description: "Building the website with clean, efficient, and scalable code.",
        image: "/public/process/development.png",
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing across devices and browsers, followed by deployment.",
        image: "/public/process/testing.png",
      },
    ],
    results: {
      title: "Tangible Web Results",
      description: "Our web design projects consistently deliver measurable improvements.",
      metrics: [
        { metric: "Page Load Speed", value: "-30%", description: "Reduction in average page load time" },
        { metric: "Mobile Engagement", value: "+50%", description: "Increase in mobile user engagement" },
        { metric: "Conversion Rate", value: "+25%", description: "Improvement in website conversion rates" },
      ],
    },
  },
  {
    id: 3,
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Growth-Driven Strategies",
    description: "Data-driven marketing campaigns that deliver measurable results and sustainable growth.",
    fullDescription:
      "Our digital marketing strategies are built on data and designed for growth. We leverage a mix of SEO, social media, content marketing, and paid advertising to increase your online visibility, drive targeted traffic, and generate high-quality leads.",
    features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
    icon: "/public/icons/trending-up.png", // Placeholder icon
    metaTitle: "Digital Marketing Services | Arrow Edge Studio",
    metaDescription: "Data-driven digital marketing campaigns for SEO, social media, and content marketing.",
    tags: ["Digital Marketing", "SEO", "Content Marketing", "Social Media"],
    heroImage: {
      desktop: "/public/services/digital-marketing-hero-desktop.png",
      tablet: "/public/services/digital-marketing-hero-tablet.png",
      mobile: "/public/services/digital-marketing-hero-mobile.png",
      alt: "Digital marketing services hero image",
    },
  },
  {
    id: 4,
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    subtitle: "Maximize Your Results",
    description: "Optimize your digital presence to convert more visitors into customers and increase revenue.",
    fullDescription:
      "Conversion Rate Optimization (CRO) is about turning more of your existing website visitors into customers. We analyze user behavior, conduct A/B tests, and implement strategic changes to improve your website's effectiveness, leading to higher conversion rates and increased ROI.",
    features: [
      "A/B Testing",
      "User Journey Analysis",
      "Landing Page Optimization",
      "Performance Tracking",
      "ROI Improvement",
    ],
    icon: "/public/icons/zap.png", // Placeholder icon
    metaTitle: "Conversion Optimization Services | Arrow Edge Studio",
    metaDescription: "Maximize your website's performance with our conversion rate optimization services.",
    tags: ["CRO", "A/B Testing", "Optimization", "Analytics"],
    heroImage: {
      desktop: "/public/services/conversion-optimization-hero-desktop.png",
      tablet: "/public/services/conversion-optimization-hero-tablet.png",
      mobile: "/public/services/conversion-optimization-hero-mobile.png",
      alt: "Conversion optimization services hero image",
    },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => services.find((service) => service.slug === slug)

export const getRelatedServices = (current: Service, limit = 3): Service[] =>
  services.filter((s) => s.id !== current.id).slice(0, limit)
