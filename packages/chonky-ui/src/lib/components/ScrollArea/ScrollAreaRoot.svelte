<script lang="ts">
  import { ScrollArea as BitsScrollArea } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ScrollAreaRootProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ScrollAreaRootProps = $props();
</script>

<BitsScrollArea.Root class={cn(className)} {...restProps}>
  {@render children()}
</BitsScrollArea.Root>
