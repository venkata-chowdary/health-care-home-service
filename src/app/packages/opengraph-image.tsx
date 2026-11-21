import { hospital } from "@/data/hospital-content";
import { renderOgCard } from "@/lib/og-card";

export const alt = hospital.packages.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ eyebrow: hospital.packages.breadcrumbLabel, title: hospital.packages.title });
}
