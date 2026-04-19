<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { DrawerCloseProps } from './types.js';
  import { cn } from '../../internal/utils.js';

  let { class: className, children, ...restProps }: DrawerCloseProps = $props();
</script>

<Dialog.Close type="button" class={cn('drawer-close', className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    x
  {/if}
</Dialog.Close>
