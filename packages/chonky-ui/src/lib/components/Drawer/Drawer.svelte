<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { DrawerProps } from './types.js';
  import { cn } from '../../internal/utils.js';

  let {
    open = $bindable(false),
    onOpenChange,
    onClose,
    anchor = 'right',
    class: className,
    children,
    onOpenAutoFocus,
  }: DrawerProps = $props();
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
    class={cn('drawer', `drawer-${anchor}`, className)}
    onOpenAutoFocus={onOpenAutoFocus}
  >
    {@render children?.()}
  </Dialog.Content>
</Dialog.Root>
