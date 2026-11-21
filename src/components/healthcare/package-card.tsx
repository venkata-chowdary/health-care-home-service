import { Tag } from "@/components/ui/tag";
import { hospital } from "@/data/hospital-content";

type PackageCardProps = {
  name: string;
  rows: { label: string; price: string | null; unit: string }[];
  serviceHref?: string;
};

export function PackageCard({ name, rows, serviceHref }: PackageCardProps) {
  const { packages } = hospital;

  return (
    <article className="grid h-full content-start gap-4 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-body font-semibold tracking-title">
          {serviceHref ? (
            <a href={serviceHref} className="text-foreground no-underline hover:text-primary">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <Tag variant="sample">{packages.sampleLabel}</Tag>
      </div>
      <dl className="grid gap-0">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 border-t border-border py-3 first:border-t-0 first:pt-0">
            <dt className="text-body-sm text-muted-foreground">{row.label}</dt>
            <dd className="text-right text-[15px] font-medium">
              {row.price === null && packages.contactLabel}
              {row.price === "assessment" && packages.assessmentLabel}
              {row.price !== null && row.price !== "assessment" && (
                <>
                  {row.price}
                  <span className="font-normal text-muted-foreground">{row.unit}</span>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
