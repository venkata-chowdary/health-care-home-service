import { Section } from "@/components/layout/section";
import { CountUp } from "@/components/ui/count-up";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function Stats() {
  return (
    <Section id="stats" aria-label="Home care in numbers" surface band>
      <RevealGroup className="grid grid-cols-4 gap-y-8 max-md:grid-cols-2">
        {hospital.stats.map((stat, index) => (
          <RevealItem key={stat.label} index={index} className="justify-items-center gap-1 text-center">
            <p className="text-h1 font-medium tracking-heading text-foreground">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-body text-muted-foreground">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
