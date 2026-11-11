"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { hospital } from "@/data/hospital-content";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { errorPages, whatsapp } = hospital;

  return (
    <main className="py-section-mobile md:py-section-tablet lg:py-section">
      <Container className="mx-auto grid max-w-[640px] justify-items-center gap-6 text-center">
        <h1 className="text-h1 font-medium tracking-heading text-balance">{errorPages.errorTitle}</h1>
        <p className="text-body-lg text-muted-foreground">{errorPages.errorLead}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={reset}>{errorPages.retryLabel}</Button>
          <CallButton />
          <Button href={whatsapp.href.value} variant="secondary" target="_blank" iconBefore="messages-square">
            {whatsapp.label}
          </Button>
        </div>
      </Container>
    </main>
  );
}
