import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideCard } from "@/components/healthcare/guide-card";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { Section } from "@/components/layout/section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Icon } from "@/components/ui/icon";
import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((existing) => existing.slug === slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | ${hospital.name.value}`,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: { type: "article", title: guide.title, description: guide.description },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((existing) => existing.slug === slug);
  if (!guide) notFound();

  const { navigation, guidesSection, serviceHero } = hospital;
  const otherGuides = guides.filter((existing) => existing.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: hospital.name.value },
    publisher: { "@type": "Organization", name: hospital.legalName.value },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: serviceHero.homeLabel, item: hospital.siteUrl.value },
      { "@type": "ListItem", position: 2, name: guidesSection.allLabel, item: `${hospital.siteUrl.value}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${hospital.siteUrl.value}/guides/${slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
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
        <article className="pt-8 pb-section-mobile md:pb-section-tablet lg:pb-section">
          <Container className="mx-auto grid max-w-[760px] grid-cols-[minmax(0,1fr)] gap-8 max-md:gap-6">
            <nav aria-label={serviceHero.breadcrumbLabel}>
              <ol className="flex flex-wrap items-center gap-1.5 text-body-sm text-muted-foreground">
                <li>
                  <Link href="/" className="touch-target text-link no-underline">
                    {serviceHero.homeLabel}
                  </Link>
                </li>
                <Icon name="chevron-right" size={14} className="text-slate-400" />
                <li>
                  <Link href="/guides" className="touch-target text-link no-underline">
                    {guidesSection.allLabel}
                  </Link>
                </li>
              </ol>
            </nav>

            <header className="grid gap-4">
              <h1 className="text-h1 font-medium tracking-heading text-balance">{guide.title}</h1>
              <p className="text-caption text-muted-foreground">
                {guide.minutes} min read · {guidesSection.byline}
              </p>
              <p className="text-body-lg text-muted-foreground">{guide.intro}</p>
            </header>

            {guide.sections.map((section) => (
              <section key={section.heading} className="grid grid-cols-[minmax(0,1fr)] gap-3.5">
                <h2 className="text-h3 font-medium tracking-heading text-balance">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-body text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="grid gap-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                        <span className="mt-1 grid size-6 flex-none place-items-center rounded-full bg-accent text-primary">
                          <Icon name="check" size={14} strokeWidth={2} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface p-5 text-body-sm">
              <span className="text-muted-foreground">{guidesSection.relatedLabel}:</span>
              <ArrowLink href={`/services/${guide.serviceSlug}`}>{guide.serviceName}</ArrowLink>
            </p>
          </Container>
        </article>

        <Section aria-labelledby="more-guides-heading" surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-8">
          <h2 id="more-guides-heading" className="text-h3 font-medium tracking-heading">
            {guidesSection.eyebrow}
          </h2>
          <div className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1 min-[641px]:max-[960px]:[&>*:last-child:nth-child(odd)]:col-span-2">
            {otherGuides.map((other) => (
              <GuideCard key={other.slug} slug={other.slug} title={other.title} description={other.description} minutes={other.minutes} readLabel={guidesSection.readLabel} />
            ))}
          </div>
        </Section>

        <Enquiry title={guidesSection.ctaTitle} surface={false} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
