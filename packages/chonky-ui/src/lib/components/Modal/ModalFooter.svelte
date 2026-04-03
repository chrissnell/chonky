<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: ModalFooterProps = $props();
</script>

<div class={cn('modal-footer', className)} {...restProps}>
  {@render children()}
</div>
