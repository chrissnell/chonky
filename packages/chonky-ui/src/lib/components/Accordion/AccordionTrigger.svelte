<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface AccordionTriggerProps extends HTMLButtonAttributes {
    class?: string;
    children?: Snippet;
  }

  let {
    class: className,
    children,
    ...restProps
  }: AccordionTriggerProps = $props();
</script>

<BitsAccordion.Header>
  <BitsAccordion.Trigger class={cn(className)} {...restProps}>
    {@render children()}
  </BitsAccordion.Trigger>
</BitsAccordion.Header>
