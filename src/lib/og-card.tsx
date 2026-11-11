import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { hospital } from "@/data/hospital-content";

import { brandColor } from "./seo";

type OgCardProps = {
  eyebrow: string;
  title: string;
};

export async function renderOgCard({ eyebrow, title }: OgCardProps) {
  const logo = await readFile(join(process.cwd(), "public/images/brand/logo-white.png"));
  const logoSource = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: brandColor.navy, color: brandColor.white }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSource} width={396} height={87} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 30, color: brandColor.sky }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 40 ? 54 : 68, lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.03em" }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: brandColor.mist }}>
          Call {hospital.phone.display.value} · Open {hospital.availability.value}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
