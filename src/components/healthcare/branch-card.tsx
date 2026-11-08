import { ArrowLink } from "@/components/ui/arrow-link";
import { Icon } from "@/components/ui/icon";

type BranchCardProps = {
  label: string;
  name: string;
  address: string;
  landmark: string;
  directionsUrl: string;
  directionsLabel: string;
};

export function BranchCard({ label, name, address, landmark, directionsUrl, directionsLabel }: BranchCardProps) {
  return (
    <article className="grid content-start gap-2.5 rounded-lg border border-border bg-background p-[26px] max-md:p-5">
      <span className="mb-1.5 grid size-10 place-items-center rounded-sm bg-accent text-primary">
        <Icon name="map-pin" />
      </span>
      <span className="text-caption text-muted-foreground">{label}</span>
      <h3 className="text-body font-semibold tracking-title">{name}</h3>
      <p className="text-[15px] text-muted-foreground">{landmark ? `${address}. ${landmark}.` : address}</p>
      {directionsUrl && (
        <ArrowLink href={directionsUrl} target="_blank" rel="noopener">
          {directionsLabel}
        </ArrowLink>
      )}
    </article>
  );
}
