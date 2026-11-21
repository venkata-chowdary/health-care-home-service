import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { hospital } from "@/data/hospital-content";

type ServiceCtaProps = {
  surface: boolean;
  serviceSlug: string;
};

export function ServiceCta({ serviceSlug, surface }: ServiceCtaProps) {
  const { serviceBlocks, ctaSection } = hospital;

  return (
    <Section id="service-cta" aria-labelledby="service-cta-heading" surface={surface}>
      <div className="grid grid-cols-[1.35fr_1fr] overflow-hidden rounded-panel bg-primary text-white max-[860px]:grid-cols-1 max-[860px]:rounded-card">
        <div className="grid min-w-0 content-center justify-items-start gap-5 px-14 py-16 max-[860px]:px-[22px] max-[860px]:py-8">
          <h2 id="service-cta-heading" className="text-h2 font-medium tracking-heading text-balance text-white">
            {serviceBlocks.ctaTitle}
          </h2>
          <p className="max-w-[44ch] text-body-lg text-white">{serviceBlocks.ctaLead}</p>
          <div className="flex flex-wrap gap-3 max-[480px]:w-full max-[480px]:flex-col">
            <Button href={`/appointment?service=${serviceSlug}`} variant="ghost-light" iconBefore="house">
              {serviceBlocks.ctaButtonLabel}
            </Button>
            <CallButton onDark />
          </div>
        </div>
        <PhotoFrame
          alt={ctaSection.photo.alt}
          src={ctaSection.photo.src}
          focus={ctaSection.photo.focus}
          radius="none"
          sizes="(min-width: 860px) 40vw, 100vw"
          className="min-h-[300px] max-[860px]:order-first max-[860px]:min-h-[180px]"
        />
      </div>
    </Section>
  );
}
