<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    title?: string;
    children?: Snippet;
  }

  let { class: className, title, children, ...restProps }: BoxProps = $props();
</script>

<div class={cn('box', title ? 'box--titled' : '', className)} {...restProps}>
  {#if title}
    <div class="box-title">{title}</div>
    <div class="box-body">
      {@render children()}
    </div>
  {:else}
    {@render children()}
  {/if}
</div>
