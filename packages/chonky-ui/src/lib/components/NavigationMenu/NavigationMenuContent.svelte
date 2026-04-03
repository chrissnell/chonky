<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface NavigationMenuContentProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuContentProps = $props();
</script>

<BitsNav.Content class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.Content>
