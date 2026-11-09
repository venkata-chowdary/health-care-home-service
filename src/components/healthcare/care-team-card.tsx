import { PhotoFrame } from "@/components/ui/photo-frame";

type CareTeamCardProps = {
  name: string;
  role: string;
  photo: { src?: string; alt: string; focus?: string };
  photoLabel: string;
};

export function CareTeamCard({ name, role, photo, photoLabel }: CareTeamCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-background transition-[box-shadow] duration-220 ease-standard hover:shadow-hover">
      <PhotoFrame alt={photo.alt} src={photo.src} focus={photo.focus || "50% 50%"} sizes="(min-width: 1024px) 280px, 72vw" label={photoLabel} labelIcon={null} radius="none" className="aspect-[1/1.05]" />
      <div className="grid justify-items-center gap-0.5 bg-accent p-4 text-center">
        <h3 className="text-[15px] font-semibold">{name}</h3>
        <span className="text-caption text-muted-foreground">{role}</span>
      </div>
    </article>
  );
}
