import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeProfile,
  generateCSS,
  generateUserstyle,
  getDefaultProfile,
  DEFAULT_PROFILE,
} from '../profile.js';

describe('normalizeProfile', () => {
  it('returns defaults for null input', () => {
    assert.deepEqual(normalizeProfile(null), DEFAULT_PROFILE);
  });

  it('returns defaults for non-object input', () => {
    assert.deepEqual(normalizeProfile('bad'), DEFAULT_PROFILE);
  });

  it('clamps out-of-range dx', () => {
    const p = normalizeProfile({ ...DEFAULT_PROFILE, dx: 99 });
    assert.equal(p.dx, 8);
  });

  it('clamps negative dy beyond range', () => {
    const p = normalizeProfile({ ...DEFAULT_PROFILE, dy: -99 });
    assert.equal(p.dy, -8);
  });

  it('clamps opacity to [0, 1]', () => {
    assert.equal(normalizeProfile({ ...DEFAULT_PROFILE, opacity: 1.5 }).opacity, 1);
    assert.equal(normalizeProfile({ ...DEFAULT_PROFILE, opacity: -0.1 }).opacity, 0);
  });

  it('ignores non-numeric values', () => {
    const p = normalizeProfile({ dx: 'x', dy: null, opacity: NaN, blur: undefined });
    assert.equal(p.dx, DEFAULT_PROFILE.dx);
    assert.equal(p.dy, DEFAULT_PROFILE.dy);
    assert.equal(p.opacity, DEFAULT_PROFILE.opacity);
    assert.equal(p.blur, DEFAULT_PROFILE.blur);
  });
});

describe('generateCSS', () => {
  it('is deterministic for identical inputs', () => {
    const cssA = generateCSS(getDefaultProfile());
    const cssB = generateCSS(getDefaultProfile());
    assert.equal(cssA, cssB);
  });

  it('contains no script tags', () => {
    const css = generateCSS({ ...getDefaultProfile(), dx: 1, dy: 1 });
    assert.doesNotMatch(css, /<script/i);
    assert.doesNotMatch(css, /url\(/i);
  });

  it('emits text-shadow when ghost offset is non-zero', () => {
    const css = generateCSS({ ...getDefaultProfile(), dx: 2, dy: 1, opacity: 0.4 });
    assert.match(css, /text-shadow:/);
    assert.match(css, /-2px -1px/);
  });

  it('does not emit text-shadow when offset and blur are zero', () => {
    const css = generateCSS(getDefaultProfile());
    assert.doesNotMatch(css, /text-shadow:/);
  });

  it('emits font-weight delta', () => {
    const css = generateCSS({ ...getDefaultProfile(), fontWeightDelta: 100 });
    assert.match(css, /font-weight: calc\(400 \+ 100\)/);
  });

  it('emits letter-spacing delta', () => {
    const css = generateCSS({ ...getDefaultProfile(), letterSpacingDelta: 0.02 });
    assert.match(css, /letter-spacing: 0\.0200em/);
  });
});

describe('generateUserstyle', () => {
  it('contains the UserStyle header and @-moz-document wrapper', () => {
    const userstyle = generateUserstyle({ ...getDefaultProfile(), dx: 1 });
    assert.match(userstyle, /==UserStyle==/);
    assert.match(userstyle, /@-moz-document/);
  });

  it('contains no script tags', () => {
    const userstyle = generateUserstyle(getDefaultProfile());
    assert.doesNotMatch(userstyle, /<script/i);
  });
});
