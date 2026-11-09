import { StepCard } from "@/components/healthcare/step-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceVisitProps = {
  steps: string[];
  surface: boolean;
};

export function ServiceVisit({ steps, surface }: ServiceVisitProps) {
  const { serviceBlocks, howItWorksSection } = hospital;

  return (
    <Section id="visit" aria-labelledby="visit-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="visit-heading" align="center" eyebrow={serviceBlocks.visitEyebrow} eyebrowVariant={surface ? "white" : "default"} title={serviceBlocks.visitTitle} lead={serviceBlocks.visitLead} />
      <RevealGroup className="grid grid-cols-5 gap-4 max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1 min-[521px]:max-[800px]:[&>*:last-child:nth-child(odd)]:col-span-2">
        {steps.map((step, index) => (
          <RevealItem key={step} index={index}>
            <StepCard number={index + 1} stepLabel={howItWorksSection.stepLabel} detail={step} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
