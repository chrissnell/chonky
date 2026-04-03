import Root from './LinkPreviewRoot.svelte';
import Trigger from './LinkPreviewTrigger.svelte';
import Content from './LinkPreviewContent.svelte';

const LinkPreview = Object.assign(Root, { Trigger, Content });
export { LinkPreview };
