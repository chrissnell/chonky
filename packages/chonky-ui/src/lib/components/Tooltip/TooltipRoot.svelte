<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface TooltipRootProps {
    openDelay?: number;
    closeDelay?: number;
    children?: Snippet;
  }

  let {
    openDelay = 200,
    closeDelay = 0,
    children,
    ...restProps
  }: TooltipRootProps = $props();
</script>

<BitsTooltip.Root {openDelay} {closeDelay} {...restProps}>
  {@render children()}
</BitsTooltip.Root>
