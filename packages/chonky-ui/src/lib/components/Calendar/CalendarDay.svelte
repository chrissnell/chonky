<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface CalendarDayProps {
    class?: string;
  }

  let { class: className, ...restProps }: CalendarDayProps = $props();
</script>

<BitsCalendar.Day class={cn(className)} {...restProps} />
