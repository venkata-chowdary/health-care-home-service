# Build prompts

Run these in order, one per session, from the `hemalatha-health-care` folder. Each one builds on the last. `CLAUDE.md` loads automatically and points at the design system, so the prompts stay short. Review each step in the browser before moving on.

---

## 1. Foundations and showcase

```
Read CLAUDE.md, docs/DESIGN_SYSTEM.md and docs/previews/landing-preview.html.

Build the shared UI primitives in src/components/ui and src/components/layout, matching the preview exactly and using only tokens from globals.css:
- Button (primary, secondary, white, ghost-light, navy, icon; sizes sm/default; states hover, active, focus, disabled, loading; renders as link or button)
- Eyebrow pill (default, white, on-dark), Tag (default, sample), FloatingBadge, StarRating
- PhotoFrame: next/image when a src exists, otherwise the labelled placeholder frame from the preview
- Container, Section (padding by breakpoint, optional surface background), SectionHeading (eyebrow, title, lead, left or centre)
- A Lucide icon lookup so content can name icons by string

Then add a /design-system route that shows every token (colours, type scale, radii, shadows) and every primitive in all its variants and states. Keep it noindex.

Run tsc and eslint, then check /design-system at 1440 and 375 in the browser and fix what you find.
```

## 2. Header, mobile navigation and footer

```
Read CLAUDE.md and the header, drawer, call bar and footer in docs/previews/landing-preview.html.

Build src/components/layout/site-header.tsx (sticky, border on scroll, logo from public/images/brand/logo.png, nav links to section anchors, phone link, Book appointment button), the mobile drawer (focus trap, Esc closes, closes on link click, returns focus to the menu button), the sticky mobile call-and-book bar, and the navy footer with contact strip using logo-white.png.

All text and links come from src/data/hospital-content.ts. Wire them into src/app/page.tsx with empty section placeholders that carry the right ids. Check keyboard navigation and the drawer at 375 and 360.
```

## 3. Hero with photo deck

```
Read CLAUDE.md and the hero in docs/previews/landing-preview.html (navy background, centred copy, stacked photo deck, fact row). Reference: references/desktop/reference-4-hero-deck.webp.

Build src/components/sections/hero.tsx as a Server Component, with the photo deck as a small client component using Motion for React: five photos from hospital.heroPhotos, front photo large with smaller photos tucked behind each side, click a side photo, arrows or dots to bring it forward. No autoplay. Keyboard accessible, announces the current photo, reduced motion swaps the slide for a fade. The two floating badges hide on mobile.

Headline, lead, eyebrow and facts come from the content file. The h1 lives here. Match the preview at 1440, 768 and 375.
```

## 4. About, departments, why us, doctors, facilities

```
Read CLAUDE.md and these sections in docs/previews/landing-preview.html: About (layered photos with checklist), Departments (six cards, first card navy), Why choose us (photo with point list), Doctors (intro column with tinted name bands, horizontal scroll on mobile), Facilities (tint band with 24h figure, list and photo collage).

Build each as its own component in src/components/sections, plus the reusable cards they need in src/components/healthcare (DepartmentCard, DoctorCard, ValuePoint). All content from hospital-content.ts; anything with status "sample" shows the amber sample tag where the preview shows one. Server Components only. Match the preview at 1440, 768 and 375.
```

## 5. Reviews, enquiry, visit, FAQ, closing CTA

```
Read CLAUDE.md and these sections in docs/previews/landing-preview.html: Reviews (three cards and rating pill; the only place the Google rating appears), Enquiry (call card and form), Visit (photo with floating address card and hours), FAQ (single card listing every question, no tabs), closing blue CTA panel.

Reviews come from src/data/reviews.ts; show empty review slots for missing ones exactly as the preview does. The enquiry form is a client component: name and Indian mobile validation, inline errors linked with aria-describedby, focus the first invalid field, sending state, success message that says the front desk will call and the appointment is not booked yet. Submit through a server action that currently only validates and returns success, with a clear TODO for the destination in hospital.enquiry.destination. FAQ uses native details/summary.

Check the form with keyboard only and with a screen reader-style read of the accessibility tree.
```

## 6. Motion pass

```
Read CLAUDE.md, docs/DESIGN_SYSTEM.md (Motion) and src/design-system/motion.ts.

Add purposeful motion with Motion for React: hero copy fades up on load, the photo deck enters 200ms later; section headings and card grids reveal once at 20% visibility with a 70ms stagger (max 6); card hover lift; FAQ open/close; drawer open/close. No parallax except at most 24px on the hero deck on desktop. Server-rendered HTML must be fully visible without JavaScript, and prefers-reduced-motion turns movement into fades. Keep client JavaScript small; wrap only what animates.

Add smooth scrolling with Lenis: npm install lenis, import "lenis/dist/lenis.css", and create one small client provider mounted in src/app/layout.tsx. Remove scroll-behavior: smooth from globals.css so the two don't fight. Drive Lenis from Motion's frame loop (or requestAnimationFrame) so scroll-triggered reveals stay in sync. Make every in-page anchor link (header nav, drawer, Book appointment, footer) scroll with lenis.scrollTo using an offset equal to the sticky header height, and close the drawer first. Stop Lenis while the mobile drawer is open. Add data-lenis-prevent to the horizontally scrolling doctor cards and anything else with its own scroll. Do not create Lenis at all when prefers-reduced-motion is set; native scrolling takes over.

Verify there is no layout shift and no hidden content at first paint, that anchor links land with the section heading visible below the header, and that scrolling feels normal on a touch phone.
```

## 7. SEO and metadata (deferred until the client's real content is in)

```
Read CLAUDE.md and docs/CONTENT_VERIFICATION.md, and the metadata guides in node_modules/next/dist/docs.

Add: page title and description for local search (Kukatpally, Hyderabad, Telangana), canonical URL from hospital.siteUrl, Open Graph and Twitter metadata, an Open Graph image generated with the logo on navy, sitemap.ts, robots.ts (disallow /design-system), and JSON-LD for a Hospital (MedicalOrganization) using only verified or provisional fields: name, address, geo, phone, url, opening hours for the front desk. No ratings, specialties, doctors or accreditations in schema. Check the heading order is one h1 then h2s.
```

## 8. QA and final report

```
Read CLAUDE.md. Done means: tokens centralised, components reusable, /design-system works, every section responsive, motion appropriate, navigation, phone and directions links work, form validates and reports honestly, no broken layouts, no console errors, accessibility checked, provisional content documented. SEO is deferred until the real content arrives; list it as a known limitation.

Do a full QA pass in the browser at 1440, 1280, 1024, 768, 375 and 360: layout, spacing, alignment against docs/previews/landing-preview.html, image cropping, navigation, drawer, phone links, directions links, form states, FAQ, focus order, visible focus, contrast, reduced motion, console errors. Run tsc, eslint and next build. Fix what you find and capture screenshots of each breakpoint into docs/qa/.

Then write docs/FINAL_REPORT.md: what was built, design decisions, component inventory, technology, sections, responsive QA results, performance and accessibility findings, known limitations, and the client information still needed (from CONTENT_VERIFICATION.md).
```
