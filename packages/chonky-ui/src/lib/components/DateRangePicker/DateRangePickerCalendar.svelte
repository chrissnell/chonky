<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DateRangePickerCalendarProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DateRangePickerCalendarProps = $props();
</script>

{#if children}
  <BitsDateRangePicker.Calendar class={cn(className)} {...restProps}>
    {@render children()}
  </BitsDateRangePicker.Calendar>
{:else}
  <BitsDateRangePicker.Calendar class={cn(className)} {...restProps}>
    {#snippet children({ months, weekdays })}
      <BitsDateRangePicker.Header>
        <BitsDateRangePicker.PrevButton>&larr;</BitsDateRangePicker.PrevButton>
        <BitsDateRangePicker.Heading />
        <BitsDateRangePicker.NextButton>&rarr;</BitsDateRangePicker.NextButton>
      </BitsDateRangePicker.Header>
      {#each months as month}
        <BitsDateRangePicker.Grid>
          <BitsDateRangePicker.GridHead>
            <BitsDateRangePicker.GridRow>
              {#each weekdays as weekday}
                <BitsDateRangePicker.HeadCell>{weekday}</BitsDateRangePicker.HeadCell>
              {/each}
            </BitsDateRangePicker.GridRow>
          </BitsDateRangePicker.GridHead>
          <BitsDateRangePicker.GridBody>
            {#each month.weeks as week}
              <BitsDateRangePicker.GridRow>
                {#each week as date}
                  <BitsDateRangePicker.Cell {date} month={month.value}>
                    <BitsDateRangePicker.Day />
                  </BitsDateRangePicker.Cell>
                {/each}
              </BitsDateRangePicker.GridRow>
            {/each}
          </BitsDateRangePicker.GridBody>
        </BitsDateRangePicker.Grid>
      {/each}
    {/snippet}
  </BitsDateRangePicker.Calendar>
{/if}
