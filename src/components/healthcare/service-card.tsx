import { ArrowLink } from "@/components/ui/arrow-link";
import { Icon, isIconName } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  name: string;
  icon: string;
  summary: string;
  subServices: string[];
  note?: string;
  linkLabel: string;
  linkHref: string;
  external?: boolean;
  featured?: boolean;
  featuredPhoto?: { src?: string; alt: string; focus?: string };
};

export function ServiceCard({ name, icon, summary, subServices, note, linkLabel, linkHref, external = false, featured = false, featuredPhoto }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group/card relative overflow-hidden rounded-lg border p-[26px] transition-[border-color,box-shadow] duration-220 ease-standard hover:border-blue-200 hover:shadow-hover",
        featured ? "border-navy-950 bg-navy-950 text-white" : "border-border bg-background",
      )}
    >
      {featured && featuredPhoto && (
        <PhotoFrame floating alt={featuredPhoto.alt} src={featuredPhoto.src} focus={featuredPhoto.focus} sizes="(min-width: 900px) 160px, 40vw" radius="none" className="top-0 right-0 bottom-0 w-[40%] opacity-35 [mask-image:linear-gradient(to_right,transparent,black_55%)]" />
      )}
      <div className="relative grid content-start gap-2.5">
        <span className={cn("mb-1.5 grid size-10 place-items-center rounded-sm", featured ? "bg-white/10 text-white" : "bg-accent text-primary")}>
          <Icon name={isIconName(icon) ? icon : "activity"} />
        </span>
        <h3 className="text-body font-semibold tracking-title">{name}</h3>
        <p className={cn("text-[15px]", featured ? "text-slate-on-dark" : "text-muted-foreground")}>{summary}</p>
        <ul className="grid gap-1.5 py-1">
          {subServices.map((subService) => (
            <li key={subService} className="flex items-start gap-2 text-[14px]">
              <Icon name="check" size={15} strokeWidth={2.25} className={cn("mt-[3px] flex-none", featured ? "text-blue-300" : "text-primary")} />
              {subService}
            </li>
          ))}
        </ul>
        {note && <p className={cn("text-caption", featured ? "text-slate-on-dark" : "text-muted-foreground")}>{note}</p>}
        <ArrowLink href={linkHref} tone={featured ? "on-dark" : "default"} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {linkLabel}
        </ArrowLink>
      </div>
    </article>
  );
}
