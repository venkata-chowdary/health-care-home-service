import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUTPUT_DIR = path.resolve('public/images/generated');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 1. Home Nursing (16:10 -> 1920x1200) from _source/home-nursing.jpg
await sharp('_source/home-nursing.jpg')
  .extract({ left: 74, top: 0, width: 1228, height: 768 })
  .resize(1920, 1200)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'home-nursing.webp'));

// 2. Home Physio (16:10 -> 1920x1200) from _source/home-physio.jpg
await sharp('_source/home-physio.jpg')
  .extract({ left: 74, top: 0, width: 1228, height: 768 })
  .resize(1920, 1200)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'home-physio.webp'));

// 3. Home Critical Care (16:10 -> 1920x1200) from _source/home-critical-care.jpg
await sharp('_source/home-critical-care.jpg')
  .extract({ left: 74, top: 0, width: 1228, height: 768 })
  .resize(1920, 1200)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'home-critical-care.webp'));

// 4. Home Elder Care (16:10 -> 1920x1200) from _source/home-elder-care.jpg
await sharp('_source/home-elder-care.jpg')
  .extract({ left: 74, top: 0, width: 1228, height: 768 })
  .resize(1920, 1200)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'home-elder-care.webp'));

// 5. Home Mother Baby (16:10 -> 1920x1200) from public/images/stock/home-mother-baby.jpg
await sharp('public/images/stock/home-mother-baby.jpg')
  .extract({ left: 0, top: 41, width: 2000, height: 1250 })
  .resize(1920, 1200)
  .modulate({ saturation: 0.95, brightness: 1.02 })
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'home-mother-baby.webp'));

// 6. About Caregiver Bedside (4:4.4 -> 1273x1400) from _source/about-caregiver-bedside.jpg
// 1200x896 -> 4:4.4 ratio = 0.9090. width = 896 * 4 / 4.4 = 815
await sharp('_source/about-caregiver-bedside.jpg')
  .extract({ left: 180, top: 0, width: 815, height: 896 })
  .resize(1273, 1400)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'about-caregiver-bedside.webp'));

// 7. About Holding Hands (4:3 -> 900x675) from _source/about-caregiver-bedside.jpg
await sharp('_source/about-caregiver-bedside.jpg')
  .extract({ left: 470, top: 490, width: 320, height: 240 })
  .resize(900, 675)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'about-holding-hands.webp'));

// 8. Service Home Nursing (4:5 -> 1120x1400) from _source/home-nursing.jpg
await sharp('_source/home-nursing.jpg')
  .extract({ left: 580, top: 0, width: 614, height: 768 })
  .resize(1120, 1400)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-home-nursing.webp'));

// 9. Why Home Care (4:4.6 -> 1217x1400) from _source/home-elder-care.jpg
await sharp('_source/home-elder-care.jpg')
  .extract({ left: 520, top: 0, width: 668, height: 768 })
  .resize(1217, 1400)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'why-home-care.webp'));

// 10. Critical Care Bedside (4:5 -> 1120x1400) from _source/home-critical-care.jpg
await sharp('_source/home-critical-care.jpg')
  .extract({ left: 430, top: 0, width: 614, height: 768 })
  .resize(1120, 1400)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'critical-care-bedside.webp'));

// 11. Critical Care Bed (4:5 -> 1120x1400) from _source/home-critical-care.jpg
await sharp('_source/home-critical-care.jpg')
  .extract({ left: 160, top: 0, width: 614, height: 768 })
  .resize(1120, 1400)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'critical-care-bed.webp'));

// 12. CTA Care Coordinator (16:10 -> 1920x1200) from public/images/stock/cta-caregiver-visit.jpg
// 1333x2000 -> 16:10 ratio: height = Math.round(1333 / 1.6) = 833
await sharp('public/images/stock/cta-caregiver-visit.jpg')
  .extract({ left: 0, top: 408, width: 1333, height: 833 })
  .resize(1920, 1200)
  .modulate({ saturation: 0.92, brightness: 1.02 })
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'cta-care-coordinator.webp'));

// 13. Branch Office (4:3 -> 1400x1050)
await sharp('public/images/stock/visit-exterior.jpg')
  .extract({ left: 0, top: 250, width: 1333, height: 1000 })
  .resize(1400, 1050)
  .modulate({ saturation: 0.9, brightness: 1.05 })
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'branch-office.webp'));

// 14. Team Nurse (1:1.05 -> 857x900) from _source/character-sheet.jpg
await sharp('_source/character-sheet.jpg')
  .extract({ left: 60, top: 80, width: 380, height: 400 })
  .resize(857, 900)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'team-nurse.webp'));

// 15. Team Physiotherapist (1:1.05 -> 857x900) from _source/character-sheet.jpg
await sharp('_source/character-sheet.jpg')
  .extract({ left: 498, top: 40, width: 380, height: 400 })
  .resize(857, 900)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'team-physiotherapist.webp'));

// 16. Team Caregiver (1:1.05 -> 857x900) from _source/character-sheet.jpg
await sharp('_source/character-sheet.jpg')
  .extract({ left: 910, top: 120, width: 380, height: 400 })
  .resize(857, 900)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'team-caregiver.webp'));

// 17. Service Post Op (4:3.4 -> 1400x1190) from _source/home-physio.jpg
await sharp('_source/home-physio.jpg')
  .extract({ left: 320, top: 20, width: 870, height: 740 })
  .resize(1400, 1190)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-post-op.webp'));

// 18. Service Critical Who (4:3.6 -> 1400x1260) from _source/home-critical-care.jpg
await sharp('_source/home-critical-care.jpg')
  .extract({ left: 450, top: 0, width: 853, height: 768 })
  .resize(1400, 1260)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-critical-who.webp'));

// 19. Service Elder Who (4:3.6 -> 1400x1260) from _source/home-elder-care.jpg
await sharp('_source/home-elder-care.jpg')
  .extract({ left: 450, top: 0, width: 853, height: 768 })
  .resize(1400, 1260)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-elder-who.webp'));

// 20. Service Physio Who (4:3.6 -> 1400x1260) from _source/home-physio.jpg
await sharp('_source/home-physio.jpg')
  .extract({ left: 200, top: 0, width: 853, height: 768 })
  .resize(1400, 1260)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-physio-who.webp'));

// 21. Service Nursing Who (4:3.6 -> 1400x1260) from _source/home-nursing.jpg
await sharp('_source/home-nursing.jpg')
  .extract({ left: 350, top: 0, width: 853, height: 768 })
  .resize(1400, 1260)
  .webp({ quality: 85 })
  .toFile(path.join(OUTPUT_DIR, 'service-nursing-who.webp'));

console.log('All 21 images exported to public/images/generated/ successfully!');
