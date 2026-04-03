<script lang="ts">
  import { PinInput as BitsPinInput } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface PinInputProps extends HTMLAttributes<HTMLDivElement> {
    value?: string[];
    onValueChange?: (value: string[]) => void;
    length?: number;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'password';
    class?: string;
  }

  let {
    value = $bindable([]),
    onValueChange,
    length = 4,
    placeholder = '○',
    disabled = false,
    type = 'text',
    class: className,
    ...restProps
  }: PinInputProps = $props();
</script>

<BitsPinInput.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  {placeholder}
  {disabled}
  {type}
  class={cn(className)}
  {...restProps}
>
  {#each { length } as _, i}
    <BitsPinInput.Cell index={i} />
  {/each}
</BitsPinInput.Root>
