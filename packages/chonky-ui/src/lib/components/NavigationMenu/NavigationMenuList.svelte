<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface NavigationMenuListProps extends HTMLAttributes<HTMLUListElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuListProps = $props();
</script>

<BitsNav.List class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.List>
