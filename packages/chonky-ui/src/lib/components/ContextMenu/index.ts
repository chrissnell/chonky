import Root from './ContextMenuRoot.svelte';
import Trigger from './ContextMenuTrigger.svelte';
import Content from './ContextMenuContent.svelte';
import Item from './ContextMenuItem.svelte';
import Separator from './ContextMenuSeparator.svelte';
import Group from './ContextMenuGroup.svelte';
import GroupHeading from './ContextMenuGroupHeading.svelte';

const ContextMenu = Object.assign(Root, { Trigger, Content, Item, Separator, Group, GroupHeading });
export { ContextMenu };
