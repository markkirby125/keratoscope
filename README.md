# Keratoscope

> A browser calibration wizard for people who see ghosted or doubled text.
> It generates a personal CSS userstyle that may reduce perceived doubling for some users — no guarantee.

**Live tool:** https://markkirby125.github.io/keratoscope/

## Safety first

New or sudden double vision can be a sign of a serious eye or neurological problem.
**If your double vision is new or sudden, see an eye professional today.**

Keratoscope is a presentation tweak, not a medical device, not a diagnosis, and not a substitute for professional eye care.

## What it does

1. Shows realistic page text in your browser.
2. Asks you to line up a pale copy with the shadow you see on real words.
3. Builds a small CSS profile from your adjustment.
4. Exports a userstyle you can install in Stylus (or a similar user-CSS manager).

## Install

The tool runs entirely in your browser:

```
https://markkirby125.github.io/keratoscope/
```

No data leaves your device. Your profile is stored in your browser's `localStorage`.

## Development

```bash
npm install
npm test
```

Tests use Node's built-in test runner: `node --test tests/*.test.mjs`.

## License

MIT License — see [LICENSE](./LICENSE).
