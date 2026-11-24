import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon, isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { hospital, type PhotoSlot } from "@/data/hospital-content";

type ServiceIncludedProps = {
  surface: boolean;
  items: { icon: string; name: string; detail: string; photo?: PhotoSlot }[];
};

export function ServiceIncluded({ items, surface }: ServiceIncludedProps) {
  const { serviceBlocks } = hospital;

  return (
    <Section id="included" aria-labelledby="included-heading" surface={surface} containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <SectionHeading headingId="included-heading" align="center" title={serviceBlocks.includedTitle} />
      <RevealGroup className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1 min-[801px]:max-[1100px]:[&>*:last-child:nth-child(3n+1)]:col-span-3 min-[521px]:max-[800px]:[&>*:last-child:nth-child(odd)]:col-span-2">
        {items.map((item, index) => (
          <RevealItem key={item.name} index={index}>
            <article className="group/card relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background transition-[border-color,box-shadow] duration-220 ease-standard hover:border-blue-200 hover:shadow-hover">
              {item.photo?.src && (
                <div className="relative aspect-video w-full flex-none overflow-hidden">
                  <PhotoFrame
                    floating
                    alt={item.photo.alt}
                    src={item.photo.src}
                    focus={item.photo.focus ?? "50% 30%"}
                    sizes="(min-width: 1100px) 25vw, (min-width: 800px) 33vw, (min-width: 520px) 50vw, 100vw"
                    radius="none"
                    className="inset-0 transition-transform duration-220 ease-standard group-hover/card:scale-[1.03] motion-reduce:transform-none"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-navy-950/20 to-transparent" />
                </div>
              )}
              <div className={cn("relative z-10 px-[26px] max-md:px-5", item.photo?.src ? "-mt-6" : "pt-[26px] max-md:pt-5")}>
                <span className="grid size-12 place-items-center rounded-sm bg-accent text-primary shadow-pill ring-4 ring-background">
                  <Icon name={isIconName(item.icon) ? item.icon : "check"} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 px-[26px] pt-4 pb-[26px] max-md:px-5 max-md:pb-5">
                <h3 className="mt-1 text-body font-semibold tracking-title">{item.name}</h3>
                <p className="text-[15px] text-muted-foreground">{item.detail}</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
