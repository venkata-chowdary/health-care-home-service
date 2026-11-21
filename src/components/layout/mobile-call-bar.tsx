import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";

export function MobileCallBar() {
  const { navigation, whatsapp, phone } = hospital;
  const tabClassName =
    "flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-caption font-medium text-foreground transition-colors duration-200 hovered:bg-surface pressed:bg-muted";

  return (
    <nav
      aria-label="Quick contact"
      data-call-bar=""
      className="fixed inset-x-0 bottom-0 z-25 border-t border-border bg-background pr-[env(safe-area-inset-right,0px)] pb-[env(safe-area-inset-bottom,0px)] pl-[env(safe-area-inset-left,0px)] md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3">
        <Link href={navigation.bookHref} className={tabClassName}>
          <Icon name="house" size={22} className="text-primary" />
          {navigation.mobileBar.bookLabel}
        </Link>
        <a href={whatsapp.href.value} target="_blank" rel="noopener noreferrer" aria-label={navigation.whatsappAriaLabel} className={tabClassName}>
          <Icon name="message-circle" size={22} className="text-primary" />
          {navigation.mobileBar.chatLabel}
        </a>
        <a href={phone.href.value} aria-label={`Call ${phone.display.value}`} className={tabClassName}>
          <Icon name="phone-call" size={22} className="text-primary" />
          {navigation.mobileBar.callLabel}
        </a>
      </div>
    </nav>
  );
}
