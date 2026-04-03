<script lang="ts">
  import { Menubar as BitsMenubar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLDivAttributes } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface MenubarItemProps {
    class?: string;
    children?: Snippet;
    onSelect?: () => void;
  }

  let {
    class: className,
    children,
    onSelect,
    ...restProps
  }: MenubarItemProps = $props();
</script>

<BitsMenubar.Item class={cn(className)} {onSelect} {...restProps}>
  {@render children()}
</BitsMenubar.Item>
