import Root from './ComboboxRoot.svelte';
import Input from './ComboboxInput.svelte';
import Trigger from './ComboboxTrigger.svelte';
import Content from './ComboboxContent.svelte';
import Item from './ComboboxItem.svelte';
import Group from './ComboboxGroup.svelte';
import GroupHeading from './ComboboxGroupHeading.svelte';

export type { ComboboxRootProps } from './ComboboxRoot.svelte';
export type { ComboboxInputProps } from './ComboboxInput.svelte';
export type { ComboboxTriggerProps } from './ComboboxTrigger.svelte';
export type { ComboboxContentProps } from './ComboboxContent.svelte';
export type { ComboboxItemProps } from './ComboboxItem.svelte';
export type { ComboboxGroupProps } from './ComboboxGroup.svelte';
export type { ComboboxGroupHeadingProps } from './ComboboxGroupHeading.svelte';

const Combobox = Object.assign(Root, { Root, Input, Trigger, Content, Item, Group, GroupHeading });
export { Combobox };
