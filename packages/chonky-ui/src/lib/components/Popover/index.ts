import Root from './PopoverRoot.svelte';
import Trigger from './PopoverTrigger.svelte';
import Content from './PopoverContent.svelte';
import Close from './PopoverClose.svelte';

export type { PopoverRootProps } from './PopoverRoot.svelte';
export type { PopoverTriggerProps } from './PopoverTrigger.svelte';
export type { PopoverContentProps } from './PopoverContent.svelte';
export type { PopoverCloseProps } from './PopoverClose.svelte';

const Popover = Object.assign(Root, { Root, Trigger, Content, Close });
export { Popover };
