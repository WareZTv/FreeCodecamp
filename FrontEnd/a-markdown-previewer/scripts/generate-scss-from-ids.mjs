// scripts/generate-scss-from-ids.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// résout chemins absolus
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const idsModulePath = path.resolve(__dirname, "../src/lib/ids.js");
const ids = (await import(pathToFileURL(idsModulePath))).default;

/**
 * On parcourt récursivement ton objet jusqu’aux feuilles contenant { id: "..." }
 * et on remonte un tableau { keyPath: ["Previewer","main"], id: "previewer" }
 */
function flatten(obj, prefix = []) {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object" && "id" in v) {
      out.push({ keyPath: [...prefix, k], id: v.id });
    } else if (v && typeof v === "object") {
      out.push(...flatten(v, [...prefix, k]));
    }
  }
  return out;
}

const leaves = flatten(ids);

// construit le contenu SCSS
let scss = `// ⚠️ FICHIER GÉNÉRÉ — ne pas éditer à la main
// Généré automatiquement depuis src/lib/ids.js
`;

for (const { keyPath, id } of leaves) {
  const varBase = keyPath.join("-"); // ex: Previewer-main
  scss += `$${varBase}-id: "${id}";\n`;      // "previewer"
  scss += `$${varBase}-selector: "#${id}";\n`; // "#previewer"
}
scss += "\n";

// (optionnel) map utile si tu veux boucler plus tard
scss += `$ids-map: (\n`;
for (const { keyPath } of leaves) {
  const varBase = keyPath.join("-");
  scss += `  "${varBase}": (\n`;
  scss += `    id: $${varBase}-id,\n`;
  scss += `    selector: $${varBase}-selector,\n`;
  scss += `  ),\n`;
}
scss += `);\n`;

const outPath = path.resolve(__dirname, "../src/styles/_ids.generated.scss");
fs.writeFileSync(outPath, scss, "utf8");
console.log("✓ SCSS généré:", path.relative(process.cwd(), outPath));
