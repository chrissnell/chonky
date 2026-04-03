<script lang="ts">
  import { DatePicker as BitsDatePicker } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface DatePickerInputProps {
    name?: string;
    class?: string;
  }

  let { name, class: className, ...restProps }: DatePickerInputProps = $props();
</script>

<BitsDatePicker.Input {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsDatePicker.Segment {part}>{value}</BitsDatePicker.Segment>
    {/each}
  {/snippet}
</BitsDatePicker.Input>
