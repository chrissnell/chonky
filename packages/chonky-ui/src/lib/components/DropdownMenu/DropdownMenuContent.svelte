<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface DropdownMenuContentProps {
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
  }: DropdownMenuContentProps = $props();
</script>

<BitsDropdownMenu.Portal>
  <BitsDropdownMenu.Content class={cn(className)} {side} {sideOffset} {...restProps}>
    {@render children()}
  </BitsDropdownMenu.Content>
</BitsDropdownMenu.Portal>
