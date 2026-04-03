<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DropdownMenuSubContentProps {
    class?: string;
    children?: Snippet;
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    sideOffset = 2,
    ...restProps
  }: DropdownMenuSubContentProps = $props();
</script>

<BitsDropdownMenu.Portal>
  <BitsDropdownMenu.SubContent class={cn(className)} {sideOffset} {...restProps}>
    {@render children()}
  </BitsDropdownMenu.SubContent>
</BitsDropdownMenu.Portal>
