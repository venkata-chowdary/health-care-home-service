import { StarRating } from "@/components/ui/star-rating";
import { cn } from "@/lib/cn";

type ReviewCardProps = {
  author: string;
  initials: string;
  text: string;
  rating: number;
  sourceLabel: string;
  empty?: boolean;
};

export function ReviewCard({ author, initials, text, rating, sourceLabel, empty = false }: ReviewCardProps) {
  return (
    <article aria-hidden={empty || undefined} className="grid content-start gap-3.5 rounded-card border border-border bg-background p-[26px]">
      <StarRating value={rating} decorative={empty} />
      <blockquote className={cn("text-base leading-[1.6]", empty ? "text-slate-400" : "text-foreground")}>{empty ? text : `"${text}"`}</blockquote>
      <footer className="mt-1 flex items-center gap-2.5 border-t border-border pt-3.5">
        <span className="grid size-9 flex-none place-items-center rounded-full bg-accent text-caption font-semibold text-link">{initials}</span>
        <div className="grid text-caption leading-[1.35] text-muted-foreground">
          <b className="text-body-sm font-semibold text-foreground">{author}</b>
          {sourceLabel}
        </div>
      </footer>
    </article>
  );
}
