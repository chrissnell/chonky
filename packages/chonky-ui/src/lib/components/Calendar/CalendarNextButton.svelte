<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CalendarNextButtonProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarNextButtonProps = $props();
</script>

<BitsCalendar.NextButton class={cn(className)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    &rarr;
  {/if}
</BitsCalendar.NextButton>
