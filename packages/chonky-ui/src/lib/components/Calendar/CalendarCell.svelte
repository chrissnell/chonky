<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CalendarCellProps {
    date: DateValue;
    month: DateValue;
    class?: string;
    children?: Snippet;
  }

  let { date, month, class: className, children, ...restProps }: CalendarCellProps = $props();
</script>

<BitsCalendar.Cell {date} {month} class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    <BitsCalendar.Day />
  {/if}
</BitsCalendar.Cell>
