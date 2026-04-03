<script lang="ts">
  import { Separator as BitsSeparator } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
  }

  let {
    orientation = 'horizontal',
    class: className,
    ...restProps
  }: SeparatorProps = $props();
</script>

<BitsSeparator.Root {orientation} class={cn(className)} {...restProps} />
