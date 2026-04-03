<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface TabsRootProps extends HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    class?: string;
    children?: Snippet;
  }

  let {
    value = $bindable(''),
    onValueChange,
    class: className,
    children,
    ...restProps
  }: TabsRootProps = $props();
</script>

<BitsTabs.Root
  bind:value
  onValueChange={(v) => onValueChange?.(v)}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsTabs.Root>
