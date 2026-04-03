<script lang="ts">
  import { ContextMenu as BitsContextMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface ContextMenuGroupHeadingProps {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: ContextMenuGroupHeadingProps = $props();
</script>

<BitsContextMenu.GroupHeading class={cn(className)} {...restProps}>
  {@render children()}
</BitsContextMenu.GroupHeading>
