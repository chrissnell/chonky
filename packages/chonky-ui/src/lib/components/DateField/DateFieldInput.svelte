<script lang="ts">
  import { DateField as BitsDateField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface DateFieldInputProps {
    name?: string;
    class?: string;
  }

  let { name, class: className, ...restProps }: DateFieldInputProps = $props();
</script>

<BitsDateField.Input {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsDateField.Segment {part}>{value}</BitsDateField.Segment>
    {/each}
  {/snippet}
</BitsDateField.Input>
