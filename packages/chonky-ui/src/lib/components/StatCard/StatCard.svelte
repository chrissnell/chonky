<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../internal/utils.js';

  export type StatCardVariant = 'default' | 'success' | 'info' | 'danger' | 'warning' | 'primary';

  export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    label: string;
    value?: string | number;
    variant?: StatCardVariant;
    children?: Snippet;
  }

  let {
    class: className,
    label,
    value,
    variant = 'default',
    children,
    ...restProps
  }: StatCardProps = $props();
</script>

<div
  class={cn(
    'stat-card',
    variant !== 'default' ? `stat-card--${variant}` : '',
    className
  )}
  {...restProps}
>
  <span class="stat-card__label">{label}</span>
  {#if children}
    <span class="stat-card__value">{@render children()}</span>
  {:else}
    <span class="stat-card__value">{value}</span>
  {/if}
</div>
