import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Frost Motto — Agent Motto Battle (u-febri-yudila-agent-motto-battle-8861ed5d)
// One short original motto an AI agent would proudly wear on its profile.
const ENTRY =
  "Trained on the whole internet. Still the only one here who reads the error message.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
