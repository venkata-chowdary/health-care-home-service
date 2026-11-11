import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { legalDocuments } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const privacyDocument = legalDocuments.find((legalDocument) => legalDocument.slug === "privacy")!;

export const metadata: Metadata = pageMetadata({ title: privacyDocument.title, description: privacyDocument.description, path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage document={privacyDocument} />;
}
