import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Sin Disallow a propósito: /educacion se excluye con <meta robots="noindex">,
      // y Google solo puede leer esa etiqueta si se le permite rastrear la página.
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
