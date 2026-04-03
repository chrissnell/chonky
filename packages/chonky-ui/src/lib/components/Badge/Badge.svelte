<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
    class?: string;
    children?: Snippet;
  }

  let {
    variant = 'default',
    class: className,
    children,
    ...restProps
  }: BadgeProps = $props();
</script>

<span class={cn('badge', variant !== 'default' && `badge-${variant}`, className)} {...restProps}>
  {@render children()}
</span>
