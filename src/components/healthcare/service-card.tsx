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
  photo?: { src?: string; alt: string; focus?: string };
};

export function ServiceCard({ name, icon, summary, subServices, note, linkLabel, linkHref, external = false, photo }: ServiceCardProps) {
  return (
    <article className="group/card relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background transition-[border-color,box-shadow] duration-220 ease-standard hover:border-blue-200 hover:shadow-hover">
      {photo && (
        <div className="relative aspect-video w-full flex-none overflow-hidden">
          <PhotoFrame
            floating
            alt={photo.alt}
            src={photo.src}
            focus={photo.focus}
            sizes="(min-width: 900px) 33vw, (min-width: 560px) 50vw, 100vw"
            radius="none"
            className="inset-0 transition-transform duration-220 ease-standard group-hover/card:scale-[1.03] motion-reduce:transform-none"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-navy-950/20 to-transparent" />
        </div>
      )}
      <div className={cn("relative z-10 px-[26px]", photo ? "-mt-6" : "pt-[26px]")}>
        <span className="grid size-12 place-items-center rounded-sm bg-accent text-primary shadow-pill ring-4 ring-background">
          <Icon name={isIconName(icon) ? icon : "activity"} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-[26px] pt-4 pb-[26px]">
        <h3 className="mt-1 text-body font-semibold tracking-title">{name}</h3>
        <p className="text-[15px] text-muted-foreground">{summary}</p>
        <ul className="grid gap-1.5 py-1">
          {subServices.map((subService) => (
            <li key={subService} className="flex items-start gap-2 text-[14px]">
              <Icon name="check" size={15} strokeWidth={2.25} className="mt-[3px] flex-none text-primary" />
              {subService}
            </li>
          ))}
        </ul>
        {note && <p className="text-caption text-muted-foreground">{note}</p>}
        <ArrowLink href={linkHref} className="mt-auto self-start pt-2" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {linkLabel}
        </ArrowLink>
      </div>
    </article>
  );
}
