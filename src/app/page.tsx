import Image from "next/image";

import { hospital } from "@/data/hospital-content";

export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center bg-surface px-5">
      <div className="grid max-w-xl justify-items-center gap-6 text-center">
        <Image src="/images/brand/logo.png" alt={hospital.legalName.value} width={1080} height={238} priority className="h-auto w-72" />
        <span className="rounded-button bg-warning-surface px-3 py-1.5 text-caption font-medium text-warning">Project set up · landing page not built yet</span>
        <p className="text-body-lg text-muted-foreground">
          Design tokens, content and brand assets are in place. The approved preview is in <code>docs/previews/landing-preview.html</code>.
        </p>
      </div>
    </main>
  );
}
