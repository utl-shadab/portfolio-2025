
import { MetadataRoute } from "next";
import * as blogModule from "@/lib/blog-data";
import * as servicesModule from "@/lib/services";
import * as projectsModule from "@/lib/projects";

const BASE_URL = "https://arrowedge.in";

type SitemapItem = MetadataRoute.Sitemap[number];

type Normalized = {
  slug: string;
  updatedAt?: string | Date;
};

function normalizeArray(value: any): Normalized[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item) return null;
      if (typeof item === "string") return { slug: item };
      if (typeof item === "object") {
        const slug = item.slug ?? item.id ?? item.name;
        const updatedAt =
          item.updatedAt ??
          item.updated_at ??
          item.updated ??
          item.lastModified ??
          item.mtime;
        if (!slug) return null;
        return { slug: String(slug), updatedAt };
      }
      return null;
    })
    .filter(Boolean) as Normalized[];
}

function extractFromModule(mod: any): Normalized[] {
  if (!mod) return [];
  const candidates = [
    mod.default,
    mod.posts,
    mod.blogPosts,
    mod.items,
    mod.data,
    mod.services,
    mod.projects,
  ];

  for (const candidate of candidates) {
    const normalized = normalizeArray(candidate);
    if (normalized.length) return normalized;
  }

  const arraysInModule = Object.values(mod).filter((v) => Array.isArray(v));
  for (const arr of arraysInModule) {
    const normalized = normalizeArray(arr);
    if (normalized.length) return normalized;
  }

  return [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: SitemapItem[] = [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/work` },
    { url: `${BASE_URL}/contact` },
    { url: `${BASE_URL}/blog` },
    { url: `${BASE_URL}/services` },
  ];

  const blogSources = extractFromModule(blogModule);
  const serviceSources = extractFromModule(servicesModule);
  const projectSources = extractFromModule(projectsModule);

  const blogEntries: SitemapItem[] = blogSources.map((b) => ({
    url: `${BASE_URL}/blog/${encodeURIComponent(b.slug)}`,
    lastModified: b.updatedAt,
  }));

  const serviceEntries: SitemapItem[] = serviceSources.map((s) => ({
    url: `${BASE_URL}/services/${encodeURIComponent(s.slug)}`,
    lastModified: s.updatedAt,
  }));

  const projectEntries: SitemapItem[] = projectSources.map((p) => ({
    url: `${BASE_URL}/work/${encodeURIComponent(p.slug)}`,
    lastModified: p.updatedAt,
  }));

  return [...staticPages, ...serviceEntries, ...projectEntries, ...blogEntries];
}
