import { Button } from "@/components/ui/button";
import { hospital } from "@/data/hospital-content";

type RequestButtonProps = {
  onBlue?: boolean;
  size?: "default" | "sm" | "compact";
  className?: string;
};

export function RequestButton({ onBlue = false, size = "default", className }: RequestButtonProps) {
  const { bookLabel, bookHref } = hospital.navigation;

  return (
    <Button href={bookHref} variant={onBlue ? "ghost-light" : "primary"} size={size} iconBefore="calendar-check" className={className}>
      {bookLabel}
    </Button>
  );
}
