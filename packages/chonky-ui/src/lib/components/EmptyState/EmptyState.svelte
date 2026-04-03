<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: EmptyStateProps = $props();
</script>

<div class={cn('empty', className)} {...restProps}>
  {@render children()}
</div>
