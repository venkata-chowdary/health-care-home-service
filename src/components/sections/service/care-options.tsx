import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { hospital } from "@/data/hospital-content";
import type { CareOptionKey } from "@/data/hospital-content";

type CareOptionsProps = {
  options: Record<CareOptionKey, { applies: "yes" | "no" | "confirm"; note: string }>;
  surface: boolean;
};

export function CareOptions({ options, surface }: CareOptionsProps) {
  const { serviceBlocks } = hospital;
  const optionKeys = Object.keys(serviceBlocks.careOptionNames) as CareOptionKey[];

  return (
    <Section id="care-options" aria-labelledby="care-options-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="care-options-heading" align="center" eyebrow={serviceBlocks.careOptionsEyebrow} eyebrowVariant={surface ? "white" : "default"} title={serviceBlocks.careOptionsTitle} lead={serviceBlocks.careOptionsLead} />
      <RevealGroup className="grid grid-cols-3 gap-4 max-[800px]:grid-cols-1">
        {optionKeys.map((key, index) => {
          const option = options[key];
          return (
            <RevealItem key={key} index={index}>
              <article className="grid content-start gap-3 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
                <h3 className="text-body font-semibold tracking-title">{serviceBlocks.careOptionNames[key]}</h3>
                {option.applies === "yes" && (
                  <span className="inline-flex h-[26px] items-center gap-1.5 justify-self-start rounded-button bg-success-surface px-[11px] text-[12.5px] font-medium text-success">
                    <Icon name="check" size={14} strokeWidth={2.25} />
                    {serviceBlocks.availableLabel}
                  </span>
                )}
                {option.applies === "no" && (
                  <span className="inline-flex h-[26px] items-center gap-1.5 justify-self-start rounded-button border border-border bg-surface px-[11px] text-[12.5px] text-muted-foreground">
                    <Icon name="x" size={14} />
                    {serviceBlocks.notOfferedLabel}
                  </span>
                )}
                {option.applies === "confirm" && (
                  <Tag variant="sample" className="justify-self-start">
                    {serviceBlocks.toConfirmLabel}
                  </Tag>
                )}
                <p className="text-[15px] text-muted-foreground">{option.note}</p>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
      <p className="text-center text-body-sm text-muted-foreground">{serviceBlocks.pricesNote}</p>
    </Section>
  );
}
