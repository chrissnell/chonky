import Root from './ToggleGroup.svelte';
import Item from './ToggleGroupItem.svelte';

export type { ToggleGroupProps } from './ToggleGroup.svelte';
export type { ToggleGroupItemProps } from './ToggleGroupItem.svelte';

const ToggleGroup = Object.assign(Root, { Item });
export { ToggleGroup };
