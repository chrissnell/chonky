<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface DatePickerCalendarProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: DatePickerCalendarProps = $props();
</script>

{#if children}
  <BitsDatePicker.Calendar class={cn(className)} {...restProps}>
    {@render children()}
  </BitsDatePicker.Calendar>
{:else}
  <BitsDatePicker.Calendar class={cn(className)} {...restProps}>
    {#snippet children({ months, weekdays })}
      <BitsDatePicker.Header>
        <BitsDatePicker.PrevButton>&larr;</BitsDatePicker.PrevButton>
        <BitsDatePicker.Heading />
        <BitsDatePicker.NextButton>&rarr;</BitsDatePicker.NextButton>
      </BitsDatePicker.Header>
      {#each months as month}
        <BitsDatePicker.Grid>
          <BitsDatePicker.GridHead>
            <BitsDatePicker.GridRow>
              {#each weekdays as weekday}
                <BitsDatePicker.HeadCell>{weekday}</BitsDatePicker.HeadCell>
              {/each}
            </BitsDatePicker.GridRow>
          </BitsDatePicker.GridHead>
          <BitsDatePicker.GridBody>
            {#each month.weeks as week}
              <BitsDatePicker.GridRow>
                {#each week as date}
                  <BitsDatePicker.Cell {date} month={month.value}>
                    <BitsDatePicker.Day />
                  </BitsDatePicker.Cell>
                {/each}
              </BitsDatePicker.GridRow>
            {/each}
          </BitsDatePicker.GridBody>
        </BitsDatePicker.Grid>
      {/each}
    {/snippet}
  </BitsDatePicker.Calendar>
{/if}
