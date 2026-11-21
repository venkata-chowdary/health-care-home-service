import { ServiceCard } from "@/components/healthcare/service-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceRelatedProps = {
  surface: boolean;
  slugs: string[];
};

export function ServiceRelated({ slugs, surface }: ServiceRelatedProps) {
  const { services, serviceBlocks, servicesSection } = hospital;
  const relatedServices = slugs.map((slug) => services.find((service) => service.slug === slug)).filter((service) => service !== undefined);

  return (
    <Section id="related" aria-labelledby="related-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <SectionHeading headingId="related-heading" align="left" title={serviceBlocks.relatedTitle} />
        <ArrowLink href={servicesSection.allHref}>{serviceBlocks.relatedLinkLabel}</ArrowLink>
      </div>
      <RevealGroup className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {relatedServices.map((service, index) => (
          <RevealItem key={service.name} index={index} lift>
            <ServiceCard
              name={service.name}
              icon={service.icon}
              summary={service.summary}
              subServices={service.subServices.slice(0, 4)}
              photo={service.heroPhoto}
              linkLabel={servicesSection.linkLabel}
              linkHref={`/services/${service.slug}`}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
