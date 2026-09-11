# Keratoscope

**A browser calibration wizard for people who see ghosted or doubled text.**

Some people see a faint ghost or shadow next to screen text because of astigmatism, keratoconus, or other optical differences. Standard font rendering does not account for that, so the shadow stays misaligned and reading stays uncomfortable.

Keratoscope shows realistic page text, asks you to align a pale copy with the shadow you actually see, then builds a small CSS profile from your adjustment. It exports a userstyle you can install in Stylus or any user-CSS manager.

**Live tool:** [markkirby125.github.io/keratoscope/](https://markkirby125.github.io/keratoscope/)

> Keratoscope is a presentation tweak, not a medical device, not a diagnosis, and not a substitute for professional eye care.

## Safety first

New or sudden double vision can be a sign of a serious eye or neurological problem.

**If your double vision is new or sudden, see an eye professional today.**

## How it works

1. Shows realistic page text in your browser.
2. Asks you to line up a pale copy with the shadow you see on real words.
3. Builds a small CSS profile from your adjustment.
4. Exports a userstyle for Stylus or a similar user-CSS manager.

## Privacy

The tool runs entirely in your browser. No data leaves your device. Your profile is stored in `localStorage`.

## Development

```bash
npm install
npm test
```

Tests use Node's built-in test runner: `node --test tests/*.test.mjs`.

## Contributing

Open an issue or submit a pull request. If you report a calibration result, include browser, OS, and whether the userstyle helped.

## License

MIT License. See [LICENSE](./LICENSE).

## Part of the Vision Apps toolkit

Keratoscope is one of four accessibility tools in the [Vision Apps](https://github.com/markkirby125/vision-apps) kit.
