import type { Metadata } from "next";

import { PackageCard } from "@/components/healthcare/package-card";
import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { CallButton } from "@/components/ui/call-button";
import { RequestButton } from "@/components/ui/request-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: hospital.packages.seo.title, description: hospital.packages.seo.description, path: hospital.packages.path });

export default function PackagesPage() {
  const { navigation, packages, services } = hospital;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: hospital.serviceHero.homeLabel, item: siteUrl },
      { "@type": "ListItem", position: 2, name: packages.breadcrumbLabel, item: `${siteUrl}${packages.path}` },
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
        <Section aria-labelledby="packages-heading" className="pt-10 md:pt-12 lg:pt-16" containerClassName="grid grid-cols-[minmax(0,1fr)] justify-items-center gap-8 max-md:gap-6">
          <SectionHeading as="h1" headingId="packages-heading" align="center" title={packages.title} lead={packages.lead} />
          <div className="flex flex-wrap justify-center gap-3 max-[480px]:w-full max-[480px]:flex-col">
            <RequestButton />
            <CallButton />
          </div>
          <RevealGroup className="grid w-full grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {packages.legend.map((item, index) => (
              <RevealItem key={item.label} index={index}>
                <div className="grid content-start gap-1 rounded-lg border border-border bg-surface p-5">
                  <h2 className="text-body font-semibold tracking-title">{item.label}</h2>
                  <p className="text-[15px] text-muted-foreground">{item.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>

        <Section aria-labelledby="packages-grid-heading" surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
          <SectionHeading headingId="packages-grid-heading" align="center" title={packages.gridTitle} lead={packages.gridLead} />
          <RevealGroup className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {packages.categories.map((category, index) => {
              const service = services.find((existing) => existing.slug === category.serviceSlug);
              if (!service) return null;
              return (
                <RevealItem key={category.serviceSlug} index={index}>
                  <PackageCard name={service.name} rows={category.rows} serviceHref={`/services/${category.serviceSlug}`} />
                </RevealItem>
              );
            })}
          </RevealGroup>
          <p className="mx-auto max-w-[64ch] text-center text-body-sm text-muted-foreground">{packages.disclaimer}</p>
        </Section>

        <Section aria-labelledby="packages-extras-heading" containerClassName="grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">
          <Reveal>
            <article className="grid h-full content-start gap-3 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
              <h2 id="packages-extras-heading" className="text-body font-semibold tracking-title">
                {packages.registrationTitle}
              </h2>
              <p className="text-h3 font-medium">
                {packages.registrationAmount} <span className="text-body-sm font-normal text-muted-foreground">{packages.registrationUnit}</span>
              </p>
              <p className="text-[15px] text-muted-foreground">{packages.registrationDetail}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="grid h-full content-start gap-3 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
              <h2 className="text-body font-semibold tracking-title">{packages.proceduresTitle}</h2>
              <p className="text-[15px] text-muted-foreground">{packages.proceduresLead}</p>
              <ul className="flex flex-wrap gap-2">
                {packages.procedures.map((procedure) => (
                  <li key={procedure} className="rounded-button border border-border bg-surface px-3 py-1 text-body-sm">
                    {procedure}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </Section>

        <Section aria-labelledby="packages-steps-heading" surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
          <SectionHeading headingId="packages-steps-heading" align="center" title={packages.stepsTitle} />
          <RevealGroup className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {packages.steps.map((step, index) => (
              <RevealItem key={step.title} index={index}>
                <article className="grid content-start gap-2 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
                  <span className="text-body-sm font-medium text-primary">{index + 1}</span>
                  <h3 className="text-body font-semibold tracking-title">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground">{step.detail}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>

        <Enquiry title={packages.ctaTitle} surface={false} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
