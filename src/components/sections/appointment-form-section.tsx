import Link from "next/link";

import { AppointmentForm } from "@/components/healthcare/appointment-form";
import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { hospital } from "@/data/hospital-content";

export function AppointmentFormSection() {
  const { appointmentPage, serviceHero, services, phone, whatsapp, email } = hospital;

  const contactCards = [
    { icon: "phone", label: appointmentPage.talkCallLabel, detail: phone.display.value, href: phone.href.value },
    { icon: "message-circle", label: appointmentPage.talkWhatsappLabel, detail: appointmentPage.talkWhatsappDetail, href: whatsapp.href.value },
    { icon: "mail", label: appointmentPage.talkEmailLabel, detail: email.display.value, href: email.href.value },
  ] as const;

  return (
    <section id="appointment" aria-labelledby="appointment-heading" className="pt-8 pb-section-mobile md:pb-section-tablet lg:pb-section">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-8 max-md:gap-6">
        <nav aria-label={serviceHero.breadcrumbLabel}>
          <ol className="flex flex-wrap items-center gap-1.5 text-body-sm text-muted-foreground">
            <li>
              <Link href="/" className="touch-target text-link no-underline">
                {appointmentPage.breadcrumbHome}
              </Link>
            </li>
            <Icon name="chevron-right" size={14} className="text-slate-400" />
            <li aria-current="page" className="font-medium text-foreground">
              {appointmentPage.breadcrumbCurrent}
            </li>
          </ol>
        </nav>

        <Reveal trigger="load" className="grid max-w-160 gap-3.5">
          <h1 id="appointment-heading" className="text-h1 font-medium tracking-heading text-balance">
            {appointmentPage.title}
          </h1>
          <p className="text-body-lg text-muted-foreground">{appointmentPage.lead}</p>
        </Reveal>

        <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] grid-rows-[auto_auto] items-start gap-x-8 gap-y-4 max-[900px]:grid-cols-1 max-[900px]:grid-rows-[auto_auto_auto_auto]">
          <div className="row-span-2 grid grid-rows-subgrid">
            <div className="grid content-end gap-1">
              <h2 className="text-h3 font-medium">{appointmentPage.formHeading}</h2>
              <p className="text-body-sm text-muted-foreground">{appointmentPage.formNote}</p>
            </div>
            <div className="grid content-start gap-4">
              <AppointmentForm copy={appointmentPage} serviceNames={services.map((service) => service.name)} serviceSlugs={services.map((service) => service.slug ?? "")} />
              <p className="text-caption text-muted-foreground">{appointmentPage.privacyNote}</p>
            </div>
          </div>

          <Reveal className="row-span-2 grid grid-rows-subgrid">
            <div className="grid content-end gap-1">
              <h2 className="text-h3 font-medium">{appointmentPage.talkHeading}</h2>
              <p className="text-body-sm text-muted-foreground">{appointmentPage.talkNote}</p>
            </div>
            <div className="grid content-start gap-5">
            <ul className="grid gap-3">
              {contactCards.map((card) => (
                <li key={card.label}>
                  <a
                    href={card.href}
                    className="grid min-h-tap grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-card border border-border bg-background p-4 no-underline transition-[border-color] duration-180 ease-standard hover:border-primary"
                  >
                    <span className="grid size-11 place-items-center rounded-sm bg-accent text-accent-foreground">
                      <Icon name={card.icon} size={20} />
                    </span>
                    <span className="grid min-w-0">
                      <span className="font-medium text-foreground">{card.label}</span>
                      <span className="text-body-sm wrap-break-word text-muted-foreground">{card.detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-start gap-2 text-body-sm text-muted-foreground">
              <Icon name="map-pin" size={16} className="mt-1 flex-none" />
              {hospital.branches[0].address}
            </p>
            <p className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-card border border-warning-border bg-warning-surface p-4 text-body-sm text-foreground">
              <Icon name="siren" size={20} className="text-warning" />
              {appointmentPage.emergencyNote}
            </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
