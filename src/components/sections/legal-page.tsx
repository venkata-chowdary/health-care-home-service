import { Container } from "@/components/layout/container";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Icon } from "@/components/ui/icon";
import { hospital } from "@/data/hospital-content";
import { legalDocuments } from "@/data/legal";

export function LegalPage({ document }: { document: (typeof legalDocuments)[number] }) {
  const { navigation } = hospital;

  return (
    <>
      <SiteHeader
        brandName={hospital.name.value}
        navItems={navigation.items.map((item) => ({ label: item.label, href: `/${item.href}` }))}
        phone={{ display: hospital.phone.display.value, href: hospital.phone.href.value }}
        bookLabel={navigation.bookLabel}
        drawerBookLabel={navigation.drawerBookLabel}
        bookHref={navigation.bookHref}
      />

      <main id="top">
        <article className="py-section-mobile md:py-section-tablet lg:py-section">
          <Container className="mx-auto grid max-w-[760px] grid-cols-[minmax(0,1fr)] gap-8 max-md:gap-6">
            <header className="grid gap-4">
              <h1 className="text-h1 font-medium tracking-heading text-balance">{document.title}</h1>
              <p className="text-caption text-muted-foreground">Last updated {document.updated}</p>
              <p className="text-body-lg text-muted-foreground">{document.intro}</p>
            </header>

            {document.sections.map((section) => (
              <section key={section.heading} className="grid grid-cols-[minmax(0,1fr)] gap-3.5">
                <h2 className="text-h3 font-medium tracking-heading text-balance">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-body text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="grid gap-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-muted-foreground">
                        <span className="mt-1 grid size-6 flex-none place-items-center rounded-full bg-accent text-primary">
                          <Icon name="check" size={14} strokeWidth={2} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </Container>
        </article>
      </main>

      <SiteFooter homePath="/" />
      <MobileCallBar />
    </>
  );
}
