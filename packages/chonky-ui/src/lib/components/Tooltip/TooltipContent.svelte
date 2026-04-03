<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface TooltipContentProps {
    class?: string;
    children?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    side = 'top',
    sideOffset = 4,
    ...restProps
  }: TooltipContentProps = $props();
</script>

<BitsTooltip.Portal>
  <BitsTooltip.Content class={cn(className)} {side} {sideOffset} {...restProps}>
    {@render children()}
  </BitsTooltip.Content>
</BitsTooltip.Portal>
