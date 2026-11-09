type StepCardProps = {
  number: number;
  stepLabel: string;
  title?: string;
  detail: string;
};

export function StepCard({ number, stepLabel, title, detail }: StepCardProps) {
  return (
    <article className="grid content-start gap-3 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
      <p className="flex items-center gap-2.5 border-b border-border pb-4">
        <span className="text-caption leading-none text-muted-foreground">{stepLabel}</span>
        <b className="text-[48px] leading-none font-medium tracking-[-0.05em] text-primary">{number}</b>
      </p>
      {title && <h3 className="text-body font-semibold tracking-title">{title}</h3>}
      <p className="text-[15px] text-muted-foreground">{detail}</p>
    </article>
  );
}
