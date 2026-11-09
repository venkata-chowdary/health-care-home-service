import type { MetadataRoute } from "next";

import { hospital } from "@/data/hospital-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/design-system" },
    sitemap: `${hospital.siteUrl.value}/sitemap.xml`,
  };
}
