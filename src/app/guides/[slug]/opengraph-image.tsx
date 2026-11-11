import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";
import { renderOgCard } from "@/lib/og-card";

export const alt = "Hemalatha Health Care home care guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((existing) => existing.slug === slug);

  return renderOgCard({ eyebrow: "Home care guide", title: guide?.title ?? hospital.homeSeo.title });
}
