import Root from './CollapsibleRoot.svelte';
import Trigger from './CollapsibleTrigger.svelte';
import Content from './CollapsibleContent.svelte';

export type { CollapsibleRootProps } from './CollapsibleRoot.svelte';
export type { CollapsibleTriggerProps } from './CollapsibleTrigger.svelte';
export type { CollapsibleContentProps } from './CollapsibleContent.svelte';

const Collapsible = Object.assign(Root, { Trigger, Content });
export { Collapsible };
