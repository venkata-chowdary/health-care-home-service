import { CareTeamCard } from "@/components/healthcare/care-team-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceRoleProps = {
  role: { title: string; detail: string; teamRoles: string[] };
  surface: boolean;
};

export function ServiceRole({ role, surface }: ServiceRoleProps) {
  const { careTeam, careTeamSection, serviceBlocks } = hospital;
  const matchingMembers = careTeam.filter((member) => role.teamRoles.includes(member.role));

  return (
    <Section id="who-will-care" aria-labelledby="who-will-care-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-14 max-[960px]:grid-cols-1 max-[960px]:gap-8">
      <div className="grid justify-items-start gap-4">
        <SectionHeading headingId="who-will-care-heading" eyebrow={serviceBlocks.roleEyebrow} eyebrowVariant={surface ? "white" : "default"} title={role.title} lead={role.detail} className="gap-4!" />
        <ArrowLink href={careTeamSection.linkHref}>{careTeamSection.linkLabel}</ArrowLink>
      </div>
      <RevealGroup className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
        {matchingMembers.map((member, index) => (
          <RevealItem key={member.role} index={index} lift>
            <CareTeamCard name={member.name} role={member.role} photo={member.photo} photoLabel={careTeamSection.photoLabel} requestLabel={careTeamSection.requestLabel} href={careTeamSection.linkHref} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
