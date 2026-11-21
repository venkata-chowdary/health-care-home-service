import { ServiceCard } from "@/components/healthcare/service-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function Services() {
  const { services, servicesSection } = hospital;

  return (
    <Section id="services" aria-labelledby="services-heading" surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="services-heading" align="center" title={servicesSection.title} lead={servicesSection.lead} />
      <RevealGroup className="grid grid-cols-3 gap-4 min-[901px]:[&>*:last-child]:col-start-2 max-[900px]:grid-cols-2 min-[561px]:max-[900px]:[&>*:last-child:nth-child(odd)]:col-span-2 max-[560px]:grid-cols-1">
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
              photo={index === 0 ? servicesSection.featuredPhoto : service.heroPhoto}
            />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="flex justify-center">
        <ArrowLink href={servicesSection.allHref}>{servicesSection.allLabel}</ArrowLink>
      </div>
    </Section>
  );
}
