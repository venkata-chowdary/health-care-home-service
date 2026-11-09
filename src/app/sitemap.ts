import type { MetadataRoute } from "next";

import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = hospital.siteUrl.value;

  const servicePages = hospital.services
    .filter((service) => service.slug !== undefined)
    .map((service) => ({ url: `${siteUrl}/services/${service.slug}`, priority: 0.8 }));

  const guidePages = guides.map((guide) => ({ url: `${siteUrl}/guides/${guide.slug}`, priority: 0.6 }));

  return [{ url: siteUrl, priority: 1 }, ...servicePages, { url: `${siteUrl}/guides`, priority: 0.7 }, ...guidePages];
}
