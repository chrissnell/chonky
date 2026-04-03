import Root from './CollapsibleRoot.svelte';
import Trigger from './CollapsibleTrigger.svelte';
import Content from './CollapsibleContent.svelte';

const Collapsible = Object.assign(Root, { Trigger, Content });
export { Collapsible };
