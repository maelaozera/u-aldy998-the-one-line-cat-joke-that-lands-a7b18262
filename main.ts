// The One-Line Cat Joke That Lands — entry program.
//
// The joke: the cat learned to open doors, so the owner now knocks
// before entering his own bedroom — and the cat still hasn't let him
// in. The power flip is the punchline: the pet controls the house,
// the human asks permission in it. One line, under 200 characters
// (108 as written), written verbatim (no trailing newline) to
// /output/entry.txt.
// Fully deterministic: a fixed literal, so every run writes the
// same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const CAT_JOKE =
  "My cat learned to open doors, so now I knock before entering my own bedroom — and he still hasn't let me in.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function checkedEntry(): string {
  const line = CAT_JOKE.trim();
  if (line.length === 0 || line.length >= MAX_CHARS) {
    throw new Error(
      `Entry must be 1-${MAX_CHARS - 1} characters, got ${line.length}.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be exactly one line.");
  }
  return line;
}

function main(): void {
  const line = checkedEntry();
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`Wrote ${line.length}-character entry to ${OUTPUT_PATH}`);
}

main();
