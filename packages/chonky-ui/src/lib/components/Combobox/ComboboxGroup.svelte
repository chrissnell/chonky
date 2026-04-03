<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ComboboxGroupProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ComboboxGroupProps = $props();
</script>

<BitsCombobox.Group class={cn(className)} {...restProps}>
  {@render children()}
</BitsCombobox.Group>
