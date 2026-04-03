import Root from './MenubarRoot.svelte';
import Menu from './MenubarMenu.svelte';
import Trigger from './MenubarTrigger.svelte';
import Content from './MenubarContent.svelte';
import Item from './MenubarItem.svelte';
import Separator from './MenubarSeparator.svelte';

const Menubar = Object.assign(Root, { Menu, Trigger, Content, Item, Separator });
export { Menubar };
