<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface AlertDialogCancelProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogCancelProps = $props();
</script>

<BitsAlertDialog.Cancel class={cn('btn', className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Cancel>
