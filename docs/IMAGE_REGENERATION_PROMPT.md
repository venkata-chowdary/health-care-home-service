# Prompt: regenerate all images with the client uniform (Antigravity)

Before running it, save the client's uniform photo as `references/uniform/uniform-front.png` (add `uniform-back.png` or a side view if you have one) and attach the same photo(s) to Antigravity. The prompt treats that photo as the exact uniform.

```
You are working in the Hemalatha Health Care website (Next.js 16, Tailwind 4). Read CLAUDE.md, docs/DESIGN_SYSTEM.md, and references/client-flyers/FACTS.md. This brief is complete on its own; ignore docs/IMAGE_GENERATION_PROMPT.md. The client is a HOME HEALTHCARE provider in Hyderabad: nurses, caregivers, ICU-trained nurses and physiotherapists who visit patients at home.

GOAL
Regenerate every image in public/images/generated/ (22 files) so that:
1. All Hemalatha staff wear the CLIENT UNIFORM shown in the attached reference photo(s) (references/uniform/).
2. Caretakers are always the SAME GENDER as the patient: male patients are cared for by male staff, female patients by female staff. No exceptions.
3. Homes are UPPER-MIDDLE-CLASS Hyderabad homes, not lower-middle-class.
Keep the same file names, aspect ratios and export settings so nothing in the code has to change.

RULE 1: THE UNIFORM
- Study the attached uniform photo(s) first. Describe it in writing before generating anything: colours (exact shades), garment type (scrub top, kurta-style, polo, tunic, trousers), collar and neckline, sleeve length, piping or contrast trim, pockets, fabric look, and where any logo or embroidery sits.
- Reproduce that uniform exactly on every staff member in every image: same colours, cut, trim and fit. Do not substitute generic scrubs or invent a different shade. Physiotherapists, nurses and caregivers all wear this uniform unless the reference shows a separate variant; if it shows one, use the variant only for the matching role.
- Chest logo or embroidery: reproduce it only if it renders cleanly and legibly and matches the client's logo. If it comes out garbled or misspelled, leave that area plain instead. Never add any other readable text, badges or lettering anywhere.
- Uniform must look clean, pressed and well-fitted, appropriate for a trained professional.
- Build a CHARACTER SHEET first, all wearing the uniform, and attach it as the reference for every later image so the same people appear across the site:
  - Female nurse, about 30
  - Male nurse, about 32
  - Female caregiver, about 40
  - Male caregiver, about 38
  - Male physiotherapist, about 32
  - Female physiotherapist, about 29
  Review the sheet: uniform must match the reference exactly on all six before continuing.

RULE 2: GENDER MATCHING
- Every scene lists the patient and the staff member. Follow the pairing exactly. A male patient must only ever be touched, assisted, bathed, repositioned or examined by a male staff member; a female patient only by a female staff member.
- Family members may be any gender, but must stay in the background or beside, not performing care.
- When two staff appear, both match the patient's gender.
- If a generated image breaks this, discard and regenerate.

RULE 3: UPPER-MIDDLE-CLASS HOMES
- Setting: spacious, well-kept apartments or villas in a good Hyderabad neighbourhood (Banjara Hills, Jubilee Hills, Gachibowli, Kondapur type). Large windows with sheer curtains and wooden or modern frames, polished marble or large-format vitrified tile or engineered wood flooring, quality sofas with cushions, a teak or modern wooden console, tasteful lighting, indoor plants, a few art pieces or framed family photos, air conditioner visible in bedrooms, ceiling fan only as a secondary element.
- Bedrooms: proper bed with good linen, side tables, wardrobe with a clean finish; the adjustable care bed looks like a quality rented medical bed, neat and tidy.
- Clean, uncluttered, bright, calm. Nothing shabby, cramped, peeling, bare-bulb or cheap-looking. Not an ostentatious mansion either: tasteful and comfortable.
- Patients and families: well-dressed in neat everyday Indian clothing (cotton or silk sarees, kurtas, shirts), dignified and relaxed.

RULE 4: STYLE
Photorealistic lifestyle photography, full-frame camera, 35mm or 50mm, natural window daylight, shallow depth of field, true skin texture, slightly cool and clean grade that suits the site's navy (#0B1B45) and blue (#1F6BFF). No text, signs, logos (except per Rule 1), watermarks, blood, graphic wounds, distorted hands or extra fingers, plastic skin, or close-up children's faces.

IMAGES TO GENERATE (file, aspect ratio, patient, staff, scene)
Home page
1. home-nursing.webp, 16:10. Patient: elderly man in a kurta or striped shirt. Staff: male nurse. Male nurse checking the blood pressure of the elderly man on a quality sofa in a bright living room; his adult son stands nearby.
2. home-physio.webp, 16:10. Patient: elderly woman in a cotton saree. Staff: female physiotherapist. Seated knee-extension exercise on a dining chair, in a bright living room.
3. home-critical-care.webp, 16:10. Patient: middle-aged woman on a care bed. Staff: female nurse (ICU-trained). Adjusting a nasal cannula; oxygen concentrator and neat bedside monitor beside the bed; tasteful upper-middle-class bedroom with air conditioner, framed art and quality curtains.
4. home-elder-care.webp, 16:10. Patient: elderly man using a walker. Staff: male caregiver. Walking slowly beside him in a spacious apartment living room with marble floor.
5. home-mother-baby.webp, 16:10. Patient: young mother with newborn. Staff: female baby-care nurse. Helping the mother hold her newborn on a bed in a well-furnished bedroom; baby wrapped, faces turned toward the mother.
6. about-caregiver-bedside.webp, 4:4.4. Patient: elderly man resting in bed. Staff: male nurse. Sitting on a chair beside the bed, talking with him; morning light, quality bedroom.
7. about-holding-hands.webp, 4:3. Patient: elderly woman (glass or gold bangles). Staff: female nurse. Close-up of the nurse's hands in the uniform sleeve gently holding the patient's hand on fine cotton bedding.
8. service-home-nursing.webp, 4:5. Patient: not visible. Staff: female nurse. Preparing a dressing kit and syringe on a clean tray on a polished bedside table; a patient (woman) softly out of focus behind. No needle in skin.
9. why-home-care.webp, 4:4.6. Patient: elderly woman. Staff: female caregiver. Sharing tea and laughing at a dining table in a well-appointed home; a family member in soft-focus background.
10. critical-care-bedside.webp, 4:5. Patient: bedridden elderly man with tracheostomy. Staff: male ICU-trained nurse. Checking a patient monitor beside the bed with a ventilator in a quality home bedroom; calm, clinical, clearly a home.
11. critical-care-bed.webp, 4:5. Patient: bedridden elderly man. Staff: two male caregivers. Carefully repositioning him on an adjustable bed.
12. cta-care-coordinator.webp, 16:10. Staff: female care coordinator in the uniform. On a phone call at a tidy modern desk with a laptop and notepad, smiling; small, bright, professional office, no signage.
13. branch-office.webp, 4:3. Small, clean, modern care-coordination reception: desk, two comfortable chairs for families, water dispenser, indoor plant, no signage or text.

Care team (demo profiles; head-and-shoulders, plain soft light-grey background, uniform visible)
14. team-nurse.webp, 1:1.05. The female nurse from the character sheet.
15. team-physiotherapist.webp, 1:1.05. The male physiotherapist from the character sheet.
16. team-caregiver.webp, 1:1.05. The female caregiver from the character sheet.
(The care team section shows one nurse, one physiotherapist, one caregiver. Optionally also generate team-nurse-male.webp, team-caregiver-male.webp and team-physiotherapist-female.webp for future use; do not wire them in.)

Service pages
17. service-post-op.webp, 4:3.4. Patient: elderly man after knee surgery on a sofa, leg on a stool. Staff: male nurse changing a clean bandage.
18. service-post-op-who.webp, 4:3.6. Patient: woman recovering after surgery, resting on a sofa. Staff: female nurse checking her gently while adjusting her blanket.
19. service-critical-who.webp, 4:3.6. Patient: man in a home ICU bed. Staff: male nurse explaining the monitor to a family member standing beside the bed.
20. service-elder-who.webp, 4:3.6. Patient: elderly woman (and her husband in the background). Staff: female caregiver arranging medicines in a pill organiser at a dining table.
21. service-physio-who.webp, 4:3.6. Patient: elderly man doing a resistance-band shoulder exercise. Staff: male physiotherapist guiding him in a bright living room.
22. service-nursing-who.webp, 4:3.6. Patient: elderly woman at her dining table. Staff: female nurse checking her blood sugar with a glucometer.

REVIEW BEFORE KEEPING EACH IMAGE
Check all four, regenerate if any fails:
- Uniform matches the reference exactly (colour, cut, trim); no stray text.
- Staff gender matches patient gender.
- Home looks upper-middle-class, tidy and bright, not lower-middle-class.
- No distorted hands or faces, no hospital look where a home is needed.

EXPORT AND REPLACE
- Export WebP masters at quality 85 (1920px wide for 16:10, 1400px long edge for section photos, 900px for insets, cards and team portraits). Next.js serves AVIF/WebP at the right width from these.
- Overwrite the 22 files in public/images/generated/ using the same names. Keep the full-quality originals out of the repo (local _source folder in .gitignore).
- Update the alt text in src/data/hospital-content.ts for every changed image so it describes the new scene plainly (for example "A male nurse in uniform checking an older man's blood pressure at home"). Leave the status and source fields as they are.
- Care team names and roles in hospital-content.ts must still make sense: Lakshmi Devi (nurse, female), Ravi Kumar (physiotherapist, male), Sunitha Rao (caregiver, female). Keep them.
- Check every PhotoFrame crop (focus / object-position) still keeps faces and hands in frame at 1440, 768 and 375; adjust the focus values where a new composition needs it.

VERIFY
- npx tsc --noEmit and npx eslint src.
- npm run build, then npm run start; check the home page and all five /services/[slug] pages at 1440, 768 and 375: every photo is relevant, uniform consistent across pages, gender matching correct everywhere, homes upper-middle-class, no layout shift, no console errors.
- Report total image weight on the home page before and after.
- Do not edit docs/IMAGE_CREDITS.md or docs/CONTENT_VERIFICATION.md, and do not add any "AI-generated", "sample" or "illustrative" labels or notes to the site.
```

## Why this brief is built this way

- **Uniform:** AI tools drift when you only describe clothing. The brief makes them write a description of the uniform first, then lock it into a six-person character sheet that every later image reuses.
- **Gender pairing:** each of the 22 scenes now names the patient and the staff member, so it can't be left to chance. The old set had a female nurse with an elderly man, and the new one removes that.
- **Upper-middle-class:** the brief names concrete cues instead of "richer home": marble floors, quality furniture, air conditioning, tasteful lighting. It also warns against a mansion look.
- **No code changes needed:** file names, ratios and export settings stay the same, so only the alt text and a few crop values change.
