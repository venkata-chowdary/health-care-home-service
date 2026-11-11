# Responsive QA: bugs found and fixed

Scope: layout, sizing, spacing, tap targets and overflow only. No tokens, copy or content changed.

Tested on a production build (`next build --webpack` and `next start`) in Chrome at 360, 375, 390, 414, 768, 1024, 1280 and 1440, on `/`, all five `/services/[slug]` pages, `/guides`, one guide, and `/design-system` (375 and 1440). Phone widths used touch and mobile emulation. Each page was scrolled through first so scroll reveals had fired.

## Result

| Check | Before | After |
|---|---|---|
| `scrollWidth == clientWidth`, every page and width | pass (marquee fix already in) | pass |
| Elements past the viewport edge with no clipping ancestor | 0 | 0 |
| Links, buttons and inputs under 44px, per page | 18 to 33 | 0 (home, service, guides, design-system, and the open drawer) |
| Service-page content stuck invisible | 2 cards on all 5 pages | 0 |
| Lighthouse mobile CLS (home, `/services/home-nursing`) | in-page CLS 0 to 0.02 | 0 and 0 |
| Lighthouse mobile LCP | not measurable (see limits) | 5.6 s and 4.9 s, unchanged within noise |

Before and after screenshots (360, 375, 768, 1440, home and `/services/home-nursing`) are in `docs/qa/responsive/` as `before-*.png` and `after-*.png`.

## Bugs fixed

| # | Page and widths | What was wrong | What changed | File |
|---|---|---|---|---|
| 1 | All five service pages, all widths | "Before we start" and "When to call the doctor" cards never appeared. `RevealGroup` was `display: contents`, so its IntersectionObserver had no box and never fired; the cards stayed at `opacity: 0`. | The group is now the grid container. | `sections/service/service-prepare.tsx` |
| 2 | All pages, ≤767 | Footer bottom padding was a fixed 96px. The call bar is 72px plus the safe-area inset, so on a notched phone it covered the footer's last row. | Padding is now call-bar height plus the safe-area inset plus 1rem, from a new `--spacing-call-bar` token. Measured clearance is 16px at 360 to 414. | `layout/site-footer.tsx`, `globals.css` |
| 3 | All pages, ≤767 | The call bar could sit over the enquiry fields while the keyboard was open. | The bar slides away and becomes non-interactive while any text field, select or textarea has focus. It stays visible for the consent checkbox. | `globals.css`, `layout/mobile-call-bar.tsx` |
| 4 | 641 to 767 | The call bar stretched across the whole width. | Capped at `max-w-md` and centred. | `layout/mobile-call-bar.tsx` |
| 5 | Home, 360 to 414 | "Learn more" links on service cards (24px), "All guides" (24px) and other arrow links. | New `touch-target` utility (`globals.css`) adds an invisible hit area of at least 44px. `ArrowLink` uses it, so branch directions, "Read the guide" and the related-service link are covered too. Nothing looks bigger. | `ui/arrow-link.tsx`, `globals.css` |
| 6 | All pages, all widths | Footer links were 18px tall. | Every footer link is a 44px row (`min-h-tap`). The desktop footer is about 100px taller. | `layout/site-footer.tsx` |
| 7 | Service pages and guide pages, all widths | Breadcrumb links were 18px tall. | `touch-target`. | `sections/service/service-hero.tsx`, `app/guides/[slug]/page.tsx` |
| 8 | All pages | Header logo link was 36px; footer logo link 36px. | `touch-target`. | `layout/site-header.tsx`, `layout/site-footer.tsx` |
| 9 | All pages, ≤560 | The header phone icon button was 40×40. | 44×44, matching the menu button. | `layout/site-header.tsx` |
| 10 | All pages, ≥1081 | Desktop nav links were 39px tall. | `touch-target`. | `layout/site-header.tsx` |
| 11 | Branches, FAQ, design-system | `sm` buttons (call button in the branch card and FAQ) were 40px. | `touch-target` on the `sm` size. The visible size is still 40px. | `ui/button.tsx` |
| 12 | Enquiry form, all widths | The consent checkbox was 20px, and its label was 22 to 43px tall. | The label is at least 44px, with 12px vertical padding. The audit counts a checkbox inside a 44px label as covered. | `healthcare/enquiry-form.tsx` |
| 13 | Home hero, ≤767 | The 2×2 fact grid was centred, and each cell's term and detail were spread apart by row stretching, so columns sat out of line. | Items are top-aligned (`content-start`), left-aligned on mobile, and the divider runs the full row height. Top edges match at 360 to 414. | `sections/hero.tsx` |
| 14 | Home hero, service hero, closing CTA, ≤480 | The two buttons wrapped into mismatched content-width pills. | They stack full-width with equal widths (320/335/350/374px at 360/375/390/414). | `sections/hero.tsx`, `sections/service/service-hero.tsx`, `sections/cta.tsx` |
| 15 | Home hero, ≤480 | Front photo was 78% of the container (261×163 at 375), side photos peeked ~13px. | Front photo 90% (302×188 at 375, 288×180 at 360), peek step tightened to 10%. The ≤767 rules use non-overlapping ranges, because `max-md` was overriding `max-[480px]`. | `sections/hero-deck.tsx` |
| 16 | Home hero, touch | The side photos are `tabindex=-1` and only a few pixels wide on a phone, so there was no thumb control. | Horizontal swipe changes the photo (≥40px, mostly horizontal; vertical scroll is untouched, and a swipe doesn't also fire a click). **This adds behaviour, not only layout.** | `sections/hero-deck.tsx` |
| 17 | Home guides, `/guides`, guide page "more guides", 641 to 960 | Three (or five) cards in two columns left one alone in the last row. | A lone last card spans both columns. | `sections/guides.tsx`, `app/guides/page.tsx`, `app/guides/[slug]/page.tsx` |
| 18 | Critical care service page, 521 to 1100 | Seven items: one alone at the end in 2 and 3 columns. | A lone last card spans the row (3-col and 2-col rules). | `sections/service/service-included.tsx` |
| 19 | All service pages, 521 to 800 | Five visit steps: step 5 alone in a 2-column grid. | Lone last card spans both columns. | `sections/service/service-visit.tsx` |
| 20 | Home branches, 768 to 1023 | The main-branch card hung under the map only, leaving an empty block under the photo. | Below `lg` the wrapper is `display: contents` and the card spans the full row, overlapping the photo and map bottoms like the phone layout. The offset is `-mt-20` to keep the same visual overlap. | `sections/branches.tsx` |
| 21 | Home About, 561 to 900 | The photo was 4:4.4, so about 713px tall on a 768 tablet. | 4:3 in that range. Faces and hands stay in frame. | `sections/about.tsx` |
| 22 | Footer, 561 to 1100 | Three contact tiles in two columns left the third alone. | The last tile spans both columns. | `layout/site-footer.tsx` |
| 23 | Every `grid gap-*` section (see below) | The implicit grid track is `auto`, not `minmax(0,1fr)`. This is the pattern that made the marquee push the page to 4,050px. No overflow reproduces now, but any long unbreakable content could bring it back. | Explicit `grid-cols-[minmax(0,1fr)]`. Added `min-w-0` where a column holds text or a scroller. | see list below |
| 24 | `/design-system` at 375 | The Variants × states table is a horizontal scroller (intentional) but not keyboard reachable. | `role="region"`, label, `tabIndex=0`, `max-w-full`. | `app/design-system/page.tsx` |
| 25 | Paragraphs, all widths | Single-word last lines in body copy. Headings already used `text-balance`. | `text-wrap: pretty` on `p`. | `globals.css` |
| 26 | Header and footer logo | The logo was fetched at `w=3840` (60KB) for a ~164px element. | `sizes="164px"` (a small byte saving, not LCP-critical). | `layout/site-header.tsx`, `layout/site-footer.tsx` |

**#23, files touched:** `sections/{services,branches,faq,how-it-works,home-care-fit,guides,care-team,cta}.tsx`, `sections/service/{service-hero,service-included,service-visit,service-extra,service-related,service-reviews,care-options}.tsx`, `app/guides/page.tsx`, `app/guides/[slug]/page.tsx`, `app/design-system/page.tsx`, `ui/reveal.tsx` (each `RevealItem` track).

## Checked, no change needed

- Drawer: opens from just under the header to the bottom edge and sits above the call bar (z-29 over z-25, confirmed with `elementFromPoint`). Esc closes it, tapping a link closes it, and body scroll is locked. In landscape (812×375) it scrolls (606px in a 299px panel) and the last button is reachable.
- Header at 360: logo, phone and menu fit without squashing.
- Form: all inputs, selects and the textarea compute to 16px (no iOS zoom), labels sit above fields, errors show, and the select is 50px tall.
- Photo crops: all five deck photos and all five service hero photos keep faces and hands in frame at 360. About, critical-care and CTA photos are also fine at 375 and 768.
- Reduced motion and no-JS: no reveal wrapper is left hidden once the page has been scrolled at a normal pace. Under `noscript` everything is visible immediately.
- Landscape phone 812×375: hero and drawer usable. The hero buttons are below the first screen, which is normal for that height.

## Limits and judgement calls

- **Safe-area inset can't be emulated** here, so the footer and bar formulas are checked arithmetically (88px footer padding with a 0 inset), not on a notched device.
- **No "before" Lighthouse run:** the original production build was no longer in the project's `.next` when I went to compare, so the "before" LCP is only the noisy in-page measurement. The LCP element is the hero `<h1>`, with about 5s of render delay under Lighthouse throttling. That is hydration cost (reveal wrapper starts at opacity 0), not images, and I did not change it.
- Footer rows are 44px at every width, including desktop (+~100px). I chose consistency over a separate compact desktop layout; say if you'd rather keep desktop compact.
- At 360 the hero fact "Nurses and caregivers" wraps, so its detail line sits one line lower than its neighbour's. Top and left alignment and the divider are fixed; fully aligning the detail lines would need a subgrid layout.
- The 2-column form grid leaves "Care type" alone on its row at 768. It's a form field, not a card, so I left it.
- The care-team scroller is not rendered (`careTeamStatus === "sample"`), so I fixed its min-width pattern but could not test it. The service blocks `care-options`, `service-extra`, `service-related`, `service-role` and `service-reviews` aren't used by any page, so they got the grid fix only.
- Production builds ran from a scratchpad mirror of `src/` while `why-us.tsx` was in flux, then once from the real project at the end (passes, 19 static pages). `tsc --noEmit` and `eslint src` are clean.
- The "before" screenshots predate the Why-us section, which was added to the page during this session, so the "after" pages are slightly longer for that reason as well.
