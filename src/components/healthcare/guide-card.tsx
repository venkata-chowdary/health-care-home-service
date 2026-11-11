import Link from "next/link";

import { Icon } from "@/components/ui/icon";

type GuideCardProps = {
  slug: string;
  title: string;
  description: string;
  minutes: number;
  readLabel: string;
};

export function GuideCard({ slug, title, description, minutes, readLabel }: GuideCardProps) {
  return (
    <article className="relative grid h-full content-start gap-3 rounded-lg border border-border bg-background p-[26px] transition-colors duration-200 hover:border-primary max-md:p-5">
      <p className="text-caption text-muted-foreground">{minutes} min read</p>
      <h3 className="text-body font-semibold tracking-title">
        <Link href={`/guides/${slug}`} className="no-underline after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      <p className="text-[15px] text-muted-foreground">{description}</p>
      <span className="mt-1 flex items-center gap-1.5 text-body-sm font-medium text-primary">
        {readLabel}
        <Icon name="arrow-right" size={16} />
      </span>
    </article>
  );
}
