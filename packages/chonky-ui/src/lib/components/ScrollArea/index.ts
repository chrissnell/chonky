import Root from './ScrollAreaRoot.svelte';
import Viewport from './ScrollAreaViewport.svelte';
import Scrollbar from './ScrollAreaScrollbar.svelte';

const ScrollArea = Object.assign(Root, { Viewport, Scrollbar });
export { ScrollArea };
