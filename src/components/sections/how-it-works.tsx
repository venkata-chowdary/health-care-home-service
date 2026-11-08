import { StepCard } from "@/components/healthcare/step-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { RequestButton } from "@/components/ui/request-button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function HowItWorks({ surface = true }) {
  const { howItWorks, howItWorksSection } = hospital;

  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-heading" surface={surface} containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="how-it-works-heading" align="center" eyebrow={howItWorksSection.eyebrow} eyebrowVariant={surface ? "white" : "default"} title={howItWorksSection.title} lead={howItWorksSection.lead} />
      <RevealGroup className="grid grid-cols-4 gap-4 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
        {howItWorks.map((step, index) => (
          <RevealItem key={step.title} index={index}>
            <StepCard number={index + 1} stepLabel={howItWorksSection.stepLabel} title={step.title} detail={step.detail} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <RequestButton />
      </div>
    </Section>
  );
}
