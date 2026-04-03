<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface DateRangePickerSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: DateRangePickerSegmentProps = $props();
</script>

<BitsDateRangePicker.Segment {part} class={cn(className)} {...restProps} />
