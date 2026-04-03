<script lang="ts">
  import { Switch as BitsSwitch } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ToggleProps extends HTMLAttributes<HTMLButtonElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    class?: string;
  }

  let {
    checked = $bindable(false),
    onCheckedChange,
    label,
    disabled = false,
    class: className,
    ...restProps
  }: ToggleProps = $props();
</script>

<label class={cn('toggle', className)}>
  <BitsSwitch.Root
    bind:checked
    onCheckedChange={(v) => onCheckedChange?.(v)}
    {disabled}
    {...restProps}
  >
    <BitsSwitch.Thumb />
  </BitsSwitch.Root>
  {#if label}<span class="toggle-label">{label}</span>{/if}
</label>
