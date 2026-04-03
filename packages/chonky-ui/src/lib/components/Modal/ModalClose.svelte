<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ModalCloseProps extends HTMLAttributes<HTMLButtonElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: ModalCloseProps = $props();
</script>

<Dialog.Close class={cn('modal-close', className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    x
  {/if}
</Dialog.Close>
