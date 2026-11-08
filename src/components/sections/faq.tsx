import { FaqItem } from "@/components/healthcare/faq-item";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { hospital } from "@/data/hospital-content";

export function Faq() {
  const { faqs, faqSection, phone } = hospital;

  return (
    <Section id="faq" aria-labelledby="faq-heading" surface containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="faq-heading" align="center" eyebrow={faqSection.eyebrow} eyebrowVariant="white" title={faqSection.title} lead={faqSection.lead} />
      <div className="mx-auto grid w-full max-w-[880px] gap-7">
        <div className="rounded-panel border border-border bg-background px-7 py-2 max-[640px]:rounded-card max-[640px]:px-[18px] max-[640px]:py-1">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
          ))}
        </div>
        <p className="flex flex-wrap items-center justify-center gap-3 text-[14.5px] text-muted-foreground">
          {faqSection.footPrompt}
          <ArrowLink href={phone.href.value}>
            {faqSection.footCallPrefix} {phone.display.value}
          </ArrowLink>
        </p>
      </div>
    </Section>
  );
}
