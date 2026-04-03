<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface DropdownMenuTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: DropdownMenuTriggerProps = $props();
</script>

<BitsDropdownMenu.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsDropdownMenu.Trigger>
