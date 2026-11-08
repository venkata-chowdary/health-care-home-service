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
  title: `${hospital.name.value} | Hospital in Kukatpally, Hyderabad`,
  description: "Multi-speciality hospital care in Aditya Nagar, Kukatpally, Hyderabad. Call the front desk or send an appointment enquiry.",
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
