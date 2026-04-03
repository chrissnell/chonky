<script lang="ts">
  import { Popover as BitsPopover } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface PopoverContentProps {
    class?: string;
    children?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    side = 'bottom',
    sideOffset = 4,
    ...restProps
  }: PopoverContentProps = $props();
</script>

<BitsPopover.Portal>
  <BitsPopover.Content class={cn(className)} {side} {sideOffset} {...restProps}>
    {@render children()}
  </BitsPopover.Content>
</BitsPopover.Portal>
