import { Button } from "@/components/ui/button";
import { hospital } from "@/data/hospital-content";

export function MobileCallBar() {
  const { mobileBar, bookHref } = hospital.navigation;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-[max(0.75rem,env(safe-area-inset-left,0px))] z-25 grid grid-cols-[1fr_1.3fr] gap-2 rounded-button bg-background p-2 shadow-float md:hidden"
    >
      <Button href={hospital.phone.href.value} variant="secondary" size="compact" iconBefore="phone">
        {mobileBar.callLabel}
      </Button>
      <Button href={bookHref} size="compact">
        {mobileBar.bookLabel}
      </Button>
    </nav>
  );
}
