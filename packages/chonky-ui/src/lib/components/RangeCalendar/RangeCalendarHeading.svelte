<script lang="ts">
  import { RangeCalendar as BitsRangeCalendar } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface Props {
    class?: string;
  }

  let { class: className, ...restProps }: Props = $props();
</script>

<BitsRangeCalendar.Heading class={cn(className)} {...restProps} />
