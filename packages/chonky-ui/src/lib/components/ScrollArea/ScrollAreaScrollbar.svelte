<script lang="ts">
  import { ScrollArea as BitsScrollArea } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ScrollAreaScrollbarProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'vertical' | 'horizontal';
    class?: string;
  }

  let {
    orientation = 'vertical',
    class: className,
    ...restProps
  }: ScrollAreaScrollbarProps = $props();
</script>

<BitsScrollArea.Scrollbar {orientation} class={cn(className)} {...restProps}>
  <BitsScrollArea.Thumb />
</BitsScrollArea.Scrollbar>
