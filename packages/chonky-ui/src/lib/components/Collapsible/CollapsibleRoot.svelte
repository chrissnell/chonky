<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface CollapsibleRootProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
  }

  let {
    open = $bindable(false),
    onOpenChange,
    disabled = false,
    class: className,
    children,
    ...restProps
  }: CollapsibleRootProps = $props();
</script>

<BitsCollapsible.Root
  bind:open
  onOpenChange={(o) => onOpenChange?.(o)}
  {disabled}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsCollapsible.Root>
