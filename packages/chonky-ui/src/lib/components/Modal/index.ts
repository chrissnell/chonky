import Root from './Modal.svelte';
import Header from './ModalHeader.svelte';
import Body from './ModalBody.svelte';
import Footer from './ModalFooter.svelte';
import Close from './ModalClose.svelte';

const Modal = Object.assign(Root, { Header, Body, Footer, Close });
export { Modal };
