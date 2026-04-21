<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ModalDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: ModalDescriptionProps = $props();
</script>

<Dialog.Description>
  {#snippet child({ props })}
    <div {...restProps} {...props} class={cn('modal-description', className)}>
      {@render children?.()}
    </div>
  {/snippet}
</Dialog.Description>
