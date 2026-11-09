import { ValuePoint } from "@/components/healthcare/value-point";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function WhyUs() {
  const { whyUs, valuePoints } = hospital;

  return (
    <Section id="why-us" aria-labelledby="why-us-heading" surface containerClassName="grid grid-cols-2 items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-9">
      <PhotoFrame
        alt={whyUs.photo.alt}
        src={whyUs.photo.src}
        focus={whyUs.photo.focus}
        icon={whyUs.photo.icon && isIconName(whyUs.photo.icon) ? whyUs.photo.icon : undefined}
        label={whyUs.photo.label}
        radius="xl"
        sizes="(min-width: 900px) 540px, 90vw"
        className="aspect-[4/4.6] max-[900px]:aspect-[4/3]"
      />
      <div className="grid justify-items-start gap-[18px]">
        <SectionHeading headingId="why-us-heading" eyebrow={whyUs.eyebrow} eyebrowVariant="white" title={whyUs.title} className="gap-[18px]!" />
        <RevealGroup className="grid w-full">
          {valuePoints.map((point, index) => (
            <RevealItem key={point.title} index={index} className="[&:last-child>*]:border-b-0">
              <ValuePoint icon={point.icon} title={point.title} detail={point.detail} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
