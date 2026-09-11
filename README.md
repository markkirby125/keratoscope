# Keratoscope

**A browser calibration wizard for people who see ghosted or doubled text.**

Some people see a faint ghost or shadow next to screen text because of astigmatism, keratoconus, or other optical differences. Standard font rendering does not account for that, so the shadow stays misaligned and reading stays uncomfortable.

Keratoscope shows realistic page text, asks you to align a pale copy with the shadow you actually see, then builds a small CSS profile from your adjustment. It exports a userstyle you can install in Stylus or any user-CSS manager.

**Live tool:** [markkirby125.github.io/keratoscope/](https://markkirby125.github.io/keratoscope/)

*Updated: 2026-09-11*

> Keratoscope is a presentation tweak, not a medical device, not a diagnosis, and not a substitute for professional eye care.

## What causes ghosted or doubled text?

A faint ghost or shadow next to screen text is often caused by **astigmatism**, **keratoconus**, or other optical differences. Standard font rendering assumes a single, sharp focal point, so the shadow stays misaligned and reading stays uncomfortable. Keratoscope does not treat the underlying condition; it lets you generate a userstyle that offsets text so the ghost image lines up with the primary image.

## Safety first

New or sudden double vision can be a sign of a serious eye or neurological problem.

**If your double vision is new or sudden, see an eye professional today.**

## How does Keratoscope work?

1. Shows realistic page text in your browser.
2. Asks you to line up a pale copy with the shadow you see on real words.
3. Builds a small CSS profile from your adjustment.
4. Exports a userstyle for Stylus or a similar user-CSS manager.

## What CSS does Keratoscope export?

The exported userstyle applies a per-element text-shadow offset calibrated to your own ghost image. It stores your profile in `localStorage` and injects the matching CSS only when the userstyle is active, so the adjustment stays private and portable.

## Privacy

The tool runs entirely in your browser. No data leaves your device. Your profile is stored in `localStorage`.

## How do I develop Keratoscope?

```bash
npm install
npm test
```

Tests use Node's built-in test runner: `node --test tests/*.test.mjs`.

## Contributing

Open an issue or submit a pull request. If you report a calibration result, include browser, OS, and whether the userstyle helped.

## License

MIT License. See [LICENSE](./LICENSE).

## Sources

- [American Academy of Ophthalmology. What Is Astigmatism?](https://www.aao.org/eye-health/diseases/what-is-astigmatism)
- [Stylus. Userstyles manager for Firefox and Chrome.](https://github.com/openstyles/stylus)

## Part of the Vision Apps toolkit

Keratoscope is the text-ghost calibration piece of the four-tool [Vision Apps](https://github.com/markkirby125/vision-apps) accessibility kit.

| Project | What it does |
| --- | --- |
| [ChromaCalm](https://github.com/markkirby125/chromacalm) | Zero-install spectral notch filtering for photophobia, migraine and screen halation. |
| [SoftContrast](https://github.com/markkirby125/softcontrast) | Anti-halation reading palettes built on APCA and OKLCH. |
| [terminal-a11y](https://github.com/markkirby125/terminal-a11y) | Screen-reader, photophobia, braille and sensory-budget modes for the command line. |
| [FocusBeacon](https://github.com/markkirby125/focusbeacon) | High-contrast dual-contour focus ring and cursor radar for tunnel vision. |
| [GlareMap](https://github.com/markkirby125/glaremap) | Targeted brightness softening for photophobia and migraine. |
| [TemporalSafe](https://github.com/markkirby125/temporalsafe) | Freeze page-level flicker and flash for photosensitive, migraine, and vestibular users. |
| **Keratoscope** *(this repo)* | Browser calibration wizard for people who see ghosted or doubled text.
