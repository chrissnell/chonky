<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface ContextMenuContentProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ContextMenuContentProps = $props();
</script>

<BitsContextMenu.Portal>
  <BitsContextMenu.Content class={cn(className)} {...restProps}>
    {@render children()}
  </BitsContextMenu.Content>
</BitsContextMenu.Portal>
