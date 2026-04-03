<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface DropdownMenuCheckboxItemProps {
    class?: string;
    children?: Snippet;
    checked?: boolean;
    disabled?: boolean;
  }

  let {
    class: className,
    children,
    checked = $bindable(false),
    disabled,
    ...restProps
  }: DropdownMenuCheckboxItemProps = $props();
</script>

<BitsDropdownMenu.CheckboxItem class={cn(className)} bind:checked {disabled} {...restProps}>
  {@render children()}
</BitsDropdownMenu.CheckboxItem>
