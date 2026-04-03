<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';

  interface DropdownMenuSubProps {
    open?: boolean;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: DropdownMenuSubProps = $props();
</script>

<BitsDropdownMenu.Sub bind:open {...restProps}>
  {@render children()}
</BitsDropdownMenu.Sub>
