import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { hospital } from "@/data/hospital-content";

export function Visit() {
  const { visitSection, address, hours, name } = hospital;
  const openHours = hours[0];

  return (
    <Section id="visit" aria-labelledby="visit-heading" containerClassName="grid gap-12 max-md:gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading headingId="visit-heading" eyebrow={visitSection.eyebrow} title={visitSection.title} />
        <p className="text-body-sm text-muted-foreground">{visitSection.aside}</p>
      </div>

      <div className="relative">
        <PhotoFrame
          alt={visitSection.photo.label}
          icon={isIconName(visitSection.photo.icon) ? visitSection.photo.icon : undefined}
          label={visitSection.photo.label}
          labelSide="right"
          radius="xl"
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="aspect-[4/3] md:aspect-auto md:h-[400px] xl:h-[490px]"
        />
        <div className="absolute top-6 left-6 grid w-[min(340px,calc(100%-48px))] gap-3.5 rounded-card bg-background p-6 shadow-float max-md:relative max-md:top-auto max-md:left-auto max-md:mx-3 max-md:-mt-16 max-md:w-auto">
          <span className="text-caption text-muted-foreground">{name.value}</span>
          <h3 className="text-[20px] leading-[1.3] font-medium tracking-[-0.02em]">
            {address.locality.value}, {address.city.value} {address.postalCode.value}
          </h3>
          <span className="inline-flex items-center gap-2 text-caption font-medium text-success before:size-[7px] before:rounded-full before:bg-current before:shadow-[0_0_0_4px_var(--color-success-surface)] before:content-['']">
            {visitSection.openPrefix} {openHours.value}
          </span>
          <dl className="grid gap-2 border-t border-border pt-3.5 text-[13.5px]">
            {hours.map((hoursRow) => (
              <div key={hoursRow.label} className="grid grid-cols-[110px_1fr] gap-2">
                <dt className="text-muted-foreground">{hoursRow.label}</dt>
                <dd>{hoursRow.value}</dd>
              </div>
            ))}
          </dl>
          <Button href={address.directionsUrl.value} target="_blank" rel="noopener" iconBefore="navigation" className="w-full">
            {visitSection.directionsLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
