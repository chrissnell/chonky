<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface NavigationMenuItemProps extends HTMLLiAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuItemProps = $props();
</script>

<BitsNav.Item class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.Item>
