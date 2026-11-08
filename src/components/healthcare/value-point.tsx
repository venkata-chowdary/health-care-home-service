import { Icon, isIconName } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

type ValuePointProps = {
  icon: string;
  title: string;
  detail: string;
  variant?: "list" | "compact";
};

export function ValuePoint({ icon, title, detail, variant = "list" }: ValuePointProps) {
  const compact = variant === "compact";

  return (
    <div className={cn("grid gap-4", compact ? "grid-cols-[32px_minmax(0,1fr)] gap-3" : "grid-cols-[36px_minmax(0,1fr)] border-b border-border py-[18px] last:border-b-0")}>
      <span className="grid size-8 place-items-center rounded-full bg-accent text-primary">
        <Icon name={isIconName(icon) ? icon : "check"} size={16} strokeWidth={2} />
      </span>
      <div>
        <b className={cn("block font-semibold", compact && "text-[15px]")}>{title}</b>
        <span className={cn("text-muted-foreground", compact ? "text-[13.5px]" : "text-[14.5px]")}>{detail}</span>
      </div>
    </div>
  );
}
