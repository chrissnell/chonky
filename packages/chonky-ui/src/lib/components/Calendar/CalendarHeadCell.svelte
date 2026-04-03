<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CalendarHeadCellProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarHeadCellProps = $props();
</script>

<BitsCalendar.HeadCell class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.HeadCell>
