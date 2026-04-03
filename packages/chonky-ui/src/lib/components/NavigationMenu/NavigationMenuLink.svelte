<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface NavigationMenuLinkProps extends HTMLAnchorAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuLinkProps = $props();
</script>

<BitsNav.Link class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.Link>
