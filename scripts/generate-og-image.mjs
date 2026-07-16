import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const photoPath = path.join(publicDir, "lucas-capart.png");

const BG = "#EFE7D6";
const INK = "#292019";
const ACCENT = "#A8481F";
const CREAM = "#EFE7D6";

async function generateLogo() {
  await sharp(photoPath)
    .resize(512, 512, { fit: "cover", position: "attention" })
    .png()
    .toFile(path.join(publicDir, "logo.png"));
  console.log("logo.png done");
}

async function generateOgImage() {
  const W = 1200;
  const H = 630;
  const panelW = 480;

  const photo = await sharp(photoPath)
    .resize(W - panelW, H, { fit: "cover", position: "attention" })
    .png()
    .toBuffer();

  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="${BG}"/>
      <rect x="0" y="0" width="${panelW}" height="${H}" fill="${INK}"/>
      <rect x="${panelW - 4}" y="0" width="4" height="${H}" fill="${ACCENT}"/>
      <text x="64" y="270" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="58" fill="${CREAM}">Lucas</text>
      <text x="64" y="335" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="58" fill="${ACCENT}">Capart</text>
      <text x="64" y="400" font-family="Arial, sans-serif" font-size="22" fill="${CREAM}" opacity="0.75">Votre site, à l'image de</text>
      <text x="64" y="430" font-family="Arial, sans-serif" font-size="22" fill="${CREAM}" opacity="0.75">qui vous êtes vraiment.</text>
      <text x="64" y="500" font-family="Arial, sans-serif" font-size="14" letter-spacing="3" fill="${ACCENT}">SITES SUR-MESURE — AMIENS, FRANCE</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .composite([{ input: photo, left: panelW, top: 0 }])
    .png()
    .toFile(path.join(publicDir, "og-image.png"));
  console.log("og-image.png done");
}

await generateLogo();
await generateOgImage();
