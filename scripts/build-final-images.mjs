import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUTPUT_DIR = path.resolve('public/images/generated');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function buildAll21() {
  console.log('Generating all 21 UNIQUE, photorealistic images for Hemalatha Health Care...\n');

  // ==========================================
  // HOME PAGE HERO DECK (5 images, 16:10 -> 1920x1200)
  // ==========================================

  // 1. home-nursing.webp (16:10 -> 1920x1200)
  // AI Master: Nurse in navy scrubs checking grandfather's BP on wooden sofa with daughter nearby
  // Centering at left: 50 keeps grandfather, daughter, nurse and BP cuff fully in frame with generous headroom
  await sharp('_source/home-nursing.jpg')
    .extract({ left: 50, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-nursing.webp'));
  console.log('✓ 1. home-nursing.webp (1920x1200) - AI Master (BP check on sofa)');

  // 2. home-physio.webp (16:10 -> 1920x1200)
  // AI Master: Physiotherapist in navy polo guiding grandfather's knee extension
  // Balanced centering: left 148 ensures physio (left) and grandfather (right) are both comfortably framed
  await sharp('_source/home-physio.jpg')
    .extract({ left: 148, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-physio.webp'));
  console.log('✓ 2. home-physio.webp (1920x1200) - AI Master (Knee exercise)');

  // 3. home-critical-care.webp (16:10 -> 1920x1200)
  // AI Master: Nurse adjusting nasal cannula of elderly woman in hospital bed with monitor & oxygen concentrator
  await sharp('_source/home-critical-care.jpg')
    .extract({ left: 50, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-critical-care.webp'));
  console.log('✓ 3. home-critical-care.webp (1920x1200) - AI Master (Cannula adjustment)');

  // 4. home-elder-care.webp (16:10 -> 1920x1200)
  // AI Master: Caregiver walking with grandmother with walker in bright living room
  await sharp('_source/home-elder-care.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-elder-care.webp'));
  console.log('✓ 4. home-elder-care.webp (1920x1200) - AI Master (Walker support)');

  // 5. home-mother-baby.webp (16:10 -> 1920x1200)
  // AI Master: Nurse in navy scrubs helping Telugu mother hold newborn baby on wooden bed in bedroom
  await sharp('_source/home-mother-baby.jpg')
    .extract({ left: 74, top: 0, width: 1228, height: 768 })
    .resize(1920, 1200)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'home-mother-baby.webp'));
  console.log('✓ 5. home-mother-baby.webp (1920x1200) - AI Master (Mother & newborn)');

  // ==========================================
  // ABOUT SECTION (2 images)
  // ==========================================

  // 6. about-caregiver-bedside.webp (4:4.4 -> 1273x1400)
  // AI Master: Nurse sitting on chair chatting with grandfather in bed in morning light
  // Balanced centering: left 175 keeps nurse and grandfather with balanced breathing space on both sides
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 175, top: 0, width: 815, height: 896 })
    .resize(1273, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'about-caregiver-bedside.webp'));
  console.log('✓ 6. about-caregiver-bedside.webp (1273x1400) - AI Master (Nurse bedside chat)');

  // 7. about-holding-hands.webp (4:3 -> 900x675)
  // AI Master: Macro close-up of nurse gently holding patient hand on floral bedsheet
  await sharp('_source/about-caregiver-bedside.jpg')
    .extract({ left: 450, top: 480, width: 360, height: 270 })
    .resize(900, 675)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'about-holding-hands.webp'));
  console.log('✓ 7. about-holding-hands.webp (900x675) - AI Master (Hands macro inset)');

  // ==========================================
  // SECTIONS (6 images)
  // ==========================================

  // 8. service-home-nursing.webp (4:5 -> 1120x1400)
  // AI Master: Nurse in navy scrubs with gloves preparing sterile dressing kit and tray on bedside table
  // 896x1200 -> 4:5 ratio: width = 896, height = 1120
  await sharp('_source/service-home-nursing.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-home-nursing.webp'));
  console.log('✓ 8. service-home-nursing.webp (1120x1400) - AI Master (Dressing kit prep)');

  // 9. why-home-care.webp (4:4.6 -> 1217x1400)
  // AI Master: Caregiver and grandmother sharing tea and laughing at dining table
  // 896x1200 -> 4:4.6 ratio = 0.8695. width = 896, height = 1030
  await sharp('_source/why-home-care.jpg')
    .extract({ left: 0, top: 70, width: 896, height: 1030 })
    .resize(1217, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'why-home-care.webp'));
  console.log('✓ 9. why-home-care.webp (1217x1400) - AI Master (Caregiver & grandma tea)');

  // 10. critical-care-bedside.webp (4:5 -> 1120x1400)
  // AI Master: ICU nurse checking bedside monitor displaying vitals next to elderly patient in home ICU setup
  await sharp('_source/critical-care-bedside.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'critical-care-bedside.webp'));
  console.log('✓ 10. critical-care-bedside.webp (1120x1400) - AI Master (ICU monitor check)');

  // 11. critical-care-bed.webp (4:5 -> 1120x1400)
  // AI Master: Two caregivers carefully repositioning pillows for bedridden patient on adjustable profile bed
  await sharp('_source/critical-care-bed.jpg')
    .extract({ left: 0, top: 40, width: 896, height: 1120 })
    .resize(1120, 1400)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'critical-care-bed.webp'));
  console.log('✓ 11. critical-care-bed.webp (1120x1400) - AI Master (Profile bed repositioning)');

  // 12. cta-care-coordinator.webp (16:10 -> 1920x1200)
  // Authentic South Indian 3-generation family smiling warmly together at home (flyer-01)
  // Clean bounding box, zero text, all 5 family members perfectly framed
  await sharp('references/client-flyers/flyer-01.webp')
    .extract({ left: 320, top: 760, width: 155, height: 97 })
    .resize(1920, 1200, { fit: 'cover' })
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'cta-care-coordinator.webp'));
  console.log('✓ 12. cta-care-coordinator.webp (1920x1200) - Authentic Telugu family at home');

  // 13. branch-office.webp (4:3 -> 1400x1050)
  // Real Kukatpally KPHB Colony landmark entrance arch in Hyderabad (flyer-09)
  // Clean bounding box, zero text, grand arch and avenue
  await sharp('references/client-flyers/flyer-09.webp')
    .extract({ left: 42, top: 742, width: 140, height: 105 })
    .resize(1400, 1050, { fit: 'cover' })
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'branch-office.webp'));
  console.log('✓ 13. branch-office.webp (1400x1050) - Real Kukatpally Hyderabad branch location');

  // ==========================================
  // CARE TEAM (DEMO PROFILES, 1:1.05 -> 857x900)
  // ==========================================

  // 14. team-nurse.webp (1:1.05 -> 857x900)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 60, top: 80, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-nurse.webp'));
  console.log('✓ 14. team-nurse.webp (857x900) - Registered nurse portrait');

  // 15. team-physiotherapist.webp (1:1.05 -> 857x900)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 498, top: 40, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-physiotherapist.webp'));
  console.log('✓ 15. team-physiotherapist.webp (857x900) - Physiotherapist portrait');

  // 16. team-caregiver.webp (1:1.05 -> 857x900)
  await sharp('_source/character-sheet.jpg')
    .extract({ left: 910, top: 120, width: 380, height: 400 })
    .resize(857, 900)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'team-caregiver.webp'));
  console.log('✓ 16. team-caregiver.webp (857x900) - Caregiver portrait');

  // ==========================================
  // SERVICE PAGES (HERO & WHO-IT-IS-FOR, 5 images)
  // ==========================================

  // 17. service-post-op.webp (4:3.4 -> 1400x1190)
  // AI Master: Nurse changing clean knee bandage on grandfather on sofa with leg on footstool
  // 1200x896 -> 4:3.4 ratio = 1.1764. height = 896, width = 1054
  await sharp('_source/service-post-op.jpg')
    .extract({ left: 73, top: 0, width: 1054, height: 896 })
    .resize(1400, 1190)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-post-op.webp'));
  console.log('✓ 17. service-post-op.webp (1400x1190) - AI Master (Post-op knee dressing)');

  // 18. service-critical-who.webp (4:3.6 -> 1400x1260)
  // Nurse in blue scrubs, mask, and stethoscope leaning down focused on clinical bedside patient care (flyer-02)
  await sharp('references/client-flyers/flyer-02.webp')
    .extract({ left: 148, top: 480, width: 105, height: 95 })
    .resize(1400, 1260, { fit: 'cover' })
    .sharpen({ sigma: 1.3 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-critical-who.webp'));
  console.log('✓ 18. service-critical-who.webp (1400x1260) - Focused ICU nurse bedside');

  // 19. service-elder-who.webp (4:3.6 -> 1400x1260)
  // Caregiver in navy scrubs conversing with elderly grandfather in white shirt on sofa (flyer-08)
  await sharp('references/client-flyers/flyer-08.webp')
    .extract({ left: 495, top: 250, width: 165, height: 83 })
    .resize(1400, 1260, { fit: 'cover' })
    .sharpen({ sigma: 1.3 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-elder-who.webp'));
  console.log('✓ 19. service-elder-who.webp (1400x1260) - Caregiver talking with grandfather');

  // 20. service-physio-who.webp (4:3.6 -> 1400x1260)
  // Physiotherapist guiding dumbbell mobility exercise with elderly grandfather (flyer-08)
  await sharp('references/client-flyers/flyer-08.webp')
    .extract({ left: 18, top: 578, width: 165, height: 82 })
    .resize(1400, 1260, { fit: 'cover' })
    .sharpen({ sigma: 1.3 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-physio-who.webp'));
  console.log('✓ 20. service-physio-who.webp (1400x1260) - Dumbbell mobility exercise');

  // 21. service-nursing-who.webp (4:3.6 -> 1400x1260)
  // Nurse in blue scrubs with stethoscope helping elderly woman sitting up in bed with IV line (flyer-01)
  await sharp('references/client-flyers/flyer-01.webp')
    .extract({ left: 495, top: 360, width: 135, height: 98 })
    .resize(1400, 1260, { fit: 'cover' })
    .sharpen({ sigma: 1.3 })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, 'service-nursing-who.webp'));
  console.log('✓ 21. service-nursing-who.webp (1400x1260) - Nurse helping elderly woman in bed');

  console.log('\nAll 21 UNIQUE images built successfully into public/images/generated/!\n');

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
export const imageBlurData: Record<string, string> = ${JSON.stringify(blurMap, null, 2)};
`;

  fs.writeFileSync('src/data/image-blur-data.ts', blurTsContent, 'utf-8');
  console.log('✓ Updated src/data/image-blur-data.ts with all 21 blur placeholders!');
}

buildAll21().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
