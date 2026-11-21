import { PackageCard } from "@/components/healthcare/package-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServicePricingProps = {
  surface: boolean;
  serviceName: string;
  rows: { label: string; price: string | null; unit: string }[];
};

export function ServicePricing({ surface, serviceName, rows }: ServicePricingProps) {
  const { packages } = hospital;

  return (
    <Section id="pricing" aria-labelledby="pricing-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] justify-items-center gap-8 max-md:gap-6">
      <SectionHeading headingId="pricing-heading" align="center" title={packages.serviceTitle} lead={packages.serviceLead} />
      <Reveal className="w-full max-w-[560px]">
        <PackageCard name={serviceName} rows={rows} />
      </Reveal>
      <p className="max-w-[60ch] text-center text-body-sm text-muted-foreground">{packages.disclaimer}</p>
      <ArrowLink href={packages.path}>{packages.allPackagesLabel}</ArrowLink>
    </Section>
  );
}
