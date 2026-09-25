import type { MetadataRoute } from "next";
import { articulos } from "@/lib/articulos";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  // /educacion queda fuera a propósito: está en construcción y se sirve con noindex.
  const estaticas: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: ahora, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified: ahora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified: ahora, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: ahora, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/quienes-somos`, lastModified: ahora, changeFrequency: "yearly", priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = articulos.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.fecha),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...estaticas, ...posts];
}
