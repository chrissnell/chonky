<script lang="ts">
  import { Toggle as BitsToggle } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  interface ToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
  }

  let {
    pressed = $bindable(false),
    onPressedChange,
    disabled = false,
    children,
    class: className,
    ...restProps
  }: ToggleButtonProps = $props();
</script>

<BitsToggle.Root
  bind:pressed
  onPressedChange={(v) => onPressedChange?.(v)}
  {disabled}
  class={cn(className)}
  {...restProps}
>
  {@render children()}
</BitsToggle.Root>
