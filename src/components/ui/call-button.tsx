import { Button } from "@/components/ui/button";
import { hospital } from "@/data/hospital-content";

type CallButtonProps = {
  onDark?: boolean;
  size?: "default" | "lg" | "sm" | "compact";
  className?: string;
};

export function CallButton({ onDark = false, size = "default", className }: CallButtonProps) {
  const { phone } = hospital;

  return (
    <Button href={phone.href.value} variant={onDark ? "white" : "outline"} size={size} iconBefore="phone-call" aria-label={`Call ${phone.display.value}`} className={className}>
      {phone.display.value}
    </Button>
  );
}
