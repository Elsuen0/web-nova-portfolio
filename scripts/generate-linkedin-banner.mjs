import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const photoPath = path.join(publicDir, "lucas-capart.png");

const INK = "#292019";
const CREAM = "#EFE7D6";
const ACCENT = "#A8481F";
const MUTED = "#B3A290";

const W = 1584;
const H = 396;

// Same hand-drawn-style ring + monogram as the site's logo mark, kept
// in the upper-left so it stays clear of where LinkedIn's circular
// profile photo overlaps the bottom-left of the banner.
const RING = `M175,15 Q265,25 295,105 Q315,165 255,200 Q175,225 95,195 Q45,165 55,100 Q65,30 175,15 Z`;

async function generate() {
  const photo = await sharp(photoPath)
    .resize(520, H, { fit: "cover", position: "attention" })
    .modulate({ brightness: 0.75 })
    .png()
    .toBuffer();

  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="${INK}"/>
      <path d="${RING}" fill="none" stroke="${ACCENT}" stroke-width="4" stroke-linecap="round"/>
      <text x="175" y="130" font-family="Georgia, 'Times New Roman', serif" font-style="italic"
            font-size="78" text-anchor="middle" fill="${CREAM}">LC</text>
      <text x="560" y="185" font-family="Georgia, 'Times New Roman', serif" font-style="italic"
            font-size="68" fill="${CREAM}">Lucas Capart</text>
      <text x="562" y="228" font-family="Arial, sans-serif" font-size="19" letter-spacing="0.5"
            fill="${MUTED}">Sites sur-mesure pour indépendants</text>
      <text x="562" y="253" font-family="Arial, sans-serif" font-size="19" letter-spacing="0.5"
            fill="${MUTED}">et créateurs</text>
      <text x="562" y="290" font-family="Arial, sans-serif" font-size="17" letter-spacing="3"
            fill="${ACCENT}">AMIENS · FRANCE</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .composite([{ input: photo, left: W - 520, top: 0 }])
    .png()
    .toFile(path.join(publicDir, "linkedin-banner.png"));

  console.log("linkedin-banner.png done");
}

await generate();
