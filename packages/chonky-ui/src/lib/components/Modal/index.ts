import Root from './Modal.svelte';
import Header from './ModalHeader.svelte';
import Body from './ModalBody.svelte';
import Footer from './ModalFooter.svelte';
import Close from './ModalClose.svelte';

export type { ModalProps } from './Modal.svelte';
export type { ModalHeaderProps } from './ModalHeader.svelte';
export type { ModalBodyProps } from './ModalBody.svelte';
export type { ModalFooterProps } from './ModalFooter.svelte';
export type { ModalCloseProps } from './ModalClose.svelte';

const Modal = Object.assign(Root, { Header, Body, Footer, Close });
export { Modal };
