import { Container } from "@/components/layout/container";
import { HeroDeck } from "@/components/sections/hero-deck";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hospital } from "@/data/hospital-content";

export function Hero() {
  const { hero, facts, heroPhotos, phone, navigation } = hospital;

  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-hero-navy pt-14 pb-24 text-white max-md:pt-9 max-md:pb-16">
      <Container>
        <div className="grid justify-items-center gap-[26px] text-center">
          <Eyebrow variant="on-dark">{hero.eyebrow.value}</Eyebrow>
          <h1 id="hero-heading" className="max-w-[19ch] text-display font-medium tracking-heading text-balance">
            {hero.headline.value}
          </h1>
          <p className="max-w-[54ch] text-body-lg text-slate-on-dark">{hero.lead.value}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={navigation.bookHref} iconAfter="arrow-right">
              {hero.primaryCtaLabel}
            </Button>
            <Button href={phone.href.value} variant="ghost-light" iconBefore="phone">
              {hero.callLabel} {phone.display.value}
            </Button>
          </div>
        </div>

        <div className="mt-14 max-md:mt-9">
          <HeroDeck photos={heroPhotos.map(({ label, icon, src }) => ({ label, icon, src }))} badges={hero.badges} label={hero.photosLabel} />
        </div>

        <dl className="mt-10 grid grid-cols-4 max-md:mt-7 max-md:grid-cols-2 max-md:gap-y-4">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-0.5 border-l border-navy-line px-6 py-1 first:border-l-0 first:pl-0 max-md:px-3.5 max-md:py-0.5 max-md:odd:border-l-0 max-md:odd:pl-0">
              <dt className="text-[15px] font-semibold">{fact.label}</dt>
              <dd className="text-[13.5px] text-slate-on-dark">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
