import type { MetadataRoute } from "next";

import { hospital } from "@/data/hospital-content";
import { brandColor } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: hospital.name.value,
    short_name: "Hemalatha",
    description: hospital.homeSeo.description,
    start_url: "/",
    display: "standalone",
    background_color: brandColor.white,
    theme_color: brandColor.navy,
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
