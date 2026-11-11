import { GuideCard } from "@/components/healthcare/guide-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { guides } from "@/data/guides";
import { hospital } from "@/data/hospital-content";

export function Guides() {
  const { guidesSection } = hospital;

  return (
    <Section id="guides" aria-labelledby="guides-heading" containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="guides-heading" align="center" eyebrow={guidesSection.eyebrow} title={guidesSection.title} lead={guidesSection.lead} />
      <RevealGroup className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1 min-[641px]:max-[960px]:[&>*:last-child:nth-child(odd)]:col-span-2">
        {guides.slice(0, 3).map((guide, index) => (
          <RevealItem key={guide.slug} index={index}>
            <GuideCard slug={guide.slug} title={guide.title} description={guide.description} minutes={guide.minutes} readLabel={guidesSection.readLabel} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="flex justify-center">
        <ArrowLink href={guidesSection.allHref}>{guidesSection.allLabel}</ArrowLink>
      </div>
    </Section>
  );
}
