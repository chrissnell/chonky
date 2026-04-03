<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface ComboboxRootProps {
    open?: boolean;
    value?: string;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    value = $bindable(''),
    children,
    ...restProps
  }: ComboboxRootProps = $props();
</script>

<BitsCombobox.Root bind:open bind:value {...restProps}>
  {@render children()}
</BitsCombobox.Root>
