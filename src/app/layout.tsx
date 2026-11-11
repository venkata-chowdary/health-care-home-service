import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

import { MotionProvider } from "@/components/layout/motion-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { hospital } from "@/data/hospital-content";
import { pageMetadata, siteUrl } from "@/lib/seo";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const homeTitle = `${hospital.homeSeo.title} | ${hospital.name.value}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({ title: homeTitle, description: hospital.homeSeo.description, path: "/" }),
  title: { default: homeTitle, template: `%s | ${hospital.name.value}` },
  applicationName: hospital.name.value,
  category: "health",
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
};

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={dmSans.variable}>
      <body>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <SmoothScroll />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <SpeedInsights />
        {googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
