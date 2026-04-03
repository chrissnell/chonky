import Root from './CommandRoot.svelte';
import Input from './CommandInput.svelte';
import List from './CommandList.svelte';
import Item from './CommandItem.svelte';
import Empty from './CommandEmpty.svelte';
import Group from './CommandGroup.svelte';
import GroupHeading from './CommandGroupHeading.svelte';
import Separator from './CommandSeparator.svelte';
import Dialog from './CommandDialog.svelte';

const Command = Object.assign(Root, { Input, List, Item, Empty, Group, GroupHeading, Separator, Dialog });
export { Command };
