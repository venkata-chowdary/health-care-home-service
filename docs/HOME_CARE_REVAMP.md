# Home care revamp plan

The client is a home healthcare provider, not an inpatient hospital. The visual design system stays exactly as approved (navy hero with photo deck, tokens, type, pills, cards). What changes is the content model, a few section purposes, and the calls to action.

Facts come from `references/client-flyers/FACTS.md`. Decisions made with the client contact on 8 Nov 2026:

- Baby and mother care is one service card that links out to hemalathababycare.com.
- Four branches, with Branch 1 at Plot No. 22, KPHB Colony, Kukatpally 500072 (the flyer address wins over Google's Aditya Nagar 500085). All four marked to confirm.
- Flyer marketing claims (celebrities, 1000+ families, Hyderabad's best, VIP) are left out.
- Doctors section becomes Care team: keep the demo profiles (stock portraits, "Demo profile" tag), and add a "How it works" section plus care team roles.

## Section by section

| # | Old section | New section | What changes |
|---|---|---|---|
| — | Header | Header | Nav: Services, How it works, Care team, Branches, Reviews, FAQ. Actions: phone, WhatsApp icon button, "Request care" pill. |
| 1 | Hero | Hero | Same navy layout and photo deck. Eyebrow "Home healthcare across Hyderabad · 24/7". Headline about nursing, elder care and physiotherapy at home. CTAs: Request care, Call. Deck photos: nurse with elder at home, physio at home, injection or BP check at home, critical care at home, mother and baby. Facts: Available 24/7 · Nurses, caregivers, physiotherapists · 4 branches · We come to your home. |
| 2 | About | About | "Care that feels like family." Checklist: care at home, available 24/7, one coordinator per family, nurses and physiotherapists who visit. |
| 3 | Departments | Services | Six cards, first one navy: Home nursing · Critical care at home · Elder care & attendants · Post-operative & patient care · Physiotherapy at home · Baby & mother care (links to hemalathababycare.com). Each card shows 3–4 sub-services from the flyers. |
| 4 | — | How it works (new) | Four numbered steps, a true sequence: 1 Call or request care · 2 We understand the patient's needs · 3 A suitable nurse, caregiver or physiotherapist is arranged · 4 Care starts at home, with a coordinator to call. Step wording needs client sign-off. |
| 5 | Why us | Why families choose us | Same layout. Points: available 24/7 · trained nurses and caregivers (client's wording) · one point of contact · four branches across Kukatpally, Pragathi Nagar, Madhapur and Manikonda. |
| 6 | Doctors | Care team | Keep the demo profile cards (Nurse, Physiotherapist, Caregiver roles, "Demo profile" tag, stock portraits). Add a short roles strip: Nurses (incl. ICU-trained) · Caregivers & attendants · Physiotherapists · Baby care staff. |
| 7 | Facilities | Critical care at home | Same tint band. Figure "24/7". List: ICU-trained nurses, ventilator care, tracheostomy care, oxygen therapy support, home ICU setup assistance, cardiac & stroke patient care. |
| 8 | Reviews | Reviews | Unchanged design. Reviews now match the business. Add more real Google reviews in full (the profile has 96). |
| 9 | Enquiry | Request care | Fields: your name · phone · who needs care (parent, spouse, child, self, other) · service · area/branch · when to start · care type (single visit, 12-hour, 24-hour live-in, not sure) · message. Success says the coordinator will call; nothing is confirmed yet. Call card shows both numbers and WhatsApp. |
| 10 | Visit | Branches & areas | Four branch cards (name, area, landmark, directions link where known). Note that care is delivered at home anywhere these branches serve. Branch 1 keeps the photo-and-floating-card layout as the main office. |
| 11 | FAQ | FAQ | Home care questions (below). |
| 12 | Closing CTA | Closing CTA | "Need care at home? Talk to us today." Buttons: Call 86390 74341, WhatsApp, Request care. |
| — | Footer | Footer | Contact strip: two phones, email, 24/7. Columns: Services, Branches, Company. Baby care link. |

## FAQ (answers need client confirmation)

1. How quickly can a nurse or caregiver start?
2. Are your nurses and caregivers trained? What checks do you do?
3. Can I ask for a different caregiver?
4. Do you offer 12-hour and 24-hour live-in care?
5. Is there a minimum booking period?
6. How much does home nursing cost?
7. Can you set up ICU equipment at home?
8. Which areas of Hyderabad do you cover?
9. Do you provide physiotherapy for stroke and post-fracture recovery?
10. How do I pay?

## Content file changes

- `category` → "Home healthcare services", status verified (client flyers).
- `phone` → primary 86390 74341 and secondary 96426 60492; add `email` and `whatsapp` = 86390 74341 (`https://wa.me/918639074341`, confirmed by client contact 8 Nov 2026).
- `branches` array replaces the single `address` block (keep coordinates and directions URL on Branch 1).
- `services` array replaces `departments`, with sub-services and an optional external link.
- Add `howItWorks`, `careRoles`, `criticalCare`; rename `facilities` usage.
- Doctors stay `sample` with roles changed to Nurse, Physiotherapist, Caregiver.
- `siteUrl` → to confirm (flyer says hemalathahealthcare.com, Google says hemalathahealthcareservices.com).

## Service pages

Five service pages at `/services/[slug]`, built from one shared template and the `services` array in the content file (`generateStaticParams`). Baby and mother care has no page here: its card links out to hemalathababycare.com, as agreed.

### Shared template (same order on every page)

1. **Service hero:** white background (navy stays unique to the home page), breadcrumb (Home / Services / name), eyebrow, H1, one-sentence lead, two CTAs (Request this service, Call), one large photo, and three quick facts (availability, who visits, care options).
2. **What's included:** card grid of sub-services, each with icon, name and one plain-language line.
3. **Who it's for:** checklist of situations and conditions, beside a photo.
4. **Care options:** three cards: single visit, 12-hour shift, 24-hour live-in, each showing whether it applies to this service. No prices until the client supplies them.
5. **Who will care for you:** the relevant role from the care team (for example, ICU-trained nurse) with what they do, plus the same demo profile cards filtered to that role.
6. **How it works:** the shared four-step section.
7. **Reviews:** only real Google reviews that mention this service; hide the section if none do.
8. **Service FAQ:** 4–6 questions for this service.
9. **Request this service:** the Request care form with the service preselected, plus the call card.
10. **Related services:** three service cards.
11. **Closing CTA** and footer, same as home.

Every page also gets its own title, description and Open Graph image later in the SEO step.

### 1. Home nursing — `/services/home-nursing`

- **Lead:** Qualified nurses for injections, dressings, IVs and routine checks, at home.
- **Included:** injections · wound dressing · IV infusion and cannula · catheterisation · Ryles tube insertion and care · nebulisation · BP and sugar monitoring · medication administration.
- **Who it's for:** after a hospital discharge · long-term conditions needing regular procedures · patients who can't travel · diabetics needing monitoring.
- **Care options:** single visits for procedures; 12-hour and 24-hour nursing.
- **Role:** registered nurse.
- **FAQ:** Do you bring the supplies? · Can a nurse visit daily at a fixed time? · Do I need a doctor's prescription? · How quickly can a nurse come? · Can you change a catheter or Ryles tube?

### 2. Critical care at home — `/services/critical-care-at-home`

- **Lead:** ICU-trained nurses and equipment setup so a critically ill patient can be cared for at home.
- **Included:** ventilator care · tracheostomy care · oxygen therapy support · cardiac and stroke patient care · continuous monitoring · home ICU setup assistance · emergency coordination.
- **Who it's for:** patients discharged from ICU · long-term ventilator or tracheostomy patients · post-stroke and cardiac patients · palliative care at home.
- **Care options:** 12-hour and 24-hour; single visits not offered.
- **Role:** ICU-trained nurse.
- **Page-specific block:** "Setting up care at home" checklist (bed, oxygen, monitor, suction, ventilator), marked as to confirm, with a note that the client confirms what they supply.
- **FAQ:** What equipment do you arrange? · Can you take over from a hospital ICU? · What happens in an emergency? · Do nurses work in shifts? · Do you coordinate with the patient's doctor?
- **Note:** emergency wording must not suggest the service replaces an ambulance or hospital emergency department.

### 3. Elder care and attendants — `/services/elder-care`

- **Lead:** Caregivers and attendants who help older parents live safely and comfortably at home.
- **Included:** daily assistance and personal hygiene · companionship · medication reminders · vital checks · mobility help · bedridden care · dementia and Alzheimer's support · nutrition and meals.
- **Who it's for:** parents living alone · families working long hours · seniors recovering from illness · dementia and Alzheimer's.
- **Care options:** 12-hour day care, 24-hour live-in.
- **Role:** caregiver or attendant (nurse visits added if needed).
- **FAQ:** Can the same caregiver come every day? · What if my parent doesn't get along with the caregiver? · Do caregivers cook? · Do you handle dementia care? · Can I check in while I'm away?

### 4. Post-operative and patient care — `/services/post-operative-care`

- **Lead:** Help with recovery after surgery or a hospital stay, at home.
- **Included:** post-surgery recovery support · wound care · medication schedules · mobility and toilet help · bedridden patient care · chronic illness care · patient attendants · coordination with physiotherapy.
- **Who it's for:** after orthopaedic, cardiac or abdominal surgery · after a long hospital stay · chronic illness and bedridden patients.
- **Care options:** single visits, 12-hour, 24-hour.
- **Role:** nurse and patient attendant.
- **FAQ:** How soon after discharge can you start? · Can you manage drains and stitches? · How long does post-operative care usually last? · Can physiotherapy be added?

### 5. Physiotherapy at home — `/services/physiotherapy-at-home`

- **Lead:** A physiotherapist visits your home for pain relief, recovery and better mobility.
- **Included:** back and neck pain · knee, joint and shoulder pain · post-fracture rehabilitation · stroke and neurological rehabilitation · elderly mobility · exercise therapy · manual therapy · laser therapy.
- **Who it's for:** elderly patients · after surgery or fracture · stroke recovery · people with chronic pain or who can't travel.
- **Care options:** single sessions and session packages (wording to confirm); not 12-hour or 24-hour.
- **Role:** physiotherapist.
- **Page-specific block:** "Conditions we help with" grid using the flyer's ten treatment areas.
- **FAQ:** How long is a session? · Do you bring equipment? · How many sessions will I need? · Can sessions be at a fixed time? · Do you treat stroke patients?

### Baby and mother care

No page. The Services card links to hemalathababycare.com and is labelled as a sister service with its own phone number.

## Photos

Hero and section photos should change from hospital interiors to care at home. Re-run the Pexels shortlist with home-care scenes: nurse with an elderly person at home, physiotherapy at home, injection or BP check at home, critical care bed at home, mother and baby, family at home. Keep the doctor-card portraits.

## Prompt to run in the build session

```
Read CLAUDE.md, docs/HOME_CARE_REVAMP.md and references/client-flyers/FACTS.md. The client is a home healthcare provider, not a hospital. Keep the approved visual design system exactly as it is; change content, section purposes and calls to action as described in HOME_CARE_REVAMP.md.

1. Update src/data/hospital-content.ts to the new content model (branches, services with sub-services and optional external link, howItWorks, careRoles, criticalCare, both phones, email, WhatsApp placeholder, home care FAQs). Mark flyer facts as verified with source "Client flyers", WhatsApp 86390 74341 (https://wa.me/918639074341) as verified, the site URL as sample, and keep doctors as sample demo profiles with roles Nurse, Physiotherapist, Caregiver.
2. Update the header nav and actions, hero copy and facts, About, Services (renamed from Departments), Why us, Care team (keep demo cards, add roles strip), Critical care at home (renamed from Facilities), Request care form (new fields), Branches (replaces Visit), FAQ and closing CTA, plus the footer.
3. Add a new How it works section between Services and Why us, built from the existing primitives (numbered steps are a real sequence here).
4. Leave out every flyer marketing claim listed in FACTS.md. Do not mention "hospital" anywhere in user-facing copy except where describing post-hospital care.
5. Update CLAUDE.md's first paragraph, docs/CONTENT_VERIFICATION.md and docs/DESIGN_SYSTEM.md (components list) to match.

Run tsc and eslint, then check 1440, 768 and 375 in the browser and fix what you find.
```

## Prompt for the service pages (run after the revamp)

```
Read CLAUDE.md and the "Service pages" part of docs/HOME_CARE_REVAMP.md.

Add per-service content to src/data/hospital-content.ts for the five services (lead, included items with icons, who it's for, care options, role, page-specific block where listed, FAQs, related services, photo slot), all marked sample except the sub-service names taken from the flyers.

Build src/app/services/[slug]/page.tsx as a Server Component using generateStaticParams over the services array, with the shared template order from the plan. Reuse the home page primitives and sections (How it works, Request care form with the service preselected, call card, closing CTA, footer); build the new blocks (service hero with breadcrumb, included grid, who it's for, care options, role block) in src/components/sections/service/. The service hero uses a white background; the navy hero stays unique to the home page. Link each home page Services card and the footer Services column to its page; the baby care card links out to hemalathababycare.com. Unknown slugs return notFound().

Run tsc and eslint, then check every service page at 1440, 768 and 375 in the browser and fix what you find.
```
