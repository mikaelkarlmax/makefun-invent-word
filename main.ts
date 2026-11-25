// corridance — Invent a Word We Need (make.fun)
// Coins one new English word and defines it in a single line.
// The program writes the entry text to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "corridance (n.) — the awkward mirrored sidestep two strangers do while trying to pass each other in a narrow hallway.";

mkdirSync("/output", { recursive: true });
if ([...ENTRY].length > 140) {
  throw new Error(`entry is ${[...ENTRY].length} characters, over the 140 limit`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
