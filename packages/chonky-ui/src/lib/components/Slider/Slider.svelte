<script lang="ts">
  import { Slider as BitsSlider } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface SliderProps extends HTMLAttributes<HTMLSpanElement> {
    value?: number[];
    onValueChange?: (value: number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    class?: string;
  }

  let {
    value = $bindable([50]),
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    class: className,
    ...restProps
  }: SliderProps = $props();
</script>

<BitsSlider.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  {min}
  {max}
  {step}
  {disabled}
  class={cn(className)}
  {...restProps}
>
  <BitsSlider.Range />
  {#each value as _, i}
    <BitsSlider.Thumb index={i} />
  {/each}
</BitsSlider.Root>
