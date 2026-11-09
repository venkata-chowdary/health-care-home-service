import { JsonLd } from "@/components/layout/json-ld";
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
import { Guides } from "@/components/sections/guides";
import { Hero } from "@/components/sections/hero";
import { HomeCareFit } from "@/components/sections/home-care-fit";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { hospital } from "@/data/hospital-content";

export default function Home() {
  const mainBranch = hospital.branches[0];

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: hospital.name.value,
    legalName: hospital.legalName.value,
    description: "Home nursing, critical care, elder care, post-operative care and physiotherapy at home across Hyderabad.",
    telephone: "+918639074341",
    email: hospital.email.display.value,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 22, KPHB Colony, Kukatpally",
      addressLocality: mainBranch.city,
      addressRegion: "Telangana",
      postalCode: mainBranch.postalCode,
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Hyderabad" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    makesOffer: hospital.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name, description: service.summary },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hospital.faqs
      .filter((faq) => faq.status !== "sample")
      .map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
  };

  return (
    <>
      <JsonLd data={businessJsonLd} />
      <JsonLd data={faqJsonLd} />
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
        <Services />
        <WhyUs />
        <HowItWorks surface={false} />
        <HomeCareFit />
        <CriticalCare />
        <Reviews />
        <CareTeam />
        <About />
        <Branches />
        <Guides />
        <Faq />
        <Cta />
        <Enquiry />
      </main>

      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
