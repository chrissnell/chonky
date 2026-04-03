<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ComboboxTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ComboboxTriggerProps = $props();
</script>

<BitsCombobox.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsCombobox.Trigger>
