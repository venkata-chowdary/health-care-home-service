import { DepartmentCard } from "@/components/healthcare/department-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Tag } from "@/components/ui/tag";
import { hospital } from "@/data/hospital-content";

export function Departments() {
  const { departments, departmentsSection } = hospital;
  const hasSampleDepartments = departments.some((department) => department.status === "sample");

  return (
    <Section id="departments" aria-labelledby="departments-heading" containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading
        headingId="departments-heading"
        align="center"
        eyebrow={departmentsSection.eyebrow}
        title={departmentsSection.title}
        lead={
          <>
            {departmentsSection.lead} {hasSampleDepartments && <Tag variant="sample">{departmentsSection.sampleTag}</Tag>}
          </>
        }
      />
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {departments.map((department, index) => (
          <DepartmentCard key={department.name} name={department.name} icon={department.icon} summary={department.summary} linkLabel={departmentsSection.linkLabel} linkHref={departmentsSection.linkHref} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}
