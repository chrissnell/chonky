<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '../../internal/utils.js';

  export interface CalendarHeaderProps {
    class?: string;
    children?: Snippet;
  }

  let { class: className, children, ...restProps }: CalendarHeaderProps = $props();
</script>

<BitsCalendar.Header class={cn(className)} {...restProps}>
  {@render children()}
</BitsCalendar.Header>
