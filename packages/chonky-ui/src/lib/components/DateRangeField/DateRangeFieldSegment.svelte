<script lang="ts">
  import { DateRangeField as BitsDateRangeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface DateRangeFieldSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: DateRangeFieldSegmentProps = $props();
</script>

<BitsDateRangeField.Segment {part} class={cn(className)} {...restProps} />
