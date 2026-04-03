<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DropdownMenuItemProps {
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
  }: DropdownMenuItemProps = $props();
</script>

<BitsDropdownMenu.Item class={cn(className)} {onSelect} {disabled} {...restProps}>
  {@render children()}
</BitsDropdownMenu.Item>
