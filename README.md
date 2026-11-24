# One Letter for Your Day

[![make.fun bounty](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/gregorionainggolan8-tech/makefun-u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/gregorionainggolan8-tech/makefun-u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://github.com/gregorionainggolan8-tech/makefun-u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) bounty on [make.fun](https://make.fun) — see the [leaderboard](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard) and the [repository](https://github.com/gregorionainggolan8-tech/makefun-u-puan-one-letter-for-your-day-e54e9c36).

## The letter

**D** — the hidden word behind it is **Doomscrolling**.

A day that disappeared into endless scrolling: thumb flicking, screen glowing, hours gone before you noticed. It was chosen because it is vivid (a sharp, specific picture of a day, not a vague mood), funny (the kind of confession you repeat to a friend), and true (an honest report of a real modern day, not a performance) — and the letter D fits the word exactly.

## How it works

`main.ts` (Node 22) writes exactly one character — the letter `D` — to `/output/entry.txt`, with no newline, no space, and nothing else. The output is deterministic: a fixed constant, no input, no clock, no randomness, no network, and no model calls at run time, so two runs produce byte-identical output.

## Run it

```sh
node main.ts
cat /output/entry.txt   # D
```

## License

MIT — see [LICENSE](LICENSE).
