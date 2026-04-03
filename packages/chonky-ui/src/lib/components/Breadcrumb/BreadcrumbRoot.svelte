<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BreadcrumbRootProps extends HTMLAttributes<HTMLElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: BreadcrumbRootProps = $props();
</script>

<nav aria-label="Breadcrumb" class={cn(className)} {...restProps}>
  {@render children()}
</nav>
