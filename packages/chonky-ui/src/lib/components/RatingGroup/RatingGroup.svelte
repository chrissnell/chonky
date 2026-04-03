<script lang="ts">
  import { RatingGroup as BitsRatingGroup } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface RatingGroupProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    onValueChange?: (value: number) => void;
    max?: number;
    disabled?: boolean;
    class?: string;
  }

  let {
    value = $bindable(0),
    onValueChange,
    max = 5,
    disabled = false,
    class: className,
    ...restProps
  }: RatingGroupProps = $props();
</script>

<BitsRatingGroup.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  {max}
  {disabled}
  class={cn(className)}
  {...restProps}
>
  {#each { length: max } as _, i}
    <BitsRatingGroup.Item index={i + 1}>
      {#snippet children({ highlighted })}
        <span>{highlighted ? '★' : '☆'}</span>
      {/snippet}
    </BitsRatingGroup.Item>
  {/each}
</BitsRatingGroup.Root>
