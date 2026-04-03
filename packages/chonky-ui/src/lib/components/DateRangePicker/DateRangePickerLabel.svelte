<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DateRangePickerLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DateRangePickerLabelProps = $props();
</script>

<BitsDateRangePicker.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsDateRangePicker.Label>
