<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';

  export interface AlertDialogRootProps {
    open?: boolean;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: AlertDialogRootProps = $props();
</script>

<BitsAlertDialog.Root bind:open {...restProps}>
  {@render children()}
</BitsAlertDialog.Root>
