<script lang="ts">
  import { Command as BitsCommand } from 'bits-ui';
  import { cn } from '../../internal/utils.js';

  interface CommandInputProps {
    class?: string;
    placeholder?: string;
    value?: string;
  }

  let {
    class: className,
    placeholder = 'Search...',
    value = $bindable(''),
    ...restProps
  }: CommandInputProps = $props();
</script>

<BitsCommand.Input class={cn(className)} {placeholder} bind:value {...restProps} />
