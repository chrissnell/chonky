<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
    /**
     * When true (default), the header is wrapped in bits-ui's `Dialog.Title`
     * so its contents automatically become the dialog's `aria-labelledby`
     * target. Set to false to opt out — e.g. if the consumer is rendering
     * their own `Dialog.Title` elsewhere, or the modal truly has no title.
     */
    asTitle?: boolean;
  }

  let {
    class: className,
    children,
    asTitle = true,
    ...restProps
  }: ModalHeaderProps = $props();
</script>

{#if asTitle}
  <Dialog.Title>
    {#snippet child({ props })}
      <div {...restProps} {...props} class={cn('modal-header', className)}>
        {@render children?.()}
      </div>
    {/snippet}
  </Dialog.Title>
{:else}
  <div class={cn('modal-header', className)} {...restProps}>
    {@render children?.()}
  </div>
{/if}
