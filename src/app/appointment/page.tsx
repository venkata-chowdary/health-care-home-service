import type { Metadata } from "next";

import { JsonLd } from "@/components/layout/json-ld";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppointmentFormSection } from "@/components/sections/appointment-form-section";
import { hospital } from "@/data/hospital-content";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: hospital.appointmentPage.seoTitle, description: hospital.appointmentPage.seoDescription, path: hospital.appointmentPage.path });

export default async function AppointmentPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service: requestedServiceSlug } = await searchParams;
  const requestedService = hospital.services.find((existing) => existing.slug === requestedServiceSlug);
  const { navigation, appointmentPage } = hospital;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: appointmentPage.breadcrumbHome, item: siteUrl },
      { "@type": "ListItem", position: 2, name: appointmentPage.breadcrumbCurrent, item: `${siteUrl}${appointmentPage.path}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        email={{ display: hospital.email.display.value, href: hospital.email.href.value }}
        infoStrip={navigation.infoStrip}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref={appointmentPage.path}
      />

      <main id="top">
        <AppointmentFormSection defaultService={requestedService?.name} />
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
