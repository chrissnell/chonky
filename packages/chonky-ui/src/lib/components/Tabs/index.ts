import Root from './TabsRoot.svelte';
import List from './TabsList.svelte';
import Trigger from './TabsTrigger.svelte';
import Content from './TabsContent.svelte';

const Tabs = Object.assign(Root, { List, Trigger, Content });
export { Tabs };
