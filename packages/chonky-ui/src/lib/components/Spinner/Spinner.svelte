<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    size?: number;
    class?: string;
  }

  let { size = 16, class: className, ...restProps }: SpinnerProps = $props();
</script>

<span
  class={cn('spinner', className)}
  style="width:{size}px;height:{size}px"
  {...restProps}
></span>
