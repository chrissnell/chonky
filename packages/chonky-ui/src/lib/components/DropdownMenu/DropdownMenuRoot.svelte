<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface DropdownMenuRootProps {
    open?: boolean;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: DropdownMenuRootProps = $props();
</script>

<BitsDropdownMenu.Root bind:open {...restProps}>
  {@render children()}
</BitsDropdownMenu.Root>
