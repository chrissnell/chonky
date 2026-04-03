<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ModalProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClose?: () => void;
    class?: string;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    onOpenChange,
    onClose,
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
  <Dialog.Portal>
    <Dialog.Overlay class="backdrop" />
    <Dialog.Content class={cn('modal', className)}>
      {@render children()}
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
