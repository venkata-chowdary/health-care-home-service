import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

export function Faq() {
  const { faqs, faqSection, phone } = hospital;

  return (
    <Section id="faq" aria-labelledby="faq-heading" surface containerClassName="grid gap-12 max-md:gap-8">
      <SectionHeading headingId="faq-heading" align="center" eyebrow={faqSection.eyebrow} eyebrowVariant="white" title={faqSection.title} lead={faqSection.lead} />
      <div className="mx-auto grid w-full max-w-[880px] gap-7">
        <div className="rounded-panel border border-border bg-background px-7 py-2 max-[640px]:rounded-card max-[640px]:px-[18px] max-[640px]:py-1">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group/faq border-b border-border last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] text-[17px] font-medium tracking-title marker:content-[''] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Icon name="plus" size={22} className="flex-none text-primary transition-transform duration-260 ease-standard group-open/faq:rotate-45" />
              </summary>
              <p className="max-w-[62ch] pr-10 pb-[22px] text-[15.5px] text-muted-foreground">{faq.answer}</p>
            </details>
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
