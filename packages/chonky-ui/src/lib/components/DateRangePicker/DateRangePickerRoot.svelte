<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import type { DateMatcher } from 'bits-ui';

  type DateRange = { start: DateValue; end: DateValue };

  export interface DateRangePickerRootProps {
    value?: DateRange;
    onValueChange?: (value: DateRange | undefined) => void;
    placeholder?: DateValue;
    onPlaceholderChange?: (value: DateValue | undefined) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    minValue?: DateValue;
    maxValue?: DateValue;
    disabled?: boolean;
    readonly?: boolean;
    isDateDisabled?: DateMatcher;
    isDateUnavailable?: DateMatcher;
    locale?: string;
    granularity?: 'day' | 'month' | 'year' | 'hour' | 'minute' | 'second';
    hourCycle?: 12 | 24;
    hideTimeZone?: boolean;
    required?: boolean;
    closeOnRangeSelect?: boolean;
    numberOfMonths?: number;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    weekdayFormat?: 'long' | 'short' | 'narrow';
    fixedWeeks?: boolean;
    pagedNavigation?: boolean;
    preventDeselect?: boolean;
    calendarLabel?: string;
    minDays?: number;
    maxDays?: number;
    onStartValueChange?: (value: DateValue | undefined) => void;
    onEndValueChange?: (value: DateValue | undefined) => void;
    children?: Snippet;
  }

  let {
    value = $bindable(),
    onValueChange,
    placeholder = $bindable(),
    onPlaceholderChange,
    open = $bindable(false),
    onOpenChange,
    minValue,
    maxValue,
    disabled = false,
    readonly: readonlyProp = false,
    isDateDisabled,
    isDateUnavailable,
    locale = 'en',
    granularity,
    hourCycle,
    hideTimeZone = false,
    required = false,
    closeOnRangeSelect = true,
    numberOfMonths = 1,
    weekStartsOn = 0,
    weekdayFormat = 'narrow',
    fixedWeeks = false,
    pagedNavigation = false,
    preventDeselect = false,
    calendarLabel,
    minDays,
    maxDays,
    onStartValueChange,
    onEndValueChange,
    children,
    ...restProps
  }: DateRangePickerRootProps = $props();
</script>

<BitsDateRangePicker.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  bind:placeholder
  {onPlaceholderChange}
  bind:open
  {onOpenChange}
  {minValue}
  {maxValue}
  {disabled}
  readonly={readonlyProp}
  {isDateDisabled}
  {isDateUnavailable}
  {locale}
  {granularity}
  {hourCycle}
  {hideTimeZone}
  {required}
  {closeOnRangeSelect}
  {numberOfMonths}
  {weekStartsOn}
  {weekdayFormat}
  {fixedWeeks}
  {pagedNavigation}
  {preventDeselect}
  {calendarLabel}
  {minDays}
  {maxDays}
  {onStartValueChange}
  {onEndValueChange}
  {...restProps}
>
  {@render children()}
</BitsDateRangePicker.Root>
