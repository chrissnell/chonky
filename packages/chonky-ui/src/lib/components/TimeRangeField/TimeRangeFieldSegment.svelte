<script lang="ts">
  import { TimeRangeField as BitsTimeRangeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface TimeRangeFieldSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: TimeRangeFieldSegmentProps = $props();
</script>

<BitsTimeRangeField.Segment {part} class={cn(className)} {...restProps} />
