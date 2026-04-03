import Root from './TabsRoot.svelte';
import List from './TabsList.svelte';
import Trigger from './TabsTrigger.svelte';
import Content from './TabsContent.svelte';

export type { TabsRootProps } from './TabsRoot.svelte';
export type { TabsListProps } from './TabsList.svelte';
export type { TabsTriggerProps } from './TabsTrigger.svelte';
export type { TabsContentProps } from './TabsContent.svelte';

const Tabs = Object.assign(Root, { List, Trigger, Content });
export { Tabs };
