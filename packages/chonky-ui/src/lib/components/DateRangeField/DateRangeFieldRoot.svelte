<script lang="ts">
  import { DateRangeField as BitsDateRangeField } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';

  type DateRange = { start: DateValue; end: DateValue };

  interface DateRangeFieldRootProps {
    value?: DateRange;
    onValueChange?: (value: DateRange | undefined) => void;
    placeholder?: DateValue;
    onPlaceholderChange?: (value: DateValue | undefined) => void;
    minValue?: DateValue;
    maxValue?: DateValue;
    disabled?: boolean;
    readonly?: boolean;
    locale?: string;
    granularity?: 'day' | 'month' | 'year' | 'hour' | 'minute' | 'second';
    hourCycle?: 12 | 24;
    hideTimeZone?: boolean;
    required?: boolean;
    onStartValueChange?: (value: DateValue | undefined) => void;
    onEndValueChange?: (value: DateValue | undefined) => void;
    children?: Snippet;
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
    locale = 'en',
    granularity,
    hourCycle,
    hideTimeZone = false,
    required = false,
    onStartValueChange,
    onEndValueChange,
    children,
    ...restProps
  }: DateRangeFieldRootProps = $props();
</script>

<BitsDateRangeField.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  bind:placeholder
  {onPlaceholderChange}
  {minValue}
  {maxValue}
  {disabled}
  readonly={readonlyProp}
  {locale}
  {granularity}
  {hourCycle}
  {hideTimeZone}
  {required}
  {onStartValueChange}
  {onEndValueChange}
  {...restProps}
>
  {@render children()}
</BitsDateRangeField.Root>
