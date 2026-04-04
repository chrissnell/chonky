import Root from './TooltipRoot.svelte';
import Trigger from './TooltipTrigger.svelte';
import Content from './TooltipContent.svelte';

export type { TooltipRootProps } from './TooltipRoot.svelte';
export type { TooltipTriggerProps } from './TooltipTrigger.svelte';
export type { TooltipContentProps } from './TooltipContent.svelte';

const Tooltip = Object.assign(Root, { Root, Trigger, Content });
export { Tooltip };
