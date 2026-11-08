import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ValuePoint } from "@/components/healthcare/value-point";
import { Button } from "@/components/ui/button";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function About() {
  const { about } = hospital;

  return (
    <Section id="about" aria-labelledby="about-heading" surface containerClassName="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
      <div className="relative pb-10 pl-10 max-[560px]:pb-7 max-[560px]:pl-5">
        <PhotoFrame
          alt={about.mainPhoto.label}
          icon={isIconName(about.mainPhoto.icon) ? about.mainPhoto.icon : undefined}
          label={about.mainPhoto.label}
          labelSide="right"
          radius="xl"
          sizes="(min-width: 900px) 540px, 90vw"
          className="aspect-[4/4.4]"
        />
        <PhotoFrame floating alt="" aria-hidden="true" icon={isIconName(about.insetIcon) ? about.insetIcon : undefined} className="bottom-0 left-0 aspect-[4/3] w-[44%] border-[5px] border-background shadow-float" />
        <FloatingBadge className="absolute top-8 right-[-12px] max-[560px]:right-2">{about.badge}</FloatingBadge>
      </div>

      <div className="grid gap-5">
        <SectionHeading headingId="about-heading" eyebrow={about.eyebrow} eyebrowVariant="white" title={about.title} lead={about.lead} className="gap-5!" />
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-[18px] max-[560px]:grid-cols-1">
          {about.checks.map((check, index) => (
            <RevealItem key={check.title} index={index}>
              <ValuePoint variant="compact" icon={check.icon} title={check.title} detail={check.detail} />
            </RevealItem>
          ))}
        </RevealGroup>
        <Button href={about.ctaHref} variant="navy" iconAfter="arrow-right" className="justify-self-start">
          {about.ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
