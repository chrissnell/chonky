<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ComboboxItemProps {
    class?: string;
    children?: Snippet;
    value: string;
    label?: string;
    disabled?: boolean;
  }

  let {
    class: className,
    children,
    value,
    label,
    disabled,
    ...restProps
  }: ComboboxItemProps = $props();
</script>

<BitsCombobox.Item class={cn(className)} {value} {label} {disabled} {...restProps}>
  {@render children()}
</BitsCombobox.Item>
