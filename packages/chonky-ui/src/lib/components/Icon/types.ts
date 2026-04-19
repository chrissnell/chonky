// Plain-TS type module for the Icon component.
//
// Types live here (rather than inside Icon.svelte's <script module>) so plain
// TypeScript — including IDE language servers that don't use the Svelte
// plugin for `.svelte` type resolution — can import them via a normal `.ts`
// re-export. `export type { X } from './Foo.svelte'` works under svelte-check
// but is a dead end for some editor LSP configurations.

import type { SVGAttributes } from 'svelte/elements';
import type { LucideIconComponent, IconName } from './icons.js';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface IconProps extends Omit<SVGAttributes<SVGElement>, 'class'> {
	/** Name of a Chonky-allowlisted Lucide icon. */
	name?: IconName;
	/** Ad-hoc passthrough: pass any Lucide-svelte icon component directly.
	 *  Wins over `name` when both are provided. */
	icon?: LucideIconComponent;
	/** Size token (xs=12, sm=14, md=16, lg=20, xl=24) or a raw pixel number. */
	size?: IconSize;
	/** Stroke width in SVG units. Lucide default is 2; Chonky default is 1.5. */
	strokeWidth?: number;
	/** If set, icon becomes an announced image with this label.
	 *  Otherwise the icon is aria-hidden (decorative). */
	label?: string;
	/** Extra classes merged onto the rendered SVG. */
	class?: string;
}
