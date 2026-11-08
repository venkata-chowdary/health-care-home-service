# Hemalatha Health Care website

Landing page for Hemalatha Health Care, Kukatpally, Hyderabad. Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion for React, Lucide icons.

```bash
npm run dev
```

## Where things are

- `src/app/globals.css` — design tokens (`@theme`)
- `src/design-system/motion.ts` — motion durations, easing, reveal preset
- `src/data/hospital-content.ts` — all business content with verification status
- `src/data/reviews.ts` — real Google reviews only
- `public/images/brand/` — logo, white logo, emblem
- `docs/DESIGN_SYSTEM.md` — tokens and component decisions
- `docs/CONTENT_VERIFICATION.md` — what the client still needs to confirm
- `docs/previews/` — approved HTML previews (`landing-preview.html` is the spec)
- `docs/BUILD_PROMPTS.md` — step-by-step prompts for building the site
- `references/` — reference screenshots, original logo, and notes on what each contributed
- `CLAUDE.md` — rules every build session follows

## Status

Project set up. The landing page itself is not built yet; `src/app/page.tsx` is a placeholder.
