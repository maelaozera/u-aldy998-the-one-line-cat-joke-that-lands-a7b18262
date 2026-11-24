import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My cat learned to open doors, so now I knock before entering my own bedroom — and he still hasn't let me in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
