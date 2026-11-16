#!/usr/bin/env node
/**
 * Every colour token that lands on a surface must clear WCAG AA against that surface.
 *
 * This exists because `--color-primary` shipped at #ffaa00, which is 1.80:1 on
 * `--color-surface` -- under half of what body text needs, and it is the colour every
 * link is painted in. That is not the kind of thing anyone catches by looking, so it is
 * checked instead.
 *
 * No dependencies and no test runner: `node scripts/check-contrast.mjs`.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const AA = 4.5;
const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, '..', 'src', 'lib', 'css', 'tokens.css'), 'utf8');

const channel = (c) => {
	const v = c / 255;
	return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
	let h = hex.replace('#', '');
	if (h.length === 3) h = [...h].map((c) => c + c).join('');
	const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
	return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const ratio = (a, b) => {
	const [x, y] = [luminance(a), luminance(b)];
	return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

/** The three cascades a consumer can actually be in, each resolved the way CSS resolves it. */
const parse = (text) =>
	Object.fromEntries([...text.matchAll(/--(color-[a-z-]+):\s*(#[0-9a-fA-F]{3,8})/g)].map((m) => [m[1], m[2]]));

const [base, themed, auto] = css.split(/^(?:\[data-theme="dark"\] \{|@media .*)$/m);
const light = parse(base);
const themes = {
	light,
	dark: { ...light, ...parse(themed) },
	'dark (prefers-color-scheme)': { ...light, ...parse(auto) }
};

/** Tokens read as text, and the fill/foreground pairs. */
const ON_SURFACE = [
	'color-text',
	'color-text-muted',
	'color-text-dim',
	'color-accent',
	'color-primary',
	'color-warning',
	'color-danger',
	'color-info',
	'color-success'
];
const PAIRS = [
	['color-primary-fg', 'color-primary'],
	['color-warning-fg', 'color-warning'],
	['color-danger-fg', 'color-danger'],
	['color-info-fg', 'color-info'],
	['color-success-fg', 'color-success-fill']
];

const failures = [];
for (const [name, t] of Object.entries(themes)) {
	// Both surfaces: a token that passes on the page and fails on a panel fails in use.
	for (const token of ON_SURFACE) {
		for (const surface of ['color-bg', 'color-surface']) {
			const r = ratio(t[token], t[surface]);
			if (r < AA) failures.push(`${name}: --${token} (${t[token]}) on --${surface} (${t[surface]}) is ${r.toFixed(2)}:1`);
		}
	}
	for (const [fg, bg] of PAIRS) {
		const r = ratio(t[fg], t[bg]);
		if (r < AA) failures.push(`${name}: --${fg} (${t[fg]}) on --${bg} (${t[bg]}) is ${r.toFixed(2)}:1`);
	}
}

if (failures.length > 0) {
	console.error(`Contrast below ${AA}:1 — ${failures.length} failing:\n`);
	for (const f of failures) console.error(`  ${f}`);
	process.exit(1);
}
console.log(`Contrast: every token clears ${AA}:1 on both surfaces, in all ${Object.keys(themes).length} cascades.`);
