<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DatePickerContentProps {
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
  }: DatePickerContentProps = $props();
</script>

<BitsDatePicker.Content class={cn(className)} {side} {sideOffset} {...restProps}>
  {@render children()}
</BitsDatePicker.Content>
