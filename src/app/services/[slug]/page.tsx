import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { Faq } from "@/components/sections/faq";
import { ServiceHero } from "@/components/sections/service/service-hero";
import { ServiceIncluded } from "@/components/sections/service/service-included";
import { ServicePrepare } from "@/components/sections/service/service-prepare";
import { ServiceVisit } from "@/components/sections/service/service-visit";
import { ServiceWhoFor } from "@/components/sections/service/service-who-for";
import { hospital } from "@/data/hospital-content";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return hospital.services.filter((service) => service.slug !== undefined).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = hospital.services.find((existing) => existing.slug === slug);
  if (!service || !service.page) return {};

  return pageMetadata({ title: service.page.seo.title, description: service.page.seo.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = hospital.services.find((existing) => existing.slug === slug);
  if (!service || !service.page || !service.heroPhoto) notFound();

  const { page, heroPhoto } = service;
  const { navigation, serviceBlocks } = hospital;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: page.seo.description,
    serviceType: service.name,
    url: `${siteUrl}/services/${slug}`,
    areaServed: { "@type": "City", name: "Hyderabad" },
    provider: { "@id": organizationId },
  };

  const confirmedFaqs = page.faqs.filter((faq) => faq.status !== "sample");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: confirmedFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: hospital.serviceHero.homeLabel, item: siteUrl },
      { "@type": "ListItem", position: 2, name: service.name, item: `${siteUrl}/services/${slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {confirmedFaqs.length > 0 && <JsonLd data={faqJsonLd} />}
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref={navigation.bookHref}
      />

      <main id="top">
        <ServiceHero name={service.name} eyebrow={page.eyebrow} title={page.title} lead={page.lead} facts={page.facts} photo={heroPhoto} />
        <ServiceIncluded items={page.included} surface />
        <ServiceWhoFor items={page.whoFor} photo={page.whoForPhoto} surface={false} />
        <ServiceVisit steps={page.visit} surface />
        <ServicePrepare prepare={page.prepare} callDoctor={page.callDoctor} surface={false} />
        <Faq items={page.faqs} eyebrow={serviceBlocks.faqEyebrow} title={`${serviceBlocks.faqTitlePrefix} ${service.name.toLowerCase()}`} surface showCallPrompt={false} />
        <Enquiry title={`${serviceBlocks.requestTitlePrefix} ${service.name.toLowerCase()}`} defaultService={service.name} surface={false} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
