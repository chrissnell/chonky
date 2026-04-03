<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface AlertDialogDescriptionProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogDescriptionProps = $props();
</script>

<BitsAlertDialog.Description class={cn(className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Description>
