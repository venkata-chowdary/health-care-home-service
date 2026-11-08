# Prompt: replace stock photos with generated home-care images (Antigravity)

Paste everything inside the fence into Antigravity, opened on the `hemalatha-health-care` folder. It uses Antigravity's built-in image generation. The look matches the realistic generated photos used for the Maruthi restaurant site (`../maruthi-s-golden-plate/src/assets/`): clean, bright, real-camera photorealism, not illustration.

```
You are working in the Hemalatha Health Care website (Next.js 16, Tailwind 4). Read CLAUDE.md, docs/DESIGN_SYSTEM.md and references/client-flyers/FACTS.md first. The client is a HOME HEALTHCARE provider in Hyderabad: nurses, caregivers, ICU-trained nurses and physiotherapists who visit patients at home. Not a hospital.

GOAL
Replace every stock photo in public/images/stock/ with photorealistic generated images that actually show this business: Indian (Telugu) families in Hyderabad homes being cared for by Hemalatha's nurses and caregivers. Fix two problems with the current photos:
1. They are not relevant: mostly Western homes and non-Indian people, some in hospitals.
2. They are too heavy: 2000px JPEG originals of 56–249 KB each, 2.6 MB in total, with no image format config. This slows the page.

STEP 1: VISUAL STYLE (apply to every image)
- Photorealistic lifestyle photography, shot on a full-frame camera, 35mm or 50mm lens, natural window daylight, soft shadows, shallow depth of field, true-to-life skin texture. Same realism as ../maruthi-s-golden-plate/src/assets/restaurant-interior.jpg.
- Setting: middle-class Hyderabad homes and apartments: light painted walls, vitrified or marble-look tiled floors, wooden furniture, cotton curtains, ceiling fan, a few house plants, framed family photos. Tidy, not luxurious, not poor.
- People: South Indian / Telugu families. Elderly men in cotton kurtas or shirts, elderly women in cotton sarees, family members in everyday Indian clothing. Dignified, calm, warm. No exaggerated smiles or thumbs-up.
- Staff uniform (consistent across all images): nurses and caregivers in plain navy blue scrubs or a navy polo for physiotherapists, short-sleeved, no visible text, no logos, no name badges. Optional plain navy lanyard.
- Colour grade: slightly cool and clean, so it sits with the site's navy (#0B1B45) and blue (#1F6BFF) palette. Whites stay white, nothing orange or heavily warm.
- Never include: readable text, signs, logos, watermarks, brand names, hospital corridors, operating theatres, blood, graphic wounds, distorted hands or extra fingers, plastic-looking skin, or children's faces in close-up.
- First generate a short character sheet for the three recurring staff (a female nurse around 30, a male physiotherapist around 32, a female caregiver around 40) and use it as the reference in later images so the same staff appear across the site.

STEP 2: GENERATE THESE IMAGES (file name, aspect ratio, scene)
Generate at or above the export size, then export as described in Step 3.

Home page
1. home-nursing.webp, 16:10. A nurse in navy scrubs checking the blood pressure of an elderly Telugu man in a kurta, seated on a wooden sofa in his living room; his daughter sits nearby.
2. home-physio.webp, 16:10. A physiotherapist in a navy polo guiding an elderly man through a seated knee-extension exercise on a dining chair at home.
3. home-critical-care.webp, 16:10. A nurse adjusting the nasal cannula of an elderly woman resting on a hospital-style adjustable bed set up in a home bedroom, an oxygen concentrator and a small bedside monitor beside the bed, curtains and family photos visible so it clearly reads as a home.
4. home-elder-care.webp, 16:10. A caregiver walking slowly beside an elderly woman in a cotton saree who uses a walker, in a bright apartment living room.
5. home-mother-baby.webp, 16:10. A baby-care nurse helping a young mother hold her newborn on a bed at home; the baby is wrapped and seen from a distance, faces turned to the mother.
6. about-caregiver-bedside.webp, 4:4.4. A nurse sitting on a chair beside an elderly man resting in bed, talking with him; morning light from the window.
7. about-holding-hands.webp, 4:3. Close-up: a nurse's hand gently holding an elderly woman's hand wearing glass bangles, on a cotton bedsheet.
8. service-home-nursing.webp, 4:5. A nurse preparing a dressing kit and syringe on a clean tray on a bedside table, patient softly out of focus in the background. No needle in skin.
9. why-home-care.webp, 4:4.6. A caregiver and an elderly woman sharing tea and laughing at a small dining table; a family member passes in the soft-focus background.
10. critical-care-bedside.webp, 4:5. An ICU-trained nurse checking a patient monitor beside a bedridden elderly man with a tracheostomy, in a home bedroom with a ventilator; calm and clinical but clearly a home.
11. critical-care-bed.webp, 4:5. Two caregivers carefully repositioning a bedridden elderly man on an adjustable bed at home.
12. cta-care-coordinator.webp, 16:10. A care coordinator in a navy polo on a phone call at a tidy desk with a laptop and a notepad, smiling while listening; small office, no signage.
13. branch-office.webp, 4:3. A small, clean care-coordination office reception with a desk, two chairs for families and a water dispenser, no signage or text. Replaces visit-exterior.jpg (a stranger's building).

Care team (demo profiles)
14. team-nurse.webp, 1:1.05. Head-and-shoulders portrait of the nurse from the character sheet, plain soft light-grey background.
15. team-physiotherapist.webp, 1:1.05. Same treatment, the physiotherapist.
16. team-caregiver.webp, 1:1.05. Same treatment, the caregiver.

Service pages (check each service's photo fields in src/data/hospital-content.ts and give every page its own hero and "who it's for" image)
17. service-post-op.webp, 4:3.4. A nurse changing a clean bandage on an elderly man's knee after surgery, at home on a sofa with his leg on a stool.
18. service-critical-who.webp, 4:3.6. A family member standing with the nurse beside a home ICU bed, the nurse explaining the monitor.
19. service-elder-who.webp, 4:3.6. An elderly couple at home with a caregiver arranging their daily medicines in a pill organiser.
20. service-physio-who.webp, 4:3.6. A physiotherapist helping an elderly woman with a resistance-band shoulder exercise in her living room.
21. service-nursing-who.webp, 4:3.6. A nurse checking an elderly woman's blood sugar with a glucometer at her dining table.

Review every image at full size before keeping it. Regenerate any image with wrong hands, strange faces, text artefacts, a hospital look where a home is needed, or a non-Indian setting.

STEP 3: EXPORT LIGHT
- Put final files in public/images/generated/. Keep the full-quality generation outputs out of the repo (for example in a local _source folder listed in .gitignore). Do not commit the originals.
- Use sharp (already installed) to export WebP at quality 72–78:
  - Hero deck and 16:10 images: 1600px wide, target under 160 KB.
  - Section photos (about, why-us, critical care, service pages): 1200px on the long edge, target under 120 KB.
  - Inset, service card, team portraits: 800px on the long edge, target under 70 KB.
- In next.config.ts set images.formats to ["image/avif", "image/webp"] and keep the default device sizes, so next/image serves AVIF or WebP at the right width.
- Import images statically where practical (import heroNursing from "@/../public/...") or generate blurDataURL values, so every photo gets placeholder="blur" and the layout never shifts.

STEP 4: WIRE THEM IN
- Update every photo field in src/data/hospital-content.ts to the new files. Set status "sample" and source "AI-generated illustrative image", with alt text that describes the scene and never claims to show real Hemalatha staff or patients.
- Hero deck: preload only the front photo. The other four load lazily with a sizes value matching their smaller displayed width.
- Check every PhotoFrame's sizes matches its real rendered width at 1440, 768 and 375, and fix any that request a bigger image than they show.
- Add a small line in the footer: "Photos are illustrative." The care team cards keep the "Demo profile" tag.
- Delete public/images/stock/ and docs/IMAGE_SHORTLIST*.md references once nothing uses them. Replace docs/IMAGE_CREDITS.md with a short note that site images are AI-generated stand-ins, and update docs/CONTENT_VERIFICATION.md: generated images must be replaced or approved by the client before launch, and real photos of their own staff (with consent) are preferred.

STEP 5: VERIFY
- npx tsc --noEmit and npx eslint src.
- npm run build, then npm run start (production; dev mode does not reflect real image performance).
- In the browser at 1440, 768 and 375 check the home page and all five /services pages: every image is relevant, crops keep faces and hands in frame, no layout shift, no console errors.
- Run Lighthouse (mobile) on the home page and one service page. Targets: LCP under 2.5 s, CLS under 0.1, no "properly size images" or "serve images in next-gen formats" warnings. Report total image weight on the home page before (2.6 MB of originals) and after.
```

## Why these choices

- **The same three staff in every image** looks like a real team instead of a stock collage, and fits the care team demo cards.
- **No building exterior:** a generated building would still look like the client's branch, so it's replaced with an unsigned office interior.
- **"Photos are illustrative" note and sample status:** generated people must not look like real staff or patients, which is the same honesty rule as the rest of the content.
- **Production check:** `next dev` optimises images on demand and is slower, so performance is only measured on `next build` + `next start`.
