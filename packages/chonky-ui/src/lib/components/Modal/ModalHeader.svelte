<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: ModalHeaderProps = $props();
</script>

<div class={cn('modal-header', className)} {...restProps}>
  {@render children()}
</div>
