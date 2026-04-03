<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface AlertDialogTitleProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogTitleProps = $props();
</script>

<BitsAlertDialog.Title class={cn(className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Title>
