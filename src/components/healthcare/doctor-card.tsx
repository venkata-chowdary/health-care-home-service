import { Icon } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";

type DoctorCardProps = {
  name: string;
  department: string;
  photo: string | null;
  photoLabel: string;
  href: string;
};

export function DoctorCard({ name, department, photo, photoLabel, href }: DoctorCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-background transition-[box-shadow] duration-220 ease-standard hover:shadow-hover">
      <PhotoFrame alt={`${name}, ${department}`} src={photo ?? undefined} sizes="(min-width: 1024px) 280px, 72vw" label={photoLabel} labelIcon={null} radius="none" className="aspect-[1/1.05]" />
      <div className="grid justify-items-center gap-0.5 bg-accent p-4 text-center">
        <h3 className="text-[15px] font-semibold">{name}</h3>
        <span className="text-caption text-muted-foreground">{department}</span>
        <a href={href} aria-label={`Book an appointment with ${name}`} className="mt-2 grid size-8 place-items-center rounded-full bg-background text-primary shadow-pill">
          <Icon name="plus" size={15} strokeWidth={2.25} />
        </a>
      </div>
    </article>
  );
}
