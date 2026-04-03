<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface AccordionRootProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    class?: string;
    children?: Snippet;
  }

  let {
    type = 'single',
    value = $bindable(''),
    onValueChange,
    class: className,
    children,
    ...restProps
  }: AccordionRootProps = $props();
</script>

{#if type === 'multiple'}
  <BitsAccordion.Root
    type="multiple"
    bind:value={value as string[]}
    onValueChange={(v) => onValueChange?.(v)}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsAccordion.Root>
{:else}
  <BitsAccordion.Root
    type="single"
    bind:value={value as string}
    onValueChange={(v) => onValueChange?.(v)}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsAccordion.Root>
{/if}
