<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DateRangePickerTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DateRangePickerTriggerProps = $props();
</script>

<BitsDateRangePicker.Trigger class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    &#x1f4c5;
  {/if}
</BitsDateRangePicker.Trigger>
