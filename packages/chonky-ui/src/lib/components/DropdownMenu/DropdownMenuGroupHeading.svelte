<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DropdownMenuGroupHeadingProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: DropdownMenuGroupHeadingProps = $props();
</script>

<BitsDropdownMenu.GroupHeading class={cn(className)} {...restProps}>
  {@render children()}
</BitsDropdownMenu.GroupHeading>
