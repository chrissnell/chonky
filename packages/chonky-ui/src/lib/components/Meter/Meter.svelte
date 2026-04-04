<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface MeterProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
    invert?: boolean;
    class?: string;
  }

  let {
    value = 0,
    min = 0,
    max = 100,
    low = 33,
    high = 66,
    invert = false,
    class: className,
    ...restProps
  }: MeterProps = $props();

  let pct = $derived(Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)));
  let tier = $derived(value <= low ? 'meter-low' : value <= high ? 'meter-medium' : 'meter-high');
</script>

<div
  class={cn('meter', invert && 'meter-invert', className)}
  role="meter"
  aria-valuenow={value}
  aria-valuemin={min}
  aria-valuemax={max}
  {...restProps}
>
  <div class={cn('meter-fill', tier)} style="width: {pct}%"></div>
</div>
