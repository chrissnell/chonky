<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ListboxProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ListboxProps = $props();
</script>

<div role="listbox" class={cn('listbox', className)} {...restProps}>
  {@render children()}
</div>
