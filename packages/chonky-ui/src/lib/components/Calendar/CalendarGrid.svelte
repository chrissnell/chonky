<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CalendarGridProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarGridProps = $props();
</script>

<BitsCalendar.Grid class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.Grid>
