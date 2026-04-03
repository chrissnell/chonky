<script lang="ts">
  import { Toolbar as BitsToolbar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ToolbarGroupItemProps extends HTMLButtonAttributes {
    value: string;
    class?: string;
    children?: Snippet;
  }

  let {
    value,
    class: className,
    children,
    ...restProps
  }: ToolbarGroupItemProps = $props();
</script>

<BitsToolbar.GroupItem {value} class={cn('btn', 'btn-sm', className)} {...restProps}>
  {@render children()}
</BitsToolbar.GroupItem>
