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

const DropdownMenu = Object.assign(Root, { Trigger, Content, Item, Separator, Group, GroupHeading, Sub, SubTrigger, SubContent, CheckboxItem });
export { DropdownMenu };
