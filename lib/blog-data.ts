import type { Metadata } from "next"



export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  readTime: string
  category: string
  content: { type: "paragraph" | "heading" | "list"; value: string | string[]; level?: 2 | 3 | 4 }[]
  metadata: Metadata
}


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "navigating-the-ai-frontier",
    title: "Navigating the AI Frontier: A Journey into the World of Artificial Intelligence",
    date: "Jan 05, 2024",
    author: "John Doe",
    excerpt:
      "Explore the cutting-edge trends shaping web design in the coming year, from AI integration to immersive experiences.",
    image: "/images/ai-robot.png",
    readTime: "5 mins read",
    category: "Artificial Intelligence",
    content: [
      {
        type: "paragraph",
        value:
          "In today's fast-paced digital landscape, one term stands out as a beacon of innovation and possibility: Artificial Intelligence (AI). As we embark on a journey into the AI frontier, we find ourselves at the intersection of cutting-edge technology and limitless potential. From enhancing everyday experiences to revolutionizing entire industries, AI is reshaping the way we live, work, and interact with the world around us.",
      },
      { type: "heading", value: "Unveiling the Mysteries of AI", level: 2 },
      {
        type: "paragraph",
        value:
          "Artificial Intelligence, often portrayed in science fiction as sentient robots or superintelligent machines, is much more than Hollywood fantasies. At its core, AI refers to the development of computer systems capable of performing tasks that typically require human intelligence. This encompasses a wide range of capabilities, from speech recognition and language translation to problem-solving and decision-making.",
      },
      {
        type: "list",
        value: [
          "**Fundamentals of AI:** Introduce the basic concepts of artificial intelligence, including machine learning, natural language processing, and computer vision.",
          "**AI in Everyday Life:** Explore how AI is already integrated into our daily lives, from virtual assistants like Siri and Alexa to personalized recommendations on streaming platforms and social media.",
        ],
      },
      {
        type: "paragraph",
        value:
          "The journey into AI is not just about understanding complex algorithms; it's about recognizing its transformative power and ethical implications. As we continue to push the boundaries of what AI can achieve, it's crucial to consider its impact on society, employment, and privacy. The responsible development and deployment of AI will be key to harnessing its full potential for the betterment of humanity.",
      },
    ],
    metadata: {
      title: "Navigating the AI Frontier: A Journey into the World of Artificial Intelligence",
      description:
        "Explore the cutting-edge trends shaping web design in the coming year, from AI integration to immersive experiences.",
    },
  },
  {
    id: 2,
    slug: "the-future-of-web-design",
    title: "The Future of Web Design: Trends to Watch in 2025",
    date: "2025-07-20",
    author: "Jan Bakker",
    excerpt:
      "Explore the cutting-edge trends shaping web design in the coming year, from AI integration to immersive experiences.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 mins read",
    category: "Web Design",
    content: [
      {
        type: "paragraph",
        value:
          "Web design is constantly evolving, and 2025 promises to bring even more exciting innovations. One of the most significant trends is the deeper integration of Artificial Intelligence (AI) into user interfaces. AI-powered personalization will allow websites to adapt dynamically to individual user preferences, offering highly tailored content and experiences.",
      },
      { type: "heading", value: "Immersive Experiences", level: 2 },
      {
        type: "paragraph",
        value:
          "Another key trend is the rise of immersive web experiences. Technologies like WebGL and WebXR are enabling developers to create stunning 3D environments and augmented reality features directly within the browser. This will transform how users interact with online content, moving beyond traditional flat interfaces.",
      },
      { type: "heading", value: "Sustainable Web Design", level: 2 },
      {
        type: "paragraph",
        value:
          "Furthermore, sustainability in web design is gaining traction. Designers and developers are increasingly focusing on creating eco-friendly websites that minimize energy consumption and carbon footprint. This includes optimizing images, reducing code bloat, and choosing green hosting providers.",
      },
      { type: "heading", value: "Accessibility First", level: 2 },
      {
        type: "paragraph",
        value:
          "Finally, accessibility will continue to be a paramount concern. As the web becomes more integral to daily life, ensuring that websites are usable by everyone, regardless of their abilities, is crucial. This involves adhering to WCAG guidelines and implementing inclusive design principles from the outset.",
      },
    ],
    metadata: {
      title: "The Future of Web Design: Trends to Watch in 2025",
      description:
        "Explore cutting-edge web design trends for 2025, including AI, immersive experiences, and sustainability.",
    },
  },
  {
    id: 3,
    slug: "branding-for-startups",
    title: "Branding for Startups: Building a Strong Foundation",
    date: "2025-07-15",
    author: "Sophia Nowak",
    excerpt: "Discover essential strategies for startups to build a compelling brand identity from the ground up.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 mins read",
    category: "Branding",
    content: [
      {
        type: "paragraph",
        value:
          "For startups, a strong brand identity is not just about a logo; it's about defining your mission, values, and unique selling proposition. A compelling brand helps you connect with your target audience, build trust, and stand out in a crowded market.",
      },
      { type: "heading", value: "Defining Your Brand Core", level: 2 },
      {
        type: "paragraph",
        value:
          "The first step in building a strong brand is to understand your core audience and what problems you solve for them. This insight will guide your brand messaging and visual identity. Consistency across all touchpoints—from your website to social media—is also crucial for brand recognition.",
      },
      { type: "heading", value: "The Power of Consistency", level: 2 },
      {
        type: "paragraph",
        value:
          "Investing in professional branding early on can save startups significant time and resources in the long run. A well-defined brand attracts the right customers and talent, fostering growth and loyalty.",
      },
    ],
    metadata: {
      title: "Branding for Startups: Building a Strong Foundation",
      description: "Essential strategies for startups to build a compelling brand identity from the ground up.",
    },
  },
  {
    id: 4,
    slug: "seo-tips-for-small-businesses",
    title: "SEO Tips for Small Businesses to Rank Higher",
    date: "2025-07-10",
    author: "Lucas Keizer",
    excerpt:
      "Practical SEO strategies for small businesses to improve search engine rankings and drive organic traffic.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 mins read",
    category: "SEO",
    content: [
      {
        type: "paragraph",
        value:
          "Search Engine Optimization (SEO) is vital for small businesses looking to increase their online visibility without a massive advertising budget. Even simple SEO tactics can make a big difference in ranking higher on search engines like Google.",
      },
      { type: "heading", value: "Keyword Research Fundamentals", level: 2 },
      {
        type: "paragraph",
        value:
          "Start with keyword research to identify terms your target audience uses. Optimize your website content with these keywords naturally. Ensure your website is mobile-friendly and loads quickly, as these are crucial ranking factors.",
      },
      { type: "heading", value: "Local SEO Importance", level: 2 },
      {
        type: "paragraph",
        value:
          "Local SEO is particularly important for small businesses. Claim your Google My Business profile, encourage customer reviews, and ensure your business information is consistent across all online directories. Building high-quality backlinks also signals authority to search engines.",
      },
    ],
    metadata: {
      title: "SEO Tips for Small Businesses to Rank Higher",
      description:
        "Practical SEO strategies for small businesses to improve search engine rankings and drive organic traffic.",
    },
  },
]
