<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    class?: string;
    children?: Snippet;
  }

  let {
    value,
    class: className,
    children,
    ...restProps
  }: AccordionItemProps = $props();
</script>

<BitsAccordion.Item {value} class={cn(className)} {...restProps}>
  {@render children()}
</BitsAccordion.Item>
