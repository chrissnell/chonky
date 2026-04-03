<script lang="ts">
  import { Calendar as BitsCalendar } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface CalendarHeadingProps {
    class?: string;
  }

  let { class: className, ...restProps }: CalendarHeadingProps = $props();
</script>

<BitsCalendar.Heading class={cn(className)} {...restProps} />
