import type { Metadata } from "next";

import { hospital } from "@/data/hospital-content";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? hospital.siteUrl.value;

export const organizationId = `${siteUrl}/#organization`;

export const brandColor = { navy: "#0B1B45", sky: "#8FB1FF", mist: "#C9D3EE", white: "#FFFFFF" };

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function pageMetadata({ title, description, path, type = "website" }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, title, description, siteName: hospital.name.value, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}
