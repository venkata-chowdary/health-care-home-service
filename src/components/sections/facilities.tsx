import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Icon, isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Tag } from "@/components/ui/tag";
import { hospital } from "@/data/hospital-content";

export function Facilities() {
  const { facilities, facilitiesStatus, facilitiesSection } = hospital;

  return (
    <Section id="facilities" aria-labelledby="facilities-heading">
      <div className="grid grid-cols-2 items-center gap-14 rounded-xl bg-accent p-16 max-[960px]:grid-cols-1 max-[960px]:gap-9 max-[960px]:px-[22px] max-[960px]:py-8">
        <div className="grid gap-[22px]">
          <SectionHeading headingId="facilities-heading" eyebrow={facilitiesSection.eyebrow} eyebrowVariant="white" title={facilitiesSection.title} className="gap-[22px]!" />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6 border-y border-blue-100 py-6 max-[480px]:grid-cols-1">
            <div className="grid rounded-lg bg-background px-[22px] py-[18px]">
              <b className="text-[48px] leading-none font-medium tracking-[-0.05em]">
                {facilitiesSection.figure.value}
                <em className="text-primary not-italic">{facilitiesSection.figure.unit}</em>
              </b>
              <span className="mt-1.5 text-[12.5px] text-muted-foreground">{facilitiesSection.figure.label}</span>
            </div>
            <ul className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
              {facilities.map((facility) => (
                <li key={facility} className="flex items-center gap-2 text-[14.5px]">
                  <Icon name="check" size={16} strokeWidth={2.25} className="flex-none text-primary" />
                  {facility}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={facilitiesSection.ctaHref} leadIcon="calendar-check">
              {facilitiesSection.ctaLabel}
            </Button>
            {facilitiesStatus === "sample" && <Tag variant="sample">{facilitiesSection.sampleTag}</Tag>}
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3.5">
          {facilitiesSection.photos.map((photo, index) => (
            <PhotoFrame key={photo.label} alt={photo.label} icon={isIconName(photo.icon) ? photo.icon : undefined} label={photo.label} sizes="(min-width: 960px) 260px, 45vw" className={index === 1 ? "mt-12 aspect-[4/5]" : "aspect-[4/5]"} />
          ))}
          <div className="absolute top-1/2 left-1/2 grid size-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[6px] border-accent bg-primary text-center text-xs leading-[1.25] font-medium text-primary-foreground">
            <span>
              <Icon name="building-2" size={22} className="mx-auto mb-1 block" />
              {facilitiesSection.seal}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
