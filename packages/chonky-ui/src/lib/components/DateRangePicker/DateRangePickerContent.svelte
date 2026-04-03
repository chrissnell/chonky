<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DateRangePickerContentProps {
    class?: string;
    children?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    side = 'bottom',
    sideOffset = 4,
    ...restProps
  }: DateRangePickerContentProps = $props();
</script>

<BitsDateRangePicker.Content class={cn(className)} {side} {sideOffset} {...restProps}>
  {@render children()}
</BitsDateRangePicker.Content>
