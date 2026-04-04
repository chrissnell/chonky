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
  <div class="chonky-combobox-root">
    {@render children?.()}
  </div>
</BitsCombobox.Root>

<style>
  .chonky-combobox-root {
    display: inline-flex;
    align-items: stretch;
    gap: 0.5rem;
  }
  .chonky-combobox-root :global([data-combobox-input]) {
    flex: 1;
    min-width: 0;
  }
  .chonky-combobox-root :global([data-combobox-trigger]) {
    background: transparent;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
</style>
