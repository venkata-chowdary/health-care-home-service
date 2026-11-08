import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceWhoForProps = {
  items: string[];
  photo: { src?: string; alt: string; focus?: string };
  surface: boolean;
};

export function ServiceWhoFor({ items, photo, surface }: ServiceWhoForProps) {
  const { serviceBlocks } = hospital;

  return (
    <Section id="who-for" aria-labelledby="who-for-heading" surface={surface} containerClassName="grid grid-cols-2 items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-9">
      <PhotoFrame alt={photo.alt} src={photo.src} focus={photo.focus} radius="xl" sizes="(min-width: 900px) 540px, 90vw" className="aspect-[4/3.6] max-[900px]:aspect-[4/3]" />
      <div className="grid justify-items-start gap-[18px]">
        <SectionHeading headingId="who-for-heading" eyebrow={serviceBlocks.whoForEyebrow} eyebrowVariant={surface ? "white" : "default"} title={serviceBlocks.whoForTitle} className="gap-[18px]!" />
        <RevealGroup className="grid w-full">
          {items.map((item, index) => (
            <RevealItem key={item} index={index} className="[&:last-child>*]:border-b-0">
              <div className="flex items-start gap-3.5 border-b border-border py-[18px]">
                <span className="grid size-8 flex-none place-items-center rounded-full bg-accent text-primary">
                  <Icon name="check" size={16} strokeWidth={2} />
                </span>
                <span className="pt-1">{item}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
