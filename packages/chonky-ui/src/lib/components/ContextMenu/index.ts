import Root from './ContextMenuRoot.svelte';
import Trigger from './ContextMenuTrigger.svelte';
import Content from './ContextMenuContent.svelte';
import Item from './ContextMenuItem.svelte';
import Separator from './ContextMenuSeparator.svelte';
import Group from './ContextMenuGroup.svelte';
import GroupHeading from './ContextMenuGroupHeading.svelte';

export type { ContextMenuRootProps } from './ContextMenuRoot.svelte';
export type { ContextMenuTriggerProps } from './ContextMenuTrigger.svelte';
export type { ContextMenuContentProps } from './ContextMenuContent.svelte';
export type { ContextMenuItemProps } from './ContextMenuItem.svelte';
export type { ContextMenuSeparatorProps } from './ContextMenuSeparator.svelte';
export type { ContextMenuGroupProps } from './ContextMenuGroup.svelte';
export type { ContextMenuGroupHeadingProps } from './ContextMenuGroupHeading.svelte';

const ContextMenu = Object.assign(Root, { Trigger, Content, Item, Separator, Group, GroupHeading });
export { ContextMenu };
