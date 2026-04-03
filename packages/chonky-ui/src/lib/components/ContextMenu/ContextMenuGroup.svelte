<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ContextMenuGroupProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ContextMenuGroupProps = $props();
</script>

<BitsContextMenu.Group class={cn(className)} {...restProps}>
  {@render children()}
</BitsContextMenu.Group>
