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

export interface DrawerProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	onClose?: () => void;
	anchor?: DrawerAnchor;
	class?: string;
	children?: Snippet;
	onOpenAutoFocus?: (e: Event) => void;
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
