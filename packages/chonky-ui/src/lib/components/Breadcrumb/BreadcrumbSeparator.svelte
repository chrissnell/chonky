<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BreadcrumbSeparatorProps extends HTMLAttributes<HTMLSpanElement> {
    class?: string;
  }

  let {
    class: className,
    ...restProps
  }: BreadcrumbSeparatorProps = $props();
</script>

<li role="presentation" aria-hidden="true">
  <span class={cn('breadcrumb-separator', className)} {...restProps}>/</span>
</li>
