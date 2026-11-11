import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { legalDocuments } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const termsDocument = legalDocuments.find((legalDocument) => legalDocument.slug === "terms")!;

export const metadata: Metadata = pageMetadata({ title: termsDocument.title, description: termsDocument.description, path: "/terms" });

export default function TermsPage() {
  return <LegalPage document={termsDocument} />;
}
