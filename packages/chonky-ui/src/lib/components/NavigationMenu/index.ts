import Root from './NavigationMenuRoot.svelte';
import List from './NavigationMenuList.svelte';
import Item from './NavigationMenuItem.svelte';
import Trigger from './NavigationMenuTrigger.svelte';
import Content from './NavigationMenuContent.svelte';
import Link from './NavigationMenuLink.svelte';

const NavigationMenu = Object.assign(Root, { List, Item, Trigger, Content, Link });
export { NavigationMenu };
