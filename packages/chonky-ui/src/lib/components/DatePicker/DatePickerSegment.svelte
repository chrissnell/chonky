<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface DatePickerSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: DatePickerSegmentProps = $props();
</script>

<BitsDatePicker.Segment {part} class={cn(className)} {...restProps} />
