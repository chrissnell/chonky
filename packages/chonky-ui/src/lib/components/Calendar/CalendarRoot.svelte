<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';
  import type { DateMatcher } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface CalendarRootProps {
    type?: 'single' | 'multiple';
    value?: DateValue | DateValue[];
    onValueChange?: (value: DateValue | DateValue[] | undefined) => void;
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
    locale?: string;
    calendarLabel?: string;
    initialFocus?: boolean;
    class?: string;
    children?: Snippet;
  }

  let {
    type = 'single',
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
    locale = 'en',
    calendarLabel,
    initialFocus = false,
    class: className,
    children,
    ...restProps
  }: CalendarRootProps = $props();
</script>

{#if type === 'multiple'}
  <BitsCalendar.Root
    type="multiple"
    bind:value={value as DateValue[]}
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
    {locale}
    {calendarLabel}
    {initialFocus}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsCalendar.Root>
{:else}
  <BitsCalendar.Root
    type="single"
    bind:value={value as DateValue}
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
    {locale}
    {calendarLabel}
    {initialFocus}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsCalendar.Root>
{/if}
