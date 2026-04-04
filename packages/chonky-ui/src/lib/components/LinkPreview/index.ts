import Root from './LinkPreviewRoot.svelte';
import Trigger from './LinkPreviewTrigger.svelte';
import Content from './LinkPreviewContent.svelte';

export type { LinkPreviewRootProps } from './LinkPreviewRoot.svelte';
export type { LinkPreviewTriggerProps } from './LinkPreviewTrigger.svelte';
export type { LinkPreviewContentProps } from './LinkPreviewContent.svelte';

const LinkPreview = Object.assign(Root, { Root, Trigger, Content });
export { LinkPreview };
