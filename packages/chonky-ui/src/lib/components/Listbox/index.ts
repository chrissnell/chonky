import Root from './Listbox.svelte';
import Item from './ListboxItem.svelte';

export type { ListboxProps } from './Listbox.svelte';
export type { ListboxItemProps } from './ListboxItem.svelte';

const Listbox = Object.assign(Root, { Item });
export { Listbox };
