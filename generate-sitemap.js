import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const baseUrl = "https://www.lesaiguillesdubaron.fr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes statiques
const staticRoutes = [
  "",         // /
  "policy",   // /policy
];

// Date au format ISO (sans l'heure, version courte pour Google)
const today = new Date().toISOString().split("T")[0];

// Génération XML avec <lastmod>
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => {
  return `  <url>
    <loc>${baseUrl}/${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`;
}).join("\n")}
</urlset>
`;

const outputDir = path.join(__dirname, "dist");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "sitemap.xml"), xml);
console.log("✅ sitemap.xml généré avec <lastmod> !");
