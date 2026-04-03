<script lang="ts">
  import { Dialog as BitsDialog, Command as BitsCommand } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CommandDialogProps {
    open?: boolean;
    class?: string;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    class: className,
    children,
    ...restProps
  }: CommandDialogProps = $props();
</script>

<BitsDialog.Root bind:open>
  <BitsDialog.Portal>
    <BitsDialog.Overlay class="backdrop" />
    <BitsDialog.Content class={cn('modal', className)} style="padding: 0;" {...restProps}>
      <BitsCommand.Root>
        {@render children()}
      </BitsCommand.Root>
    </BitsDialog.Content>
  </BitsDialog.Portal>
</BitsDialog.Root>
