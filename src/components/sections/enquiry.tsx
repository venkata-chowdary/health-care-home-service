import { EnquiryForm } from "@/components/healthcare/enquiry-form";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { hospital } from "@/data/hospital-content";

export function Enquiry() {
  const { enquiry, phone, departments } = hospital;

  return (
    <Section id="enquiry" aria-labelledby="enquiry-heading" surface containerClassName="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-8">
      <div className="grid justify-items-start gap-[18px]">
        <SectionHeading headingId="enquiry-heading" eyebrow={enquiry.eyebrow} eyebrowVariant="white" title={enquiry.title} lead={enquiry.lead} className="gap-[18px]!" />
        <div className="grid w-full justify-items-start gap-3 rounded-card bg-background p-6">
          <span className="text-caption text-muted-foreground">{enquiry.callPrompt}</span>
          <a href={phone.href.value} className="text-[28px] font-medium tracking-[-0.03em] text-foreground no-underline">
            {phone.display.value}
          </a>
          <Button href={phone.href.value} size="sm" iconBefore="phone">
            {enquiry.callLabel}
          </Button>
        </div>
      </div>
      <EnquiryForm copy={enquiry} departmentNames={departments.map((department) => department.name)} />
    </Section>
  );
}
