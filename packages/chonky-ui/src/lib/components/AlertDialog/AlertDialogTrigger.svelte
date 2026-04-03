<script lang="ts">
  import { AlertDialog as BitsAlertDialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface AlertDialogTriggerProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AlertDialogTriggerProps = $props();
</script>

<BitsAlertDialog.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsAlertDialog.Trigger>
