<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface AlertDialogActionProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogActionProps = $props();
</script>

<BitsAlertDialog.Action class={cn('btn btn-danger', className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Action>
