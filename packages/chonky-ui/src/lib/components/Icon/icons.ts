// Curated Lucide icon allowlist for the Chonky Icon component.
//
// Tree-shaking: lucide-svelte's package.json sets `sideEffects: false`, so
// barrel imports from the main entry are tree-shaken by any modern bundler
// (Vite, Rollup, esbuild) down to just the icons we re-export. Per-icon
// subpath imports (`lucide-svelte/icons/<name>`) would be equivalent but
// the subpath types resolve to `.svelte.d.ts` files which TS `NodeNext`
// resolution — used by this package's tsconfig — does not discover, so
// they produced IDE diagnostics even though svelte-check / the build were
// fine. Barrel imports keep types working for plain-TS consumers without
// a bundle-size cost.
//
// To add an icon: pick the PascalCase name from https://lucide.dev/icons,
// add it to both the imports and the `icons` map below, then update
// `PascalCase` aliases in ./index.ts.


import {
	AlertCircle,
	ArrowDown,
	ArrowUp,
	Bot,
	Check,
	CheckCheck,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Clock,
	Copy,
	Download,
	Eye,
	EyeOff,
	Filter,
	MapPin,
	MessageSquare,
	MoreHorizontal,
	MoreVertical,
	Pencil,
	Plus,
	Radio,
	RadioTower,
	RefreshCw,
	Reply,
	Search,
	Send,
	Settings,
	Trash2,
	Upload,
	User,
	UserX,
	Users,
	Volume2,
	VolumeX,
	Wifi,
	WifiOff,
	X,
} from 'lucide-svelte';

// Lucide-svelte 0.577 still ships legacy class-based Svelte components which
// the new Svelte 5 `Component<P>` type does not structurally match — its
// Svelte-4-compat layer is what actually renders them. A nominal `any`
// here is the pragmatic choice: the runtime behavior is validated and
// these are all icon components, not arbitrary user types, so precise
// generics don't earn their keep.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LucideIconComponent = any;

export const icons = {
	'alert-circle': AlertCircle,
	'arrow-down': ArrowDown,
	'arrow-up': ArrowUp,
	bot: Bot,
	check: Check,
	'check-check': CheckCheck,
	'chevron-down': ChevronDown,
	'chevron-left': ChevronLeft,
	'chevron-right': ChevronRight,
	clock: Clock,
	copy: Copy,
	download: Download,
	eye: Eye,
	'eye-off': EyeOff,
	filter: Filter,
	'map-pin': MapPin,
	'message-square': MessageSquare,
	'more-horizontal': MoreHorizontal,
	'more-vertical': MoreVertical,
	pencil: Pencil,
	plus: Plus,
	radio: Radio,
	'radio-tower': RadioTower,
	'refresh-cw': RefreshCw,
	reply: Reply,
	search: Search,
	send: Send,
	settings: Settings,
	'trash-2': Trash2,
	upload: Upload,
	user: User,
	'user-x': UserX,
	users: Users,
	'volume-2': Volume2,
	'volume-x': VolumeX,
	wifi: Wifi,
	'wifi-off': WifiOff,
	x: X,
} as const satisfies Record<string, LucideIconComponent>;

export type IconName = keyof typeof icons;

export {
	AlertCircle,
	ArrowDown,
	ArrowUp,
	Bot,
	Check,
	CheckCheck,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Clock,
	Copy,
	Download,
	Eye,
	EyeOff,
	Filter,
	MapPin,
	MessageSquare,
	MoreHorizontal,
	MoreVertical,
	Pencil,
	Plus,
	Radio,
	RadioTower,
	RefreshCw,
	Reply,
	Search,
	Send,
	Settings,
	Trash2,
	Upload,
	User,
	UserX,
	Users,
	Volume2,
	VolumeX,
	Wifi,
	WifiOff,
	X,
};
