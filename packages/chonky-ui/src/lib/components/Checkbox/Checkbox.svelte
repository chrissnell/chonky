<script lang="ts">
  import { Checkbox as BitsCheckbox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface CheckboxProps extends HTMLAttributes<HTMLButtonElement> {
    checked?: boolean | 'indeterminate';
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
    disabled?: boolean;
    label?: string;
    children?: Snippet;
    class?: string;
  }

  let {
    checked = $bindable(false),
    onCheckedChange,
    disabled = false,
    label,
    children,
    class: className,
    ...restProps
  }: CheckboxProps = $props();
</script>

<div class={cn('radio', disabled && 'disabled', className)}>
  <BitsCheckbox.Root
    bind:checked
    onCheckedChange={(v) => onCheckedChange?.(v)}
    {disabled}
    {...restProps}
  >
    {#snippet children({ checked: isChecked, indeterminate })}
      {#if indeterminate}
        <span>&#8211;</span>
      {:else if isChecked}
        <span>&#10003;</span>
      {/if}
    {/snippet}
  </BitsCheckbox.Root>
  {#if children}
    {@render children()}
  {:else if label}
    <span class="toggle-label">{label}</span>
  {/if}
</div>
