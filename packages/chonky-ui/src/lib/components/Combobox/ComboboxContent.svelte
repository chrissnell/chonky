<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface ComboboxContentProps {
    class?: string;
    children?: Snippet;
    sideOffset?: number;
  }

  let {
    class: className,
    children,
    sideOffset = 4,
    ...restProps
  }: ComboboxContentProps = $props();
</script>

<BitsCombobox.Portal>
  <BitsCombobox.Content class={cn(className)} {sideOffset} {...restProps}>
    {@render children()}
  </BitsCombobox.Content>
</BitsCombobox.Portal>
