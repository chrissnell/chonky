<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BreadcrumbPageProps extends HTMLAttributes<HTMLSpanElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: BreadcrumbPageProps = $props();
</script>

<span role="link" aria-current="page" class={cn('breadcrumb-page', className)} {...restProps}>
  {@render children()}
</span>
