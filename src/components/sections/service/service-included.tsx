import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon, isIconName } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

type ServiceIncludedProps = {
  items: { icon: string; name: string; detail: string }[];
  surface: boolean;
};

export function ServiceIncluded({ items, surface }: ServiceIncludedProps) {
  const { serviceBlocks } = hospital;

  return (
    <Section id="included" aria-labelledby="included-heading" surface={surface} containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="included-heading" align="center" eyebrow={serviceBlocks.includedEyebrow} eyebrowVariant={surface ? "white" : "default"} title={serviceBlocks.includedTitle} />
      <RevealGroup className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
        {items.map((item, index) => (
          <RevealItem key={item.name} index={index}>
            <article className="grid content-start gap-2.5 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
              <span className="mb-1.5 grid size-10 place-items-center rounded-sm bg-accent text-primary">
                <Icon name={isIconName(item.icon) ? item.icon : "check"} />
              </span>
              <h3 className="text-body font-semibold tracking-title">{item.name}</h3>
              <p className="text-[15px] text-muted-foreground">{item.detail}</p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
