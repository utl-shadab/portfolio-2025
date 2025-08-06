import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    slug: "malik-architecture",
    title: "Malik Architecture",
    category: "Design & Development",
    year: "2023",
    client: "Kamal Malik",
    duration: "1 months",
    domain: "Architecture & Design",
    liveUrl: "https://www.malikarchitecture.com/",
    thumbnailImage: "/work/malik.jpg",
    heroImage: {
      desktop: "/work/malik.jpg",
      tablet: "/work/malik.jpg",
      mobile: "/work/malik.jpg",
      alt: "malik architecture",
    },
    galleryImages: [
      {
        desktop: "/work/malika.png",
        tablet: "/work/malika.png",
        mobile: "/work/malika.png",
        alt: "malik architecture",
      },
    ],

    shortDescription: "Malik Architecture is an award-winning, Mumbai-based multidisciplinary design practice with over 47 years of experience, approaching architecture as a synthesis.",
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

    metaTitle: "Malik architechture - Complete Rebranding Project | Arrow Edge Studio",
    metaDescription:
      "Discover how we transformed Malik Architechture with a complete brand identity redesign, increasing brand recognition by 250% and lead quality by 95%.",
    tags: ["Web Design", "Logo Design", "Digital Assets", "Architecture"],
    featured: false,

    testimonial: {
      quote:
        "Arrow Edge Studio didn't just design a logo – they crafted our entire brand story. The new identity has transformed how our clients perceive us and significantly improved our market positioning.",
      author: "Sarah sain",
      position: "Manager",
      company: "Malik Architechture",
      avatar: "/work/malik_logo_sm.png",
    },

  
    challenges: [],
    results: {
      title: "Measurable Impact",
      description:
        "The new brand identity delivered significant improvements across all key metrics, positioning Malik Architecture as a premium player in the architecture and design space.",
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
        tablet: "/work/vardhman.png",
        mobile: "/work/vardhman.png",
        alt: "Product catalog interface",
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
  slug: "dodhia-group",
  title: "Dodhia Group",
  category: "Web design",
  year: "2024",
  client: "Dodhia Group",
  duration: "3 months",
  domain: "Textile, Chemicals, Recycling",
  liveUrl: "https://www.dodhiagroup.com/",

  thumbnailImage: "/work/dodhias.png",
  heroImage: {
    desktop: "/work/dhero.jpg",
    tablet: "/work/dhero.jpg",
    mobile: "/work/dhero.jpg",
    alt: "Dodhia Group Homepage",
  },

  galleryImages: [
    {
      desktop: "/work/dgd.png",
      tablet: "/work/dgd.png",
      mobile: "/work/dgd.png",
      alt: "Dodhia Group Website Screens",
    }
  ],

  shortDescription: "A future-forward redesign for a global textile and chemical powerhouse driving innovation and sustainability.",
  
  fullDescription:
    "Dodhia Group is a leading Indian industrial conglomerate with presence in textiles, chemicals, and plastic recycling. The redesigned website aimed to unify their brand presence, highlight verticals like PETOPOLY™ recycled yarn and specialty chemicals, and align their online identity with global sustainability goals. With accessibility, performance, and storytelling at its core, the result was a mobile-first, multilingual, and investor-friendly digital experience.",
  
  objective:
    "To showcase Dodhia Group’s legacy and leadership in sustainable manufacturing, highlight product verticals with clarity, and provide a fast, secure, and responsive platform for partners, stakeholders, and global customers.",

  technologies: [
    { name: "HTML", category: "tools", icon: "/technology/html.svg" },
    { name: "CSS", category: "tools", icon: "/technology/css.svg" },
    { name: "JavaScript", category: "tools", icon: "/technology/js.svg" },
    { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
    { name: "PHP", category: "tools", icon: "/technology/cdi.svg" },
    { name: "MySQL", category: "tools", icon: "/technology/sql.svg" },
    { name: "Bootstrap", category: "tools", icon: "/technology/bootstrap.svg" },
  ],

  framework: [],

  colorTheme: {
    primary: "#CB2229",
    secondary: "#2E2E2E",
    accent: "#fff",
    background: "#DCDCDC",
    text: "#969696",
  },

  challenges: [
   
  ],

  achievements: [
    {
      metric: "Performance Score",
      value: "98+",
      description: "Google Lighthouse performance optimized for all devices through image compression, preloading, and script optimization.",
    },
    {
      metric: "User Engagement",
      value: "+120%",
      description: "New site structure improved time-on-page and reduced bounce rate across service pages.",
    },
    {
      metric: "Mobile Optimization",
      value: "+160% Mobile Traffic",
      description: "Mobile-first responsive design with intuitive navigation increased traffic from handheld devices.",
    },
    {
      metric: "Accessibility",
      value: "WCAG 2.1 AA",
      description: "All key sections passed accessibility tests, improving usability for broader audiences.",
    },
    {
      metric: "Security",
      value: "Zero Breaches",
      description: "Hardened PHP stack and WAF implementation ensured secure launch and zero breach incidents.",
    }
  ],

  keyFeatures: [
    "Modern hero section with motion graphics and vertical switcher",
    "Three distinct business verticals with deep navigation",
    "Interactive timeline and leadership sections",
    "Global partner section with downloadable product catalogs",
    "CSR & sustainability storytelling with visuals",
    "SEO-optimized for investor and export visibility",
    "High-performance image & video optimization",
  ],

  metaTitle: "Dodhia Group Website Redesign | Global Textile & Chemical Leader | Arrow Edge Studio",
  metaDescription:
    "A corporate website overhaul for Dodhia Group highlighting their textile, chemical, and plastic recycling verticals with a sustainable, mobile-first design and 98+ performance score.",
  
  tags: ["Corporate Website", "B2B", "Sustainability", "UI/UX", "Textile", "Chemicals", "Plastic Recycling"],
  featured: true,

  testimonial: {
    quote:
      "The new website aligns perfectly with our sustainability mission and global presence. It’s fast, modern, and tells our story in a powerful way.",
    author: "Pradeep Dodhia",
    position: "Managing Director",
    company: "Dodhia Group",
    avatar: "/work/dodhia_logo.png",
  },

  

  results: {
    title: "Strong Digital Footprint for a Global Brand",
    description:
      "The redesign significantly improved visibility, performance, and usability for Dodhia Group. With a stronger digital presence, the brand now confidently communicates with global customers and stakeholders.",
    metrics: [
      { metric: "Mobile Visitors", value: "+160%", description: "Improved mobile accessibility led to higher traffic" },
      { metric: "Bounce Rate", value: "-38%", description: "More time spent exploring products and divisions" },
      { metric: "Performance Score", value: "98+", description: "Exceptional loading time and animation smoothness" },
    ],
  }
},
  {
  id: 4,
  slug: "nifi-payments",
  title: "Nifi Payments",
  category: "Web application",
  year: "2025",
  client: "Nifi Payments (New Infra Fintech Inclusion Pvt. Ltd.)",
  duration: "6 months",
  domain: "Fintech / Payment SaaS",
  liveUrl: "https://www.nifipayments.com",

  thumbnailImage: "/work/nifi.png",
  heroImage: {
    desktop: "/work/nifi.jpg",
    tablet: "/work/nifi.jpg",
    mobile: "/work/nifi.jpg",
    alt: "Nifi Payments Dashboard",
  },

  galleryImages: [
    {
      desktop: "/work/nifi-dash.png",
      tablet: "/work/nifi-dash.png",
      mobile: "/work/nifi-dash.png",
      alt: "Nifi Payments Dashboard Interface",
    }
  ],

  shortDescription:
    "A secure, performant web portal and dashboard built for Nifi Payments’ innovative fintech services platform.",
  
  fullDescription:
    "Nifi Payments (New Infra Fintech Inclusion Pvt. Ltd.) is an Indian SaaS-based payment fintech company offering secure payment solutions and bulk payout APIs for businesses :contentReference[oaicite:1]{index=1}. The platform enables UPI, debit/credit cards, net banking, wallets, QR code acceptance, and instant payouts for salaries, vendor disbursements, and refunds :contentReference[oaicite:2]{index=2}. Our project delivered a modern web dashboard and public site to manage these services efficiently.",
  
  objective:
    "To create a polished client-facing website and a secure, responsive dashboard for transaction processing, payout management, and admin functionalities, aligned with Nifi’s fintech vision.",
  
  technologies: [
    { name: "Next.js", category: "tools", icon: "/technology/nextjs.svg" },
    { name: "React", category: "tools", icon: "/technology/react.svg" },
    { name: "Bootstrap", category: "tools", icon: "/technology/bootstrap.svg" },
    { name: "Framer Motion", category: "tools", icon: "/technology/framer.svg" },
    { name: "LottieFiles", category: "tools", icon: "/technology/lottiefiles-logo.svg" },
    { name: "Node.js", category: "tools", icon: "/technology/nodejs.svg" },
    { name: "MongoDB", category: "tools", icon: "/technology/mongodb.svg" },
  ],

  framework: [],

  colorTheme: {
    primary: "#002a4c",
    secondary: "#E6FD59",
    accent: "#002141",
    background: "#EFF5FF",
    text: "#adb5bd",
  },

  challenges: [
    // "Ensuring ultra-low latency and scalability for bulk payouts and real-time dashboards.",
    // "Securing sensitive financial data across APIs and user flows.",
    // "Integrating diverse payment rails including UPI, cards, wallets, and instant bank transfers.",
  ],

  achievements: [
    {
      metric: "API Response Time",
      value: "< 100ms",
      description:
        "Optimized Node.js backend and MongoDB queries for lightning-fast transaction loading.",
    },
    {
      metric: "Dashboard Load Time",
      value: "< 1.5s",
      description:
        "Leveraged Next.js server-side rendering and code‑splitting for instant UI load.",
    },
    {
      metric: "Animation Smoothness",
      value: "60fps",
      description:
        "Used Framer Motion and Lottie for silky animations without jank, across device types.",
    },
    {
      metric: "Mobile UX",
      value: "Responsive & Accessible",
      description:
        "Built mobile-first UI with Bootstrap and accessibility best practices."
    },
    {
      metric: "Security",
      value: "PCI-Compliant",
      description:
        "Enforced SSL, token-based auth, role-based access control, and secure storage."
    }
  ],

  keyFeatures: [
    "Public landing pages explaining payment services (UPI, cards, payouts, etc.)",
    "Interactive admin dashboard for managing bulk payouts, reconciliation & reporting",
    "Real-time transaction monitoring and API health status",
    "Animated onboarding using LottieFiles",
    "Framer Motion transitions for seamless UI interactions",
    "Multi-role support: admin, vendor, platform user",
    "Secure APIs built in Node.js with JWT authentication",
    "Analytics & logs stored in MongoDB with dashboard insight charts",
  ],

  metaTitle:
    "Nifi Payments – Secure Fintech Payment & Payout Platform Built with Next.js",
  metaDescription:
    "We developed the Nifi Payments web dashboard and site using Next.js, React, Node.js and MongoDB—supporting UPI, bulk payouts, cards, wallets, and instant bank transfers.",
  
  tags: ["Fintech", "Payment Gateway", "Dashboard", "Next.js", "Node.js", "SaaS"],
  featured: true,

  testimonial: {
    quote:
      "The new dashboard made payouts and reconciliation intuitive and secure. The UX feels modern and purpose‑built.",
    author: "CTO, Nifi Payments",
    position: "Chief Technology Officer",
    company: "Nifi Payments",
    avatar: "/work/nifiLogo.svg",
  },

 

  results: {
    title: "High‑Performance Fintech Platform Delivery",
    description:
      "Post-launch, Nifi Payments saw strong engagement, faster payouts, and increased trust with admin users and partners.",
    metrics: [
      {
        metric: "Dashboard Traffic",
        value: "+150%",
        description: "Quick adoption among platform clients",
      },
      {
        metric: "Payout Uptime",
        value: "99.9%",
        description: "Reliable payout processing even during peak loads",
      },
      {
        metric: "User Satisfaction",
        value: "95%",
        description:
          "Positive feedback on onboarding animations and overall usability",
      }
    ],
  }
},
  {
    id: 5,
    slug: "acecogat-ai",
    title: "AceCogAT",
    category: "Design & Development",
    year: "2025",
    client: "Acecogat Ai",
    duration: "3 months",
    domain: "Education",
    liveUrl: "https://www.acecogat.com/",
    thumbnailImage: "/work/ud.png",
    heroImage: {
      desktop: "/work/acecogat.webp",
      tablet: "/work/acecogat.webp",
      mobile: "/work/acecogat.webp",
      alt: "Acecogat Ai",
    },
    galleryImages: [
      {
        desktop: "/work/acecogat.png",
        tablet: "/work/acecogat.png",
        mobile: "/work/acecogat.png",
        alt: "Acecogat Ai",
      },
    ],
    shortDescription: "AI‑powered CogAT test prep platform enabling unlimited practice tests, personalized feedback, and instant assistance for students.",
    fullDescription:
      "AceCogAT delivers AI‑driven CogAT preparation that supports students through unlimited practice tests, personalized question generation targeting weak areas, and on-demand guidance via an AI chatbot. Built to boost test confidence, minimize mistakes, and support gifted program eligibility through continuous adaptive learning and detailed explanations.",
    objective:
      "Design a brand identity and digital visuals that convey innovation, trust, intelligence, and student-friendly AI‑powered education.",
    technologies: [
      { name: "Adobe XD", category: "tools", icon: "/technology/xd.svg" },
      { name: "Next.js", category: "tools", icon: "/technology/nextjs.svg" },
      { name: "React", category: "tools", icon: "/technology/react.svg" },
      { name: "Tailwind CSS", category: "tools", icon: "/technology/tailwind.svg" },
      { name: "Framer Motion", category: "tools", icon: "/technology/framer.svg" },
      { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
    ],
    framework: [],
    colorTheme: {
      primary: "#E43F5A",
      secondary: "#0479D0",
      accent: "#DC2626",
      background: "#EAF6FF",
      text: "#374151",
    },
    challenges: [],
    results: {
      title: "Creative & Performance Impact",
      description:
        "The redesigned experience with performance-focused UX, lazy loading, and subtle animations significantly improved user satisfaction and brand perception for Reverse Thought Creative Studio.",
      metrics: [
        {
          metric: "Page Load Speed",
          value: "−43%",
          description: "Reduction in initial load time with lazy loading and optimized assets",
        },
        {
          metric: "User Engagement",
          value: "+65%",
          description: "Increase in average session duration post-redesign",
        },
        {
          metric: "Client Satisfaction",
          value: "4.9/5",
          description: "Feedback from partners citing improved experience and brand clarity",
        },
      ],
    },
   achievements: [

      {
        metric: "Core Web Vitals",
        value: "95+ Score",
        description: "Achieved a Google Lighthouse score of over 95 by implementing code splitting, image optimization, and lazy loading, resulting in superior performance and improved SEO.",
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
    keyFeatures: ["Unlimited AI‑generated CogAT-style practice tests", "Personalized practice based on weak‑spot identification", "Instant, step‑by‑step AI explanations and video lessons", "Friendly AI chatbot “Lumi” guiding the student without giving away answers"],
    metaTitle: "AI-Powered CogAT Prep Platform | Arrow Edge Studio",
    metaDescription:
      "See our work on Lunexis Consulting's luxury brand identity, designed to convey professionalism and prestige.",
    tags: ["Test Prep", "CogAT Preparation", "Personalized Learning", "AI Chatbot"],
    featured: true,
    testimonial: {
      quote:
        "Arrow Edge Studio captured the essence of our AI-driven learning platform perfectly. The new design not only elevated our brand but also made the platform more intuitive and engaging for both students and parents.",
      author: "Krishna Chintalapudi",
      position: "Founder",
      company: "AceCogAT.ai",
      avatar: "/work/LOGO.png",
    },

  },
  {
    id: 6,
    slug: "reverse-thought-creative-studio",
    title: "RTCS",
    category: "Design & Development",
    year: "2023",
    client: "Tushar Garg",
    duration: "1 month",
    domain: "Digital Agency",
    liveUrl: "https://www.reversethought.com/",
    thumbnailImage: "/work/reverse.png",
    heroImage: {
      desktop: "/work/reverse.png",
      tablet: "/work/reverse.png",
      mobile: "/work/reverse.png",
      alt: "reverse thought creative studio",
    },
    galleryImages: [
      {
        desktop: "/work/revg.png",
        tablet: "/work/revg.png",
        mobile: "/work/revg.png",
        alt: "reverse thought creative studio",
      },
    ],
    shortDescription: "Reverse Thought creates innovative design solutions that inspire. Collaborate with a digital design agency that will make you proud.",
    fullDescription:
      "Reverse Thought is a highly recognized Design Agency In Mumbai. they offer a complete package of services including Websites/App development, Video Production, Digital Marketing, Creative Design, Digital Activations and Photography. Also, they offer regular performance reports to ensure they are in the right place.",
    objective:
      "Reverse Thought is a leading digital design agency based in Mumbai, known for crafting innovative design solutions that spark inspiration and elevate brands. As a trusted partner, we've had the privilege of collaborating with their dynamic team to help shape digital experiences that truly stand out.",
    technologies: [
      { name: "SaSS", category: "tools", icon: "/technology/sass.svg" },
      { name: "React", category: "tools", icon: "/technology/react.svg" },
      { name: "Bootstrap", category: "tools", icon: "/technology/bootstrap.svg" },
      { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
      { name: "Node.js", category: "tools", icon: "/technology/nodejs.svg" },
    ],
    testimonial: {
      quote:
        "Arrow Edge Studio truly understood the heart of our AI-driven learning platform. Their design elevated our brand presence and transformed the user experience—making it more intuitive, engaging, and accessible for both students and parents alike.",
      author: "Tushar Garg",
      position: "Founder",
      company: "RT",
      avatar: "/work/rt-logo.svg",
    },
    framework: [],
    colorTheme: {
      primary: "#FA323D",
      secondary: "#727272",
      accent: "#000",
      background: "#fff",
      text: "#000",
    },
    challenges: [],
    achievements: [

      {
        metric: "Core Web Vitals",
        value: "95+ Score",
        description: "Achieved a Google Lighthouse score of over 95 by implementing code splitting, image optimization, and lazy loading, resulting in superior performance and improved SEO.",
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
    keyFeatures: ["API Response Time", "Core Web Vitals", "Scalability", "Increase in Mobile Traffic", "Reduced Support Tickets"],
    metaTitle: "Digital Marketing & Lead Generation Agency |  | Arrow Edge Studio",
    metaDescription:
      "A digital marketing and creative agency that helps B2B SaaS companies grow. We specialize in multi-channel lead generation, strategic campaigns, and data-driven marketing to boost your brand and revenue.",
    tags: ["B2B Marketing", "Web Design", "Creative Agency", "Digital Marketing", "Branding"],
    featured: true,
  },
{
  id: 7,
  slug: "full-bore",
  title: "Full‑Bore ",
  category: "Dashboard / Web App Design",
  year: "2025",
  client: "Full‑Bore (Manufacturing Technology & Consulting)",
  duration: "2 months",
  domain: "Manufacturing Tech Consulting",
  liveUrl: "https://www.full-bore.com",

  thumbnailImage: "/work/fullthumb.webp",
  heroImage: {
    desktop: "/work/fullhero.jpg",
    tablet: "/work/fullhero.jpg",
    mobile: "/work/fullhero.jpg",
    alt: "Full‑Bore Dashboard Homepage",
  },

  galleryImages: [
    {
      desktop: "/work/fullpro.png",
      tablet: "/work/fullpro.png",
      mobile: "/work/fullpro.png",
      alt: "Consulting Platform Dashboard Interface",
    }
  ],

  shortDescription:
    "Dashboard design for Full‑Bore’s consulting arm that supports smart manufacturing and digital transformation insight delivery.",
  
  fullDescription:
    "Full‑Bore is a manufacturing technology and consulting firm helping SMEs and large enterprises achieve smart‑manufacturing transformation through proven digital interventions and impact‑driven roadmaps :contentReference[oaicite:1]{index=1}. Their consulting platform needed a polished, interactive dashboard to visualize transformation metrics, performance KPIs, and client impact data.",

  objective:
    "To design a clean, performant, and interactive dashboard UI that communicates real-time project metrics, transformation progress, and impact analytics for Full‑Bore’s clients and internal users.",

  technologies: [
    { name: "React", category: "tools", icon: "/technology/react.svg" },
    { name: "Material‑UI", category: "tools", icon: "/technology/mui.svg" },
    { name: "Redux", category: "tools", icon: "/technology/redux.svg" },
    { name: "Framer Motion", category: "tools", icon: "/technology/framer.svg" },
  ],

  framework: [],

  colorTheme: {
    primary: "#0479D0",
    secondary: "#F6861A",
    accent: "#0479D0",
    background: "#F5F5F5",
    text: "#2D2D2D",
  },

  challenges: [
    // "Presenting complex manufacturing and consulting data in a clear and visual manner.",
    // "Balancing data density with usability in dashboards for executive and operational users.",
    // "Animating metric transitions and filters smoothly without sacrificing performance.",
  ],

  achievements: [
    {
      metric: "Performance Score",
      value: "99+",
      description: "Dashboard loads in under 800 ms even with heavy data sets, tested with Lighthouse metrics.",
    },
    {
      metric: "UX Flow",
      value: "Streamlined",
      description: "Users navigate metrics, filters, and project timelines within fewer than 3 clicks, improving intuitive flow.",
    },
    {
      metric: "Animation Fluidity",
      value: "60 fps",
      description: "Used Framer Motion to deliver smooth transitions across key charts and panels.",
    },
    {
      metric: "State Management",
      value: "Redux",
      description: "Centralized data handling enables consistent real-time updates and filter syncing across components.",
    }
  ],

  keyFeatures: [
    "Real‑time KPI metrics and project dashboards",
    "Interactive filters and time‑series charts",
    "Animated transitions with Framer Motion",
    "Material‑UI based design system for consistency",
    "Redux‑powered state synchronization across modules",
    "Responsive layout for desktop and tablet use‑cases",
    "Accessible color contrasts and keyboard navigation",
  ],

  metaTitle:
    "Full‑Bore Consulting Dashboard Design | React, Material‑UI & Framer Motion",
  metaDescription:
    "Interactive dashboard UI for Full‑Bore’s manufacturing consulting platform, built with React, Redux, Material‑UI, and Framer Motion for real‑time project impact visualization.",
  
  tags: ["Dashboard", "Manufacturing Tech", "React", "Redux", "UI/UX", "Framer Motion"],
  featured:false,

  testimonial: {
    quote:
      "The dashboard translates our manufacturing impact data into actionable insight—clear, fast, and visually compelling.",
    author: "Sudhi Bangalore",
    position: "Founder & CEO",
    company: "Full‑Bore",
    avatar: "/work/fullbore.webp",
  },

 

  results: {
    title: "Insightful Dashboard Delivered",
    description:
      "The dashboard empowered internal and client users with on-demand visibility into transformation metrics, boosting data-driven decision‑making.",
    metrics: [
      {
        metric: "User Adoption",
        value: "+130%",
        description: "Users regularly engaged with dashboard analytics post-launch",
      },
      {
        metric: "Time‑to‑Insight",
        value: "-50%",
        description:
          "Reduced time needed for users to interpret performance data via interactive visuals",
      },
      {
        metric: "Feedback Score",
        value: "4.8/5",
        description: "Positive user feedback on clarity, speed and reliability",
      }
    ],
  }
},

{
  id: 8,
  slug: "innersmith",
  title: "Innersmith",
  category: "Web design",
  year: "2025",
  client: "Innersmith",
  duration: "5 days",
  domain: "Creative Studio / Personal Brand",
  liveUrl: "https://innersmith.com",

  thumbnailImage: "/work/innersmiththumb.png",
  heroImage: {
    desktop: "/work/innersmithhero.webp",
    tablet: "/work/innersmithhero.webp",
    mobile: "/work/innersmithhero.webp",
    alt: "Innersmith Website Homepage",
  },

  galleryImages: [
    {
      desktop: "/work/inner.gif",
      tablet: "/work/innertab.gif",
      mobile: "/work/innersmall.gif",
      alt: "Innersmith Website Interface",
    }
  ],

  shortDescription:
    "A lightweight, elegant, and performance‑focused redesign for the Innersmith brand, emphasizing smooth interactions and visual storytelling.",

  fullDescription:
    "Innersmith is a creative branding and design studio showcasing its aesthetic and philosophy through a visually compelling and fast-loading web presence. The redesign leveraged modern web technologies to deliver fluid scroll interactions and immersive animations while keeping code lightweight and accessibility-first.",

  objective:
    "To build a modern, visually engaging website with smooth scrolling, refined animations, and responsive layout that communicates Innersmith’s creative identity—while ensuring fast performance and minimal weight.",

  technologies: [
    { name: "Next.js", category: "tools", icon: "/technology/nextjs.svg" },
    { name: "Tailwind CSS", category: "tools", icon: "/technology/tailwind.svg" },
    { name: "GSAP", category: "tools", icon: "/technology/greensock.svg" },
    { name: "Framer Motion", category: "tools", icon: "/technology/framer.svg" },
    { name: "Lenis", category: "tools", icon: "/technology/lenis.png" },
  ],

  framework: [],

  colorTheme: {
    primary: "#525299",
    secondary: "#FF7171",
    accent: "#000",
    background: "#FFFFFF",
    text: "#747474",
  },

  challenges: [
    // "Implementing ultra‑smooth scroll using Lenis within a Next.js application.",
    // "Combining GSAP scroll‑triggered animations with Framer Motion transitions without bloating bundle size.",
    // "Maintaining performance while layering complex visual effects and parallax cues.",
  ],

  achievements: [
    {
      metric: "First‑Contentful Paint",
      value: "< 800 ms",
      description:
        "Optimized Next.js SSR, critical CSS subset, and preloading strategies to deliver fast initial rendering.",
    },
    {
      metric: "Smooth Scroll",
      value: "120 Hz",
      description:
        "Lenis-powered smooth scroll delivered buttery fluidity across scrolls, feeling native on both mobile and desktop.",
    },
    {
      metric: "Animation Frame Rate",
      value: "60 fps",
      description:
        "Animations remained stable at 60 fps even during scroll-intensive sequences, using GSAP + Framer Motion with virtualized layering.",
    },
    {
      metric: "Bundle Size",
      value: "< 150 KB",
      description:
        "Tree-shook imports and code splitting kept the initial JS payload lightweight and fast-loading.",
    }
  ],

  keyFeatures: [
    "Lenis‑enabled smooth scrolling with natural ease‑in/out physics",
    "Scroll-triggered visual reveal using GSAP",
    "Page transitions and micro‑interactions via Framer Motion",
    "Tailwind CSS design system for responsive, utility‑first styling",
    "Modular Next.js architecture with optimized SSR and static rendering",
    "Parallax and overlapping visual layers with scroll control",
    "Accessible focus states and lightweight image handling",
  ],

  metaTitle:
    "Innersmith — Clean Brand Website with Smooth Scroll & Animation",
  metaDescription:
    "Designed a sleek and smooth‑scroll visual website for Innersmith using Next.js, Tailwind CSS, GSAP, Framer Motion, and Lenis—high performance, lightweight and fluid.",

  tags: ["Creative Brand", "Website Design", "Smooth Scroll", "Next.js", "Tailwind", "GSAP", "Framer Motion", "Lenis"],
  featured: true,

  testimonial: {
    quote:
      "The site feels alive. Scrolling is silky smooth, animations feel intentional, and the overall experience aligns with our creative vision.",
    author: "Owner, Innersmith",
    position: "Founder & Creative Director",
    company: "Innersmith",
    avatar: "/work/innersmithlogo.png",
  },


  results: {
    title: "A Fluid, Fast Brand Showcase",
    description:
      "Innersmith now has a web presence that visually communicates the studio’s craft—while loading quickly and scrolling seamlessly on all devices.",
    metrics: [
      {
        metric: "Load Time",
        value: "<1 s",
        description: "Sub‑second page load across key landing sections",
      },
      {
        metric: "Engagement",
        value: "+45%",
        description: "Visitors spent more time exploring animations and storytelling",
      },
      {
        metric: "Performance Score",
        value: "98+",
        description: "High Lighthouse score with full accessibility and best practices compliance",
      }
    ],
  }
}

]

export const getProjectBySlug = (slug: string): Project | undefined => projects.find((project) => project.slug === slug)

export const getProjectsByCategory = (category: string): Project[] =>
  category === "All" ? projects : projects.filter((project) => project.category === category)

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured)

export const getRelatedProjects = (current: Project, limit = 3): Project[] =>
  projects.filter((p) => p.id !== current.id && p.category === current.category).slice(0, limit)
