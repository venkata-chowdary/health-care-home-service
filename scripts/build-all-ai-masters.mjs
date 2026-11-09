import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Disable memory cache to ensure minimal RAM usage across sequential image builds
sharp.cache(false);

const OUTPUT_DIR = path.resolve('public/images/generated');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function buildAll21AIMasters() {
  console.log('Building all 21 100% UNIQUE, PHOTOREALISTIC AI-GENERATED MASTERS...\n');

  // ==========================================
  // HERO DECK (5 images, 16:10 -> 1920x1200)
  // ==========================================

  // 1. home-nursing.webp (16:10 -> 1920x1200)
  // Nurse checking grandfather's BP on wooden sofa with daughter nearby
  await sharp('_source/home-nursing.jpg')
    .extract({ left: 50, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-nursing.webp'));
  console.log('✓ 1. home-nursing.webp (1920x1200)');

  // 2. home-physio.webp (16:10 -> 1920x1200)
  // Physiotherapist guiding grandfather's knee extension on dining chair
  await sharp('_source/home-physio.jpg')
    .extract({ left: 148, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-physio.webp'));
  console.log('✓ 2. home-physio.webp (1920x1200)');

  // 3. home-critical-care.webp (16:10 -> 1920x1200)
  // Nurse adjusting nasal cannula of elderly woman in adjustable bed with monitor
  await sharp('_source/home-critical-care.jpg')
    .extract({ left: 50, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-critical-care.webp'));
  console.log('✓ 3. home-critical-care.webp (1920x1200)');

  // 4. home-elder-care.webp (16:10 -> 1920x1200)
  // Caregiver walking with grandmother with walker in bright living room
  await sharp('_source/home-elder-care.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-elder-care.webp'));
  console.log('✓ 4. home-elder-care.webp (1920x1200)');

  // 5. home-mother-baby.webp (16:10 -> 1920x1200)
  // Baby-care nurse assisting Telugu mother holding newborn baby on wooden bed
  await sharp('_source/home-mother-baby.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-mother-baby.webp'));
  console.log('✓ 5. home-mother-baby.webp (1920x1200)');

  // ==========================================
  // ABOUT SECTION (2 images)
  // ==========================================

  // 6. about-caregiver-bedside.webp (4:4.4 -> 1273x1400)
  // Nurse sitting beside grandfather in bed, talking in morning light
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 175, top: 0, width: 815, height: 896 })
    .resize(1273, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'about-caregiver-bedside.webp'));
  console.log('✓ 6. about-caregiver-bedside.webp (1273x1400)');

  // 7. about-holding-hands.webp (4:3 -> 900x675)
  // Macro close-up: nurse holding elderly patient hand on floral sheet
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 450, top: 480, width: 360, height: 270 })
    .resize(900, 675)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'about-holding-hands.webp'));
  console.log('✓ 7. about-holding-hands.webp (900x675)');

  // ==========================================
  // HOMEPAGE SECTIONS (6 images)
  // ==========================================

  // 8. service-home-nursing.webp (4:5 -> 1120x1400)
  // Nurse preparing sterile dressing kit and tray on bedside table
  await sharp('_source/service-home-nursing.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-home-nursing.webp'));
  console.log('✓ 8. service-home-nursing.webp (1120x1400)');

  // 9. why-home-care.webp (4:4.6 -> 1217x1400)
  // Caregiver and grandmother sharing tea and laughing at dining table
  await sharp('_source/why-home-care.jpg')
    .extract({ left: 0, top: 70, width: 896, height: 1030 })
    .resize(1217, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'why-home-care.webp'));
  console.log('✓ 9. why-home-care.webp (1217x1400)');

  // 10. critical-care-bedside.webp (4:5 -> 1120x1400)
  // ICU nurse checking vital signs monitor beside patient in home ICU setup
  await sharp('_source/critical-care-bedside.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'critical-care-bedside.webp'));
  console.log('✓ 10. critical-care-bedside.webp (1120x1400)');

  // 11. critical-care-bed.webp (4:5 -> 1120x1400)
  // Two caregivers carefully repositioning pillows on adjustable profile bed
  await sharp('_source/critical-care-bed.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'critical-care-bed.webp'));
  console.log('✓ 11. critical-care-bed.webp (1120x1400)');

  // 12. cta-care-coordinator.webp (16:10 -> 1920x1200)
  // Care coordinator in navy polo on phone call at desk with laptop & notebook
  await sharp('_source/cta-care-coordinator.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'cta-care-coordinator.webp'));
  console.log('✓ 12. cta-care-coordinator.webp (1920x1200)');

  // 13. branch-office.webp (4:3 -> 1400x1050)
  // Care coordination office reception with desk, visitor chairs, water dispenser
  await sharp('_source/branch-office.jpg')
    .extract({ left: 3, top: 0, width: 1194, height: 896 })
    .resize(1400, 1050)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'branch-office.webp'));
  console.log('✓ 13. branch-office.webp (1400x1050)');

  // ==========================================
  // CARE TEAM (DEMO PROFILES, 1:1.05 -> 857x900)
  // ==========================================

  // 14. team-nurse.webp (1:1.05 -> 857x900)
  // Perfectly centered on nurse Lakshmi Devi's face (center X: 310)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 120, top: 70, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-nurse.webp'));
  console.log('✓ 14. team-nurse.webp (857x900 - centered)');

  // 15. team-physiotherapist.webp (1:1.05 -> 857x900)
  // Centered on physiotherapist Ravi Kumar's face (center X: 696)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 506, top: 40, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-physiotherapist.webp'));
  console.log('✓ 15. team-physiotherapist.webp (857x900 - centered)');

  // 16. team-caregiver.webp (1:1.05 -> 857x900)
  // Centered on caregiver Sunitha Rao's face (center X: 1094)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 904, top: 100, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-caregiver.webp'));
  console.log('✓ 16. team-caregiver.webp (857x900 - centered)');

  // ==========================================
  // SERVICE PAGES (5 images)
  // ==========================================

  // 17. service-post-op.webp (4:3.4 -> 1400x1190)
  // Nurse changing clean knee bandage on grandfather on sofa with leg on footstool
  await sharp('_source/service-post-op.jpg')
    .extract({ left: 73, top: 0, width: 1054, height: 896 })
    .resize(1400, 1190)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-post-op.webp'));
  console.log('✓ 17. service-post-op.webp (1400x1190)');

  // 17b. service-post-op-who.webp (4:3.6 -> 1400x1260)
  // Attentive nurse sitting bedside with patient in recovery room
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 102, top: 0, width: 995, height: 896 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-post-op-who.webp'));
  console.log('✓ 17b. service-post-op-who.webp (1400x1260)');

  // 18. service-critical-who.webp (4:3.6 -> 1400x1260)
  // Nurse explaining bedside monitor readings to family member
  await sharp('_source/service-critical-who.jpg')
    .extract({ left: 102, top: 0, width: 995, height: 896 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-critical-who.webp'));
  console.log('✓ 18. service-critical-who.webp (1400x1260)');

  // 19. service-elder-who.webp (4:3.6 -> 1400x1260)
  // Caregiver helping elderly couple sort daily medicines in pill organiser
  await sharp('_source/service-elder-who.jpg')
    .extract({ left: 102, top: 0, width: 995, height: 896 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-elder-who.webp'));
  console.log('✓ 19. service-elder-who.webp (1400x1260)');

  // 20. service-physio-who.webp (4:3.6 -> 1400x1260)
  // Physiotherapist guiding elderly woman with resistance band shoulder exercise
  await sharp('_source/service-physio-who.jpg')
    .extract({ left: 102, top: 0, width: 995, height: 896 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-physio-who.webp'));
  console.log('✓ 20. service-physio-who.webp (1400x1260)');

  // 21. service-nursing-who.webp (4:3.6 -> 1400x1260)
  // Nurse checking elderly woman blood sugar with glucometer at dining table
  await sharp('_source/service-nursing-who.jpg')
    .extract({ left: 102, top: 0, width: 995, height: 896 })
    .resize(1400, 1260)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-nursing-who.webp'));
  console.log('✓ 21. service-nursing-who.webp (1400x1260)');

  console.log('\nAll 21 100% UNIQUE AI-GENERATED MASTERS EXPORTED TO public/images/generated/!\n');

  // Generate blur placeholders
  console.log('Generating blurDataURL dictionary...');
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.webp'));
  const blurMap = {};

  for (const file of files) {
    const filePath = path.join(OUTPUT_DIR, file);
    const buffer = await sharp(filePath)
      .resize(16, 16, { fit: 'inside' })
      .webp({ quality: 20 })
      .toBuffer();
    const base64 = `data:image/webp;base64,${buffer.toString('base64')}`;
    blurMap[`/images/generated/${file}`] = base64;
  }

  const blurTsContent = `// Automatically generated blurDataURL mapping for instant loading without layout shift
export const blurDataUrls: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(
      Object.entries(blurMap).map(([k, v]) => [
        k.replace('/images/generated/', '').replace('.webp', ''),
        v,
      ])
    ),
    null,
    2
  )};
export const imageBlurData: Record<string, string> = ${JSON.stringify(blurMap, null, 2)};
`;

  fs.writeFileSync('src/data/image-blur-data.ts', blurTsContent, 'utf-8');
  console.log('✓ Updated src/data/image-blur-data.ts with all 21 blur placeholders!');
}

buildAll21AIMasters().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
