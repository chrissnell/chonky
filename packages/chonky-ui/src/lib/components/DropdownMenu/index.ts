import Root from './DropdownMenuRoot.svelte';
import Trigger from './DropdownMenuTrigger.svelte';
import Content from './DropdownMenuContent.svelte';
import Item from './DropdownMenuItem.svelte';
import Separator from './DropdownMenuSeparator.svelte';
import Group from './DropdownMenuGroup.svelte';
import GroupHeading from './DropdownMenuGroupHeading.svelte';
import Sub from './DropdownMenuSub.svelte';
import SubTrigger from './DropdownMenuSubTrigger.svelte';
import SubContent from './DropdownMenuSubContent.svelte';
import CheckboxItem from './DropdownMenuCheckboxItem.svelte';

export type { DropdownMenuRootProps } from './DropdownMenuRoot.svelte';
export type { DropdownMenuTriggerProps } from './DropdownMenuTrigger.svelte';
export type { DropdownMenuContentProps } from './DropdownMenuContent.svelte';
export type { DropdownMenuItemProps } from './DropdownMenuItem.svelte';
export type { DropdownMenuSeparatorProps } from './DropdownMenuSeparator.svelte';
export type { DropdownMenuGroupProps } from './DropdownMenuGroup.svelte';
export type { DropdownMenuGroupHeadingProps } from './DropdownMenuGroupHeading.svelte';
export type { DropdownMenuSubProps } from './DropdownMenuSub.svelte';
export type { DropdownMenuSubTriggerProps } from './DropdownMenuSubTrigger.svelte';
export type { DropdownMenuSubContentProps } from './DropdownMenuSubContent.svelte';
export type { DropdownMenuCheckboxItemProps } from './DropdownMenuCheckboxItem.svelte';

const DropdownMenu = Object.assign(Root, { Root, Trigger, Content, Item, Separator, Group, GroupHeading, Sub, SubTrigger, SubContent, CheckboxItem });
export { DropdownMenu };
