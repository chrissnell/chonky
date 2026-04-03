<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CalendarGridHeadProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarGridHeadProps = $props();
</script>

<BitsCalendar.GridHead class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.GridHead>
