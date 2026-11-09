import type { Metadata } from "next";

import { GuideCard } from "@/components/healthcare/guide-card";
import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";

export const metadata: Metadata = {
  title: `${hospital.guidesSection.indexTitle} | ${hospital.name.value}`,
  description: hospital.guidesSection.indexLead,
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  const { navigation, guidesSection } = hospital;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: hospital.serviceHero.homeLabel, item: hospital.siteUrl.value },
      { "@type": "ListItem", position: 2, name: guidesSection.allLabel, item: `${hospital.siteUrl.value}/guides` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref={navigation.bookHref}
      />

      <main id="top">
        <Section aria-labelledby="guides-index-heading" containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
          <SectionHeading as="h1" headingId="guides-index-heading" align="center" eyebrow={guidesSection.eyebrow} title={guidesSection.indexTitle} lead={guidesSection.indexLead} />
          <RevealGroup className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1 min-[641px]:max-[960px]:[&>*:last-child:nth-child(odd)]:col-span-2">
            {guides.map((guide, index) => (
              <RevealItem key={guide.slug} index={index}>
                <GuideCard slug={guide.slug} title={guide.title} description={guide.description} minutes={guide.minutes} readLabel={guidesSection.readLabel} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
        <Enquiry title={guidesSection.ctaTitle} surface />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
