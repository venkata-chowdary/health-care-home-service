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

The one exception is the hero brand lockup, which uses the lettering from the client logo: Merriweather 700 (`font-brand`), all capitals. "HEMALATHA" is `text-h1` with normal tracking; "HEALTH CARE PVT. LTD." is `text-brand-legal` (0.51 × `text-h1`, the ratio in the logo) with `tracking-brand-legal` (0.04em), so both lines stay the same width at every screen size. The emblem is `size-brand-emblem` (2.5 × `text-h1`), so it keeps the logo's proportion to the name. Merriweather is used nowhere else.

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

4px base scale (Tailwind default spacing). Section padding 112 / 88 / 64px (desktop / tablet / phone). Compact stat bands (`Section band`) use `--spacing-band` 64px from tablet up and `--spacing-band-mobile` 48px on phones. Container 1200px with 40px gutters (20px on phones). 12 / 8 / 4 column grid. Breakpoints are Tailwind defaults (640, 768, 1024, 1280), tested down to 360px.

Header info strip: `--spacing-info-strip` (36px, `h-info-strip`) sits above the 76px main header row (68px below 561px). It shows phone, email, 24/7 support and Hyderabad, Telangana on a `bg-surface` band with 14px icons. Below 561px it shows only the phone number, "24/7" and "Hyderabad" (email hidden, short labels), which fits at 360px; the row keeps hidden-scrollbar overflow as a safety net. The mobile drawer's top offset adds the strip height.

Hero spacing, all from the 4px scale (desktop / below 768px): top padding 56 / 36 · emblem to name 16 · name to legal line 4 · legal line to pulse line 24 / −16 (on phones the pulse box is pulled up with `-mt-4` so its flat line sits about 14px under the text and the spike rises beside the name, clear of it) · pulse line height 80 / 48 · pulse line to tagline 24 / 16 · tagline to buttons 8 · buttons side by side, 48 tall, 12 apart. The hero content is centred from 768px up and left-aligned below 768px (emblem, name lockup, tagline and buttons share the container's left edge; the pulse line and photo deck stay full width, and the pulse spike moves from the centre to about 78% across, into the open space to the right of the left-aligned name, to balance the frame). Below 768px the call button is hidden (the header and the sticky call bar already show the phone), and "Request care" sits alone in the left half of a two-column row capped at `max-w-md`, with 12px inner padding · buttons to photo deck 56 / 36 · deck to fact row 40 / 28. Inside each group (emblem with name; tagline with buttons) the gaps are 4–16; between groups they are 24, so the hero reads as two blocks divided by the pulse line. The hero has no bottom padding: it ends on white after the fact row, and the next section's own padding gives the gap.

## Shape and depth

Radii: `sm` 8 (icon tiles), `md` 12 (inputs), `lg` 16 (cards, photos), `xl` 24 (panels), `button` full pill. Cards are bordered with no shadow at rest; `shadow-hover` on hover, `shadow-float` for overlay cards, `shadow-pill` for floating badges, `shadow-deck` for the hero photo deck.

## Components (from the approved preview)

Header with phone link, WhatsApp icon button and pill CTA, mobile drawer, sticky mobile call bar · Navy hero with the client emblem, the "Hemalatha / Health Care Pvt. Ltd." lockup, a full-width pulse line, the tagline and buttons, then the stacked photo deck sitting across a navy-to-white split (`hero-split`, which turns white at the exact middle of the deck) and the fact row on white · About with layered photos and checklist · Services six-card grid with sub-service lists, first card navy · How it works four numbered step cards (a real sequence) · Why-us photo with point list · Care team intro column with tinted name bands and a roles strip · Critical care at home tint band with figure and collage · Reviews three cards with rating pill (the only place the Google rating appears) · Request care form with call card (two phones and WhatsApp) · Branches: main-office photo with floating address card plus three branch cards · FAQ single card list, no tabs · Blue closing CTA panel · Navy footer with four-item contact strip. Service pages (`/services/[slug]`) reuse these primitives on a white page: breadcrumb and white service hero with one large photo and three quick facts · What's included card grid · Who it's for checklist beside a photo · Care options three cards with Available, Not offered or To confirm status · Who will care for you role block with demo cards filtered to the role · optional page-specific block (home ICU setup checklist, physiotherapy treatment areas) · the shared How it works, FAQ, Request care form (service preselected) and closing CTA · Related services three cards. Backgrounds alternate tint and white down the page; the navy hero stays on the home page only.

## Motion

Motion for React for animation, Lenis for smooth scrolling (off under reduced motion). Durations 180 / 260 / 560 / 800ms, ease `cubic-bezier(.22,1,.36,1)`, 70ms stagger (max 6). Sections reveal once at 20% visibility. Deck slides only on user input. The hero deck has no scroll parallax, because the navy-to-white split is tied to the deck's middle. Reduced motion turns movement into fades. Content renders fully without JavaScript.

## Accessibility

WCAG 2.2 AA minimum. 44px tap targets, 16px inputs, visible 2px focus ring, labelled inputs with text errors, one `h1`, landmarks, Esc closes the drawer.
