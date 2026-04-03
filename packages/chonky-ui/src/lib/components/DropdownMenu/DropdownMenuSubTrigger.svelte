<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DropdownMenuSubTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: DropdownMenuSubTriggerProps = $props();
</script>

<BitsDropdownMenu.SubTrigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsDropdownMenu.SubTrigger>
