import { StarRating } from "@/components/ui/star-rating";

type ReviewCardProps = {
  author: string;
  initials: string;
  text: string;
  rating: number;
  sourceLabel: string;
  sampleLabel?: string;
};

export function ReviewCard({ author, initials, text, rating, sourceLabel, sampleLabel }: ReviewCardProps) {
  return (
    <article className="grid h-full content-start gap-3.5 rounded-card border border-border bg-background p-[26px]">
      <StarRating value={rating} />
      <blockquote className="text-base leading-[1.6] text-foreground">&quot;{text}&quot;</blockquote>
      <footer className="mt-auto flex items-center gap-2.5 border-t border-border pt-3.5">
        <span className="grid size-9 flex-none place-items-center rounded-full bg-accent text-caption font-semibold text-link">{initials}</span>
        <div className="grid text-caption leading-[1.35] text-muted-foreground">
          <b className="text-body-sm font-semibold text-foreground">{author}</b>
          {sampleLabel ?? sourceLabel}
        </div>
      </footer>
    </article>
  );
}
