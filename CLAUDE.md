@AGENTS.md

# Hemalatha Health Care website

Landing page for Hemalatha Health Care Pvt. Ltd., a home healthcare provider (nursing, critical care, elder care, post-operative care, physiotherapy) serving Hyderabad from four branches, the main one in KPHB Colony, Kukatpally. Not an inpatient hospital. Goals: care requests, phone calls and WhatsApp messages, trust. See `docs/HOME_CARE_REVAMP.md` for the content model.

## Read before building anything

1. `docs/previews/landing-preview.html` — the approved page. Match its layout, spacing, copy and interactions. Open it in a browser and read its CSS; it is the visual spec.
2. `docs/DESIGN_SYSTEM.md` — tokens, type, spacing, components, motion, accessibility.
3. `references/README.md` — what each reference screenshot contributed.
4. `docs/CONTENT_VERIFICATION.md` — what is verified, provisional or sample.

Earlier rounds (`design-system-proposal.html`, `section-options.html`) are history. Where they disagree with the landing preview, the landing preview wins.

## Design rules

- Use only tokens from `src/app/globals.css` (`bg-primary`, `text-h2`, `rounded-card`, `shadow-float`…). No raw hex values, no arbitrary pixel values when a token exists. Add a token there first if one is missing.
- Light theme only. DM Sans only. Lucide icons only, stroke 1.75.
- Buttons are pills. Cards are bordered, no shadow at rest. Panels use `rounded-panel`.
- Motion values come from `src/design-system/motion.ts`. Animate only opacity and transform, reveal once, respect reduced motion, and keep content visible without JavaScript.
- Smooth scrolling uses Lenis (`lenis` package), not CSS `scroll-behavior: smooth`. Lenis is disabled under reduced motion; anchor links scroll through Lenis with the sticky header offset.
- The Google rating appears only in the reviews section.
- Mobile is designed, not compressed: drawer menu, sticky call-and-book bar, tested at 360px.

## Content rules

- All business content comes from `src/data/hospital-content.ts` and `src/data/reviews.ts`. Never hard-code it in components.
- Keep each field's `status` honest. Never invent doctors, qualifications, accreditations, bed counts, equipment, success rates, insurers, ratings or testimonials.
- Reviews are quoted word for word from Google only.
- The enquiry form must never claim an appointment is confirmed.
- Structured data (JSON-LD) uses only `verified` or `provisional` fields.

## Architecture

- Next.js App Router, TypeScript, Tailwind 4, Motion for React (`motion/react`), Lucide React.
- Server Components by default; `"use client"` only for the header drawer, hero photo deck, FAQ if needed, enquiry form and reveal wrappers.
- Folders: `src/components/ui`, `layout`, `healthcare`, `sections`. One section component per landing section in `sections/`. Service page blocks live in `sections/service/`; the five pages at `/services/[slug]` are built from the `services` array in the content file (`generateStaticParams`), and unknown slugs return `notFound()`.
- Images through `next/image`. Photos go in `public/images/`; until the client supplies them, render the labelled placeholder frames from the preview.

## Code style

- Code reads top to bottom; keep logic inline, extract only when reused.
- No leading `_` on any name. Descriptive names (`departmentCards`, not `data`).
- No comments that restate the code, no section-divider comments.
- Imports at the top, grouped: external, then `@/` internal, then relative. No aliases.

## Run

```bash
npm run dev -- --port 3100
```

Check with `npx tsc --noEmit` and `npx eslint src`. Inspect desktop (1440), tablet (768) and phone (375, 360) in a browser before calling anything done.
