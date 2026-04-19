// Ambient type shim for lucide-svelte.
//
// Why this exists: lucide-svelte's own type-declaration chain terminates in
// `.svelte` file references (e.g. `export { default as AlertCircle } from
// './alarm-clock-check.svelte';`). Plain TypeScript under `moduleResolution:
// NodeNext` cannot resolve `.svelte` imports without the Svelte language-
// server plugin, so IDE TS LSPs report "has no exported member" for every
// icon name even though svelte-check and the bundler are perfectly fine.
//
// This shim augments the `'lucide-svelte'` module with explicit component-
// type declarations for the Chonky allowlist. It does not re-declare the
// whole package — only the names this package imports — so it stays in
// sync with `icons.ts` by virtue of being colocated.
//
// If you add an icon to `icons.ts`, add it here too.

declare module 'lucide-svelte' {
	// Pragmatic `any` — lucide-svelte 0.577 still emits legacy class
	// components which don't match Svelte 5's `Component<P>` structurally.
	// Precise typing adds no meaningful safety for an icon registry.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type LucideIcon = any;

	export const AlertCircle: LucideIcon;
	export const ArrowDown: LucideIcon;
	export const ArrowUp: LucideIcon;
	export const Bot: LucideIcon;
	export const Check: LucideIcon;
	export const CheckCheck: LucideIcon;
	export const ChevronDown: LucideIcon;
	export const ChevronLeft: LucideIcon;
	export const ChevronRight: LucideIcon;
	export const Clock: LucideIcon;
	export const Copy: LucideIcon;
	export const Download: LucideIcon;
	export const Eye: LucideIcon;
	export const EyeOff: LucideIcon;
	export const Filter: LucideIcon;
	export const MapPin: LucideIcon;
	export const MessageSquare: LucideIcon;
	export const MoreHorizontal: LucideIcon;
	export const MoreVertical: LucideIcon;
	export const Pencil: LucideIcon;
	export const Plus: LucideIcon;
	export const Radio: LucideIcon;
	export const RadioTower: LucideIcon;
	export const RefreshCw: LucideIcon;
	export const Reply: LucideIcon;
	export const Search: LucideIcon;
	export const Send: LucideIcon;
	export const Settings: LucideIcon;
	export const Trash2: LucideIcon;
	export const Upload: LucideIcon;
	export const User: LucideIcon;
	export const UserX: LucideIcon;
	export const Users: LucideIcon;
	export const Volume2: LucideIcon;
	export const VolumeX: LucideIcon;
	export const Wifi: LucideIcon;
	export const WifiOff: LucideIcon;
	export const X: LucideIcon;
}
