<script lang="ts">
  import { RadioGroup as BitsRadioGroup } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface RadioProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
    label?: string;
    disabled?: boolean;
    class?: string;
  }

  let {
    value,
    label,
    disabled = false,
    class: className,
    ...restProps
  }: RadioProps = $props();
</script>

<label class={cn('radio', disabled && 'disabled', className)}>
  <BitsRadioGroup.Item {value} {disabled} {...restProps}>
    {#snippet children({ checked })}
      <span class="radio-mark" class:checked></span>
    {/snippet}
  </BitsRadioGroup.Item>
  {#if label}{label}{/if}
</label>
