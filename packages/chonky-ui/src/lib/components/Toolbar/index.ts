import Root from './ToolbarRoot.svelte';
import Button from './ToolbarButton.svelte';
import Link from './ToolbarLink.svelte';
import Group from './ToolbarGroup.svelte';
import GroupItem from './ToolbarGroupItem.svelte';

export type { ToolbarRootProps } from './ToolbarRoot.svelte';
export type { ToolbarButtonProps } from './ToolbarButton.svelte';
export type { ToolbarLinkProps } from './ToolbarLink.svelte';
export type { ToolbarGroupProps } from './ToolbarGroup.svelte';
export type { ToolbarGroupItemProps } from './ToolbarGroupItem.svelte';

const Toolbar = Object.assign(Root, { Button, Link, Group, GroupItem });
export { Toolbar };
