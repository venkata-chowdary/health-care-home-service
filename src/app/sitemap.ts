import type { MetadataRoute } from "next";

import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = hospital.services
    .filter((service) => service.slug !== undefined)
    .map((service) => ({ url: `${siteUrl}/services/${service.slug}` }));

  const guidePages = guides.map((guide) => ({ url: `${siteUrl}/guides/${guide.slug}` }));

  return [{ url: siteUrl }, ...servicePages, { url: `${siteUrl}/guides` }, ...guidePages, { url: `${siteUrl}/privacy` }, { url: `${siteUrl}/terms` }];
}
