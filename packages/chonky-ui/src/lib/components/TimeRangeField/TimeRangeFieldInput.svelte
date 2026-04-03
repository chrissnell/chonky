<script lang="ts">
  import { TimeRangeField as BitsTimeRangeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  export interface TimeRangeFieldInputProps {
    type: 'start' | 'end';
    name?: string;
    class?: string;
  }

  let { type, name, class: className, ...restProps }: TimeRangeFieldInputProps = $props();
</script>

<BitsTimeRangeField.Input {type} {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsTimeRangeField.Segment {part}>{value}</BitsTimeRangeField.Segment>
    {/each}
  {/snippet}
</BitsTimeRangeField.Input>
