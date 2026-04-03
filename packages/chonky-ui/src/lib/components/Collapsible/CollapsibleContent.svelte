<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface CollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CollapsibleContentProps = $props();
</script>

<BitsCollapsible.Content class={cn(className)} {...restProps}>
  {@render children()}
</BitsCollapsible.Content>
