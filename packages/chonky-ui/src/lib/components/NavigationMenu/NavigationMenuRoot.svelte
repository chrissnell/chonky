<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface NavigationMenuRootProps extends HTMLAttributes<HTMLElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuRootProps = $props();
</script>

<BitsNav.Root class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.Root>
