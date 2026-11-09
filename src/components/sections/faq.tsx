import { FaqItem } from "@/components/healthcare/faq-item";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CallButton } from "@/components/ui/call-button";
import { hospital } from "@/data/hospital-content";

type FaqProps = {
  items?: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
  surface?: boolean;
  showCallPrompt?: boolean;
};

export function Faq({ items, title, eyebrow, surface = true, showCallPrompt = true }: FaqProps) {
  const { faqs, faqSection } = hospital;
  const faqItems = items ?? faqs;

  return (
    <Section id="faq" aria-labelledby="faq-heading" surface={surface} containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="faq-heading" align="center" eyebrow={eyebrow ?? faqSection.eyebrow} eyebrowVariant={surface ? "white" : "default"} title={title ?? faqSection.title} lead={faqSection.lead} />
      <div className="mx-auto grid w-full max-w-[880px] gap-7">
        <div className="rounded-panel border border-border bg-background px-7 py-2 max-[640px]:rounded-card max-[640px]:px-[18px] max-[640px]:py-1">
          {faqItems.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
          ))}
        </div>
        {showCallPrompt && (
          <p className="flex flex-wrap items-center justify-center gap-3 text-[14.5px] text-muted-foreground">
            {faqSection.footPrompt}
            <CallButton size="sm" />
          </p>
        )}
      </div>
    </Section>
  );
}
