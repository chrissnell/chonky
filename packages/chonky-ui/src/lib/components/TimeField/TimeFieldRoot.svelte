<script lang="ts">
  import { TimeField as BitsTimeField } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { TimeValue } from 'bits-ui';

  interface TimeFieldRootProps {
    value?: TimeValue;
    onValueChange?: (value: TimeValue | undefined) => void;
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
  }: TimeFieldRootProps = $props();
</script>

<BitsTimeField.Root
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
</BitsTimeField.Root>
