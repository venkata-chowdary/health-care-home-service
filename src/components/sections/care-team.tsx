import { CareTeamCard } from "@/components/healthcare/care-team-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function CareTeam() {
  const { careTeam, careTeamSection } = hospital;

  return (
    <Section id="care-team" aria-labelledby="care-team-heading" surface containerClassName="grid grid-cols-[300px_minmax(0,1fr)] items-start gap-12 max-[960px]:grid-cols-[minmax(0,1fr)] max-[960px]:gap-8">
      <div className="grid justify-items-start gap-4">
        <SectionHeading headingId="care-team-heading" eyebrow={careTeamSection.eyebrow} eyebrowVariant="white" title={careTeamSection.title} lead={careTeamSection.lead} className="gap-4!" />
        <ArrowLink href={careTeamSection.linkHref}>{careTeamSection.linkLabel}</ArrowLink>
      </div>
      <RevealGroup lenisPrevent className="grid min-w-0 max-w-full grid-cols-3 gap-4 max-[640px]:auto-cols-[72%] max-[640px]:grid-flow-col max-[640px]:grid-cols-none max-[640px]:snap-x max-[640px]:snap-mandatory max-[640px]:overflow-x-auto max-[640px]:[scrollbar-width:none]">
        {careTeam.map((member, index) => (
          <RevealItem key={index} index={index} lift className="max-[640px]:snap-start">
            <CareTeamCard name={member.name} role={member.role} photo={member.photo} photoLabel={careTeamSection.photoLabel} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
