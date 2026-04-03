<script lang="ts">
  import { Toolbar as BitsToolbar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToolbarButtonProps extends HTMLButtonAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ToolbarButtonProps = $props();
</script>

<BitsToolbar.Button class={cn('btn', 'btn-sm', className)} {...restProps}>
  {@render children()}
</BitsToolbar.Button>
