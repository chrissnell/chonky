<script lang="ts">
  import { DateRangePicker as BitsDateRangePicker } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface DateRangePickerInputProps {
    type: 'start' | 'end';
    name?: string;
    class?: string;
  }

  let { type, name, class: className, ...restProps }: DateRangePickerInputProps = $props();
</script>

<BitsDateRangePicker.Input {type} {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsDateRangePicker.Segment {part}>{value}</BitsDateRangePicker.Segment>
    {/each}
  {/snippet}
</BitsDateRangePicker.Input>
