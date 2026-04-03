<script lang="ts">
  import { ToggleGroup as BitsToggleGroup } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToggleGroupProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
  }

  let {
    type = 'single',
    value = $bindable(type === 'single' ? '' : []),
    onValueChange,
    disabled = false,
    children,
    class: className,
    ...restProps
  }: ToggleGroupProps = $props();
</script>

{#if type === 'single'}
  <BitsToggleGroup.Root
    {type}
    bind:value={value as string}
    onValueChange={(v) => onValueChange?.(v)}
    {disabled}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsToggleGroup.Root>
{:else}
  <BitsToggleGroup.Root
    {type}
    bind:value={value as string[]}
    onValueChange={(v) => onValueChange?.(v)}
    {disabled}
    class={cn(className)}
    {...restProps}
  >
    {@render children()}
  </BitsToggleGroup.Root>
{/if}
