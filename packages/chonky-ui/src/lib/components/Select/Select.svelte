<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';
  import type { SelectTriggerProps } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface SelectProps extends SelectTriggerProps {
    options: { value: string; label: string }[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    class?: string;
  }

  let {
    options,
    value = $bindable(''),
    onValueChange,
    placeholder = 'Select...',
    class: className,
    ...restProps
  }: SelectProps = $props();
</script>

<BitsSelect.Root
  type="single"
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  items={options}
>
  <!-- restProps spread on Trigger: it's the visible interactive element that receives HTML attrs like id, aria-*, data-* -->
  <BitsSelect.Trigger
    class={cn('btn', className)}
    {...restProps}
  >
    {options.find((o) => o.value === value)?.label ?? placeholder}
  </BitsSelect.Trigger>
  <BitsSelect.Portal>
    <BitsSelect.Content>
      <BitsSelect.Viewport>
        {#each options as option}
          <BitsSelect.Item value={option.value} label={option.label}>
            {option.label}
          </BitsSelect.Item>
        {/each}
      </BitsSelect.Viewport>
    </BitsSelect.Content>
  </BitsSelect.Portal>
</BitsSelect.Root>
