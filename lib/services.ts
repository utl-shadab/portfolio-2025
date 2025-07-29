import type { Service } from "@/types/service"

export const services: Service[] = [
  {
    id: 1,
    slug: "ui-ux-interface",
    title: "UI/UX Interface",
    subtitle: "Intuitive & Engaging Designs",
    description: "Crafting user-friendly interfaces that enhance user experience and engagement.",
    fullDescription:
      "Our UI/UX design services focus on creating intuitive, visually appealing, and user-centered interfaces. We conduct user research, create wireframes, and design interactive prototypes to ensure seamless user experiences across all devices.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Visual Design"],
    icon: "/svg/uiux.svg",
    metaTitle: "UI/UX Interface Design Services | Arrow Edge Studio",
    metaDescription: "Create intuitive and engaging UI/UX designs with our user-centered design services.",
    tags: ["UI/UX", "User Interface", "User Experience", "Design"],
    heroImage: {
      desktop: "/services/uiux.avif",
      tablet: "/services/smalluiux.avif",
      mobile: "/services/smalluiux.avif",
      alt: "UI/UX interface services hero image",
    },
    processSteps: [
      {
        title: "User Research",
        description: "Understanding user needs and behaviors through research and analysis.",
        image: "/services/research.avif",
      },
      {
        title: "Wireframing",
        description: "Creating wireframes to outline the structure and layout.",
        image: "/services/wireframe.avif",
      },
      {
        title: "Prototyping",
        description: "Building interactive prototypes to test functionality and design.",
        image: "/services/prototype.avif",
      },
      {
        title: "Usability Testing",
        description: "Testing designs with users to ensure intuitive interactions.",
        image: "/services/usab.jpg",
      },
    ],
    testimonial: {
      quote:
        "Arrow Edge Studio revolutionized our product's usability with their thoughtful UI/UX design approach.",
      author: "Sarah Johnson",
      position: "Product Manager",
      company: "TechTrend Innovations",
      avatar: "/public/testimonials/sarah-johnson.png",
    },
  },
  {
    id: 2,
    slug: "cross-platform",
    title: "Cross-Platform Development",
    subtitle: "Seamless Multi-Device Experiences",
    description: "Building applications that work flawlessly across multiple platforms and devices.",
    fullDescription:
      "Our cross-platform development services deliver consistent and high-quality user experiences across web, mobile, and desktop. Using frameworks like React Native and Flutter, we ensure your app performs optimally on all platforms.",
    features: ["React Native", "Flutter", "Responsive Design", "Platform Consistency", "Native Performance"],
    icon: "/svg/crossplateform.svg", // Placeholder icon
    metaTitle: "Cross-Platform Development Services | Arrow Edge Studio",
    metaDescription: "Build seamless, high-performance apps for web, mobile, and desktop with cross-platform development.",
    tags: ["Cross-Platform", "React Native", "Flutter", "Mobile Apps"],
    heroImage: {
      desktop: "/services/crosslap.avif",
      tablet: "/services/crosssmall.avif",
      mobile: "/services/crosssmall.avif",
      alt: "Cross-platform development services hero image",
    },
    processSteps: [
      {
        title: "Requirement Analysis",
        description: "Defining project goals and platform-specific requirements.",
        image: "/services/requirement.avif",
      },
      {
        title: "Framework Selection",
        description: "Choosing the right cross-platform framework for your project.",
        image: "/services/framework.png",
      },
      {
        title: "Development",
        description: "Building the app with reusable, efficient code.",
        image: "/services/development.avif",
      },
      {
        title: "Testing & Deployment",
        description: "Testing across devices and deploying to all platforms.",
        image: "/services/testing.avif",
      },
    ],
    results: {
      title: "Cross-Platform Results",
      description: "Our cross-platform apps deliver consistent performance and user satisfaction.",
      metrics: [
        { metric: "Development Time", value: "-40%", description: "Reduction in development time" },
        { metric: "User Retention", value: "+35%", description: "Increase in user retention rates" },
        { metric: "Platform Coverage", value: "100%", description: "Full compatibility across major platforms" },
      ],
    },
  },
  {
    id: 3,
    slug: "spa-ssr-development",
    title: "SPA & SSR Development",
    subtitle: "Fast & Scalable Web Apps",
    description: "Developing single-page applications and server-side rendered apps for speed and scalability.",
    fullDescription:
      "Our SPA and SSR development services create fast, scalable, and SEO-friendly web applications. Using modern frameworks like React, Next.js, and Vue.js, we build dynamic, high-performance web experiences tailored to your needs.",
    features: ["React", "Next.js", "Vue.js", "SEO Optimization", "Scalable Architecture"],
    icon: "/svg/spa.svg", // Placeholder icon
    metaTitle: "SPA & SSR Development Services | Arrow Edge Studio",
    metaDescription: "Build fast, scalable, and SEO-friendly web apps with SPA and SSR development.",
    tags: ["SPA", "SSR", "React", "Next.js", "Vue.js"],
    heroImage: {
      desktop: "/services/spa.avif",
      tablet: "/services/spasmall.avif",
      mobile: "/services/spasmall.avif",
      alt: "SPA & SSR development services hero image",
    },
  },
  {
    id: 4,
    slug: "microinteractions",
    title: "Microinteractions",
    subtitle: "Engaging User Moments",
    description: "Designing small, delightful interactions that enhance user engagement and satisfaction.",
    fullDescription:
      "Microinteractions add personality and functionality to your digital products. From subtle animations to interactive feedback, we design microinteractions that make your app or website more engaging and intuitive.",
    features: ["Animations", "Interactive Feedback", "User Engagement", "Motion Design", "Usability Enhancements"],
    icon: "/svg/animation.svg", // Placeholder icon
    metaTitle: "Microinteractions Design Services | Arrow Edge Studio",
    metaDescription: "Enhance user engagement with delightful and functional microinteractions.",
    tags: ["Microinteractions", "Animations", "User Engagement", "Motion Design"],
    heroImage: {
      desktop: "/services/micro.avif",
      tablet: "/services/microsmall.avif",
      mobile: "/services/microsmall.avif",
      alt: "Microinteractions services hero image",
    },
  },
  {
    id: 5,
    slug: "performance-tuning",
    title: "Performance Tuning",
    subtitle: "Optimize for Speed",
    description: "Enhancing the speed and efficiency of your digital products for better performance.",
    fullDescription:
      "Our performance tuning services optimize your website or application for speed and efficiency. We analyze bottlenecks, reduce load times, and improve resource usage to ensure a smooth and fast user experience.",
    features: ["Load Time Optimization", "Code Efficiency", "Resource Management", "Scalability", "Performance Audits"],
    icon: "/svg/performance.svg", // Placeholder icon
    metaTitle: "Performance Tuning Services | Arrow Edge Studio",
    metaDescription: "Optimize your website or app for speed and efficiency with performance tuning.",
    tags: ["Performance", "Optimization", "Speed", "Scalability"],
    heroImage: {
      desktop: "/services/performance.avif",
      tablet: "/services/performancesmall.avif",
      mobile: "/services/performancesmall.avif",
      alt: "Performance tuning services hero image",
    },
  },
  {
    id: 6,
    slug: "headless-cms-api",
    title: "Headless CMS & API",
    subtitle: "Flexible Content Solutions",
    description: "Building scalable and flexible content management systems with robust APIs.",
    fullDescription:
      "Our headless CMS and API development services provide flexible, scalable, and future-proof content solutions. We integrate with platforms like Contentful and Strapi to deliver seamless content management and API-driven experiences.",
    features: ["Headless CMS", "API Development", "Contentful", "Strapi", "Scalable Content"],
    icon: "/svg/cms.svg", // Placeholder icon
    metaTitle: "Headless CMS & API Services | Arrow Edge Studio",
    metaDescription: "Build flexible and scalable content solutions with headless CMS and API development.",
    tags: ["Headless CMS", "API", "Content Management", "Scalability"],
    heroImage: {
      desktop: "/services/cms.avif",
      tablet: "/services/cmssmall.avif",
      mobile: "/services/cmssmall.avif",
      alt: "Headless CMS & API services hero image",
    },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => services.find((service) => service.slug === slug)

export const getRelatedServices = (current: Service, limit = 3): Service[] =>
  services.filter((s) => s.id !== current.id).slice(0, limit)