import Root from './AlertDialogRoot.svelte';
import Trigger from './AlertDialogTrigger.svelte';
import Content from './AlertDialogContent.svelte';
import Title from './AlertDialogTitle.svelte';
import Description from './AlertDialogDescription.svelte';
import Action from './AlertDialogAction.svelte';
import Cancel from './AlertDialogCancel.svelte';

const AlertDialog = Object.assign(Root, { Trigger, Content, Title, Description, Action, Cancel });
export { AlertDialog };
