<script lang="ts">
  import { ToggleGroup as BitsToggleGroup } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToggleGroupItemProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
  }

  let {
    value,
    disabled = false,
    children,
    class: className,
    ...restProps
  }: ToggleGroupItemProps = $props();
</script>

<BitsToggleGroup.Item
  {value}
  {disabled}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsToggleGroup.Item>
