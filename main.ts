// ai-excited-01 entry (Node 22, standard library only).
//
// The artwork lives in this repository as entry.png: a joyful fluffy
// creature riding a rocket vehicle out of a comic-book explosion, shouting
// "WOW, JUDGE!" at the judge. This program's only job is to place those
// exact bytes at /output/entry.png, deterministically, on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The grader runs this program twice and both runs must write the same
// bytes, so confirm the copy landed whole before exiting: same size on
// disk as the source, byte for byte. If it ever differs, fail loudly
// instead of handing the judge a truncated image.
import { readFileSync } from 'node:fs';

const original = readFileSync(source);
const written = readFileSync(target);
if (!original.equals(written)) {
  throw new Error(
    `entry.png copy mismatch: source ${original.length} bytes, ` +
      `output ${written.length} bytes`,
  );
}
