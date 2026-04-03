<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BreadcrumbItemProps extends HTMLLiAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: BreadcrumbItemProps = $props();
</script>

<li class={cn(className)} {...restProps}>
  {@render children()}
</li>
