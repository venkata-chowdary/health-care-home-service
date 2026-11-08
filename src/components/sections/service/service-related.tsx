import { ServiceCard } from "@/components/healthcare/service-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceRelatedProps = {
  slugs: string[];
  surface: boolean;
};

export function ServiceRelated({ slugs, surface }: ServiceRelatedProps) {
  const { services, serviceBlocks, servicesSection } = hospital;
  const relatedServices = slugs.map((slug) => services.find((service) => service.slug === slug)).filter((service) => service !== undefined);

  return (
    <Section id="related" aria-labelledby="related-heading" surface={surface} containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="related-heading" align="center" eyebrow={serviceBlocks.relatedEyebrow} eyebrowVariant={surface ? "white" : "default"} title={serviceBlocks.relatedTitle} />
      <RevealGroup className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {relatedServices.map((service, index) => (
          <RevealItem key={service.name} index={index} lift>
            <ServiceCard
              name={service.name}
              icon={service.icon}
              summary={service.summary}
              subServices={service.subServices.slice(0, 4)}
              linkLabel={servicesSection.linkLabel}
              linkHref={`/services/${service.slug}`}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
