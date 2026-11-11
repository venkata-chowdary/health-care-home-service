import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { hospital } from "@/data/hospital-content";

export const metadata: Metadata = { title: hospital.errorPages.notFoundTitle, robots: { index: false } };

export default function NotFoundPage() {
  const { navigation, errorPages, whatsapp } = hospital;

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
        <section className="py-section-mobile md:py-section-tablet lg:py-section">
          <Container className="mx-auto grid max-w-[640px] justify-items-center gap-6 text-center">
            <p className="text-body-sm font-medium text-primary">404</p>
            <h1 className="text-h1 font-medium tracking-heading text-balance">{errorPages.notFoundTitle}</h1>
            <p className="text-body-lg text-muted-foreground">{errorPages.notFoundLead}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/" iconBefore="arrow-left">
                {errorPages.homeLabel}
              </Button>
              <CallButton />
              <Button href={whatsapp.href.value} variant="secondary" target="_blank" iconBefore="messages-square">
                {whatsapp.label}
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
