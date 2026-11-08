# Content verification checklist

Every business-sensitive field lives in `src/data/hospital-content.ts` with a `status`:

- `verified` — supplied or confirmed by the client
- `provisional` — taken from a public source (Google Business Profile, 8 Nov 2026), needs client confirmation
- `sample` — proposed or placeholder content, must be replaced or signed off before launch

## Open items

| Item | Status | Needed from client |
|---|---|---|
| Name and legal name | verified (logo) | — |
| Google listing | provisional | Confirm the listing is the hospital. Google currently categorises it as a home health care service. |
| Website domain | provisional | Confirm the domain for canonical URLs and Open Graph |
| Phone 086390 74341 | provisional | Confirm it is the hospital front desk |
| Address, Aditya Nagar, Kukatpally 500085 | provisional | Confirm full street address |
| Front desk open 24 hours | provisional | Confirm |
| Outpatient and visiting hours | sample | Supply |
| Departments (6 listed) | sample | Supply the real list |
| Doctors | sample | Names, departments, registered qualifications, photos, written consent |
| Facilities | sample | Confirm which exist |
| Value statements | sample | Sign off |
| Hero copy and facts | sample | Sign off; confirm walk-ins |
| FAQ answers | sample / provisional | Supply operational answers |
| Reviews | provisional | Decide whether to quote reviews that describe home nursing |
| Enquiry destination | sample | Email, WhatsApp Business or CRM |
| Photography | sample | Building, reception, wards, diagnostics, pharmacy, staff |
| White logo for dark backgrounds | generated | `public/images/brand/logo-white.png` was derived from the PNG; replace with the designer's file if available |

Never present `sample` content as fact, and never add accreditations, bed counts, success rates, insurer names or ratings that the client has not supplied.
