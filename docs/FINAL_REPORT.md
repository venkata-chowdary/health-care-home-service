# Hemalatha Health Care landing page: final report

Report date: 8 November 2026. Production build (`next build`, served with `next start` on port 3100) tested in Google Chrome through Playwright. Screenshots are in `docs/qa/`.

## Summary

The page is built to the approved `docs/previews/landing-preview.html` and passes the QA checks below. It is **not launch-ready**, for two reasons that are outside the code:

1. The enquiry form has nowhere to send enquiries yet, so it reports failure on every valid submission (see Known limitations).
2. Most business content is `sample` or `provisional` and photography is placeholder frames (see Client information still needed).

SEO is deferred until the real content arrives, as agreed.

## What was built

A single-page site for Hemalatha Health Care Pvt. Ltd., Aditya Nagar, Kukatpally, Hyderabad, aimed at appointment enquiries, phone calls, visits and trust.

- Landing page at `/` with 11 sections, a sticky header, a mobile drawer, a sticky call-and-book bar on phones and a footer.
- `/design-system` route that documents tokens, type, spacing, components and states.
- Content kept in `src/data/hospital-content.ts` and `src/data/reviews.ts`, each field tagged `verified`, `provisional` or `sample`.
- Enquiry form with client and server validation, and a server action.

## Sections

| # | Section | id | Notes |
|---|---|---|---|
| 1 | Hero | `hero` | Navy, photo deck with arrows, dots and Left/Right arrow keys, fact row |
| 2 | About | `about` | Layered photos, four points |
| 3 | Departments | `departments` | Six cards, first one featured; labelled "Sample list" |
| 4 | Why us | `why-us` | Four statements; labelled "need client sign-off" |
| 5 | Doctors | `doctors` | Three "Demo profile" cards; horizontal snap scroll on phones |
| 6 | Facilities | `facilities` | Tinted panel with 24h figure and photo collage; labelled "to confirm" |
| 7 | Reviews | `reviews` | One real Google review, two empty slots, rating 4.7 from 96 reviews. This is the only place the rating appears |
| 8 | Enquiry | `enquiry` | Form beside a call card |
| 9 | Visit | `visit` | Address card with Get directions link over a photo placeholder |
| 10 | FAQ | `faq` | Ten items using native `<details>` |
| 11 | Closing CTA | `cta` | Blue panel, Book and Call buttons |

## Design decisions

- **The preview is the spec.** Side-by-side at 1440px, the hero, departments and every later section match the preview's layout, spacing and copy. The deliberate differences are the real logo in the header (preview used a placeholder) and the header being about 8px shorter because of it.
- **Tokens only.** Colour, type, radius, shadow and motion values live in `src/app/globals.css` and `src/design-system/motion.ts`. No raw hex values appear in components (the hex strings on `/design-system` are documentation labels).
- **One action colour.** Electric blue is used for every action. Navy is for authority (hero, footer, featured card).
- **Cards are bordered with no resting shadow.** Buttons are pills and panels use `rounded-panel`.
- **Native elements where possible.** FAQ uses `<details>/<summary>`, so it works without JavaScript and with keyboard by default.
- **Motion is restrained.** Opacity and transform only, reveal once, 20% visibility trigger. The deck moves only on user input.
- **Lenis for smooth scrolling**, not CSS `scroll-behavior`. Anchor clicks go through Lenis with the sticky header height and `scroll-margin-top` as the offset, update the hash and move focus to the target.
- **Honest enquiry form.** It never claims a booking and never claims receipt it cannot prove (changed during this QA pass).
- **Mobile is designed.** Drawer menu, sticky Call and Book bar, doctors as a snap scroller, Visit card overlapping the photo.

## Component inventory

**UI primitives** (`src/components/ui`): `ArrowLink`, `Button` (variants incl. white, ghost-light, glass, icon-only, loading), `Eyebrow`, `FloatingBadge`, `Icon` (Lucide, stroke 1.75), `ParallaxLayer`, `PhotoFrame` (image or labelled placeholder), `Reveal` / `RevealGroup` / `RevealItem`, `StarRating`, `Tag`.

**Layout** (`src/components/layout`): `Container`, `Section`, `SectionHeading`, `SiteHeader` (with drawer), `SiteFooter`, `MobileCallBar`, `MotionProvider` (`reducedMotion="user"`), `SmoothScroll` (Lenis).

**Healthcare** (`src/components/healthcare`): `DepartmentCard`, `DoctorCard`, `EnquiryForm`, `FaqItem`, `ReviewCard`, `ValuePoint`.

**Sections** (`src/components/sections`): `Hero`, `HeroDeck`, `About`, `Departments`, `WhyUs`, `Doctors`, `Facilities`, `Reviews`, `Enquiry`, `Visit`, `Faq`, `Cta`.

**Other:** `src/actions/submit-enquiry.ts` (server action), `src/lib/validate-enquiry.ts` (shared client/server validation), `src/lib/smooth-scroll-instance.ts`, `src/lib/cn.ts`.

## Technology

Next.js 16.2.2 (App Router, Turbopack, all routes statically prerendered), React 19.2.4, TypeScript 5, Tailwind CSS 4, Motion for React 14 (`motion/react`, `motion/mini` for the FAQ), Lenis 1.3, Lucide React, DM Sans through `next/font`. Server Components by default; client components only for the header drawer, hero deck, FAQ item, enquiry form, reveal wrappers and Lenis.

## Verification

| Check | Result |
|---|---|
| `npx tsc --noEmit` | Clean |
| `npx eslint src` | Clean |
| `npx next build` | Succeeds; `/`, `/design-system`, icons all static |
| Console errors and warnings | None on `/` or `/design-system` at any of the six widths, in reduced motion, or during the form and drawer flows |
| Failed requests, broken images | None |
| axe-core (WCAG 2.0/2.1 A and AA plus best practice) | 0 violations on `/` at 1440 and 375, and on `/design-system` at 1440 |

## Responsive QA results

Each width was loaded fresh, scrolled end to end to trigger reveals, and checked for page-level horizontal overflow, broken images and console output. Full-page screenshots: `docs/qa/landing-{1440,1280,1024,768,375,360}.png` and `docs/qa/design-system-*.png`. Section-by-section views at 1440, 768 and 375 were reviewed by eye.

| Width | Horizontal page overflow | Layout | Notes |
|---|---|---|---|
| 1440 | None | Matches preview | Reference layout |
| 1280 | None | Pass | |
| 1024 | None | Pass | Desktop nav collapses to the drawer; Visit card sits inside the photo |
| 768 | None | Pass after fix | Visit card previously overflowed its photo (see Fixed) |
| 375 | None | Pass | Drawer, sticky bar, snap-scrolling doctors and reviews |
| 360 | None | Pass | Form, Visit card and hero checked individually |

Elements wider than the viewport exist only inside intentional horizontal scrollers (doctors, reviews, the `/design-system` table), none of which widen the page.

## Interaction QA

| Area | Result |
|---|---|
| Navigation | All 35 in-page links resolve to a real id. Seven header and drawer anchors tested at 1440 and 375: each lands with the section top exactly at the header's bottom edge (77px desktop, 69px phone), updates the hash and moves focus to the section |
| Lenis | Active in normal mode, with a `lenis` class on `<html>`. Removed under `prefers-reduced-motion`, where anchors then jump instantly |
| Drawer | Opens and closes by button; Escape closes it and returns focus to the menu button; focus cycles inside it; page scroll is locked while open; choosing a link closes it and scrolls with the correct offset |
| Phone links | All 8 `tel:` links use `tel:+918639074341` |
| Directions links | The three map links (Get directions, address, rating pill) open the Google Maps short link in a new tab with `rel="noopener"` |
| Enquiry form | Empty submit shows both errors and focuses the first. Short or non-Indian numbers rejected. `98765 43210`, `+91 98765 43210` and `09876543210` accepted. Valid submit shows the honest failure message, keeps what was typed, and moves focus to the status message. Checked at 1440 and 360 |
| FAQ | Click, Enter and Space toggle items; multiple items can be open; first item open by default |
| Focus order | Skip link, logo, nav, phone, Book, hero buttons, deck controls, then sections in reading order. Every focus target has a 2px outline (blue, or slate on the light nav) |
| Reduced motion | Lenis off, no running CSS animations, anchors instant, content revealed by opacity only |
| No JavaScript | Page text renders (about 4,160 characters in `<main>`); the only hidden elements are the four inactive hero-deck captions, hidden by design |

## Fixed during this pass

1. **Enquiry form claimed receipt it could not prove.** The server action returned success without sending anything, so the form said "Enquiry received" while discarding the enquiry. It now returns failure until a delivery channel exists, and the form shows "We couldn't send your enquiry. Please call the front desk instead." Success copy remains for when delivery is wired up. (`src/actions/submit-enquiry.ts`, `src/components/healthcare/enquiry-form.tsx`)
2. **Contrast failure in the closing CTA.** The lead text was `#dfe8ff` on `#1f6bff` (3.71:1, needs 4.5:1). Now white. (`src/components/sections/cta.tsx`)
3. **Visit address card spilled out of its photo at 768px.** The photo frame used a 16/7 ratio (about 300px tall) against a card of about 340px. It now uses a fixed 400px height from `md` and 490px from `xl`, matching the previous desktop size. (`src/components/sections/visit.tsx`)
4. **Four redundant tab stops in the hero deck.** Inactive deck photos were focusable, duplicating the dots. They stay clickable by mouse; keyboard users use the arrows and dots. (`src/components/sections/hero-deck.tsx`)
5. **Stand-alone arrow links were 22px tall.** They now meet the 24px minimum target size. (`src/components/ui/arrow-link.tsx`)

## Performance findings

Measured on the production build served locally, so network time is optimistic. The phone run used a 4x CPU slowdown and a 1.6 Mbps, 150ms profile.

| Metric | Desktop | Phone (throttled) |
|---|---|---|
| Largest Contentful Paint | 1.6 s | 4.1 s |
| Cumulative Layout Shift | 0 | 0 |
| DOMContentLoaded / load | 0.12 s / 0.51 s | 0.73 s / 2.7 s |
| JavaScript (decoded) | 744 kB | same |
| CSS / fonts / images | 50 kB / 61 kB / 69 kB | same |

- Layout is stable (CLS 0), and images are only the three small brand files because the photography is still placeholder.
- The 4.1 s phone LCP is above the 2.5 s "good" mark. Likely contributors are the 0.8 s load-time reveal on the hero, JavaScript size on a throttled CPU, and font loading. It is worth re-measuring once real photos are in, because the hero photo will probably become the LCP element and needs `priority` and sized `next/image` props.
- 744 kB is decoded size, not transfer size; the compressed figure was not measured. Motion, Lenis and the client sections account for most of it. Check it against a real deployment before optimising.
- A Lighthouse run on the deployed site is still outstanding.

## Accessibility findings

- axe-core: 0 violations on the landing page at desktop and phone widths, and on `/design-system`.
- Landmarks, skip link, `aria-label`s on icon buttons, `aria-current` on deck controls, a live region for deck changes, `role="status"` for form results, `aria-invalid` and `aria-describedby` for field errors.
- Form errors are text with an icon, not colour alone; focus is moved to the first invalid field or to the result message.
- Contrast figures in `docs/DESIGN_SYSTEM.md` agree with the axe results (white on primary is 4.56:1; form borders are 3.04:1).
- Remaining small targets (below 24px) are the header and footer text links (18px tall with wide spacing between them, which satisfies WCAG 2.2's spacing exception), the 20px consent checkbox, and the 1px skip link, which is visible on focus. None were changed.
- Not done: testing with a screen reader (NVDA, VoiceOver, TalkBack), and testing 200% and 400% zoom.

## Known limitations

1. **SEO is deferred** until the real content arrives. Only basic metadata exists (title, description, canonical `/`, Open Graph type, locale and site name, with `metadataBase` taken from the provisional site URL). There is no Open Graph image, no JSON-LD, no sitemap and no robots file, and the domain is unconfirmed. When added, JSON-LD must use only `verified` or `provisional` fields.
2. **The enquiry form cannot deliver.** No email, WhatsApp Business or CRM destination exists, so every valid submission shows the failure message. Validation and the failure and success states all work. The server action in `src/actions/submit-enquiry.ts` needs a real delivery call and must return success only after it succeeds. Until then the phone number beside the form is the only working route, which the failure message points to.
3. **Placeholder content is visible on the page**: sample departments, doctors, facilities and value statements (each labelled), two empty review slots with text such as "Second real Google review, quoted in full.", unconfirmed visiting and outpatient hours ("To be confirmed"), and photo placeholder frames throughout. None of it should go live.
4. **Duplicate headline.** The About and Why-us sections read "Hospital care designed around families." and "Hospital care, designed around families." This is how the approved preview was written, so it was left as is. It should be changed when the copy is signed off.
5. **The Visit "map" is a photo placeholder**, not an embedded map. Directions open Google Maps in a new tab.
6. **Department "Learn more" links and doctor "+" buttons** scroll to the enquiry form, since no department or doctor pages exist.
7. **Browser coverage.** Tested in Chrome only, through Playwright, with emulated viewports. Not tested in Safari or Firefox, on a physical phone, or in a PWA or in-app webview.
8. **No automated test suite.** QA scripts were run ad hoc and are not in the repository.
9. **Consent checkbox is not required to submit.** The wording asks consent to be contacted; decide whether it should block submission.
10. **The Google listing may not be the hospital.** Google files the business under "home health care service", and the one real review describes a nurse caring for a relative. The rating, review count, phone, address and directions link all come from that listing and are `provisional` until the client confirms it.

## Client information still needed

From `docs/CONTENT_VERIFICATION.md`. Never present `sample` content as fact, and do not add accreditations, bed counts, success rates, insurer names or ratings the client has not supplied.

| Item | Current status | Needed from client |
|---|---|---|
| Google listing | provisional | Confirm the listing is the hospital (Google categorises it as home health care) |
| Website domain | provisional | Domain for canonical URLs and Open Graph |
| Phone 086390 74341 | provisional | Confirm it is the hospital front desk |
| Address, Aditya Nagar, Kukatpally 500085 | provisional | Full street address |
| Front desk open 24 hours | provisional | Confirm |
| Outpatient and visiting hours | sample | Supply |
| Departments (6 listed) | sample | The real list |
| Doctors | sample | Names, departments, registered qualifications, photos, written consent |
| Facilities | sample | Which ones exist |
| Value statements | sample | Sign off |
| Hero copy and facts | sample | Sign off; confirm walk-ins are welcome |
| FAQ answers | sample / provisional | Operational answers |
| Reviews | provisional | Decide whether to quote reviews that describe home nursing; supply or approve more real reviews |
| Enquiry destination | sample | Email, WhatsApp Business or CRM |
| Photography | sample | Building, reception, wards, diagnostics, pharmacy, staff |
| White logo for dark backgrounds | generated | `public/images/brand/logo-white.png` was derived from the PNG; replace with the designer's file if available |

## Suggested next steps

1. Get the client items above, starting with the enquiry destination, the phone number and the hours.
2. Wire the server action to the chosen channel, then re-test the success and failure states.
3. Add real photography with `next/image` sizing and `priority` on the hero image, then re-measure LCP.
4. Add SEO (metadata, Open Graph, JSON-LD from verified fields, sitemap) once content is final.
5. Test on a physical phone, in Safari and Firefox, and with a screen reader.
