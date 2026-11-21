import type { Metadata } from "next";

import { ServiceCard } from "@/components/healthcare/service-card";
import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: hospital.servicesSection.indexTitle, description: hospital.servicesSection.indexLead, path: "/services" });

export default function ServicesIndexPage() {
  const { navigation, services, servicesSection } = hospital;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: hospital.serviceHero.homeLabel, item: siteUrl },
      { "@type": "ListItem", position: 2, name: hospital.serviceHero.servicesLabel, item: `${siteUrl}/services` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: item.href.startsWith("/") ? item.href : `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        email={{ display: hospital.email.display.value, href: hospital.email.href.value }}
        infoStrip={navigation.infoStrip}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref={navigation.bookHref}
      />

      <main id="top">
        <Section aria-labelledby="services-index-heading" className="pt-10 md:pt-12 lg:pt-16" containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
          <SectionHeading as="h1" headingId="services-index-heading" align="center" title={servicesSection.indexTitle} lead={servicesSection.indexLead} />
          <RevealGroup className="grid grid-cols-3 gap-4 min-[901px]:[&>*:last-child:nth-child(3n+1)]:col-start-2 max-[900px]:grid-cols-2 min-[561px]:max-[900px]:[&>*:last-child:nth-child(odd)]:col-span-2 max-[560px]:grid-cols-1">
            {services.map((service, index) => (
              <RevealItem key={service.name} index={index} lift>
                <ServiceCard
                  name={service.name}
                  icon={service.icon}
                  summary={service.summary}
                  subServices={service.subServices}
                  note={service.note}
                  linkLabel={service.externalLink ? service.externalLink.label : servicesSection.linkLabel}
                  linkHref={service.externalLink ? service.externalLink.href : `/services/${service.slug}`}
                  external={service.externalLink !== undefined}
                  photo={service.heroPhoto}
                />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="flex justify-center">
            <ArrowLink href={servicesSection.packagesHref}>{servicesSection.packagesLabel}</ArrowLink>
          </div>
        </Section>
        <Enquiry title={servicesSection.ctaTitle} surface />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
