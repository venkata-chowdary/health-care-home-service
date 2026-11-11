import { hospital } from "@/data/hospital-content";
import { renderOgCard } from "@/lib/og-card";

export const alt = "Hemalatha Health Care home healthcare service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return hospital.services.filter((service) => service.slug !== undefined).map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = hospital.services.find((existing) => existing.slug === slug);

  return renderOgCard({ eyebrow: "Home healthcare in Hyderabad", title: service?.page?.seo.title ?? hospital.homeSeo.title });
}
