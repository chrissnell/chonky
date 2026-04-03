<script lang="ts">
  import { AspectRatio as BitsAspectRatio } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
    ratio?: number;
    children?: Snippet;
    class?: string;
  }

  let {
    ratio = 16 / 9,
    children,
    class: className,
    ...restProps
  }: AspectRatioProps = $props();
</script>

<BitsAspectRatio.Root
  {ratio}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsAspectRatio.Root>
