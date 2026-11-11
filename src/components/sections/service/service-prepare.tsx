import { Section } from "@/components/layout/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

type ServicePrepareProps = {
  prepare: string[];
  callDoctor: string[];
  surface: boolean;
};

export function ServicePrepare({ prepare, callDoctor, surface }: ServicePrepareProps) {
  const { serviceBlocks } = hospital;

  return (
    <Section id="prepare" aria-labelledby="prepare-heading" surface={surface}>
      <RevealGroup className="grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">
        <RevealItem index={0}>
          <article className="grid h-full content-start gap-3.5 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
            <h2 id="prepare-heading" className="text-h3 font-medium tracking-heading">
              {serviceBlocks.prepareTitle}
            </h2>
            <p className="text-[15px] text-muted-foreground">{serviceBlocks.prepareLead}</p>
            <ul className="grid gap-3">
              {prepare.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]">
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
          <article className="grid h-full content-start gap-3.5 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
            <h2 className="text-h3 font-medium tracking-heading">{serviceBlocks.callDoctorTitle}</h2>
            <p className="text-[15px] text-muted-foreground">{serviceBlocks.callDoctorLead}</p>
            <ul className="grid gap-3">
              {callDoctor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]">
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
    </Section>
  );
}
