<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface TabsTriggerProps extends HTMLButtonAttributes {
    value: string;
    class?: string;
    children?: Snippet;
  }

  let {
    value,
    class: className,
    children,
    ...restProps
  }: TabsTriggerProps = $props();
</script>

<BitsTabs.Trigger {value} class={cn(className)} {...restProps}>
  {@render children()}
</BitsTabs.Trigger>
