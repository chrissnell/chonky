<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  interface CalendarGridBodyProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarGridBodyProps = $props();
</script>

<BitsCalendar.GridBody class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.GridBody>
