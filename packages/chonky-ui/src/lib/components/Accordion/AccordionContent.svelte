<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AccordionContentProps = $props();
</script>

<BitsAccordion.Content class={cn(className)} {...restProps}>
  {@render children()}
</BitsAccordion.Content>
