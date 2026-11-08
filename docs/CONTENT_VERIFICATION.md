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
| Doctor portraits and building exterior (stock) | sample | Stock models and a generic building, not Hemalatha's staff or premises. Replace before launch. |
| Photography | sample | Client's own photos of nurses, caregivers and physiotherapists at work, the Branch 1 office, and mother and baby care |
| Home-care stock photos (12 files in `public/images/stock/`) | sample | Pexels stand-ins showing home-care scenes, mostly non-Indian people. None show Hemalatha staff, patients or premises. Replace with the client's own photography (with consent) before launch. Credits in `docs/IMAGE_CREDITS.md`. |
| White logo for dark backgrounds | generated | `public/images/brand/logo-white.png` was derived from the PNG; replace with the designer's file if available |

Never present `sample` content as fact, and never add accreditations, bed counts, success rates, insurer names or ratings that the client has not supplied.
