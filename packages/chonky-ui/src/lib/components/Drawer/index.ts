import Root from './Drawer.svelte';
import Header from './DrawerHeader.svelte';
import Body from './DrawerBody.svelte';
import Footer from './DrawerFooter.svelte';
import Close from './DrawerClose.svelte';

export type {
	DrawerProps,
	DrawerAnchor,
	DrawerHeaderProps,
	DrawerBodyProps,
	DrawerFooterProps,
	DrawerCloseProps,
} from './types.js';

const Drawer = Object.assign(Root, { Root, Header, Body, Footer, Close });
export { Drawer };
