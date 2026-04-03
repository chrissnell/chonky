<script lang="ts">
  import { RangeCalendar as BitsRangeCalendar } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface Props {
    date: DateValue;
    month: DateValue;
    class?: string;
    children?: Snippet;
  }

  let { date, month, class: className, children, ...restProps }: Props = $props();
</script>

<BitsRangeCalendar.Cell {date} {month} class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    <BitsRangeCalendar.Day />
  {/if}
</BitsRangeCalendar.Cell>
