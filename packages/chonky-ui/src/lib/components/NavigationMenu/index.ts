import Root from './NavigationMenuRoot.svelte';
import List from './NavigationMenuList.svelte';
import Item from './NavigationMenuItem.svelte';
import Trigger from './NavigationMenuTrigger.svelte';
import Content from './NavigationMenuContent.svelte';
import Link from './NavigationMenuLink.svelte';

export type { NavigationMenuRootProps } from './NavigationMenuRoot.svelte';
export type { NavigationMenuListProps } from './NavigationMenuList.svelte';
export type { NavigationMenuItemProps } from './NavigationMenuItem.svelte';
export type { NavigationMenuTriggerProps } from './NavigationMenuTrigger.svelte';
export type { NavigationMenuContentProps } from './NavigationMenuContent.svelte';
export type { NavigationMenuLinkProps } from './NavigationMenuLink.svelte';

const NavigationMenu = Object.assign(Root, { List, Item, Trigger, Content, Link });
export { NavigationMenu };
