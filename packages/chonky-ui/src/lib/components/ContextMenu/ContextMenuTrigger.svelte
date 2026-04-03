<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface ContextMenuTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ContextMenuTriggerProps = $props();
</script>

<BitsContextMenu.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsContextMenu.Trigger>
