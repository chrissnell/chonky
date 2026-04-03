<script lang="ts">
  import { RadioGroup as BitsRadioGroup } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    class?: string;
    children?: Snippet;
  }

  let {
    value = $bindable(''),
    onValueChange,
    name,
    class: className,
    children,
    ...restProps
  }: RadioGroupProps = $props();
</script>

<BitsRadioGroup.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  {name}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsRadioGroup.Root>
