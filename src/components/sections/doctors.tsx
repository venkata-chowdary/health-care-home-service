import { DoctorCard } from "@/components/healthcare/doctor-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function Doctors() {
  const { doctors, doctorsSection } = hospital;

  return (
    <Section id="doctors" aria-labelledby="doctors-heading" surface containerClassName="grid grid-cols-[300px_minmax(0,1fr)] items-center gap-12 max-[960px]:grid-cols-1 max-[960px]:gap-8">
      <div className="grid justify-items-start gap-4">
        <SectionHeading headingId="doctors-heading" eyebrow={doctorsSection.eyebrow} eyebrowVariant="white" title={doctorsSection.title} lead={doctorsSection.lead} className="gap-4!" />
        <ArrowLink href={doctorsSection.linkHref}>{doctorsSection.linkLabel}</ArrowLink>
      </div>
      <RevealGroup lenisPrevent className="grid grid-cols-3 gap-4 max-[640px]:auto-cols-[72%] max-[640px]:grid-flow-col max-[640px]:grid-cols-none max-[640px]:snap-x max-[640px]:snap-mandatory max-[640px]:overflow-x-auto max-[640px]:[scrollbar-width:none]">
        {doctors.map((doctor, index) => (
          <RevealItem key={index} index={index} lift className="max-[640px]:snap-start">
            <DoctorCard name={doctor.name} department={doctor.department} photo={doctor.photo} photoLabel={doctorsSection.photoLabel} href={doctorsSection.linkHref} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
