import Root from './AccordionRoot.svelte';
import Item from './AccordionItem.svelte';
import Trigger from './AccordionTrigger.svelte';
import Content from './AccordionContent.svelte';

export type { AccordionRootProps } from './AccordionRoot.svelte';
export type { AccordionItemProps } from './AccordionItem.svelte';
export type { AccordionTriggerProps } from './AccordionTrigger.svelte';
export type { AccordionContentProps } from './AccordionContent.svelte';

const Accordion = Object.assign(Root, { Item, Trigger, Content });
export { Accordion };
