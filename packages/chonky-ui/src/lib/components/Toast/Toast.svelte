<script lang="ts">
  import type { ToastItem } from './toast.svelte.js';
  import { dismiss } from './toast.svelte.js';
  import { cn } from '../../internal/utils.js';

  export interface ToastProps {
    item: ToastItem;
    class?: string;
  }

  let { item, class: className }: ToastProps = $props();
</script>

<div class={cn('toast', `toast-${item.variant}`, className)}>
  <span>{item.message}</span>
  <button class="toast-close" onclick={() => dismiss(item.id)}>x</button>
</div>
