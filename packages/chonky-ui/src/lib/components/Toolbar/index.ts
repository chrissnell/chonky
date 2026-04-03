import Root from './ToolbarRoot.svelte';
import Button from './ToolbarButton.svelte';
import Link from './ToolbarLink.svelte';
import Group from './ToolbarGroup.svelte';
import GroupItem from './ToolbarGroupItem.svelte';

const Toolbar = Object.assign(Root, { Button, Link, Group, GroupItem });
export { Toolbar };
