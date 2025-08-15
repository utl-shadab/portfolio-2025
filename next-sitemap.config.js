const blogPosts = require("./lib/blog-data.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://arrow-2025.netlify.app',
  generateRobotsTxt: true,
  
  sitemapSize: 5000,
  
  changefreq: "weekly",
  
  priority: 0.8,
  additionalPaths: async () => {
    const today = new Date().toISOString();

    const staticPages = ["", "about", "services", "work", "contact", "blog"].map((page) => ({
      loc: `/${page}`,
      lastmod: today,
      changefreq: "weekly",
      priority: page === "" ? 1.0 : 0.8
    }));

    const blogPages = blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8
    }));

    return [...staticPages, ...blogPages];
  },
  
  outDir: './public',
  filename: 'sitemap.xml',
};
