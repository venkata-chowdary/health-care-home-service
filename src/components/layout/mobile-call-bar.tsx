import { CallButton } from "@/components/ui/call-button";
import { RequestButton } from "@/components/ui/request-button";

export function MobileCallBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-[max(0.75rem,env(safe-area-inset-left,0px))] z-25 grid grid-cols-2 gap-2 rounded-button bg-background p-2 shadow-float md:hidden"
    >
      <CallButton size="compact" />
      <RequestButton size="compact" />
    </nav>
  );
}
