import Root from './TooltipRoot.svelte';
import Trigger from './TooltipTrigger.svelte';
import Content from './TooltipContent.svelte';

const Tooltip = Object.assign(Root, { Trigger, Content });
export { Tooltip };
