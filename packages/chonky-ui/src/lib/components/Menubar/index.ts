import Root from './MenubarRoot.svelte';
import Menu from './MenubarMenu.svelte';
import Trigger from './MenubarTrigger.svelte';
import Content from './MenubarContent.svelte';
import Item from './MenubarItem.svelte';
import Separator from './MenubarSeparator.svelte';

export type { MenubarRootProps } from './MenubarRoot.svelte';
export type { MenubarMenuProps } from './MenubarMenu.svelte';
export type { MenubarTriggerProps } from './MenubarTrigger.svelte';
export type { MenubarContentProps } from './MenubarContent.svelte';
export type { MenubarItemProps } from './MenubarItem.svelte';
export type { MenubarSeparatorProps } from './MenubarSeparator.svelte';

const Menubar = Object.assign(Root, { Menu, Trigger, Content, Item, Separator });
export { Menubar };
