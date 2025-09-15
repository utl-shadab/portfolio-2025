import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/service-detail"
import { getServiceBySlug, getRelatedServices, services } from "@/lib/services"

interface ServicePageProps {
  params: Promise<{ slug: string }> 
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params 
  const service = getServiceBySlug(slug) 
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.tags.join(", "),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.heroImage.desktop,
          width: 1200,
          height: 630,
          alt: service.heroImage.alt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage.desktop],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params 
  const service = getServiceBySlug(slug) 
  if (!service) {
    notFound()
  }
  const relatedServices = getRelatedServices(service, 3)

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Arrow Edge Studio",
    },
    url: `/services/${service.slug}`,
    ...(service.testimonial && {
      review: {
        "@type": "Review",
        reviewBody: service.testimonial.quote,
        author: {
          "@type": "Person",
          name: service.testimonial.author,
          jobTitle: service.testimonial.position,
          worksFor: {
            "@type": "Organization",
            name: service.testimonial.company,
          },
        },
      },
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
        <Navigation />
        <ServiceDetail service={service} relatedServices={relatedServices} />
        <Footer />
      </main>
    </>
  )
}