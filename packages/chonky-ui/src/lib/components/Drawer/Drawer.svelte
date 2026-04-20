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
    id,
    ...restProps
  }: DrawerProps = $props();
</script>

<Dialog.Root
  bind:open
  onOpenChange={(o) => {
    onOpenChange?.(o);
    if (!o) onClose?.();
  }}
>
  <Dialog.Overlay class="backdrop drawer-backdrop" />
  <!-- `{id}` MUST come after `{...restProps}`. Svelte 5's $props() rest
       proxy leaks destructured keys back into restProps as `undefined`,
       so spreading restProps first would clobber a consumer-provided id.
       Putting the explicit binding last makes it win. -->
  <Dialog.Content
    class={cn('drawer', `drawer-${anchor}`, className)}
    onOpenAutoFocus={onOpenAutoFocus}
    {...restProps}
    {id}
  >
    {@render children?.()}
  </Dialog.Content>
</Dialog.Root>
