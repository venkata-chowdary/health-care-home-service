import type { Metadata } from "next";

import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Enquiry } from "@/components/sections/enquiry";
import { hospital } from "@/data/hospital-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: hospital.contactPage.seoTitle, description: hospital.contactPage.seoDescription, path: "/contact" });

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service: requestedServiceSlug } = await searchParams;
  const requestedService = hospital.services.find((existing) => existing.slug === requestedServiceSlug);
  const { navigation } = hospital;

  return (
    <>
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: item.href.startsWith("/") ? item.href : `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        email={{ display: hospital.email.display.value, href: hospital.email.href.value }}
        infoStrip={navigation.infoStrip}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref="/contact"
      />

      <main id="top">
        <Enquiry title={hospital.contactPage.title} defaultService={requestedService?.name} surface={false} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
