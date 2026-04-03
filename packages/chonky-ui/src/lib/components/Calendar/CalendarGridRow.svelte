<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CalendarGridRowProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarGridRowProps = $props();
</script>

<BitsCalendar.GridRow class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.GridRow>
