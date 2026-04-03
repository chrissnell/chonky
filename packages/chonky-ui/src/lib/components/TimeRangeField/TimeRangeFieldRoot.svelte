<script lang="ts">
  import { TimeRangeField as BitsTimeRangeField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { TimeValue, TimeRange } from 'bits-ui';

  export interface TimeRangeFieldRootProps {
    value?: TimeRange<TimeValue>;
    onValueChange?: (value: TimeRange<TimeValue> | undefined) => void;
    placeholder?: TimeValue;
    onPlaceholderChange?: (value: TimeValue | undefined) => void;
    minValue?: TimeValue;
    maxValue?: TimeValue;
    disabled?: boolean;
    readonly?: boolean;
    locale?: string;
    granularity?: 'hour' | 'minute' | 'second';
    hourCycle?: 12 | 24;
    hideTimeZone?: boolean;
    required?: boolean;
    onStartValueChange?: (value: TimeValue | undefined) => void;
    onEndValueChange?: (value: TimeValue | undefined) => void;
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
  }: TimeRangeFieldRootProps = $props();
</script>

<BitsTimeRangeField.Root
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
</BitsTimeRangeField.Root>
