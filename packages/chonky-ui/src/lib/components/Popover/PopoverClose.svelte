<script lang="ts">
  import { Popover as BitsPopover } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface PopoverCloseProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: PopoverCloseProps = $props();
</script>

<BitsPopover.Close class={cn(className)} {...restProps}>
  {@render children()}
</BitsPopover.Close>
