import { ArrowLink } from "@/components/ui/arrow-link";
import { Icon, isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { cn } from "@/lib/cn";

type DepartmentCardProps = {
  name: string;
  icon: string;
  summary: string;
  linkLabel: string;
  linkHref: string;
  featured?: boolean;
};

export function DepartmentCard({ name, icon, summary, linkLabel, linkHref, featured = false }: DepartmentCardProps) {
  return (
    <article
      className={cn(
        "group/card relative overflow-hidden rounded-lg border p-[26px] transition-[border-color,box-shadow,transform] duration-220 ease-standard hover:-translate-y-[3px] hover:border-blue-200 hover:shadow-hover",
        featured ? "border-navy-950 bg-navy-950 text-white" : "border-border bg-background",
      )}
    >
      {featured && <PhotoFrame floating alt="" aria-hidden="true" tone="dark" icon={null} radius="none" className="top-0 right-[-20px] bottom-0 w-[45%] opacity-50" />}
      <div className="relative grid content-start gap-2.5">
        <span className={cn("mb-1.5 grid size-10 place-items-center rounded-sm", featured ? "bg-white/10 text-white" : "bg-accent text-primary")}>
          <Icon name={isIconName(icon) ? icon : "activity"} />
        </span>
        <h3 className="text-body font-semibold tracking-title">{name}</h3>
        <p className={cn("text-[15px]", featured ? "text-slate-on-dark" : "text-muted-foreground")}>{summary}</p>
        <ArrowLink href={linkHref} tone={featured ? "on-dark" : "default"}>
          {linkLabel}
        </ArrowLink>
      </div>
    </article>
  );
}
