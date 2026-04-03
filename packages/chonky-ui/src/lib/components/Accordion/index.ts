import Root from './AccordionRoot.svelte';
import Item from './AccordionItem.svelte';
import Trigger from './AccordionTrigger.svelte';
import Content from './AccordionContent.svelte';

const Accordion = Object.assign(Root, { Item, Trigger, Content });
export { Accordion };
