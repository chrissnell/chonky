<script lang="ts">
  import { DateField as BitsDateField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface DateFieldSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: DateFieldSegmentProps = $props();
</script>

<BitsDateField.Segment {part} class={cn(className)} {...restProps} />
