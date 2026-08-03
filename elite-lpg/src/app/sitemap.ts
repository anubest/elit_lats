import type { MetadataRoute } from "next";
import { seo, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/business-activities",
    "/projects",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${seo.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${seo.url}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
