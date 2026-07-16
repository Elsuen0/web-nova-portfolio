import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const INK = "#292019";
const CREAM = "#EFE7D6";
const ACCENT = "#A8481F";

// A hand-drawn, slightly irregular ring — not a perfect circle,
// to keep the crafted/personal feel used elsewhere on the site.
const RING = `M256,44 Q400,58 448,190 Q486,320 400,420 Q300,494 168,458 Q52,420 44,280 Q40,140 150,68 Q200,42 256,44 Z`;

function svg({ bg, ringColor, textColor }) {
  return `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      ${bg ? `<rect width="512" height="512" fill="${bg}"/>` : ""}
      <path d="${RING}" fill="none" stroke="${ringColor}" stroke-width="7" stroke-linecap="round"/>
      <text x="256" y="308" font-family="Georgia, 'Times New Roman', serif" font-style="italic"
            font-size="200" text-anchor="middle" fill="${textColor}">LC</text>
    </svg>
  `;
}

// Nav mark: transparent background, ink monogram + terracotta ring.
await sharp(Buffer.from(svg({ bg: null, ringColor: ACCENT, textColor: INK })))
  .png()
  .toFile(path.join(publicDir, "logo-mark.png"));

// Google Business / square-safe version: full ink background so
// a circular auto-crop never shows letterboxing.
await sharp(Buffer.from(svg({ bg: INK, ringColor: ACCENT, textColor: CREAM })))
  .png()
  .toFile(path.join(publicDir, "logo-mark-square.png"));

console.log("logo-mark.png + logo-mark-square.png done");
