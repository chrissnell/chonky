<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface AlertDialogContentProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogContentProps = $props();
</script>

<BitsAlertDialog.Overlay />
<BitsAlertDialog.Content class={cn(className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Content>
