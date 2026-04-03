<script lang="ts">
  import { NavigationMenu as BitsNav } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface NavigationMenuTriggerProps extends HTMLButtonAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenuTriggerProps = $props();
</script>

<BitsNav.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsNav.Trigger>
