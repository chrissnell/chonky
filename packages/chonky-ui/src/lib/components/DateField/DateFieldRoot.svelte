<script lang="ts">
  import { DateField as BitsDateField } from 'bits-ui';
  import type { DateValue } from '@internationalized/date';
  import type { Snippet } from 'svelte';

  export interface DateFieldRootProps {
    value?: DateValue;
    onValueChange?: (value: DateValue | undefined) => void;
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
    children,
    ...restProps
  }: DateFieldRootProps = $props();
</script>

<BitsDateField.Root
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
  {...restProps}
>
  {@render children()}
</BitsDateField.Root>
