<script lang="ts">
  import { TimeField as BitsTimeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface TimeFieldSegmentProps {
    part: string;
    class?: string;
  }

  let { part, class: className, ...restProps }: TimeFieldSegmentProps = $props();
</script>

<BitsTimeField.Segment {part} class={cn(className)} {...restProps} />
