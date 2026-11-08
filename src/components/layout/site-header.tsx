"use client";

import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { duration, easing } from "@/design-system/motion";
import { cn } from "@/lib/cn";
import { smoothScroll } from "@/lib/smooth-scroll-instance";

type SiteHeaderProps = {
  brandName: string;
  navItems: { label: string; href: string }[];
  phone: { display: string; href: string };
  bookLabel: string;
  drawerBookLabel: string;
  bookHref: string;
};

export function SiteHeader({ brandName, navItems, phone, bookLabel, drawerBookLabel, bookHref }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 60);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    smoothScroll.lenis?.stop();
    const desktopQuery = window.matchMedia("(min-width: 1081px)");
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
      smoothScroll.lenis?.start();
      desktopQuery.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-button focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "sticky top-[env(safe-area-inset-top,0px)] z-30 border-b bg-white/94 backdrop-blur-[10px] transition-colors duration-200",
          scrolled ? "border-border" : "border-transparent",
        )}
      >
        <Container className="grid h-[76px] grid-cols-[auto_1fr_auto] items-center gap-6 max-[560px]:h-[68px] max-[560px]:gap-2">
          <a href="#top" className="flex items-center">
            <Image src="/images/brand/logo.png" alt={brandName} width={1080} height={238} preload className="h-9 w-auto" />
          </a>

          <nav aria-label="Main" className="flex justify-center gap-1 max-[1080px]:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-button px-3 py-2 text-[14.5px] text-muted-foreground transition-colors duration-160 hover:bg-surface hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="col-start-3 flex items-center gap-2">
            <a
              href={phone.href}
              aria-label={`Call ${phone.display}`}
              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-button px-3 text-[14.5px] font-medium text-foreground hover:bg-surface"
            >
              <Icon name="phone" size={16} className="text-primary" />
              <span className="max-[1080px]:hidden">{phone.display}</span>
            </a>
            <Button href={bookHref} size="sm" className="max-[560px]:hidden">
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
              className="min-[1081px]:hidden"
            />
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            ref={drawerRef}
            id="mobile-drawer"
            data-lenis-prevent=""
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: duration.base, ease: easing.standard }}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
            }}
            className="fixed inset-x-0 bottom-0 top-[calc(76px+env(safe-area-inset-top,0px))] z-[29] grid content-start gap-1 overflow-y-auto bg-background pt-3 pb-8 pr-[max(1.25rem,env(safe-area-inset-right,0px))] pl-[max(1.25rem,env(safe-area-inset-left,0px))] max-[560px]:top-[calc(68px+env(safe-area-inset-top,0px))] min-[1081px]:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="flex items-center justify-between border-b border-border px-1 py-[18px] text-[20px] font-medium tracking-[-0.02em] text-foreground">
                {item.label}
                <Icon name="chevron-right" size={18} className="text-slate-400" />
              </a>
            ))}
            <Button href={bookHref} className="mt-3 w-full">
              {drawerBookLabel}
            </Button>
            <Button href={phone.href} variant="secondary" iconBefore="phone" className="mt-3 w-full">
              {phone.display}
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
