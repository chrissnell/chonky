import Root from './PopoverRoot.svelte';
import Trigger from './PopoverTrigger.svelte';
import Content from './PopoverContent.svelte';
import Close from './PopoverClose.svelte';

const Popover = Object.assign(Root, { Trigger, Content, Close });
export { Popover };
