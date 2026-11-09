import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PREVIEW_DIR = path.resolve('_source/preview-crops');
if (!fs.existsSync(PREVIEW_DIR)) {
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });
}

async function prepare() {
  console.log('Extracting and composing all 21 unique images...');

  // 1. home-nursing.webp (16:10 -> 1920x1200)
  // Source: _source/home-nursing.jpg (1376x768).
  // People: grandfather on left (x: 100-500), daughter (x: 370-580), nurse on right (x: 520-950).
  // 16:10 from 768h requires 768 * 1.6 = 1228.8w.
  // Centering at left: 60 keeps all 3 people fully in frame!
  await sharp('_source/home-nursing.jpg')
    .extract({ left: 60, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'home-nursing.webp'));

  // 2. home-physio.webp (16:10 -> 1920x1200)
  // Source: _source/home-physio.jpg (1376x768).
  // People: physiotherapist (x: 280-600), leg (x: 400-800), grandfather (x: 650-950).
  // Centering at left: 60 keeps physiotherapist and grandfather fully in frame!
  await sharp('_source/home-physio.jpg')
    .extract({ left: 60, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'home-physio.webp'));

  // 3. home-critical-care.webp (16:10 -> 1920x1200)
  // Source: _source/home-critical-care.jpg (1376x768).
  // Monitor on left (x: 100), nurse (x: 380-680), grandmother in bed (x: 500-900).
  // Left: 60 keeps monitor, nurse, and grandmother all in frame!
  await sharp('_source/home-critical-care.jpg')
    .extract({ left: 60, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'home-critical-care.webp'));

  // 4. home-elder-care.webp (16:10 -> 1920x1200)
  // Source: _source/home-elder-care.jpg (1376x768).
  // Grandmother with walker (x: 430-600), caregiver (x: 580-750).
  // Left: 74 centers both subjects with comfortable breathing room on all sides!
  await sharp('_source/home-elder-care.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'home-elder-care.webp'));

  // 5. home-mother-baby.webp (16:10 -> 1920x1200)
  // Source: references/client-flyers/flyer-04.webp (680x1020).
  // Indian mother holding newborn baby:
  // Mother & baby are between x: 280 to 680, y: 160 to 580.
  // 16:10 ratio: width 380, height 238
  await sharp('references/client-flyers/flyer-04.webp')
    .extract({ left: 290, top: 165, width: 385, height: 241 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'home-mother-baby.webp'));

  // 6. about-caregiver-bedside.webp (4:4.4 = 1:1.1 -> 1273x1400)
  // Source: _source/about-caregiver-bedside.jpg (1200x896).
  // Nurse is at x: 260-540, grandfather at x: 500-840.
  // Ratio 4:4.4 -> width = 896 * 4 / 4.4 = 815.
  // Left: 180 keeps both nurse and grandfather completely in frame!
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 180, top: 0, width: 815, height: 896 })
    .resize(1273, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'about-caregiver-bedside.webp'));

  // 7. about-holding-hands.webp (4:3 -> 900x675)
  // Source: _source/about-caregiver-bedside.jpg
  // Close crop of the hands held together on the floral bedsheet:
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 450, top: 480, width: 360, height: 270 })
    .resize(900, 675)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'about-holding-hands.webp'));

  // 8. service-home-nursing.webp (4:5 -> 1120x1400)
  // Source: references/client-flyers/flyer-11.webp (680x1020).
  // Top right shows South Indian nurse in navy blue scrubs smiling with elderly Indian woman at home:
  // x: 440 to 675, y: 70 to 360.
  // 4:5 ratio: width 230, height 288.
  await sharp('references/client-flyers/flyer-11.webp')
    .extract({ left: 445, top: 72, width: 230, height: 288 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-home-nursing.webp'));

  // 9. why-home-care.webp (4:4.6 -> 1217x1400)
  // Source: references/client-flyers/flyer-12.webp (680x1020).
  // Top right: South Indian caregiver in navy scrubs with elderly Indian couple at home, smiling warmly:
  // x: 460 to 675, y: 105 to 350.
  // 4:4.6 ratio = 0.8696. width = 210, height = 242.
  await sharp('references/client-flyers/flyer-12.webp')
    .extract({ left: 465, top: 105, width: 210, height: 242 })
    .resize(1217, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'why-home-care.webp'));

  // 10. critical-care-bedside.webp (4:5 -> 1120x1400)
  // Source: references/client-flyers/flyer-10.webp (856x1020).
  // Top right: ICU nurse in scrubs & mask caring for patient on ventilator with patient monitor:
  // x: 530 to 850, y: 160 to 560.
  // 4:5 ratio: width 316, height 395.
  await sharp('references/client-flyers/flyer-10.webp')
    .extract({ left: 530, top: 165, width: 316, height: 395 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'critical-care-bedside.webp'));

  // 11. critical-care-bed.webp (4:5 -> 1120x1400)
  // Source: references/client-flyers/flyer-01.webp (680x1020).
  // "ICU & క్రిటికల్ కేర్" panel at bottom left:
  // Patient in adjustable ICU profile bed with medical monitors and ventilator:
  // x: 485, y: 615, width: 145, height: 100.
  // Let's check flyer-01 at x: 485 to 630, y: 610 to 715.
  // 4:5 ratio: width 132, height 165 or from home-critical-care.jpg.
  // In home-critical-care.jpg, left: 60, top: 80, width: 550, height: 688 shows the full adjustable profile bed with oxygen concentrator and patient!
  await sharp('_source/home-critical-care.jpg')
    .extract({ left: 60, top: 40, width: 560, height: 700 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'critical-care-bed.webp'));

  // 12. cta-care-coordinator.webp (16:10 -> 1920x1200)
  // Source: references/client-flyers/flyer-02.webp (680x1020).
  // Bottom right has the care coordinator / nurse smiling warmly:
  // x: 740y, let's extract or from flyer-02 top right!
  // In flyer-02, top right has nurse in navy scrubs with elderly grandmother:
  // x: 570 to 1000, y: 30 to 450 in 1360x1020 flyer-05!
  // In flyer-05 (1360x1020):
  // Nurse in navy scrubs and elderly grandmother: x: 580 to 1350, y: 25 to 510!
  // 16:10 ratio: width 750, height 468.
  await sharp('references/client-flyers/flyer-05.webp')
    .extract({ left: 590, top: 30, width: 750, height: 469 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'cta-care-coordinator.webp'));

  // 13. branch-office.webp (4:3 -> 1400x1050)
  // Source: references/client-flyers/flyer-09.webp (680x1020).
  // Branch 1 Kukatpally landmark arch and avenue in Hyderabad:
  // x: 45 to 195, y: 715 to 845.
  // 4:3 ratio: width 150, height 112.
  await sharp('references/client-flyers/flyer-09.webp')
    .extract({ left: 45, top: 720, width: 150, height: 112 })
    .resize(1400, 1050)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'branch-office.webp'));

  // 14. team-nurse.webp (1:1.05 -> 857x900)
  // Exact head & shoulders of the nurse from character sheet:
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 60, top: 80, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'team-nurse.webp'));

  // 15. team-physiotherapist.webp (1:1.05 -> 857x900)
  // Exact head & shoulders of the physiotherapist from character sheet:
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 498, top: 40, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'team-physiotherapist.webp'));

  // 16. team-caregiver.webp (1:1.05 -> 857x900)
  // Exact head & shoulders of the caregiver from character sheet:
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 910, top: 120, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'team-caregiver.webp'));

  // 17. service-post-op.webp (4:3.4 -> 1400x1190)
  // Source: references/client-flyers/flyer-08.webp (680x1020).
  // "PATIENT ATTENDANT & POST HOSPITAL CARE"
  // Attendant in navy blue supporting patient recovering in bed at home:
  // x: 715 to 960y? Let's check flyer-08:
  // Panel is at left: 715? flyer-08 is 680 wide.
  // Panel is at x: 485, y: 585, width: 185, height: 115.
  // Let's extract this panel!
  await sharp('references/client-flyers/flyer-08.webp')
    .extract({ left: 486, top: 588, width: 184, height: 110 })
    .resize(1400, 1190)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-post-op.webp'));

  // 18. service-critical-who.webp (4:3.6 -> 1400x1260)
  // Source: _source/home-critical-care.jpg (1376x768).
  // Nurse explaining bedside monitor & patient resting:
  // Extract nurse and patient centered:
  // 4:3.6 = 1.111 ratio. height = 768, width = Math.round(768 * 1.111) = 853.
  // Left: 360 keeps nurse (x: 380-680) and patient (x: 500-900) in frame!
  await sharp('_source/home-critical-care.jpg')
    .extract({ left: 360, top: 0, width: 853, height: 768 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-critical-who.webp'));

  // 19. service-elder-who.webp (4:3.6 -> 1400x1260)
  // Source: references/client-flyers/flyer-08.webp (680x1020).
  // "SENIOR CITIZEN CARETAKER SERVICES"
  // Caregiver in navy scrubs conversing with elderly Indian grandfather in white shirt:
  // x: 485, y: 235, width: 185, height: 125.
  // 4:3.6 ratio: width 147, height 132.
  await sharp('references/client-flyers/flyer-08.webp')
    .extract({ left: 486, top: 236, width: 184, height: 124 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-elder-who.webp'));

  // 20. service-physio-who.webp (4:3.6 -> 1400x1260)
  // Source: references/client-flyers/flyer-08.webp (680x1020).
  // "PHYSIOTHERAPY SERVICES"
  // Physiotherapist in navy polo guiding dumbbell/arm mobility exercise with elderly man:
  // x: 18, y: 565, width: 185, height: 110.
  await sharp('references/client-flyers/flyer-08.webp')
    .extract({ left: 18, top: 566, width: 184, height: 110 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-physio-who.webp'));

  // 21. service-nursing-who.webp (4:3.6 -> 1400x1260)
  // Source: references/client-flyers/flyer-11.webp (680x1020).
  // "SUGAR CHECK-UP" digital blood sugar monitoring on patient:
  // x: 350, y: 650, width: 135, height: 90.
  // 4:3.6 ratio: width 100, height 90.
  await sharp('references/client-flyers/flyer-11.webp')
    .extract({ left: 350, top: 642, width: 135, height: 90 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(PREVIEW_DIR, 'service-nursing-who.webp'));

  console.log('All 21 preview crops generated successfully!');
}

prepare().catch(console.error);
