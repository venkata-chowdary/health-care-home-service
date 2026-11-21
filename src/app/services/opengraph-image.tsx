import { hospital } from "@/data/hospital-content";
import { renderOgCard } from "@/lib/og-card";

export const alt = "Hemalatha Health Care home care services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ eyebrow: "Home healthcare in Hyderabad", title: hospital.servicesSection.indexTitle });
}
