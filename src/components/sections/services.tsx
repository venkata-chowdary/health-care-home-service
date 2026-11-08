import { ServiceCard } from "@/components/healthcare/service-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function Services() {
  const { services, servicesSection } = hospital;

  return (
    <Section id="services" aria-labelledby="services-heading" containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="services-heading" align="center" eyebrow={servicesSection.eyebrow} title={servicesSection.title} lead={servicesSection.lead} />
      <RevealGroup className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {services.map((service, index) => (
          <RevealItem key={service.name} index={index} lift>
            <ServiceCard
              name={service.name}
              icon={service.icon}
              summary={service.summary}
              subServices={service.subServices.slice(0, 4)}
              note={service.note}
              linkLabel={service.externalLink ? service.externalLink.label : servicesSection.linkLabel}
              linkHref={service.externalLink ? service.externalLink.href : `/services/${service.slug}`}
              external={service.externalLink !== undefined}
              featured={index === 0}
              featuredPhoto={index === 0 ? servicesSection.featuredPhoto : undefined}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
