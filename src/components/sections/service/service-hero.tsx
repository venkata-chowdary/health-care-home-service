import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CallButton } from "@/components/ui/call-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { RequestButton } from "@/components/ui/request-button";
import { hospital } from "@/data/hospital-content";
import { delay } from "@/design-system/motion";

type ServiceHeroProps = {
  name: string;
  eyebrow: string;
  title: string;
  lead: string;
  facts: { label: string; detail: string }[];
  photo: { src?: string; alt: string; focus?: string };
};

export function ServiceHero({ name, eyebrow, title, lead, facts, photo }: ServiceHeroProps) {
  const { serviceHero } = hospital;

  return (
    <section aria-labelledby="service-heading" className="pt-8 pb-section-mobile md:pb-section-tablet lg:pb-section">
      <Container className="grid gap-8 max-md:gap-6">
        <nav aria-label={serviceHero.breadcrumbLabel}>
          <ol className="flex flex-wrap items-center gap-1.5 text-body-sm text-muted-foreground">
            <li>
              <Link href="/" className="text-link no-underline">
                {serviceHero.homeLabel}
              </Link>
            </li>
            <Icon name="chevron-right" size={14} className="text-slate-400" />
            <li>
              <Link href="/#services" className="text-link no-underline">
                {serviceHero.servicesLabel}
              </Link>
            </li>
            <Icon name="chevron-right" size={14} className="text-slate-400" />
            <li aria-current="page" className="font-medium text-foreground">
              {name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-2 items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-9">
          <Reveal trigger="load" className="grid justify-items-start gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 id="service-heading" className="text-h1 font-medium tracking-heading text-balance">
              {title}
            </h1>
            <p className="max-w-[46ch] text-body-lg text-muted-foreground">{lead}</p>
            <div className="flex flex-wrap items-center gap-3">
              <RequestButton />
              <CallButton />
            </div>
          </Reveal>
          <Reveal trigger="load" delay={delay.heroDeck}>
            <PhotoFrame alt={photo.alt} src={photo.src} focus={photo.focus} preload radius="xl" sizes="(min-width: 900px) 560px, 90vw" className="aspect-[4/3.4] max-[900px]:aspect-[4/3]" />
          </Reveal>
        </div>

        <dl className="grid grid-cols-3 border-t border-border pt-6 max-md:grid-cols-1 max-md:gap-4">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-0.5 border-l border-border px-6 first:border-l-0 first:pl-0 max-md:border-l-0 max-md:px-0">
              <dt className="text-[15px] font-semibold">{fact.label}</dt>
              <dd className="text-[13.5px] text-muted-foreground">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
