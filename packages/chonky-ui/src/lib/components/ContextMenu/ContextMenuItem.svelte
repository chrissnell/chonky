<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface ContextMenuItemProps {
    class?: string;
    children?: Snippet;
    onSelect?: () => void;
    disabled?: boolean;
  }

  let {
    class: className,
    children,
    onSelect,
    disabled,
    ...restProps
  }: ContextMenuItemProps = $props();
</script>

<BitsContextMenu.Item class={cn(className)} {onSelect} {disabled} {...restProps}>
  {@render children()}
</BitsContextMenu.Item>
