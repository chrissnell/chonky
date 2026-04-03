<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: ModalBodyProps = $props();
</script>

<div class={cn('modal-body', className)} {...restProps}>
  {@render children()}
</div>
