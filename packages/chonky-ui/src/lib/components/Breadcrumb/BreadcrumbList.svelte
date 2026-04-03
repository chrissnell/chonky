<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface BreadcrumbListProps extends HTMLAttributes<HTMLOListElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: BreadcrumbListProps = $props();
</script>

<ol class={cn('breadcrumb-list', className)} {...restProps}>
  {@render children()}
</ol>
