import Root from './ComboboxRoot.svelte';
import Input from './ComboboxInput.svelte';
import Trigger from './ComboboxTrigger.svelte';
import Content from './ComboboxContent.svelte';
import Item from './ComboboxItem.svelte';
import Group from './ComboboxGroup.svelte';
import GroupHeading from './ComboboxGroupHeading.svelte';

const Combobox = Object.assign(Root, { Input, Trigger, Content, Item, Group, GroupHeading });
export { Combobox };
