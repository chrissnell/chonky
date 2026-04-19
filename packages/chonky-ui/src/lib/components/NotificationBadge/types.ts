// Plain-TS type module for the NotificationBadge component.
//
// Types live here (rather than inside NotificationBadge.svelte's <script module>)
// so plain TypeScript — including IDE language servers that don't use the Svelte
// plugin for `.svelte` type resolution — can import them via a normal `.ts`
// re-export. Same pattern Icon and Drawer use.

import type { HTMLAttributes } from 'svelte/elements';

export interface NotificationBadgeProps extends HTMLAttributes<HTMLSpanElement> {
	/** Current count to display. Required. */
	count: number;
	/** Counts above this render as `${cap}+`. Default: 99. */
	cap?: number;
	/** If false (default), the badge renders nothing when `count === 0`. */
	showZero?: boolean;
	/** ARIA label override. Default: `"${displayedValue} unread"`. */
	label?: string;
	/** Extra classes merged onto the rendered span. */
	class?: string;
}
