<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DatePickerLabelProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DatePickerLabelProps = $props();
</script>

<BitsDatePicker.Label class={cn(className)} {...restProps}>
  {@render children()}
</BitsDatePicker.Label>
