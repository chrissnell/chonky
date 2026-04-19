// Plain-TS type module for the Drawer component.
//
// Types live here (not inside the `.svelte` files' <script> blocks) so plain
// TypeScript — including IDE language servers without the Svelte plugin —
// can discover them via normal `.ts` re-exports. `export type { X } from
// './Foo.svelte'` works under svelte-check but not every IDE LSP
// configuration. See Icon/types.ts for the same pattern.

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type DrawerAnchor = 'right' | 'left' | 'bottom' | 'top';

/**
 * Drawer.Root props.
 *
 * Inherits arbitrary HTMLDivElement attributes which are forwarded to the
 * underlying bits-ui `Dialog.Content` element. This is how consumers attach
 * `aria-label` (or `aria-labelledby`) to the dialog when there is no
 * Drawer.Header > h3 to act as the accessible name. Without one of those,
 * screen readers will announce the dialog with no name.
 *
 * Pass `id` to give the drawer's content element a stable id that an external
 * trigger (e.g., a hamburger button outside the Dialog.Root tree) can
 * reference via `aria-controls`. When the consumer uses bits-ui `Dialog.Trigger`,
 * `aria-controls` / `aria-expanded` / `aria-haspopup` are wired automatically;
 * external triggers must be wired manually using this `id`.
 */
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	onClose?: () => void;
	anchor?: DrawerAnchor;
	class?: string;
	children?: Snippet;
	onOpenAutoFocus?: (e: Event) => void;
	/**
	 * Stable id forwarded to Dialog.Content. Use this to wire an external
	 * trigger's `aria-controls` to the drawer.
	 */
	id?: string;
}

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
}

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
}

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
}

export interface DrawerCloseProps extends HTMLAttributes<HTMLButtonElement> {
	class?: string;
	children?: Snippet;
}
