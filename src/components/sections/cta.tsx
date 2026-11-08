import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { hospital } from "@/data/hospital-content";

export function Cta() {
  const { ctaSection, phone } = hospital;

  return (
    <Section id="cta" aria-labelledby="cta-heading">
      <div className="grid grid-cols-[1.35fr_1fr] overflow-hidden rounded-panel bg-primary text-white max-[860px]:grid-cols-1 max-[860px]:rounded-card">
        <div className="grid content-center justify-items-start gap-5 px-14 py-16 max-[860px]:px-[22px] max-[860px]:py-8">
          <h2 id="cta-heading" className="text-h2 font-medium tracking-heading text-balance text-white">
            {ctaSection.title}
          </h2>
          <p className="max-w-[44ch] text-body-lg text-white">{ctaSection.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={ctaSection.bookHref} variant="white">
              {ctaSection.bookLabel}
            </Button>
            <Button href={phone.href.value} variant="ghost-light" iconBefore="phone">
              {ctaSection.callLabel}
            </Button>
          </div>
        </div>
        <PhotoFrame
          alt={ctaSection.photo.label}
          icon={isIconName(ctaSection.photo.icon) ? ctaSection.photo.icon : undefined}
          label={ctaSection.photo.label}
          radius="none"
          sizes="(min-width: 860px) 40vw, 100vw"
          className="min-h-[300px] max-[860px]:order-first max-[860px]:min-h-[180px]"
        />
      </div>
    </Section>
  );
}
