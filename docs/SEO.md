# SEO

## How it is set up

- `src/lib/seo.ts` holds `siteUrl`, the shared `pageMetadata()` helper (title, description, canonical, Open Graph, Twitter) and the brand colours used by social images.
- The root layout sets the home title and a title template, so every other page gets `Page title | Hemalatha Health Care`. Keep page titles to about 38 characters and descriptions under 160.
- Home copy lives in `hospital.homeSeo` in `src/data/hospital-content.ts`. Service titles and descriptions live in each service's `page.seo`. Guide descriptions live in `src/data/guides.ts`.
- Social share cards are generated at build time: `src/app/opengraph-image.tsx` (home), `guides/opengraph-image.tsx`, `guides/[slug]/opengraph-image.tsx`, `services/[slug]/opengraph-image.tsx`. They use `src/lib/og-card.tsx` (logo on navy, page title, phone number).
- Structured data (JSON-LD): WebSite, MedicalBusiness (home), FAQPage (confirmed answers only), Service and BreadcrumbList (service pages), Article and BreadcrumbList (guides). Only verified or provisional fields are used. No ratings, doctors, specialties, accreditations, prices or opening hours beyond the 24/7 front desk.
- `sitemap.ts`, `robots.ts` (blocks `/design-system`) and `manifest.ts` are generated from the same data.

## Set the real domain before launch

`siteUrl` is `hospital.siteUrl.value` (`https://hemalathahealthcare.com`, unconfirmed) unless the environment variable `NEXT_PUBLIC_SITE_URL` is set. Every canonical, share-card URL, sitemap entry and JSON-LD URL follows it. Set `NEXT_PUBLIC_SITE_URL` on the host to the confirmed domain (no trailing slash). The flyers say hemalathahealthcare.com and Google lists hemalathahealthcareservices.com; if the canonical points at a domain the client does not control, search engines will ignore the site.

## Left out on purpose until the client confirms details

- `geo` and `hasMap` in the business markup: the Google pin is in Aditya Nagar 500085, the flyer address is KPHB Colony 500072.
- A second phone number (96426 60492): it is not shown on the site, and structured data should match visible content.
- Article `datePublished` / `dateModified`: the guides have no real publish dates yet.
- Separate markup for branches 2 to 4: they have no full address. They appear as `areaServed` only.
- Review or rating markup: self-serving review markup is against Google's guidelines for local businesses.

## After launch

1. Verify the domain in Google Search Console and submit `/sitemap.xml`.
2. Claim and complete the Google Business Profile: correct category (home health care service), the same name, address and phone as the site, services, photos and the website link.
3. Test the home page and one service page in Google's Rich Results Test and in WhatsApp (paste the link) to see the share card.
4. Add real photos, real reviews and confirmed FAQ answers, then re-check titles and descriptions against what people search for (Search Console queries).
