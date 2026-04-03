<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    class?: string;
    children?: Snippet;
  }

  let {
    value,
    class: className,
    children,
    ...restProps
  }: TabsContentProps = $props();
</script>

<BitsTabs.Content {value} class={cn(className)} {...restProps}>
  {@render children()}
</BitsTabs.Content>
