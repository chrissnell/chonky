<script lang="ts">
  import { Popover as BitsPopover } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface PopoverRootProps {
    open?: boolean;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: PopoverRootProps = $props();
</script>

<BitsPopover.Root bind:open {...restProps}>
  {@render children()}
</BitsPopover.Root>
