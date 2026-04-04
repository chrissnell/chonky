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
  class={cn('chonky-rating-group', className)}
  {...restProps}
>
  {#each { length: max } as _, i}
    <BitsRatingGroup.Item index={i} class="chonky-rating-group-item">
      {#snippet children({ state })}
        <span class="star" class:highlighted={state === 'active'}>{state === 'active' ? '★' : '☆'}</span>
      {/snippet}
    </BitsRatingGroup.Item>
  {/each}
</BitsRatingGroup.Root>

<style>
  :global(.chonky-rating-group) {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }

  :global(.chonky-rating-group-item) {
    background: transparent;
    border: none;
    padding: 0.125rem;
    cursor: pointer;
    color: var(--color-fg-muted, #888);
    font-size: 1.8rem;
    line-height: 1;
    transition: color 0.15s ease, transform 0.1s ease;
  }

  :global(.chonky-rating-group-item:hover:not([data-disabled])) {
    transform: scale(1.1);
  }

  :global(.chonky-rating-group-item:focus-visible) {
    outline: 2px solid var(--chonky-color-primary, #ffaa00);
    outline-offset: 2px;
  }

  :global(.chonky-rating-group-item[data-disabled]) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .star {
    display: inline-block;
  }

  .star.highlighted {
    color: var(--chonky-color-primary, #ffaa00);
  }
</style>
