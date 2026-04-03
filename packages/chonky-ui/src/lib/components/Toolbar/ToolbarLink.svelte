<script lang="ts">
  import { Toolbar as BitsToolbar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToolbarLinkProps extends HTMLAnchorAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ToolbarLinkProps = $props();
</script>

<BitsToolbar.Link class={cn(className)} {...restProps}>
  {@render children()}
</BitsToolbar.Link>
