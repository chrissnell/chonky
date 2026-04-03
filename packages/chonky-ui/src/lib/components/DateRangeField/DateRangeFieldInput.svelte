<script lang="ts">
  import { DateRangeField as BitsDateRangeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface DateRangeFieldInputProps {
    type: 'start' | 'end';
    name?: string;
    class?: string;
  }

  let { type, name, class: className, ...restProps }: DateRangeFieldInputProps = $props();
</script>

<BitsDateRangeField.Input {type} {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsDateRangeField.Segment {part}>{value}</BitsDateRangeField.Segment>
    {/each}
  {/snippet}
</BitsDateRangeField.Input>
