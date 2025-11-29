export interface ProcessItem {
  id: number;
  title: string;
  description: string;
  relatedServiceSlug?: string;
  outcome?: string;
}

export const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "Customized strategy",
    description:
      "We tailor strategies to your business goals, ensuring each step aligns perfectly with your vision and target audience.",
    relatedServiceSlug: "ui-ux-interface", // Discovery + Strategy + UX
    outcome: "Clear roadmap, stronger brand direction, 100% aligned objectives",
  },
  {
    id: 2,
    title: "Execution",
    description:
      "We bring ideas to life through design, development, campaigns and automation. Everything is built with precision and performance in mind.",
    relatedServiceSlug: "spa-ssr-development", // Website/App execution
    outcome: "Pixel-perfect builds delivered with speed and quality",
  },
  {
    id: 3,
    title: "Measurement",
    description:
      "We track analytics, user behaviour, conversions, engagement and technical KPIs to understand what's working and what needs improvement.",
    relatedServiceSlug: "performance-tuning", // Analytics + monitoring
    outcome: "Accurate reporting with data-backed insights",
  },
  {
    id: 4,
    title: "Optimization",
    description:
      "We refine your product or campaign using tests, improvements and optimization techniques to increase results and efficiency.",
    relatedServiceSlug: "microinteractions", // UX improvements / enhancements
    outcome: "Higher conversions, faster performance, improved UX",
  },
  {
    id: 5,
    title: "Scaling",
    description:
      "Once optimized, we help you expand across platforms, channels and markets with automated systems and scalable solutions.",
    relatedServiceSlug: "cross-platform", // Apps, cross-platform, automation
    outcome: "Increased reach, multi-channel growth & long-term expansion",
  },
];
