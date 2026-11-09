import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { Faq } from "@/components/sections/faq";
import { ServiceHero } from "@/components/sections/service/service-hero";
import { ServiceIncluded } from "@/components/sections/service/service-included";
import { ServiceWhoFor } from "@/components/sections/service/service-who-for";
import { hospital } from "@/data/hospital-content";

export function generateStaticParams() {
  return hospital.services.filter((service) => service.slug !== undefined).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = hospital.services.find((existing) => existing.slug === slug);
  if (!service || !service.page) return {};

  return {
    title: `${service.name} | ${hospital.name.value}`,
    description: service.page.lead,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = hospital.services.find((existing) => existing.slug === slug);
  if (!service || !service.page || !service.heroPhoto) notFound();

  const { page, heroPhoto } = service;
  const { navigation, serviceBlocks } = hospital;

  return (
    <>
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
        <Faq items={page.faqs} eyebrow={serviceBlocks.faqEyebrow} title={`${serviceBlocks.faqTitlePrefix} ${service.name.toLowerCase()}`} surface showCallPrompt={false} />
        <Enquiry title={`${serviceBlocks.requestTitlePrefix} ${service.name.toLowerCase()}`} defaultService={service.name} surface={false} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
