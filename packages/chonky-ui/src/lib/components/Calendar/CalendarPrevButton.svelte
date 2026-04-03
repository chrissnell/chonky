<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CalendarPrevButtonProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarPrevButtonProps = $props();
</script>

<BitsCalendar.PrevButton class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    &larr;
  {/if}
</BitsCalendar.PrevButton>
