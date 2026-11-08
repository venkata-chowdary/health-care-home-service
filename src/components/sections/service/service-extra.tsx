import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon, isIconName } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

type ServiceExtraProps = {
  extra: { eyebrow: string; title: string; lead: string; items: { icon?: string; label: string }[]; note: string; tag: string };
  surface: boolean;
};

export function ServiceExtra({ extra, surface }: ServiceExtraProps) {
  return (
    <Section id="extra" aria-labelledby="extra-heading" surface={surface} containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="extra-heading" align="center" eyebrow={extra.eyebrow} eyebrowVariant={surface ? "white" : "default"} title={extra.title} lead={extra.lead} />
      <RevealGroup className="grid grid-cols-4 gap-3 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[420px]:grid-cols-1">
        {extra.items.map((item, index) => (
          <RevealItem key={item.label} index={index}>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <span className="grid size-9 flex-none place-items-center rounded-full bg-accent text-primary">
                <Icon name={item.icon && isIconName(item.icon) ? item.icon : "check"} size={17} strokeWidth={2} />
              </span>
              <span className="text-[15px] font-medium">{item.label}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="grid justify-items-center gap-3 text-center">
        <Tag variant="sample">{extra.tag}</Tag>
        <p className="max-w-[60ch] text-body-sm text-muted-foreground">{extra.note}</p>
      </div>
    </Section>
  );
}
