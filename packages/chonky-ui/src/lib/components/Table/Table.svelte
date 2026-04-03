<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLTableAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface TableProps extends HTMLTableAttributes {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: TableProps = $props();
</script>

<table class={cn(className)} {...restProps}>
  {@render children()}
</table>
