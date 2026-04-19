// Entry point for the `/icons` subpath export of @chrissnell/chonky-ui.
//
// Shapes exported here:
//   - `Icon`           — the Svelte component wrapper (name/icon/size/strokeWidth/label)
//   - `<Name>Icon`     — PascalCase aliases for every allowlisted icon (direct use)
//   - types            — `IconName`, `IconProps`, `IconSize`, `LucideIconComponent`
//
// Usage:
//   import { Icon } from '@chrissnell/chonky-ui';             // main entry (wrapper only)
//   import { ClockIcon } from '@chrissnell/chonky-ui/icons';  // subpath (direct)

export { default as Icon } from './Icon.svelte';
export type { IconProps, IconSize } from './types.js';
export { icons, type IconName, type LucideIconComponent } from './icons.js';

// PascalCase direct-component aliases. Named with a trailing `Icon` suffix so
// they read naturally alongside the wrapper (`<ClockIcon />` vs `<Clock />`).
export {
	AlertCircle as AlertCircleIcon,
	ArrowDown as ArrowDownIcon,
	ArrowUp as ArrowUpIcon,
	Bot as BotIcon,
	Check as CheckIcon,
	CheckCheck as CheckCheckIcon,
	ChevronDown as ChevronDownIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Clock as ClockIcon,
	Copy as CopyIcon,
	Download as DownloadIcon,
	Eye as EyeIcon,
	EyeOff as EyeOffIcon,
	Filter as FilterIcon,
	MapPin as MapPinIcon,
	MessageSquare as MessageSquareIcon,
	MoreHorizontal as MoreHorizontalIcon,
	MoreVertical as MoreVerticalIcon,
	Pencil as PencilIcon,
	Plus as PlusIcon,
	Radio as RadioIcon,
	RadioTower as RadioTowerIcon,
	RefreshCw as RefreshCwIcon,
	Reply as ReplyIcon,
	Search as SearchIcon,
	Send as SendIcon,
	Settings as SettingsIcon,
	Trash2 as Trash2Icon,
	Upload as UploadIcon,
	User as UserIcon,
	UserX as UserXIcon,
	Users as UsersIcon,
	Volume2 as Volume2Icon,
	VolumeX as VolumeXIcon,
	Wifi as WifiIcon,
	WifiOff as WifiOffIcon,
	X as XIcon,
} from './icons.js';
