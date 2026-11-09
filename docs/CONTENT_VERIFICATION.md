# Content verification checklist

Every business-sensitive field lives in `src/data/hospital-content.ts` with a `status`:

- `verified` — supplied or confirmed by the client
- `provisional` — taken from a public source (Google Business Profile, 8 Nov 2026), needs client confirmation
- `sample` — proposed or placeholder content, must be replaced or signed off before launch

## Open items

| Item | Status | Needed from client |
|---|---|---|
| Business type: home healthcare, not an inpatient hospital | verified (client flyers) | — |
| Name and legal name | verified (logo) | — |
| Phones 86390 74341 and 96426 60492, email, 24/7 | verified (client flyers) | Confirm nothing is outdated |
| WhatsApp 86390 74341 | verified (client contact, 8 Nov 2026) | — |
| Website domain | sample | flyer says hemalathahealthcare.com, Google says hemalathahealthcareservices.com. Confirm for canonical URLs and Open Graph |
| Four branches | provisional | Full addresses for Pragathi Nagar, Madhapur and Manikonda; confirm Manikonda (only on 2 of 12 flyers) |
| Branch 1 address, Plot No. 22, KPHB Colony 500072 | provisional | Flyer address used. Google says Aditya Nagar 500085; the map pin and directions link still come from Google. Confirm and replace |
| Services and sub-services (6) | verified (client flyers) | — |
| Baby and mother care link-out, sister service phone 95812 50425 | verified (client flyers) | Confirm the link and wording |
| How it works (4 steps) | sample | Sign off the step wording |
| Why families choose us | sample | Sign off; "trained nurses and caregivers" is the client's wording |
| Care team demo cards | sample | Real names, roles, qualifications, photos, written consent |
| Care roles strip | verified (derived from flyer services) | — |
| Critical care at home list | verified (client flyers) | Confirm which equipment is arranged |
| Hero copy and facts | sample / verified | Sign off copy |
| FAQ answers | sample / provisional / verified | Supply answers; only the physiotherapy answer is verified |
| Reviews | provisional | Only 1 real Google review is quoted; add more in full (the profile has 96) |
| Enquiry destination | sample | Email, WhatsApp Business or CRM; the form sends nothing yet |
| Care type, who needs care, start time options in the form | sample | Confirm 12-hour and 24-hour live-in are offered |
| Service page copy (5 pages: lead, included lines, who it's for, care options, role, FAQs, related services) | sample | Sign off. Only the sub-service names come from the client flyers |
| Care options per service (single visit, 12-hour, 24-hour) | sample | Confirm which options each service offers; Elder care single visits and physiotherapy session packages are marked to confirm |
| Home ICU setup checklist (bed, oxygen, monitor, suction, ventilator) | sample | Confirm what the client supplies |
| Physiotherapy treatment areas | verified names, list to confirm | The plan expects ten areas; the flyer facts give eight plus three therapies. Confirm the full list |
| Service page reviews | provisional | Reviews are matched to a service by keyword; only real Google reviews are shown, and the section hides when none match |
| Flyer marketing claims (celebrities, 1000+ families, Hyderabad's best, VIP, background checks, hospital quality) | left out | Supply proof before any is used |
| Care team portraits (demo profiles) | sample | AI-generated portraits of 3 recurring staff members (nurse, physiotherapist, caregiver). Must be replaced with real staff photos and written consent before launch. |
| AI-generated home-care images (`public/images/generated/`) | sample | Illustrative stand-ins showing Telugu home-care scenes. Must be replaced or approved by the client before launch; real photography of their own staff and visits (with consent) is preferred. |
| White logo for dark backgrounds | generated | `public/images/brand/logo-white.png` was derived from the PNG; replace with the designer's file if available |

## Content revamp (Nov 2026)

The page now carries general educational content that makes no claims about Hemalatha. It needs a read-through by someone qualified before launch, and a named reviewer once the client supplies one.

| Item | Status | Needed from client |
|---|---|---|
| `/guides` articles (5), `src/data/guides.ts` | provisional | General guidance written without a clinician. Have a doctor or senior nurse review before launch and add a "reviewed by" line only if they agree |
| "Is home care right for us?" block | provisional | Same medical review |
| Per-service "what a visit looks like", "before we start", "when to call the doctor" | provisional | Same medical review; confirm the visit routines match how the team actually works |
| Landing and service FAQs | verified / provisional / sample | The critical care single-visit answer is `sample`. Excluded from FAQPage schema |
| JSON-LD (MedicalBusiness, FAQPage, Service, Article, BreadcrumbList) | provisional | No `url`, `geo` or `aggregateRating` is emitted until the domain, branch address and Google rating are confirmed |
| Care team section | sample | Shown with three demo profiles and AI portraits. Replace with real staff, qualifications, photos and written consent before launch |

### Questions for the client (not shown on the site until answered)

These live in `clientQuestions` in `src/data/hospital-content.ts`.

1. How quickly can a nurse or caregiver start after a call?
2. How are nurses and caregivers verified and trained?
3. Can a family ask for a different caregiver, and what happens if the regular caregiver is absent?
4. Are 12-hour and 24-hour live-in shifts available for each service?
5. Is there a minimum booking period?
6. What are the prices, and how do customers pay?
7. Which equipment does Hemalatha supply for a home ICU, and what does the family arrange?
8. Is the company registered, and under what details?

Never present `sample` content as fact, and never add accreditations, bed counts, success rates, insurer names or ratings that the client has not supplied.
