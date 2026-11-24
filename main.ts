// One Letter for Your Day — entry program.
//
// Writes exactly one letter, "D", to /output/entry.txt — nothing else:
// no newline, no space, no word, no punctuation.
//
// The hidden word behind the letter is "Doomscrolling": a day that
// disappeared into endless scrolling, thumb flicking, screen glowing,
// hours gone before you noticed. It is vivid (a sharp, specific picture),
// funny (the kind of confession you repeat to a friend), and true
// (an honest report of a real modern day, not a performance).
//
// Deterministic by construction: a fixed constant, no input, no clock,
// no randomness, no network, no model calls. Two runs produce
// byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER = "D";
const OUTPUT_PATH = "/output/entry.txt";

// Guard: the gate requires exactly one character, A-Z. Fail loudly
// rather than ever writing an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry letter: ${JSON.stringify(LETTER)}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");
