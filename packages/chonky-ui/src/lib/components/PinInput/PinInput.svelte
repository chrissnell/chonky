<script lang="ts">
  import { PinInput as BitsPinInput } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface PinInputProps extends HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    length?: number;
    placeholder?: string;
    disabled?: boolean;
    class?: string;
  }

  let {
    value = $bindable(''),
    onValueChange,
    length = 4,
    placeholder = '',
    disabled = false,
    class: className,
    ...restProps
  }: PinInputProps = $props();
</script>

<BitsPinInput.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  maxlength={length}
  {disabled}
  class={cn('chonky-pin-input', className)}
  {...restProps}
>
  {#snippet children({ cells })}
    {#each cells as cell}
      <BitsPinInput.Cell {cell} class="chonky-pin-input__cell" data-active={cell.isActive ? '' : undefined}>
        {#if cell.char}
          <span class="chonky-pin-input__char">*</span>
        {:else if cell.hasFakeCaret}
          <span class="chonky-pin-input__caret"></span>
        {:else if placeholder}
          <span class="chonky-pin-input__placeholder">{placeholder}</span>
        {/if}
      </BitsPinInput.Cell>
    {/each}
  {/snippet}
</BitsPinInput.Root>

<style>
  :global(.chonky-pin-input) {
    display: inline-flex;
    gap: 0.5rem;
    font-family: var(--font-mono);
  }

  :global(.chonky-pin-input__cell) {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-mono);
    font-size: var(--text-xl);
    line-height: 1;
    transition: border-color var(--transition);
  }

  :global(.chonky-pin-input__cell[data-active]) {
    border-color: var(--color-primary);
  }

  :global(.chonky-pin-input__placeholder) {
    color: var(--color-text-dim);
  }

  :global(.chonky-pin-input__caret) {
    width: 1px;
    height: 1.1rem;
    background: var(--color-text);
    animation: chonky-pin-input-blink 1s step-end infinite;
  }

  @keyframes chonky-pin-input-blink {
    0%, 50% { opacity: 1; }
    50.01%, 100% { opacity: 0; }
  }
</style>
