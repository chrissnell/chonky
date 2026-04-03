<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';
  import Button from '../Button/Button.svelte';

  interface ApplyBannerProps extends HTMLAttributes<HTMLDivElement> {
    count: number;
    onApply: () => void;
    class?: string;
  }

  let { count, onApply, class: className, ...restProps }: ApplyBannerProps = $props();
</script>

<div class={cn('apply', className)} {...restProps}>
  <span class="apply-text">{count} pending changes</span>
  <Button variant="primary" size="sm" onclick={onApply}>apply</Button>
</div>
