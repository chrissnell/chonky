<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface BoxHeaderProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: BoxHeaderProps = $props();
</script>

<div class={cn('box-header-row', className)} {...restProps}>
  {@render children()}
</div>
