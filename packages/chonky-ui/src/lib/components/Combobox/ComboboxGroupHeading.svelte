<script lang="ts">
  import { Combobox as BitsCombobox } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ComboboxGroupHeadingProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ComboboxGroupHeadingProps = $props();
</script>

<BitsCombobox.GroupHeading class={cn(className)} {...restProps}>
  {@render children()}
</BitsCombobox.GroupHeading>
