import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Branches } from "@/components/sections/branches";
import { CareTeam } from "@/components/sections/care-team";
import { Cta } from "@/components/sections/cta";
import { CriticalCare } from "@/components/sections/critical-care";
import { Enquiry } from "@/components/sections/enquiry";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
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
        <Services />
        <HowItWorks />
        <WhyUs />
        <CareTeam />
        <CriticalCare />
        <Reviews />
        <Enquiry />
        <Branches />
        <Faq />
        <Cta />
      </main>

      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
