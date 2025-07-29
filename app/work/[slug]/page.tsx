import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug, getRelatedProjects, projects } from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{ slug: string }> // Update type to reflect that params is a Promise
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params // Await params to resolve the Promise
  const project = getProjectBySlug(slug)
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.tags.join(", "),
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      images: [
        {
          url: project.heroImage.desktop,
          width: 1200,
          height: 630,
          alt: project.heroImage.alt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [project.heroImage.desktop],
    },
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params 
  const project = getProjectBySlug(slug)
  if (!project) {
    notFound()
  }
  const relatedProjects = getRelatedProjects(project, 3)
  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    author: {
      "@type": "Organization",
      name: "Arrow Edge Studio",
    },
    dateCreated: project.year,
    genre: project.category,
    keywords: project.tags.join(", "),
    image: project.heroImage.desktop,
    ...(project.testimonial && {
      review: {
        "@type": "Review",
        reviewBody: project.testimonial.quote,
        author: {
          "@type": "Person",
          name: project.testimonial.author,
          jobTitle: project.testimonial.position,
          worksFor: {
            "@type": "Organization",
            name: project.testimonial.company,
          },
        },
      },
    }),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <Navigation />
        <ProjectDetail project={project} relatedProjects={relatedProjects} />
        <Footer />
      </main>
    </>
  )
}