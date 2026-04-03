<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface ContextMenuRootProps {
    children?: Snippet;
  }

  let {
    children,
    ...restProps
  }: ContextMenuRootProps = $props();
</script>

<BitsContextMenu.Root {...restProps}>
  {@render children()}
</BitsContextMenu.Root>
