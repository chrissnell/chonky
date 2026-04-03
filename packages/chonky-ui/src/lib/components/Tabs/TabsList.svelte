<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: TabsListProps = $props();
</script>

<BitsTabs.List class={cn(className)} {...restProps}>
  {@render children()}
</BitsTabs.List>
