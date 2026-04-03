<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DatePickerTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DatePickerTriggerProps = $props();
</script>

<BitsDatePicker.Trigger class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    &#x1f4c5;
  {/if}
</BitsDatePicker.Trigger>
