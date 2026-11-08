# Hemalatha Health Care — Design System

Approved through the previews in `docs/previews/`. All tokens live in `src/app/globals.css` (`@theme`), motion values in `src/design-system/motion.ts`. Components use Tailwind utilities generated from these tokens, never raw hex values.

## Direction

Calm, clear and civic. White canvas, deep navy for authority, one electric blue for every action, pale blue tint for labels and highlight cards. Light theme only.

References: see `references/README.md` for what was taken from each screenshot.

Source of truth for layout: `docs/previews/landing-preview.html` (approved). `design-system-proposal.html` and `section-options.html` are earlier rounds; where they disagree with the landing preview, the landing preview wins (for example the proposal still says "Hemalatha Hospital" and shows the Google rating in the hero).

## Colour

| Token | Value | Use |
|---|---|---|
| `navy-950` | #0B1B45 | Text, navy hero, footer, highlight card |
| `blue-600` / `primary` | #1F6BFF | Buttons, closing CTA panel (white text 4.56:1) |
| `blue-800` / `link` | #1757D6 | Links, eyebrow text (6.2:1) |
| `blue-50` / `accent` | #EFF3FF | Eyebrows, icon tiles, tinted panels |
| `slate-600` / `muted-foreground` | #5B6478 | Body copy (5.9:1) |
| `slate-200` / `border` | #E3E7EF | Card borders, dividers |
| `slate-400` / `input` | #8C94A6 | Form borders (3.04:1) |
| `logo-blue` | #109ADB | Logo only, not used in UI |
| success / warning / error | #15803D / #B45309 / #B91C1C | States, provisional tags, validation |

## Type

DM Sans (400, 500, 600) via `next/font`. Headings 500 weight, −0.04em tracking, sentences end with a full stop.

| Token | Size | Line height |
|---|---|---|
| `text-display` | 66 → 38px | 1.03 |
| `text-h1` | 52 → 34px | 1.06 |
| `text-h2` | 44 → 28px | 1.08 |
| `text-h3` | 28 → 22px | 1.15 |
| `text-h4` | 19px, 600 weight | 1.3 |
| `text-body-lg` | 18 → 16px | 1.6 |
| `text-body` | 16px | 1.6 |
| `text-body-sm` | 14px | 1.55 |
| `text-caption` | 13px | 1.45 |
| Eyebrow | 13px, 500, sentence case in a tint pill | |
| `text-button` | 15px, 500 | 1 |

## Spacing and layout

4px base scale (Tailwind default spacing). Section padding 112 / 88 / 64px (desktop / tablet / phone). Container 1200px with 40px gutters (20px on phones). 12 / 8 / 4 column grid. Breakpoints are Tailwind defaults (640, 768, 1024, 1280), tested down to 360px.

## Shape and depth

Radii: `sm` 8 (icon tiles), `md` 12 (inputs), `lg` 16 (cards, photos), `xl` 24 (panels), `button` full pill. Cards are bordered with no shadow at rest; `shadow-hover` on hover, `shadow-float` for overlay cards, `shadow-pill` for floating badges, `shadow-deck` for the hero photo deck.

## Components (from the approved preview)

Header with phone link, WhatsApp icon button and pill CTA, mobile drawer, sticky mobile call bar · Navy hero with stacked photo deck and fact row · About with layered photos and checklist · Services six-card grid with sub-service lists, first card navy · How it works four numbered step cards (a real sequence) · Why-us photo with point list · Care team intro column with tinted name bands and a roles strip · Critical care at home tint band with figure and collage · Reviews three cards with rating pill (the only place the Google rating appears) · Request care form with call card (two phones and WhatsApp) · Branches: main-office photo with floating address card plus three branch cards · FAQ single card list, no tabs · Blue closing CTA panel · Navy footer with four-item contact strip. Service pages (`/services/[slug]`) reuse these primitives on a white page: breadcrumb and white service hero with one large photo and three quick facts · What's included card grid · Who it's for checklist beside a photo · Care options three cards with Available, Not offered or To confirm status · Who will care for you role block with demo cards filtered to the role · optional page-specific block (home ICU setup checklist, physiotherapy treatment areas) · the shared How it works, FAQ, Request care form (service preselected) and closing CTA · Related services three cards. Backgrounds alternate tint and white down the page; the navy hero stays on the home page only.

## Motion

Motion for React for animation, Lenis for smooth scrolling (off under reduced motion). Durations 180 / 260 / 560 / 800ms, ease `cubic-bezier(.22,1,.36,1)`, 70ms stagger (max 6). Sections reveal once at 20% visibility. Deck slides only on user input. Reduced motion turns movement into fades. Content renders fully without JavaScript.

## Accessibility

WCAG 2.2 AA minimum. 44px tap targets, 16px inputs, visible 2px focus ring, labelled inputs with text errors, one `h1`, landmarks, Esc closes the drawer.
