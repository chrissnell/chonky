<script lang="ts">
  import { TimeField as BitsTimeField } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface TimeFieldInputProps {
    name?: string;
    class?: string;
  }

  let { name, class: className, ...restProps }: TimeFieldInputProps = $props();
</script>

<BitsTimeField.Input {name} class={cn(className)} {...restProps}>
  {#snippet children({ segments })}
    {#each segments as { part, value }}
      <BitsTimeField.Segment {part}>{value}</BitsTimeField.Segment>
    {/each}
  {/snippet}
</BitsTimeField.Input>
