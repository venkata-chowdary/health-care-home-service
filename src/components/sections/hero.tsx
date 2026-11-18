import Image from "next/image";

import { Container } from "@/components/layout/container";
import { HeroDeck } from "@/components/sections/hero-deck";
import { CallButton } from "@/components/ui/call-button";
import { Reveal } from "@/components/ui/reveal";
import { RequestButton } from "@/components/ui/request-button";
import { hospital } from "@/data/hospital-content";
import { delay } from "@/design-system/motion";

const centredPulsePath = "M0 46H520l12-7 10 7h20l12-40 16 70 12-44 10 14h22q12-14 24 0H1200";
const rightPulsePath = "M0 46H880l12-7 10 7h20l12-40 16 70 12-44 10 14h22q12-14 24 0H1200";

export function Hero() {
  const { hero, facts, heroPhotos } = hospital;

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="bg-hero-navy pt-14 text-white max-md:pt-9">
        <Reveal trigger="load">
          <Container className="grid justify-items-center text-center max-md:justify-items-start max-md:text-left">
            <Image src="/images/brand/emblem-mark.png" alt="" width={400} height={400} priority className="size-brand-emblem rounded-full shadow-float" />
            <h1 id="hero-heading" className="mt-4 grid justify-items-center font-brand font-bold max-md:justify-items-start">
              <span className="text-h1 leading-none tracking-normal uppercase">{hero.brandName.value}</span>
              <span className="mt-1 text-brand-legal tracking-brand-legal text-blue-200 uppercase">{hero.brandSuffix.value}</span>
            </h1>
          </Container>

          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-6 block h-20 w-full overflow-visible max-md:-mt-4 max-md:h-12">
            <g className="max-md:hidden">
              <path d={centredPulsePath} className="stroke-primary opacity-55 blur-xs" />
              <path d={centredPulsePath} vectorEffect="non-scaling-stroke" className="stroke-blue-300" />
            </g>
            <g className="md:hidden">
              <path d={rightPulsePath} className="stroke-primary opacity-55 blur-xs" />
              <path d={rightPulsePath} vectorEffect="non-scaling-stroke" className="stroke-blue-300" />
            </g>
          </svg>

          <Container className="mt-6 grid justify-items-center text-center max-md:mt-4 max-md:justify-items-start max-md:text-left">
            <p className="text-body-lg text-slate-on-dark">{hero.tagline.value}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 max-md:grid max-md:w-full max-md:max-w-md max-md:grid-cols-2">
              <RequestButton className="max-md:px-3" />
              <CallButton onDark className="max-md:hidden" />
            </div>
          </Container>
        </Reveal>
      </div>

      <div className="hero-split">
        <Container>
          <Reveal trigger="load" delay={delay.heroDeck}>
            <HeroDeck photos={heroPhotos.map(({ label, icon, photo }) => ({ label, icon, src: photo.src, alt: photo.alt, focus: photo.focus }))} badges={hero.badges} label={hero.photosLabel} />
          </Reveal>

          <dl className="mt-10 grid grid-cols-4 text-foreground max-md:mt-7 max-md:grid-cols-2 max-md:gap-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="grid content-start gap-0.5 border-l border-border px-6 py-1 text-center first:border-l-0 max-md:px-0 max-md:py-0.5 max-md:text-left max-md:odd:border-l-0 max-md:even:pl-5">
                <dt className="text-[15px] font-semibold">{fact.label}</dt>
                <dd className="text-[13.5px] text-muted-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
