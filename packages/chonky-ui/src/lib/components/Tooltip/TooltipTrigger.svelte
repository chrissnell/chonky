<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface TooltipTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: TooltipTriggerProps = $props();
</script>

<BitsTooltip.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsTooltip.Trigger>
