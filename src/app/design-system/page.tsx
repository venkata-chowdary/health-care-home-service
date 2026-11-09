import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { Icon, iconNames } from "@/components/ui/icon";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { StarRating } from "@/components/ui/star-rating";
import { Tag } from "@/components/ui/tag";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colourGroups = [
  {
    title: "Navy",
    swatches: [
      { token: "navy-950", value: "#0B1B45", use: "Text, navy hero, footer", className: "bg-navy-950" },
      { token: "navy-900", value: "#13265A", use: "Contact strip, hero gradient", className: "bg-navy-900" },
      { token: "navy-800", value: "#1E3270", use: "Navy button hover", className: "bg-navy-800" },
      { token: "navy-line", value: "#24376B", use: "Dividers on navy", className: "bg-navy-line" },
    ],
  },
  {
    title: "Blue",
    swatches: [
      { token: "blue-50 / accent", value: "#EFF3FF", use: "Eyebrows, icon tiles", className: "bg-blue-50" },
      { token: "blue-100", value: "#DFE8FF", use: "Rules inside tinted panels", className: "bg-blue-100" },
      { token: "blue-200", value: "#C2D4FF", use: "Hover borders, text on navy", className: "bg-blue-200" },
      { token: "blue-300", value: "#8FB1FF", use: "Icons on navy", className: "bg-blue-300" },
      { token: "blue-600 / primary", value: "#1F6BFF", use: "Buttons, closing CTA", className: "bg-blue-600" },
      { token: "blue-700 / primary-hover", value: "#1A5EE8", use: "Primary hover", className: "bg-blue-700" },
      { token: "blue-800 / link", value: "#1757D6", use: "Links, eyebrow text", className: "bg-blue-800" },
    ],
  },
  {
    title: "Slate",
    swatches: [
      { token: "slate-50 / surface", value: "#F7F9FC", use: "Alternate section background", className: "bg-slate-50" },
      { token: "slate-100 / muted", value: "#EEF1F6", use: "Muted fills", className: "bg-slate-100" },
      { token: "slate-200 / border", value: "#E3E7EF", use: "Card borders, dividers", className: "bg-slate-200" },
      { token: "slate-400 / input", value: "#8C94A6", use: "Form borders", className: "bg-slate-400" },
      { token: "slate-600 / muted-foreground", value: "#5B6478", use: "Body copy", className: "bg-slate-600" },
      { token: "slate-on-dark", value: "#C9D3EE", use: "Body copy on navy", className: "bg-slate-on-dark" },
    ],
  },
  {
    title: "States and extras",
    swatches: [
      { token: "success", value: "#15803D", use: "Open now, confirmations", className: "bg-success" },
      { token: "success-surface", value: "#EAF6EE", use: "Success notice", className: "bg-success-surface" },
      { token: "warning", value: "#B45309", use: "Sample and provisional tags", className: "bg-warning" },
      { token: "warning-surface", value: "#FDF3E6", use: "Sample tag fill", className: "bg-warning-surface" },
      { token: "warning-border", value: "#F2D3A6", use: "Sample tag border", className: "bg-warning-border" },
      { token: "error", value: "#B91C1C", use: "Validation", className: "bg-error" },
      { token: "error-surface", value: "#FCEDED", use: "Error notice", className: "bg-error-surface" },
      { token: "star", value: "#F5A524", use: "Rating stars", className: "bg-star" },
      { token: "logo-blue", value: "#109ADB", use: "Logo only, not used in UI", className: "bg-logo-blue" },
    ],
  },
];

const typeScale = [
  { token: "text-display", spec: "66 → 38px · 1.03 · 500", className: "text-display font-medium tracking-heading", sample: "Specialist care, clear answers." },
  { token: "text-h1", spec: "52 → 34px · 1.06 · 500", className: "text-h1 font-medium tracking-heading", sample: "Specialist care in Kukatpally." },
  { token: "text-h2", spec: "44 → 28px · 1.08 · 500", className: "text-h2 font-medium tracking-heading", sample: "Care for every stage, at home." },
  { token: "text-h3", spec: "28 → 22px · 1.15 · 500", className: "text-h3 font-medium tracking-heading", sample: "Care that feels like family." },
  { token: "text-h4", spec: "19px · 1.3 · 600", className: "text-h4 font-semibold tracking-title", sample: "General Medicine" },
  { token: "text-body-lg", spec: "18 → 16px · 1.6", className: "text-body-lg text-muted-foreground", sample: "Nurses, caregivers and physiotherapists who come to you, day or night." },
  { token: "text-body", spec: "16px · 1.6", className: "text-body", sample: "Call the front desk and talk to someone who can help." },
  { token: "text-body-sm", spec: "14px · 1.55", className: "text-body-sm text-muted-foreground", sample: "Fractures, joint pain and recovery after surgery." },
  { token: "text-caption", spec: "13px · 1.45", className: "text-caption text-muted-foreground", sample: "Aditya Nagar, 500085" },
  { token: "text-button", spec: "15px · 1 · 500", className: "text-button font-medium", sample: "Book an appointment" },
];

const radii = [
  { token: "rounded-sm", spec: "8px · icon tiles", className: "rounded-sm" },
  { token: "rounded-md", spec: "12px · inputs", className: "rounded-md" },
  { token: "rounded-lg", spec: "16px · cards, photos", className: "rounded-lg" },
  { token: "rounded-xl", spec: "24px · panels", className: "rounded-xl" },
  { token: "rounded-button", spec: "full · buttons, pills", className: "rounded-button" },
];

const shadows = [
  { token: "none", spec: "Cards at rest", className: "border border-border" },
  { token: "shadow-hover", spec: "Card hover", className: "shadow-hover" },
  { token: "shadow-pill", spec: "Floating badges", className: "shadow-pill" },
  { token: "shadow-float", spec: "Overlay cards", className: "shadow-float" },
  { token: "shadow-deck", spec: "Hero photo deck", className: "shadow-deck" },
];

const buttonVariants = ["primary", "secondary", "white", "ghost-light", "navy"] as const;
const buttonStates = [
  { label: "Default", props: {} },
  { label: "Hover", props: { "data-state": "hover" } },
  { label: "Active", props: { "data-state": "active" } },
  { label: "Focus", props: { "data-state": "focus" } },
  { label: "Disabled", props: { disabled: true } },
  { label: "Loading", props: { loading: true } },
];

export default function DesignSystemPage() {
  return (
    <main>
      <Section className="pb-section-mobile md:pb-section-tablet lg:pb-section-mobile" containerClassName="grid gap-14">
        <SectionHeading as="h1" eyebrow="Hemalatha Health Care" title="Design system." lead="Every token and shared primitive, in every variant and state. Internal reference, not indexed." className="max-w-[720px]" />

        <div className="grid grid-cols-[minmax(0,1fr)] gap-12">
          <h2 className="text-h3 font-medium tracking-heading">Colour</h2>
          {colourGroups.map((group) => (
            <div key={group.title} className="grid gap-4">
              <h3 className="text-h4 font-semibold tracking-title">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {group.swatches.map((swatch) => (
                  <div key={swatch.token} className="grid overflow-hidden rounded-lg border border-border">
                    <div className={`h-20 ${swatch.className}`} />
                    <div className="grid gap-0.5 p-3.5">
                      <b className="text-body-sm font-semibold break-words">{swatch.token}</b>
                      <span className="text-caption text-muted-foreground">{swatch.value}</span>
                      <span className="text-caption text-muted-foreground">{swatch.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section surface containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12">
        <h2 className="text-h3 font-medium tracking-heading">Type scale</h2>
        <div className="grid">
          {typeScale.map((row) => (
            <div key={row.token} className="grid gap-2 border-b border-border py-5 first:pt-0 last:border-b-0 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
              <div className="grid content-start gap-0.5">
                <b className="text-body-sm font-semibold">{row.token}</b>
                <span className="text-caption text-muted-foreground">{row.spec}</span>
              </div>
              <p className={row.className}>{row.sample}</p>
            </div>
          ))}
          <div className="grid gap-2 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
            <div className="grid content-start gap-0.5">
              <b className="text-body-sm font-semibold">Eyebrow</b>
              <span className="text-caption text-muted-foreground">13px · 500 · tint pill</span>
            </div>
            <div>
              <Eyebrow>Sentence case in a pill</Eyebrow>
            </div>
          </div>
        </div>
      </Section>

      <Section containerClassName="grid grid-cols-[minmax(0,1fr)] gap-12">
        <div className="grid gap-6">
          <h2 className="text-h3 font-medium tracking-heading">Radii</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {radii.map((radius) => (
              <div key={radius.token} className="grid gap-3">
                <div className={`h-24 border border-blue-200 bg-accent ${radius.className}`} />
                <div className="grid gap-0.5">
                  <b className="text-body-sm font-semibold">{radius.token}</b>
                  <span className="text-caption text-muted-foreground">{radius.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <h2 className="text-h3 font-medium tracking-heading">Shadows</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {shadows.map((shadow) => (
              <div key={shadow.token} className="grid gap-3">
                <div className={`h-24 rounded-lg bg-background ${shadow.className}`} />
                <div className="grid gap-0.5">
                  <b className="text-body-sm font-semibold">{shadow.token}</b>
                  <span className="text-caption text-muted-foreground">{shadow.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section surface containerClassName="grid gap-14">
        <h2 className="text-h3 font-medium tracking-heading">Button</h2>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Variants × states</h3>
          <p className="text-body-sm text-muted-foreground">Hover, active and focus are pinned with a data-state attribute so they can be seen without a pointer. Real hover, press and keyboard focus behave the same way.</p>
          <div role="region" aria-label="Button variants and states" tabIndex={0} className="max-w-full overflow-x-auto rounded-xl border border-border bg-background">
            <div className="grid min-w-[980px] grid-cols-[130px_repeat(6,minmax(0,1fr))] items-center gap-x-4 gap-y-5 p-6">
              <span />
              {buttonStates.map((state) => (
                <span key={state.label} className="text-caption font-medium text-muted-foreground">
                  {state.label}
                </span>
              ))}
              {buttonVariants.map((variant) => {
                const onDark = variant === "white" || variant === "ghost-light";
                return [
                  <b key={variant} className="text-body-sm font-semibold">
                    {variant}
                  </b>,
                  ...buttonStates.map((state) => (
                    <div key={`${variant}-${state.label}`} className={onDark ? "-my-2 rounded-lg bg-navy-950 p-2" : ""}>
                      <Button variant={variant} size="sm" {...state.props}>
                        {state.label === "Loading" ? "Sending" : "Button"}
                      </Button>
                    </div>
                  )),
                ];
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default 48px</Button>
            <Button size="sm">Small 40px</Button>
            <Button variant="secondary" iconOnly aria-label="Previous photo" iconBefore="arrow-left" />
            <Button variant="secondary" iconOnly aria-label="Next photo" iconBefore="arrow-right" />
            <Button variant="navy" iconOnly aria-label="Open menu" iconBefore="menu" />
            <Button iconOnly aria-label="Call" iconBefore="phone" />
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">With icons, as a button and as a link</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#enquiry" iconAfter="arrow-right">
              Book an appointment
            </Button>
            <Button href="tel:+918639074341" variant="secondary" iconBefore="phone">
              Call 086390 74341
            </Button>
            <Button href="#visit" variant="navy" iconAfter="arrow-right">
              Plan your visit
            </Button>
            <Button href="#enquiry" leadIcon="calendar-check">
              Book an appointment
            </Button>
            <Button type="submit" iconAfter="arrow-right">
              Send enquiry (button)
            </Button>
            <Button href="#enquiry" disabled>
              Disabled link
            </Button>
            <Button href="/design-system" loading>
              Loading link
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-navy-950 p-6">
            <Button variant="white" href="#enquiry">
              Book an appointment
            </Button>
            <Button variant="ghost-light" href="tel:+918639074341" iconBefore="phone">
              Call now
            </Button>
            <Button variant="secondary" className="border-white/40 bg-transparent text-white hovered:border-white hovered:bg-white/8" iconBefore="phone">
              Secondary on navy
            </Button>
          </div>
        </div>
      </Section>

      <Section containerClassName="grid gap-14">
        <h2 className="text-h3 font-medium tracking-heading">Eyebrow, tag, badge, rating</h2>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Eyebrow</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow>Default</Eyebrow>
            <div className="rounded-lg bg-surface p-4">
              <Eyebrow variant="white">White, on surface</Eyebrow>
            </div>
            <div className="rounded-lg bg-navy-950 p-4">
              <Eyebrow variant="on-dark">On dark</Eyebrow>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Tag</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Tag>Default</Tag>
            <Tag variant="sample">Sample list</Tag>
            <Tag variant="sample">Proposed statements</Tag>
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Floating badge</h3>
          <div className="flex flex-wrap items-center gap-4 rounded-xl bg-navy-950 p-6">
            <FloatingBadge>Plans explained first</FloatingBadge>
            <FloatingBadge>Families kept informed</FloatingBadge>
            <FloatingBadge icon="phone-call">A real person answers</FloatingBadge>
          </div>
        </div>

        <div className="grid gap-4">
          <h3 className="text-h4 font-semibold tracking-title">Star rating</h3>
          <div className="flex flex-wrap items-center gap-8">
            <StarRating value={5} />
            <StarRating value={4} />
            <StarRating value={3} size={20} />
            <StarRating value={0} decorative />
          </div>
        </div>
      </Section>

      <Section surface containerClassName="grid gap-14">
        <h2 className="text-h3 font-medium tracking-heading">Photo frame</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-3">
            <PhotoFrame alt="Nurse visit placeholder" icon="stethoscope" label="Nurse visit" className="aspect-4/3" />
            <span className="text-caption text-muted-foreground">Placeholder, light, labelled</span>
          </div>
          <div className="grid gap-3">
            <PhotoFrame alt="Caregiver placeholder" label="Caregiver" labelSide="right" className="aspect-4/3" />
            <span className="text-caption text-muted-foreground">Label on the right</span>
          </div>
          <div className="grid gap-3">
            <PhotoFrame alt="Services placeholder" tone="dark" icon="stethoscope" label="Dark tone" className="aspect-4/3" />
            <span className="text-caption text-muted-foreground">Placeholder, dark</span>
          </div>
          <div className="grid gap-3">
            <PhotoFrame alt="Hemalatha Health Care emblem" src="/images/brand/emblem.png" sizes="(min-width: 1024px) 280px, 100vw" className="aspect-square bg-background" />
            <span className="text-caption text-muted-foreground">With a src (next/image)</span>
          </div>
        </div>
      </Section>

      <Section containerClassName="grid gap-14">
        <h2 className="text-h3 font-medium tracking-heading">Section heading</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-8">
            <SectionHeading eyebrow="Left aligned" title="Care that feels like family." lead="Eyebrow, title and lead, left aligned." />
          </div>
          <div className="rounded-xl border border-border p-8">
            <SectionHeading align="center" eyebrow="Centred" title="Care for every stage, at home." lead="Six kinds of care, delivered at home." />
          </div>
          <div className="rounded-xl bg-navy-950 p-8 lg:col-span-2">
            <SectionHeading tone="on-dark" eyebrow="On dark" title="Ready to talk to someone who can help?" lead="Call the front desk, send an enquiry, or get directions." />
          </div>
        </div>
      </Section>

      <Section surface containerClassName="grid gap-8">
        <h2 className="text-h3 font-medium tracking-heading">Container and section</h2>
        <p className="max-w-[640px] text-body-lg text-muted-foreground">
          Container is 1200px wide with 40px gutters (20px on phones). Section pads 112px on desktop, 88px on tablet and 64px on phones, and takes an optional surface background. This page alternates plain and surface sections.
        </p>
        <Container className="rounded-lg bg-accent py-6 text-body-sm text-accent-foreground">Content inside a nested container.</Container>
      </Section>

      <Section containerClassName="grid gap-8">
        <h2 className="text-h3 font-medium tracking-heading">Icons</h2>
        <p className="max-w-[640px] text-body-lg text-muted-foreground">
          Content names icons by string, for example <code className="rounded-sm bg-muted px-1.5 py-0.5 text-body-sm">icon: &quot;stethoscope&quot;</code>. The lookup renders it through the Icon component.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {iconNames.map((name) => (
            <div key={name} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className="grid size-10 flex-none place-items-center rounded-sm bg-accent text-primary">
                <Icon name={name} />
              </span>
              <span className="text-caption break-all text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
