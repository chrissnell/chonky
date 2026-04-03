<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface CollapsibleTriggerProps extends HTMLButtonAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: CollapsibleTriggerProps = $props();
</script>

<BitsCollapsible.Trigger class={cn(className)} {...restProps}>
  {@render children()}
</BitsCollapsible.Trigger>
