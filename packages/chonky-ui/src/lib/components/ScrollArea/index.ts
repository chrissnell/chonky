import Root from './ScrollAreaRoot.svelte';
import Viewport from './ScrollAreaViewport.svelte';
import Scrollbar from './ScrollAreaScrollbar.svelte';

export type { ScrollAreaRootProps } from './ScrollAreaRoot.svelte';
export type { ScrollAreaViewportProps } from './ScrollAreaViewport.svelte';
export type { ScrollAreaScrollbarProps } from './ScrollAreaScrollbar.svelte';

const ScrollArea = Object.assign(Root, { Root, Viewport, Scrollbar });
export { ScrollArea };
