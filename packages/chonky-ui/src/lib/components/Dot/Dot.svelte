<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface DotProps extends HTMLAttributes<HTMLSpanElement> {
    on?: boolean;
    class?: string;
  }

  let { on = false, class: className, ...restProps }: DotProps = $props();
</script>

<span class={cn('dot', on && 'dot-on', className)} {...restProps}></span>
