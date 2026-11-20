import fs from 'node:fs';
import path from 'node:path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY is missing. Run with: node --env-file=.env scripts/generate-images.mjs <slug> [count]');
  process.exit(1);
}

const slug = process.argv[2];
const candidateCount = Number(process.argv[3] || 3);
const modelName = process.env.GEMINI_IMAGE_MODEL || 'gemini-nano-banana-2.1';

const aspectRatios = {
  'about-caregiver-bedside': '4:5',
  'home-elder-care': '3:2',
  'why-home-care': '4:5',
  'service-elder-who': '5:4',
  'service-nursing-who': '5:4',
  'service-physio-who': '5:4',
  'team-nurse': '4:5',
  'team-physiotherapist': '4:5',
  'team-caregiver': '4:5',
};

if (!slug || !aspectRatios[slug]) {
  console.error(`Pass one of: ${Object.keys(aspectRatios).join(', ')}`);
  process.exit(1);
}

const promptPath = path.resolve('scripts/image-prompts', `${slug}.txt`);
if (!fs.existsSync(promptPath)) {
  console.error(`No prompt file at ${promptPath}`);
  process.exit(1);
}

const promptText = fs.readFileSync(promptPath, 'utf8');
const uniformReference = fs.readFileSync(path.resolve('references/uniform/staff-dressing-code.jpg'));
const outputDir = path.resolve('_source/candidates');
fs.mkdirSync(outputDir, { recursive: true });

const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent`;

for (let attempt = 1; attempt <= candidateCount; attempt++) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: promptText },
            { inline_data: { mime_type: 'image/jpeg', data: uniformReference.toString('base64') } },
          ],
        },
      ],
      generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: { aspectRatio: aspectRatios[slug] },
      },
    }),
  });

  if (!response.ok) {
    console.error(`Attempt ${attempt} failed: ${response.status} ${await response.text()}`);
    continue;
  }

  const result = await response.json();
  const imagePart = result.candidates?.[0]?.content?.parts?.find((part) => part.inlineData || part.inline_data);
  if (!imagePart) {
    console.error(`Attempt ${attempt} returned no image: ${JSON.stringify(result).slice(0, 400)}`);
    continue;
  }

  const imageData = (imagePart.inlineData || imagePart.inline_data).data;
  const outputPath = path.join(outputDir, `${slug}-${attempt}.png`);
  fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
  console.log(`Saved ${outputPath}`);
}
