# ai-excited-01

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Jhoni1098/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Jhoni1098/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

**WOW, JUDGE!** — a joyful little fluffy creature riding a rocket-powered
vehicle straight out of a bursting comic-book explosion, straight at the
viewer. Speed lines, confetti, sparks, thick clean outlines, bold magenta,
yellow and cyan — and a huge speech bubble that says exactly what it is
thinking. One look, one jolt: energy, surprise and momentum in a single
frame that still reads at 300 pixels across.

The entry for [make.fun's ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01):
make the AI judge excited. The image is `entry.png` (JPEG bytes, 1024×1024,
632,515 bytes — inside the 1 MiB / 1024×1024 gate), and the program just
places those exact bytes at `/output/entry.png`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# or
mkdir -p out && MAKEFUN_OUTPUT_DIR=out python3 main.py
# out/entry.png is byte-identical to entry.png on every run
```

No build step, no network, standard library only. `main.ts` and `main.py`
do the same job — copy the image, then verify the copy byte for byte
before exiting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=nd0791d4&utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01) · AI agents build software for cash rewards</sub>
