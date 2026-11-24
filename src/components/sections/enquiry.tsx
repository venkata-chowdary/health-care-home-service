import { EnquiryForm } from "@/components/healthcare/enquiry-form";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CallButton } from "@/components/ui/call-button";
import { hospital } from "@/data/hospital-content";

type EnquiryProps = {
  title?: string;
  surface?: boolean;
};

export function Enquiry({ title, surface = true }: EnquiryProps) {
  const { enquiry, services, branches } = hospital;

  return (
    <Section id="enquiry" aria-labelledby="enquiry-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-8">
      <div className="grid justify-items-start gap-[18px]">
        <SectionHeading headingId="enquiry-heading" title={title ?? enquiry.title} lead={enquiry.lead} className="gap-[18px]!" />
        <CallButton />
      </div>
      <EnquiryForm copy={enquiry} serviceNames={services.map((service) => service.name)} serviceSlugs={services.map((service) => service.slug ?? "")} areaNames={branches.map((branch) => branch.name)} />
    </Section>
  );
}
