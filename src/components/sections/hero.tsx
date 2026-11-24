import Image from "next/image";

import { Container } from "@/components/layout/container";
import { HeroDeck } from "@/components/sections/hero-deck";
import { Button } from "@/components/ui/button";
import { Reveal, RevealLetters } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";
import { delay } from "@/design-system/motion";

export function Hero() {
  const { hero, facts, heroPhotos, phone, navigation } = hospital;
  const highlightStart = hero.tagline.value.indexOf(hero.taglineHighlight);
  const taglineLead = highlightStart === -1 ? hero.tagline.value : hero.tagline.value.slice(0, highlightStart);

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="bg-hero-light pt-12 text-foreground max-md:pt-8">
        <Reveal trigger="load">
          <Container className="grid justify-items-center text-center max-md:justify-items-start max-md:text-left">
            <div className="relative">
              <span aria-hidden="true" className="hero-beat absolute inset-0 rounded-full border-2 border-primary/40" />
              <span aria-hidden="true" className="hero-beat absolute inset-0 rounded-full border-2 border-primary/40" />
              <Image src="/images/brand/emblem-mark.png" alt="" width={400} height={400} sizes="160px" preload className="relative size-brand-emblem rounded-full bg-background shadow-emblem" />
            </div>

            <h1 id="hero-heading" className="mt-4 grid justify-items-center font-brand max-md:justify-items-start">
              <RevealLetters text={hero.brandName.value} delay={delay.heroLetters} className="text-brand-name font-black tracking-brand-name whitespace-nowrap text-brand-ink uppercase max-sm:text-brand-name-mobile" />
              <span className="mt-2 text-brand-tagline font-bold tracking-brand-tagline text-brand-blue uppercase max-sm:text-brand-tagline-mobile max-sm:tracking-brand-tagline-mobile">{hero.brandSuffix.value}</span>
            </h1>
          </Container>

          <Container className="relative mt-6 grid justify-items-center text-center max-md:mt-4 max-md:justify-items-start max-md:text-left">
            <p className="isolate text-hero-lede font-semibold tracking-title text-brand-ink">
              {taglineLead}
              {highlightStart !== -1 && <span className="hero-mark relative whitespace-nowrap">{hero.taglineHighlight}</span>}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 max-md:mt-5 max-md:grid max-md:w-full max-md:max-w-md max-md:grid-cols-2">
              <Button href={navigation.bookHref} size="lg" iconBefore="house" iconAfter="arrow-right" className="max-md:px-3 max-sm:[&>svg:last-child]:hidden">
                {navigation.bookLabel}
              </Button>
              <Button href={phone.href.value} variant="quiet" size="lg" iconBefore="phone-call" aria-label={`Call ${phone.display.value}`} className="max-md:hidden">
                {phone.display.value}
              </Button>
            </div>
          </Container>
        </Reveal>
      </div>

      <div className="hero-split pb-band max-md:pb-band-mobile">
        <Container>
          <Reveal trigger="load" delay={delay.homeHeroDeck}>
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
