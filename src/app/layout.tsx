import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { MotionProvider } from "@/components/layout/motion-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { hospital } from "@/data/hospital-content";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(hospital.siteUrl.value),
  title: `${hospital.name.value} | Home healthcare in Hyderabad`,
  description: "Home nursing, critical care, elder care and physiotherapy at home across Hyderabad. Call or WhatsApp 86390 74341, available 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: hospital.name.value,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={dmSans.variable}>
      <body>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
