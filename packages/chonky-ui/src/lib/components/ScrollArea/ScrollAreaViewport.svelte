<script lang="ts">
  import { ScrollArea as BitsScrollArea } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ScrollAreaViewportProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ScrollAreaViewportProps = $props();
</script>

<BitsScrollArea.Viewport class={cn(className)} {...restProps}>
  {@render children()}
</BitsScrollArea.Viewport>
