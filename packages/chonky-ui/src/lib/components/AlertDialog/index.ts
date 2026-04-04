import Root from './AlertDialogRoot.svelte';
import Trigger from './AlertDialogTrigger.svelte';
import Content from './AlertDialogContent.svelte';
import Title from './AlertDialogTitle.svelte';
import Description from './AlertDialogDescription.svelte';
import Action from './AlertDialogAction.svelte';
import Cancel from './AlertDialogCancel.svelte';

export type { AlertDialogRootProps } from './AlertDialogRoot.svelte';
export type { AlertDialogTriggerProps } from './AlertDialogTrigger.svelte';
export type { AlertDialogContentProps } from './AlertDialogContent.svelte';
export type { AlertDialogTitleProps } from './AlertDialogTitle.svelte';
export type { AlertDialogDescriptionProps } from './AlertDialogDescription.svelte';
export type { AlertDialogActionProps } from './AlertDialogAction.svelte';
export type { AlertDialogCancelProps } from './AlertDialogCancel.svelte';

const AlertDialog = Object.assign(Root, { Root, Trigger, Content, Title, Description, Action, Cancel });
export { AlertDialog };
