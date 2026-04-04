<script lang="ts">
  import { RangeCalendar as BitsRangeCalendar } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import type { DateMatcher } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  type DateRange = { start: DateValue; end: DateValue };

  type RangeCalendarChildrenSnippetProps = {
    months: Array<{ value: DateValue; dates: DateValue[]; weeks: DateValue[][] }>;
    weekdays: string[];
  };

  export interface RangeCalendarRootProps {
    value?: DateRange;
    onValueChange?: (value: DateRange | undefined) => void;
    placeholder?: DateValue;
    onPlaceholderChange?: (value: DateValue) => void;
    minValue?: DateValue;
    maxValue?: DateValue;
    disabled?: boolean;
    readonly?: boolean;
    preventDeselect?: boolean;
    numberOfMonths?: number;
    pagedNavigation?: boolean;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    weekdayFormat?: 'long' | 'short' | 'narrow';
    isDateDisabled?: DateMatcher;
    isDateUnavailable?: DateMatcher;
    fixedWeeks?: boolean;
    disableDaysOutsideMonth?: boolean;
    minDays?: number;
    maxDays?: number;
    locale?: string;
    calendarLabel?: string;
    class?: string;
    children?: Snippet<[RangeCalendarChildrenSnippetProps]>;
  }

  let {
    value = $bindable(),
    onValueChange,
    placeholder = $bindable(),
    onPlaceholderChange,
    minValue,
    maxValue,
    disabled = false,
    readonly: readonlyProp = false,
    preventDeselect = false,
    numberOfMonths = 1,
    pagedNavigation = false,
    weekStartsOn = 0,
    weekdayFormat = 'narrow',
    isDateDisabled,
    isDateUnavailable,
    fixedWeeks = false,
    disableDaysOutsideMonth = false,
    minDays,
    maxDays,
    locale = 'en',
    calendarLabel,
    class: className,
    children: childrenProp,
    ...restProps
  }: RangeCalendarRootProps = $props();
</script>

<BitsRangeCalendar.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  bind:placeholder
  {onPlaceholderChange}
  {minValue}
  {maxValue}
  {disabled}
  readonly={readonlyProp}
  {preventDeselect}
  {numberOfMonths}
  {pagedNavigation}
  {weekStartsOn}
  {weekdayFormat}
  {isDateDisabled}
  {isDateUnavailable}
  {fixedWeeks}
  {disableDaysOutsideMonth}
  {minDays}
  {maxDays}
  {locale}
  {calendarLabel}
  class={cn(className)}
  {...restProps}
>
  {#snippet children({ months, weekdays })}
    {@render childrenProp?.({ months, weekdays } as RangeCalendarChildrenSnippetProps)}
  {/snippet}
</BitsRangeCalendar.Root>
