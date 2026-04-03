<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BreadcrumbLinkProps extends HTMLAnchorAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: BreadcrumbLinkProps = $props();
</script>

<a class={cn('breadcrumb-link', className)} {...restProps}>
  {@render children()}
</a>
