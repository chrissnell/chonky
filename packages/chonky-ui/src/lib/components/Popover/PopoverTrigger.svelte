<script lang="ts">
  import { Popover as BitsPopover } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface PopoverTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: PopoverTriggerProps = $props();
</script>

<BitsPopover.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsPopover.Trigger>
