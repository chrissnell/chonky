<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DropdownMenuGroupProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: DropdownMenuGroupProps = $props();
</script>

<BitsDropdownMenu.Group class={cn(className)} {...restProps}>
  {@render children()}
</BitsDropdownMenu.Group>
