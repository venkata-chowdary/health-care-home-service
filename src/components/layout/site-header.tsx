"use client";

import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { duration, easing } from "@/design-system/motion";

type SiteHeaderProps = {
  brandName: string;
  navItems: { label: string; href: string }[];
  phone: { display: string; href: string };
  email: { display: string; href: string };
  infoStrip: { availabilityShort: string; availabilityLabel: string; locationShort: string; locationLabel: string };
  bookLabel: string;
  drawerBookLabel: string;
  bookHref: string;
};

export function SiteHeader({ brandName, navItems, phone, email, infoStrip, bookLabel, drawerBookLabel, bookHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const desktopQuery = window.matchMedia("(min-width: 1181px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const menuButton = menuButtonRef.current;
      if (!menuButton || !drawerRef.current) return;

      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const drawerItems = drawerRef.current.querySelectorAll<HTMLElement>("a[href]");
      const lastItem = drawerItems[drawerItems.length - 1];
      const active = document.activeElement;
      const focusIsInside = active === menuButton || drawerRef.current.contains(active);

      if (!focusIsInside || (event.shiftKey && active === menuButton)) {
        event.preventDefault();
        (event.shiftKey ? lastItem : menuButton).focus();
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault();
        menuButton.focus();
      }
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      desktopQuery.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-30 border-b border-border bg-white/94 backdrop-blur-[10px]">
        <div className="border-b border-border bg-surface">
          <Container className="flex h-info-strip items-center gap-4 overflow-x-auto whitespace-nowrap text-caption text-muted-foreground [scrollbar-width:none] justify-between min-[561px]:overflow-visible [&::-webkit-scrollbar]:hidden">
            <div className="flex shrink-0 items-center gap-4">
              <a href={phone.href} className="flex items-center gap-1.5 transition-colors duration-160 hover:text-foreground">
                <Icon name="phone" size={14} className="text-primary" />
                {phone.display}
              </a>
              <a href={email.href} className="flex items-center gap-1.5 max-[560px]:hidden transition-colors duration-160 hover:text-foreground">
                <Icon name="mail" size={14} className="text-primary" />
                {email.display}
              </a>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Icon name="clock" size={14} className="text-primary" />
                <span className="min-[561px]:hidden">{infoStrip.availabilityShort}</span>
                <span className="max-[560px]:hidden">{infoStrip.availabilityLabel}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="map-pin" size={14} className="text-primary" />
                <span className="min-[561px]:hidden">{infoStrip.locationShort}</span>
                <span className="max-[560px]:hidden">{infoStrip.locationLabel}</span>
              </span>
            </div>
          </Container>
        </div>

        <Container className="grid h-[76px] grid-cols-[auto_1fr_auto] items-center gap-6 max-[560px]:h-[68px] max-[560px]:gap-2">
          <Link href="/" aria-label={`${brandName} home`} className="touch-target flex items-center">
            <Image src="/images/brand/logo.png" alt={brandName} width={1080} height={238} sizes="164px" preload className="h-9 w-auto" />
          </Link>

          <nav aria-label="Main" className="flex justify-center gap-0.5 max-[1180px]:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="touch-target whitespace-nowrap rounded-button px-2.5 py-2 text-[14.5px] text-muted-foreground transition-colors duration-160 hover:bg-surface hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="col-start-3 flex items-center gap-2">
            <Button href={phone.href} variant="outline" iconBefore="phone-call" aria-label={`Call ${phone.display}`} className="max-[560px]:size-10 max-[560px]:px-0 min-[561px]:hidden">
              <span className="max-[560px]:hidden">{phone.display}</span>
            </Button>
            <Button href={bookHref} iconBefore="house" className="max-[560px]:hidden">
              {bookLabel}
            </Button>
            <Button
              ref={menuButtonRef}
              variant="secondary"
              iconOnly
              iconBefore={menuOpen ? "x" : "menu"}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-drawer" : undefined}
              onClick={() => setMenuOpen(!menuOpen)}
              className="min-[1181px]:hidden"
            />
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            ref={drawerRef}
            id="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: duration.base, ease: easing.standard }}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
            }}
            className="fixed inset-x-0 bottom-0 top-[calc(var(--spacing-info-strip)+76px+env(safe-area-inset-top,0px))] z-[29] grid content-start gap-1 overflow-y-auto bg-background pt-3 pb-8 pr-[max(1.25rem,env(safe-area-inset-right,0px))] pl-[max(1.25rem,env(safe-area-inset-left,0px))] max-[560px]:top-[calc(var(--spacing-info-strip)+68px+env(safe-area-inset-top,0px))] min-[1181px]:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="flex items-center justify-between border-b border-border px-1 py-[18px] text-[20px] font-medium tracking-[-0.02em] text-foreground">
                {item.label}
                <Icon name="chevron-right" size={18} className="text-slate-400" />
              </a>
            ))}
            <Button href={bookHref} iconBefore="house" className="mt-3 w-full max-[560px]:hidden">
              {drawerBookLabel}
            </Button>
            <Button href={phone.href} variant="outline" iconBefore="phone-call" className="mt-3 w-full max-[560px]:hidden">
              {phone.display}
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
