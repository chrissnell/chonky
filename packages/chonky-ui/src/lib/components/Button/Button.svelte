<script lang="ts">
  import { Button as BitsButton } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export interface ButtonProps extends HTMLButtonAttributes {
    variant?: 'default' | 'primary' | 'accent' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    children?: Snippet;
  }

  let {
    variant = 'default',
    size = 'md',
    type = 'button',
    class: className,
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

<BitsButton.Root
  class={cn(
    'btn',
    variant !== 'default' && `btn-${variant}`,
    size === 'sm' && 'btn-sm',
    size === 'lg' && 'btn-lg',
    className
  )}
  {type}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</BitsButton.Root>
