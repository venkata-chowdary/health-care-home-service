import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Departments } from "@/components/sections/departments";
import { Doctors } from "@/components/sections/doctors";
import { Enquiry } from "@/components/sections/enquiry";
import { Facilities } from "@/components/sections/facilities";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Reviews } from "@/components/sections/reviews";
import { Visit } from "@/components/sections/visit";
import { WhyUs } from "@/components/sections/why-us";
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
        <About />
        <Departments />
        <WhyUs />
        <Doctors />
        <Facilities />
        <Reviews />
        <Enquiry />
        <Visit />
        <Faq />
        <Cta />
      </main>

      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
