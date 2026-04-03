<script lang="ts">
  import { Toolbar as BitsToolbar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    class?: string;
    children?: Snippet;
  }

  let {
    type = 'single',
    class: className,
    children,
    ...restProps
  }: ToolbarGroupProps = $props();
</script>

<BitsToolbar.Group {type} class={cn(className)} {...restProps}>
  {@render children()}
</BitsToolbar.Group>
