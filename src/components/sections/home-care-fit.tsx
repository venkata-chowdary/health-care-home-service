import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Icon } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function HomeCareFit() {
  const { homeCareFit } = hospital;

  return (
    <Section id="home-care-fit" aria-labelledby="home-care-fit-heading" surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12 max-md:gap-8">
      <div className="grid grid-cols-2 items-center gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-9">
        <PhotoFrame alt={homeCareFit.photo.alt} src={homeCareFit.photo.src} focus={homeCareFit.photo.focus} radius="xl" sizes="(min-width: 900px) 540px, 90vw" className="aspect-[4/3.4] max-[900px]:aspect-[4/3]" />
        <SectionHeading headingId="home-care-fit-heading" eyebrow={homeCareFit.eyebrow} eyebrowVariant="white" title={homeCareFit.title} lead={homeCareFit.lead} className="gap-[18px]!" />
      </div>

      <RevealGroup className="grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">
        <RevealItem index={0}>
          <article className="grid h-full content-start gap-4 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
            <h3 className="text-body font-semibold tracking-title">{homeCareFit.fitsTitle}</h3>
            <ul className="grid gap-3">
              {homeCareFit.fits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                  <span className="mt-0.5 grid size-6 flex-none place-items-center rounded-full bg-accent text-primary">
                    <Icon name="check" size={14} strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </RevealItem>
        <RevealItem index={1}>
          <article className="grid h-full content-start gap-4 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
            <h3 className="text-body font-semibold tracking-title">{homeCareFit.hospitalTitle}</h3>
            <ul className="grid gap-3">
              {homeCareFit.hospital.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                  <span className="mt-0.5 grid size-6 flex-none place-items-center rounded-full bg-accent text-primary">
                    <Icon name="circle-alert" size={14} strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </RevealItem>
      </RevealGroup>

      <p className="text-center text-body-sm text-muted-foreground">{homeCareFit.note}</p>
    </Section>
  );
}
