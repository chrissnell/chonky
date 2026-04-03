<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import type { DateMatcher } from 'bits-ui';

  export interface DatePickerRootProps {
    value?: DateValue;
    onValueChange?: (value: DateValue | undefined) => void;
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
    closeOnDateSelect?: boolean;
    numberOfMonths?: number;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    weekdayFormat?: 'long' | 'short' | 'narrow';
    fixedWeeks?: boolean;
    pagedNavigation?: boolean;
    preventDeselect?: boolean;
    calendarLabel?: string;
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
    closeOnDateSelect = true,
    numberOfMonths = 1,
    weekStartsOn = 0,
    weekdayFormat = 'narrow',
    fixedWeeks = false,
    pagedNavigation = false,
    preventDeselect = false,
    calendarLabel,
    children,
    ...restProps
  }: DatePickerRootProps = $props();
</script>

<BitsDatePicker.Root
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
  {closeOnDateSelect}
  {numberOfMonths}
  {weekStartsOn}
  {weekdayFormat}
  {fixedWeeks}
  {pagedNavigation}
  {preventDeselect}
  {calendarLabel}
  {...restProps}
>
  {@render children()}
</BitsDatePicker.Root>
