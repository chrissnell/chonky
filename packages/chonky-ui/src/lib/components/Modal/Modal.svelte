<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ModalProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClose?: () => void;
    /**
     * Forwarded to the underlying bits-ui `Dialog.Content`. Call
     * `e.preventDefault()` to keep the modal open when the user
     * presses Escape -- useful for destructive-by-close flows like
     * one-shot secret reveal.
     */
    onEscapeKeydown?: (e: KeyboardEvent) => void;
    /**
     * Forwarded to the underlying bits-ui `Dialog.Content`. Call
     * `e.preventDefault()` to keep the modal open when the user
     * clicks the backdrop.
     */
    onInteractOutside?: (e: PointerEvent) => void;
    class?: string;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    onOpenChange,
    onClose,
    onEscapeKeydown,
    onInteractOutside,
    class: className,
    children,
  }: ModalProps = $props();
</script>

<Dialog.Root
  bind:open
  onOpenChange={(o) => {
    onOpenChange?.(o);
    if (!o) onClose?.();
  }}
>
  <Dialog.Overlay class="backdrop" />
  <Dialog.Content
    class={cn('modal', className)}
    {onEscapeKeydown}
    {onInteractOutside}
  >
    {@render children()}
  </Dialog.Content>
</Dialog.Root>
