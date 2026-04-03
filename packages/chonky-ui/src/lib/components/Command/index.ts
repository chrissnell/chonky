import Root from './CommandRoot.svelte';
import Input from './CommandInput.svelte';
import List from './CommandList.svelte';
import Item from './CommandItem.svelte';
import Empty from './CommandEmpty.svelte';
import Group from './CommandGroup.svelte';
import GroupHeading from './CommandGroupHeading.svelte';
import Separator from './CommandSeparator.svelte';
import Dialog from './CommandDialog.svelte';

export type { CommandRootProps } from './CommandRoot.svelte';
export type { CommandInputProps } from './CommandInput.svelte';
export type { CommandListProps } from './CommandList.svelte';
export type { CommandItemProps } from './CommandItem.svelte';
export type { CommandEmptyProps } from './CommandEmpty.svelte';
export type { CommandGroupProps } from './CommandGroup.svelte';
export type { CommandGroupHeadingProps } from './CommandGroupHeading.svelte';
export type { CommandSeparatorProps } from './CommandSeparator.svelte';
export type { CommandDialogProps } from './CommandDialog.svelte';

const Command = Object.assign(Root, { Input, List, Item, Empty, Group, GroupHeading, Separator, Dialog });
export { Command };
