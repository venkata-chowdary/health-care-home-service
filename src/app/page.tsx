import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { hospital } from "@/data/hospital-content";

export default function Home() {
  return (
    <>
      <SiteHeader
        brandName={hospital.name.value}
        navItems={hospital.navigation.items}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        bookLabel={hospital.navigation.bookLabel}
        drawerBookLabel={hospital.navigation.drawerBookLabel}
        bookHref={hospital.navigation.bookHref}
      />

      <main id="top">
        <Hero />
        <section id="about" aria-label="About" />
        <section id="departments" aria-label="Departments" />
        <section id="why-us" aria-label="Why patients choose us" />
        <section id="doctors" aria-label="Doctors" />
        <section id="facilities" aria-label="Facilities" />
        <section id="reviews" aria-label="Patient reviews" />
        <section id="enquiry" aria-label="Appointment enquiry" />
        <section id="visit" aria-label="Visit us" />
        <section id="faq" aria-label="Frequently asked questions" />
        <section id="cta" aria-label="Contact" />
      </main>

      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
